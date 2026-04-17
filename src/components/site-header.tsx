"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#why-us",       label: "Why 77 East" },
  { href: "#services",     label: "Services" },
  { href: "#how-it-works", label: "How we work" },
  { href: "#contact",      label: "Contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/70 backdrop-blur-lg border-b border-border/60" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-5xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-[1.0625rem] font-bold tracking-tight text-fg">
              77 East Advisory
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <button
                key={n.href}
                onClick={() => go(n.href)}
                className="text-sm text-fg-muted hover:text-fg transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button size="sm" onClick={() => go("#contact")}>
              Book a call
            </Button>
            <button
              className="md:hidden p-1 text-fg"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="fixed top-[68px] inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-b border-border md:hidden"
          >
            <nav className="flex flex-col px-6 py-3 divide-y divide-border">
              {nav.map((n) => (
                <button
                  key={n.href}
                  onClick={() => go(n.href)}
                  className="py-3.5 text-left text-[0.9375rem] font-medium text-fg hover:text-fg-muted transition-colors"
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
