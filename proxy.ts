import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Basic anti-scraping measures:
// 1. Block requests with no User-Agent, or a User-Agent matching common
//    CLI tools / scraping libraries / headless browsers.
// 2. Rate-limit repeated requests from the same client within a time window.
// This is a lightweight, best-effort defense (in-memory, single-instance) —
// not a replacement for a real WAF/CDN-level bot mitigation service.

const BLOCKED_UA_PATTERN =
  /curl|wget|python-requests|python-urllib|scrapy|httpclient|libwww-perl|go-http-client|okhttp|axios\/|phantomjs|headlesschrome|puppeteer|playwright|selenium|node-fetch|postman|insomnia|bot|spider|crawler|scraper/i;

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 60;

const requestLog = new Map<string, number[]>();

function getClientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recent = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );
  recent.push(now);
  requestLog.set(key, recent);
  return recent.length > MAX_REQUESTS_PER_WINDOW;
}

export function proxy(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") ?? "";

  if (!userAgent || BLOCKED_UA_PATTERN.test(userAgent)) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  if (isRateLimited(getClientKey(request))) {
    return new NextResponse("Too many requests", {
      status: 429,
      headers: { "Retry-After": "60" },
    });
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images/).*)",
  ],
};
