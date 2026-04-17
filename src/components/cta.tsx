"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select } from "@/components/ui/input";

const bullets = [
  "No commitment required",
  "Response within 24 hours",
  "Based in New Delhi — Serving US freight operators",
  "Fully remote. US business hours available.",
];

export function Cta() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
              Get in touch
            </p>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
              Let&rsquo;s talk about{" "}
              <em className="font-medium">your books.</em>
            </h2>
            <p className="mt-5 text-[1rem] leading-relaxed text-fg-muted">
              A free 30-minute scope call is how every engagement starts. We&rsquo;ll look at your
              current financial operations, tell you honestly whether we&rsquo;re a fit, and
              outline what Month 1 looks like for your operation.
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
              {status === "sent" ? (
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
                    <Input name="company" required placeholder="Johnson Freight LLC" />
                  </Field>

                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Annual revenue">
                      <Select name="revenue" defaultValue="">
                        <option value="" disabled>Select range</option>
                        <option>Under $5M</option>
                        <option>$5M – $10M</option>
                        <option>$10M – $25M</option>
                        <option>$25M – $75M</option>
                        <option>Over $75M</option>
                      </Select>
                    </Field>
                    <Field label="Revenue type">
                      <Select name="type" defaultValue="">
                        <option value="" disabled>Select type</option>
                        <option>Asset carrier (OTR/regional)</option>
                        <option>FTL brokerage</option>
                        <option>Agency / dispatch</option>
                        <option>Multi-entity (mixed)</option>
                      </Select>
                    </Field>
                  </div>

                  <Field label="What is your biggest financial challenge right now?">
                    <Textarea
                      name="challenge"
                      placeholder="e.g. Books aren't closed monthly, no cash flow visibility, factoring reconciliation is a mess..."
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
                      "Book a free scope call"
                    )}
                  </Button>

                  <p className="text-center text-xs text-fg-muted">
                    Both parties reply to the same business day, usually within hours.
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
