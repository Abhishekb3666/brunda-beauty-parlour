"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Crown,
  Sparkles,
  Camera,
  Feather,
  Flame,
  ScanFace,
  Scissors,
  Droplets,
} from "lucide-react";
import { Stagger, staggerItem } from "./reveal";
import { Reveal } from "./reveal";
import { Hairline } from "./ornaments";

const services = [
  {
    icon: Crown,
    title: "Bridal Makeup",
    body: "Full bridal preparation crafted around your saree, jewelry and ceremony — from muhurtham to reception.",
    image: "/services-bridal.jpg",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Pre & Post Wedding",
    body: "Prep sessions, mehendi looks, and post-ceremony reset — so every function feels considered.",
    image: "/services-mehendi.jpg",
  },
  {
    icon: Camera,
    title: "HD Makeup",
    body: "Camera-ready complexion, sharp definition, no cakey finish — engineered for photography.",
    image: "/services-hd.jpg",
  },
  {
    icon: Feather,
    title: "Light Makeup",
    body: "Everyday, understated, freshened up — for meetings, brunches and small occasions.",
    image: "/services-light.jpg",
  },
  {
    icon: Flame,
    title: "Party / Fashion Makeup",
    body: "Bolder pigments, statement eyes, and hair styling that hold through the night.",
    image: "/services-party.jpg",
  },
  {
    icon: ScanFace,
    title: "Model Portfolio",
    body: "Editorial and portfolio looks — clean base, direction-flexible, retouch-friendly.",
    image: "/services-portfolio.jpg",
  },
  {
    icon: Scissors,
    title: "Hair",
    body: "Cuts, styling, treatments and up-dos — from South Indian classic to modern styling.",
    image: "/services-hair.jpg",
  },
  {
    icon: Droplets,
    title: "Skin Care",
    body: "Facials, clean-ups and treatments — routines built around Bengaluru's water and weather.",
    image: "/services-skincare.jpg",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center mb-14 sm:mb-20">
          <p className="text-xs tracking-[0.35em] uppercase text-[color:var(--primary)] mb-4">
            The Menu
          </p>
          <h2 className="font-display text-4xl sm:text-6xl leading-tight max-w-2xl mx-auto">
            <span className="italic font-light">Everything</span> that goes into{" "}
            <span className="text-gold">looking your best.</span>
          </h2>
          <div className="mx-auto mt-8 w-40">
            <Hairline />
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--border)] rounded-2xl overflow-hidden">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.article
                key={s.title}
                variants={staggerItem}
                className="group relative min-h-[280px] sm:min-h-[320px] flex flex-col justify-between overflow-hidden bg-[color:var(--background)]"
              >
                {/* Background photo */}
                <div className="absolute inset-0">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center scale-110 transition-transform duration-[1400ms] ease-out group-hover:scale-100"
                    style={{ filter: "brightness(0.5) saturate(1.1) grayscale(0.15)" }}
                  />
                </div>

                {/* Legibility + brand-color overlays */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background: s.accent
                      ? "linear-gradient(195deg, rgba(11,11,13,0.35) 0%, rgba(11,11,13,0.78) 55%, rgba(11,11,13,0.95) 100%), linear-gradient(0deg, rgba(212,162,74,0.22), transparent 60%)"
                      : "linear-gradient(195deg, rgba(11,11,13,0.4) 0%, rgba(11,11,13,0.8) 55%, rgba(11,11,13,0.95) 100%)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(212,162,74,0.16), transparent 60%)",
                  }}
                />

                <div className="relative z-10 flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <Icon
                        className="w-6 h-6 text-[color:var(--primary)] mb-5 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                        strokeWidth={1.4}
                      />
                      <h3 className="font-display text-2xl sm:text-3xl leading-tight mb-2.5 text-[color:var(--foreground)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
                        {s.title}
                      </h3>
                      <p className="text-sm text-[color:var(--foreground)]/80 leading-relaxed max-w-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                        {s.body}
                      </p>
                    </div>
                    {s.accent && (
                      <span className="hidden sm:inline text-[10px] tracking-[0.3em] uppercase text-[color:var(--primary)] border border-[color:var(--primary)]/50 bg-[color:var(--background)]/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                        Signature
                      </span>
                    )}
                  </div>
                  <div className="mt-6">
                    <span className="inline-block h-px w-6 bg-[color:var(--primary)]/80 group-hover:w-16 transition-all duration-500" />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
