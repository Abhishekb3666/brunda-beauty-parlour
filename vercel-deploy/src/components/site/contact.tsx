"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Reveal } from "./reveal";
import { business } from "@/lib/business";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6 }}
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(212, 162, 74, 0.12), transparent 55%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center">
        <Reveal>
          <p className="text-xs tracking-[0.35em] uppercase text-[color:var(--primary)]">
            Book
          </p>
          <h2 className="mt-5 font-display text-4xl sm:text-6xl leading-tight">
            Let's plan{" "}
            <span className="italic text-gold">your look.</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[color:var(--muted-foreground)] leading-relaxed">
            Call for an appointment or ping us on WhatsApp with your date, occasion
            and any references — we'll block a chair and get back to you the same
            day.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={business.phone.telHref}
              className="inline-flex items-center gap-2.5 h-14 px-8 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] font-medium tracking-wide hover:bg-[color:var(--primary-strong)] transition-colors shadow-[0_10px_40px_-15px_rgba(212,162,74,0.6)]"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              {business.phone.display}
            </a>
            <a
              href={business.phone.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-14 px-8 rounded-full border border-[color:var(--primary)]/40 text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-colors"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
