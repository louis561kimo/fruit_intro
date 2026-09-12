"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { href: "/#about", label: "關於我們" },
  { href: "/#fruits", label: "選購水果" },
  { href: "/#season", label: "四季曆" },
  { href: "/blog", label: "水果專欄" },
  { href: "/#contact", label: "訂購諮詢" },
];

export default function Header() {
  const { items, totalCount, totalPrice, removeItem, updateQty } = useCart();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-6 sm:py-5">
        <Link
          href="/"
          className="font-serif text-base tracking-[0.2em] text-foreground sm:text-lg"
        >
          台灣好果
        </Link>
        <nav className="hidden gap-8 text-sm text-muted sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative">
            <button
              onClick={() => {
                setOpen((v) => !v);
                setMenuOpen(false);
              }}
              className="relative flex items-center gap-2 border border-border px-3 py-2 text-xs tracking-wide text-foreground transition-colors hover:border-foreground sm:px-4"
            >
              購物車
              {totalCount > 0 && (
                <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] text-white">
                  {totalCount}
                </span>
              )}
            </button>

            {open && (
              <div className="fixed inset-x-4 top-[72px] z-30 border border-border bg-surface p-5 text-left shadow-lg sm:absolute sm:inset-x-auto sm:right-0 sm:top-full sm:z-auto sm:mt-3 sm:w-80">
              <h3 className="font-serif text-sm text-foreground">購物車</h3>

              {items.length === 0 ? (
                <p className="mt-4 text-xs text-muted">購物車還是空的，快去選購吧。</p>
              ) : (
                <>
                  <ul className="mt-4 flex flex-col gap-4">
                    {items.map((item) => (
                      <li key={item.id} className="flex items-center gap-3">
                        <div className="relative h-12 w-12 shrink-0 overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-xs text-foreground">{item.name}</p>
                          <p className="text-[11px] text-muted">
                            NT$ {item.price} / {item.unit}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="h-6 w-6 border border-border text-xs text-muted hover:border-foreground hover:text-foreground"
                          >
                            −
                          </button>
                          <span className="w-4 text-center text-xs text-foreground">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="h-6 w-6 border border-border text-xs text-muted hover:border-foreground hover:text-foreground"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-1 text-[11px] text-muted hover:text-foreground"
                          aria-label={`移除 ${item.name}`}
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-sm">
                    <span className="text-muted">總金額</span>
                    <span className="font-serif text-foreground">
                      NT$ {totalPrice}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      alert("感謝您的訂購！我們將盡快與您聯繫確認出貨事宜。")
                    }
                    className="mt-4 w-full border border-foreground py-2.5 text-xs tracking-wide text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    前往結帳
                  </button>
                </>
              )}
            </div>
          )}
          </div>

          <button
            onClick={() => {
              setMenuOpen((v) => !v);
              setOpen(false);
            }}
            aria-label={menuOpen ? "關閉選單" : "開啟選單"}
            aria-expanded={menuOpen}
            className="flex h-9 w-9 items-center justify-center border border-border text-foreground transition-colors hover:border-foreground sm:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t border-border/80 bg-background px-4 py-3 text-sm text-muted sm:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-border/60 py-3 last:border-none hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
