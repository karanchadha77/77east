"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#services",      label: "Services" },
  { href: "#how-it-works",  label: "How it works" },
  { href: "#faq",           label: "FAQ" },
  { href: "#contact",       label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6 md:px-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex size-8 items-center justify-center rounded-md bg-blue text-white text-xs font-bold tracking-tight">
              77
            </div>
            <span
              className={cn(
                "text-[1.0625rem] font-bold tracking-tight transition-colors",
                scrolled ? "text-navy" : "text-white"
              )}
            >
              East Advisory
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <button
                key={n.href}
                onClick={() => scrollTo(n.href)}
                className={cn(
                  "text-sm font-medium transition-colors",
                  scrolled
                    ? "text-slate-500 hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant={scrolled ? "primary" : "white"}
              size="sm"
              onClick={() => scrollTo("#contact")}
            >
              Book a call
            </Button>
            <button
              className={cn(
                "md:hidden p-1.5 rounded transition-colors",
                scrolled ? "text-foreground" : "text-white"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-white border-b border-border shadow-lg md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {nav.map((n) => (
                <button
                  key={n.href}
                  onClick={() => scrollTo(n.href)}
                  className="text-left py-3 text-[0.9375rem] font-medium text-slate-700 hover:text-blue border-b border-border last:border-0 transition-colors"
                >
                  {n.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
