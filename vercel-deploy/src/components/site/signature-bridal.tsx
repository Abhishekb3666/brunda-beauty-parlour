"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "./reveal";
import { Hairline } from "./ornaments";

const menu = [
  "Muhurtham bridal look",
  "Reception restyling",
  "Mehendi & Haldi looks",
  "Pre-wedding shoot beauty",
  "Trial sitting included",
  "Draping & jewelry assist",
];

export function SignatureBridal() {
  return (
    <section
      id="bridal"
      className="relative py-24 sm:py-32 bg-[color:var(--surface)] border-y border-[color:var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <Reveal>
              <p className="text-xs tracking-[0.35em] uppercase text-[color:var(--primary)]">
                The Signature
              </p>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-[1.05]">
                Every visit,{" "}
                <span className="italic text-gold text-[33px] sm:text-[57px] leading-[1.05] inline-block">
                  a small ceremony.
                </span>
              </h2>
              <div className="mt-6 w-32">
                <Hairline />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-7 text-base sm:text-lg leading-relaxed text-[color:var(--muted-foreground)] max-w-xl">
                Weddings are where Brunda began, and where our craft goes deepest.
                Whether you are the bride, the bride's mother, the sister, or a
                friend of the family — you leave feeling that someone paid attention
                to every fold, every strand, every stone.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {menu.map((m, i) => (
                  <motion.li
                    key={m}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.1 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-baseline gap-3 text-sm sm:text-base"
                  >
                    <span
                      aria-hidden
                      className="text-[color:var(--primary)] font-display text-xs"
                    >
                      ✦
                    </span>
                    <span>{m}</span>
                  </motion.li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative mx-auto max-w-sm">
              <div
                aria-hidden
                className="absolute -inset-6 rounded-full blur-3xl opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, rgba(122,31,43,0.55), transparent 60%)",
                }}
              />
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-2xl border border-[color:var(--primary)]/30 overflow-hidden shadow-[0_30px_80px_-40px_rgba(212,162,74,0.45)]"
              >
                <div className="relative aspect-[2/3] w-full">
                  <Image
                    src="/bridal.jpg"
                    alt="Bridal makeup by Brunda Beauty Parlour — traditional gold jewelry and ceremonial look"
                    fill
                    sizes="(max-width: 1024px) 90vw, 400px"
                    className="object-cover"
                    priority
                  />
                  {/* Melt the photo into the dark theme + keep captions legible */}
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(11,11,13,0.35) 0%, transparent 22%, transparent 55%, rgba(11,11,13,0.9) 100%)",
                    }}
                  />
                  <span className="absolute top-4 right-4 text-[10px] tracking-[0.35em] uppercase text-[color:var(--primary)] drop-shadow">
                    Brunda · Bridal
                  </span>
                  <p className="absolute bottom-4 inset-x-0 text-center text-[10px] tracking-[0.35em] uppercase text-[color:var(--foreground)]/90">
                    Trial → Muhurtham → Reception
                  </p>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
