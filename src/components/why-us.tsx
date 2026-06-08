"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Deep Expertise, Powered by Technology",
    body: "A team of domain experts leveraging advanced technology to deliver efficient accounting, bookkeeping, and finance solutions for businesses of every size. The result is a seamless blend of human expertise and technology — helping businesses scale with smarter financial management, reporting, and compliance systems.",
  },
  {
    title: "A Dedicated Team, Not a Solo Contractor",
    body: "Every engagement has a named lead and a supporting analyst team. Defined roles, clear accountability, no single point of failure — so your finance function never depends on one person.",
  },
  {
    title: "Cross-Industry Experience That Adapts to You",
    body: "Our accounting and finance consulting services are backed by years of cross-industry experience. From startups to well-established corporations, we adapt to your evolving requirements — delivering the financial clarity your business needs to move forward.",
  },
  {
    title: "Built to Scale With Your Business",
    body: "Our engagement model expands as you do. Add entities, add services, add reporting layers — without rebuilding the relationship from scratch. You grow; we grow with you.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="w-full py-24 md:py-32 border-t border-border scroll-mt-20">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-fg-muted">
          Why 74 East
        </p>
        <h2 className="mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-tight tracking-tight text-fg">
          Why growth-focused businesses{" "}
          <em className="font-medium">work with us</em>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-xl border border-border bg-bg-card p-8 hover:shadow-sm transition-shadow duration-300"
            >
              <h3 className="text-[1rem] font-semibold text-fg">{c.title}</h3>
              <p className="mt-3 text-[0.9rem] leading-relaxed text-fg-muted">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
