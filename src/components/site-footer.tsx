import Link from "next/link";

const footerLinks = [
  { label: "Services",     href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "FAQ",          href: "#faq" },
  { label: "Contact",      href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="w-full bg-navy border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-12 md:py-14">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex size-8 items-center justify-center rounded-md bg-blue text-white text-xs font-bold">
                77
              </div>
              <span className="text-[1.0625rem] font-bold text-white tracking-tight">
                East Advisory
              </span>
            </div>
            <p className="mt-3 text-sm text-white/45 max-w-xs">
              Fractional controller services for US freight operators at $5M–$25M.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {footerLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-t border-white/10 pt-8">
          <p className="text-xs text-white/35">
            &copy; {new Date().getFullYear()} 77 East Advisory. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Fractional controller services &middot; US Freight &amp; Trucking
          </p>
        </div>
      </div>
    </footer>
  );
}
