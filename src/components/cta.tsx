"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Textarea, Select } from "@/components/ui/input";

export function Cta() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <section id="contact" className="w-full py-24 md:py-32 bg-slate-50 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-blue-tint px-4 py-1.5 text-xs font-semibold tracking-widest text-blue uppercase">
            Get started
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-navy leading-tight">
            Ready to close your books{" "}
            <span className="text-blue">on time?</span>
          </h2>
          <p className="mt-5 text-[1.0625rem] text-muted leading-relaxed">
            Book a free 30-minute scope call. No commitment. Response within 24 hours.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info panel */}
          <div className="lg:col-span-2 rounded-2xl bg-navy p-8 md:p-10 flex flex-col">
            <h3 className="text-xl font-bold text-white">What to expect</h3>
            <ul className="mt-6 space-y-4 flex-1">
              {[
                "We review your QB state and close history",
                "We confirm if we're a fit — honestly",
                "You hear exactly what Month 1 looks like",
                "Flat-fee pilot scoped on the spot",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-blue/30 text-sky">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="text-sm text-white/75 leading-snug">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 space-y-3 border-t border-white/10 pt-6">
              {[
                { icon: Mail,    text: "hello@77eastadvisory.com" },
                { icon: Phone,   text: "+1 (555) 000-0000" },
                { icon: MapPin,  text: "US Freight operations" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-white/55">
                  <Icon className="size-4 shrink-0 text-sky" strokeWidth={1.75} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl bg-white border border-border p-8 md:p-10">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex h-full flex-col items-center justify-center text-center py-12"
                >
                  <div className="inline-flex size-14 items-center justify-center rounded-full bg-blue text-white shadow-lg">
                    <Check className="size-7" strokeWidth={2.5} />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-navy">
                    We&rsquo;ll be in touch.
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Full name">
                      <Input name="name" required placeholder="Jane Doe" />
                    </Field>
                    <Field label="Work email">
                      <Input name="email" type="email" required placeholder="jane@company.com" />
                    </Field>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field label="Company">
                      <Input name="company" required placeholder="Acme Transport LLC" />
                    </Field>
                    <Field label="Annual revenue">
                      <Select name="revenue" defaultValue="">
                        <option value="" disabled>Select range</option>
                        <option>Under $5M</option>
                        <option>$5M – $10M</option>
                        <option>$10M – $25M</option>
                        <option>Over $25M</option>
                      </Select>
                    </Field>
                  </div>
                  <Field label="What's your biggest back-office pain right now?">
                    <Textarea
                      name="pain"
                      placeholder="QB is a mess, close is 4 weeks late, factoring recon hasn't been done in months..."
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
                  <p className="text-center text-xs text-muted">
                    No commitment. Response within 24 hours.
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
      <span className="mb-1.5 block text-[0.8125rem] font-medium text-navy">{label}</span>
      {children}
    </label>
  );
}
