export default function Footer() {
  return (
    <footer className="border-t border-border/80">
      <div className="mx-auto max-w-5xl px-6 py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} 台灣好果 Taiwan Fruits. All rights reserved.
      </div>
    </footer>
  );
}
