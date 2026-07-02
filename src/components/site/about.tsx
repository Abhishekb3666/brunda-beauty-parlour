"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { Hairline } from "./ornaments";
import { business } from "@/lib/business";

const pillars = [
  {
    n: "01",
    title: "Homegrown",
    body: "A neighbourhood parlour in Chikkalasandra — the kind that remembers your name, your skin, and your last bridal season.",
  },
  {
    n: "02",
    title: "Head to Toe",
    body: "Beauty, hair, makeup and skin under one roof. No send-outs, no shuffle between appointments.",
  },
  {
    n: "03",
    title: "Unhurried",
    body: "We treat every walk-in like a bridal sitting — considered, seated, and never rushed.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.18]">
        <Image
          src="/about-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[50%_20%]"
          style={{ filter: "grayscale(0.4) brightness(0.9)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--background) 0%, transparent 20%, transparent 80%, var(--background) 100%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="text-center">
          <Image
            src="/logo-mark.png"
            alt=""
            width={56}
            height={58}
            className="w-14 h-auto mx-auto mb-6 drop-shadow-[0_0_18px_rgba(212,162,74,0.3)]"
          />
          <p className="text-xs tracking-[0.35em] uppercase text-[color:var(--primary)]">
            About
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-6xl leading-tight">
            Made in Bengaluru,{" "}
            <span className="italic text-gold">for Bengaluru.</span>
          </h2>
          <div className="mx-auto mt-6 w-32">
            <Hairline />
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg leading-relaxed text-[color:var(--muted-foreground)]">
            Brunda Beauty Parlour is a family-run studio in Ramanjaneya Nagar,
            specialising in bridal and occasion beauty. What sits above the door is a
            small blessing — {" "}
            <span
              className="text-[color:var(--foreground)] font-display italic"
              lang="kn"
            >
              {business.invocation}
            </span>
            . What sits inside is a promise: that you'll be looked after.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={0.1 * i}
              className="bg-[color:var(--background)] p-8 sm:p-10 min-h-[220px] flex flex-col"
            >
              <span className="font-display text-sm text-[color:var(--primary)] tracking-[0.3em]">
                {p.n}
              </span>
              <h3 className="mt-6 font-display text-3xl">{p.title}</h3>
              <p className="mt-3 text-sm text-[color:var(--muted-foreground)] leading-relaxed">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
