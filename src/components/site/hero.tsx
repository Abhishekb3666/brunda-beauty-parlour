"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { Mandala, Hairline } from "./ornaments";
import { business } from "@/lib/business";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-24 sm:pt-28 sm:pb-32 grain"
    >
      {/* Ambient mandala */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.14]">
        <motion.div
          initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[color:var(--primary)]"
        >
          <Mandala className="w-[720px] h-[720px] sm:w-[900px] sm:h-[900px] max-w-[130vw]" />
        </motion.div>
      </div>

      {/* Slow ambient rotation */}
      {!reduced && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 240, repeat: Infinity, ease: "linear" }}
            className="text-[color:var(--primary)]"
          >
            <Mandala className="w-[900px] h-[900px] max-w-[140vw]" />
          </motion.div>
        </div>
      )}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 text-center">
        <motion.p
          lang="kn"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm sm:text-lg font-bold text-[color:var(--primary)]/90 font-display leading-relaxed"
        >
          <span aria-hidden className="opacity-70">|| </span>
          {business.invocation}
          <span aria-hidden className="opacity-70"> ||</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 sm:mt-10 w-28 sm:w-40 drop-shadow-[0_0_28px_rgba(212,162,74,0.25)]"
        >
          <Image
            src="/logo-mark.png"
            alt="Brunda Beauty Parlour emblem"
            width={320}
            height={334}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-script leading-[0.9]"
        >
          <span className="block gold-shimmer text-[22vw] sm:text-[150px] lg:text-[200px]">
            Brunda
          </span>
          <span className="block text-[color:var(--foreground)] text-[11vw] sm:text-[73px] lg:text-[97px] -mt-2 sm:-mt-4 opacity-90">
            Beauty Parlour
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1.4, delay: 0.9 }}
          className="mx-auto mt-8 w-56 origin-center"
        >
          <Hairline />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-6 max-w-xl mx-auto text-base sm:text-lg text-[color:var(--muted-foreground)] italic font-display"
        >
          {business.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.35 }}
          className="mt-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]/80"
        >
          Beauty · Hair · Make Up · Skin Care
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.55 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href={business.phone.telHref}
            className="inline-flex items-center gap-2.5 h-12 px-6 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] font-medium tracking-wide hover:bg-[color:var(--primary-strong)] transition-colors shadow-[0_10px_40px_-15px_rgba(212,162,74,0.6)]"
          >
            <Phone className="w-4 h-4" strokeWidth={2} />
            Call {business.phone.display}
          </a>
          <a
            href={business.phone.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 h-12 px-6 rounded-full border border-[color:var(--primary)]/40 text-[color:var(--foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--primary)] transition-colors"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.75} />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
