import Image from "next/image";
import { business } from "@/lib/business";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--border)] mt-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image
            src="/logo-mark.png"
            alt=""
            width={24}
            height={25}
            className="w-6 h-auto"
          />
          <span className="font-display text-sm tracking-wide text-[color:var(--foreground)]">
            {business.name}
          </span>
        </div>
        <p className="text-xs text-[color:var(--muted-foreground)] tracking-wider">
          © {year} · Chikkalasandra, Bengaluru
        </p>
        <p
          className="text-xs text-[color:var(--muted-foreground)] font-display italic"
          lang="kn"
        >
          {business.nameKannada}
        </p>
      </div>
    </footer>
  );
}
