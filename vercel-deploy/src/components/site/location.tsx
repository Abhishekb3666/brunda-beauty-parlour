"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Clock } from "lucide-react";
import { Reveal } from "./reveal";
import { Hairline } from "./ornaments";
import { business } from "@/lib/business";

const LocationMap = dynamic(() => import("./location-map"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center rounded-2xl bg-[color:var(--surface)] border border-[color:var(--border)]">
      <span className="text-xs tracking-[0.3em] uppercase text-[color:var(--muted-foreground)]">
        Loading map…
      </span>
    </div>
  ),
});

export function Location() {
  return (
    <section
      id="visit"
      className="relative py-24 sm:py-32 bg-[color:var(--surface)] border-t border-[color:var(--border)]"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-[color:var(--primary)] mb-4">
            Visit
          </p>
          <h2 className="font-display text-4xl sm:text-6xl leading-tight">
            Chikkalasandra,{" "}
            <span className="italic text-gold">Bengaluru.</span>
          </h2>
          <div className="mx-auto mt-6 w-32">
            <Hairline />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 relative h-[380px] sm:h-[460px] lg:h-[560px] rounded-2xl overflow-hidden border border-[color:var(--primary)]/25 shadow-[0_30px_80px_-40px_rgba(212,162,74,0.35)]"
          >
            <LocationMap />
            <div className="pointer-events-none absolute top-4 left-4 z-[500] flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--background)]/70 backdrop-blur border border-[color:var(--primary)]/30">
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--primary)] animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--foreground)]">
                We are here
              </span>
            </div>
          </motion.div>

          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="h-full rounded-2xl border border-[color:var(--border)] bg-[color:var(--background)] p-8 sm:p-10 flex flex-col">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <MapPin
                    className="w-5 h-5 text-[color:var(--primary)]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--muted-foreground)] mb-3">
                    Address
                  </p>
                  <p className="font-display text-xl leading-snug">
                    {business.address.line1}
                  </p>
                  <p className="text-sm text-[color:var(--muted-foreground)] mt-1 leading-relaxed">
                    {business.address.line2}
                    <br />
                    {business.address.locality}
                  </p>
                </div>
              </div>

              <div className="my-7">
                <Hairline />
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone
                    className="w-5 h-5 text-[color:var(--primary)]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--muted-foreground)] mb-3">
                    Call
                  </p>
                  <a
                    href={business.phone.telHref}
                    className="font-display text-xl text-[color:var(--foreground)] hover:text-[color:var(--primary)] transition-colors"
                  >
                    {business.phone.display}
                  </a>
                </div>
              </div>

              <div className="my-7">
                <Hairline />
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Clock
                    className="w-5 h-5 text-[color:var(--primary)]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.35em] uppercase text-[color:var(--muted-foreground)] mb-3">
                    Hours
                  </p>
                  {business.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex justify-between gap-6 text-sm py-1"
                    >
                      <span className="text-[color:var(--foreground)]">{h.day}</span>
                      <span className="text-[color:var(--muted-foreground)]">
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href={business.directionsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 w-full justify-center h-12 rounded-full bg-[color:var(--primary)] text-[color:var(--primary-foreground)] font-medium hover:bg-[color:var(--primary-strong)] transition-colors"
                >
                  <Navigation className="w-4 h-4 group-hover:-rotate-12 transition-transform" strokeWidth={2} />
                  Get Directions
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
