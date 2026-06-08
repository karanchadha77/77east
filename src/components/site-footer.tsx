export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border py-10">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-6 px-6 md:px-10 flex-wrap">
        <span className="text-[0.9375rem] font-bold text-fg tracking-tight">
          74 East Advisory
        </span>
        <p className="text-sm text-fg-muted">
          74 East Advisory &middot; &copy; {new Date().getFullYear()} &middot; Serving growth-focused businesses across the US
        </p>
      </div>
    </footer>
  );
}
