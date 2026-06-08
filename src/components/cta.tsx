"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select } from "@/components/ui/input";

const bullets = [
  "No commitment required",
  "Response within one business day",
  "Confidentiality guaranteed",
];

export function Cta() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const payload = {
      first:     fd.get("first"),
      last:      fd.get("last"),
      email:     fd.get("email"),
      company:   fd.get("company"),
      revenue:   fd.get("revenue"),
      industry:  fd.get("industry"),
      challenge: fd.get("challenge"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
              Contact
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
              Let&rsquo;s talk about{" "}
              <em className="font-medium">your finance function.</em>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-fg-muted">
              Every engagement starts with a conversation. We&rsquo;ll understand where you
              are, what&rsquo;s holding your finance function back, and what the right path
              forward looks like for your business.
            </p>
            <ul className="mt-8 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-[0.2rem] inline-flex size-4 shrink-0 items-center justify-center rounded-full border border-fg/20 text-fg">
                    <Check className="size-2.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-fg-muted leading-snug">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-sm text-red-700"
                >
                  Something went wrong sending your message. Please email us directly at{" "}
                  <a href="mailto:karan@74east.com" className="font-medium underline">
                    karan@74east.com
                  </a>{" "}
                  and we&rsquo;ll get back to you within 24 hours.
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-3 block text-xs font-medium underline text-red-600"
                  >
                    Try again
                  </button>
                </motion.div>
              ) : status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-start justify-center py-10"
                >
                  <div className="inline-flex size-12 items-center justify-center rounded-full border border-fg/15 text-fg">
                    <Check className="size-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-fg">
                    We&rsquo;ll be in touch.
                  </h3>
                  <p className="mt-2 text-sm text-fg-muted max-w-sm">
                    You&rsquo;ll receive a scheduling link at the email you provided within
                    24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="First name">
                      <Input name="first" required placeholder="Sarah" />
                    </Field>
                    <Field label="Last name">
                      <Input name="last" required placeholder="Johnson" />
                    </Field>
                  </div>

                  <Field label="Business email">
                    <Input
                      name="email"
                      type="email"
                      required
                      placeholder="sarah@yourcompany.com"
                    />
                  </Field>

                  <Field label="Company name">
                    <Input name="company" required placeholder="Acme Co." />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Annual revenue">
                      <Select name="revenue" defaultValue="">
                        <option value="" disabled>Select range</option>
                        <option>Under $1M</option>
                        <option>$1M – $5M</option>
                        <option>$5M – $25M</option>
                        <option>$25M+</option>
                      </Select>
                    </Field>
                    <Field label="Industry">
                      <Select name="industry" defaultValue="">
                        <option value="" disabled>Select industry</option>
                        <option>Professional Services</option>
                        <option>Freight &amp; Logistics</option>
                        <option>Manufacturing &amp; Distribution</option>
                        <option>E-commerce</option>
                        <option>Healthcare</option>
                        <option>Other</option>
                      </Select>
                    </Field>
                  </div>

                  <Field label="Biggest financial challenge">
                    <Textarea
                      name="challenge"
                      placeholder="e.g. Books aren't closed monthly, no cash flow visibility, reporting isn't board-ready..."
                    />
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={status === "loading"}
                  >
                    {status === "loading" ? (
                      <><Loader2 className="size-4 animate-spin" /> Sending...</>
                    ) : (
                      "Talk to our team"
                    )}
                  </Button>

                  <p className="text-center text-xs text-fg-muted">
                    We respond to every inquiry within one business day.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.8125rem] font-medium text-fg">{label}</span>
      {children}
    </label>
  );
}
