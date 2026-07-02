"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone } from "lucide-react";
import { business } from "@/lib/business";

const links = [
  { label: "Services", href: "#services" },
  { label: "Bridal", href: "#bridal" },
  { label: "About", href: "#about" },
  { label: "Visit", href: "#visit" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--background)]/75 border-b border-[color:var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <Image
            src="/logo-mark.png"
            alt="Brunda Beauty Parlour emblem"
            width={40}
            height={42}
            className="w-9 h-auto transition-transform duration-500 group-hover:rotate-6"
            priority
          />
          <span className="font-script text-2xl leading-none text-[color:var(--foreground)] pt-1">
            Brunda
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-[color:var(--muted-foreground)] hover:text-[color:var(--primary)] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[color:var(--primary)] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href={business.phone.telHref}
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-[color:var(--primary)]/40 text-[color:var(--primary)] hover:bg-[color:var(--primary)] hover:text-[color:var(--primary-foreground)] transition-colors text-sm"
          aria-label={`Call ${business.name} at ${business.phone.display}`}
        >
          <Phone className="w-4 h-4" strokeWidth={1.5} />
          <span className="hidden sm:inline">Book</span>
        </a>
      </div>
    </header>
  );
}
