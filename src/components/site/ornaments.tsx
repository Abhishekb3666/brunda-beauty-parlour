import type { SVGProps } from "react";

export function LotusMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M32 46c0-9 4-16 12-20-3 10-6 15-12 20Z" />
        <path d="M32 46c0-9-4-16-12-20 3 10 6 15 12 20Z" />
        <path d="M32 46c0-11 3-19 8-22-2 10-4 16-8 22Z" />
        <path d="M32 46c0-11-3-19-8-22 2 10 4 16 8 22Z" />
        <path d="M32 46c0-13 0-22 0-25" />
        <circle cx="32" cy="20" r="2.2" fill="currentColor" />
      </g>
    </svg>
  );
}

export function Mandala(props: SVGProps<SVGSVGElement>) {
  const rings = Array.from({ length: 24 }, (_, i) => i);
  return (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <radialGradient id="mandalaFade" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="70%" stopColor="currentColor" stopOpacity="0.25" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g stroke="url(#mandalaFade)" fill="none" strokeWidth="0.75">
        {rings.map((i) => {
          const angle = (i * 360) / rings.length;
          return (
            <g key={i} transform={`rotate(${angle} 200 200)`}>
              <path d="M200 90 Q210 140 200 200 Q190 140 200 90 Z" />
              <path d="M200 60 Q220 120 200 200 Q180 120 200 60 Z" strokeOpacity="0.5" />
            </g>
          );
        })}
        <circle cx="200" cy="200" r="150" strokeOpacity="0.35" />
        <circle cx="200" cy="200" r="110" strokeOpacity="0.5" />
        <circle cx="200" cy="200" r="70" strokeOpacity="0.7" />
        <circle cx="200" cy="200" r="30" strokeOpacity="0.9" />
      </g>
    </svg>
  );
}

export function Hairline({ className = "" }: { className?: string }) {
  return <div className={`hairline ${className}`} aria-hidden />;
}

export function BridalSilhouette(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 320 440" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <linearGradient id="goldLine" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E9C87A" />
          <stop offset="50%" stopColor="#D4A24A" />
          <stop offset="100%" stopColor="#8C6320" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#goldLine)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        {/* Veil arc */}
        <path d="M60 80 Q160 -10 260 80 Q245 210 220 320 Q160 355 100 320 Q75 210 60 80 Z" opacity="0.7" />
        {/* Head */}
        <ellipse cx="160" cy="140" rx="42" ry="52" />
        {/* Maang tikka chain */}
        <path d="M160 96 L160 84" />
        <circle cx="160" cy="80" r="4" fill="url(#goldLine)" />
        <path d="M156 84 Q140 74 128 90" />
        <path d="M164 84 Q180 74 192 90" />
        {/* Earrings */}
        <path d="M120 148 q-6 12 0 22" />
        <path d="M200 148 q6 12 0 22" />
        <circle cx="120" cy="176" r="3.5" fill="url(#goldLine)" />
        <circle cx="200" cy="176" r="3.5" fill="url(#goldLine)" />
        {/* Neck + jewelry layers */}
        <path d="M138 190 Q160 208 182 190" />
        <path d="M120 210 Q160 236 200 210" />
        <path d="M110 226 Q160 262 210 226" />
        <path d="M100 244 Q160 288 220 244" />
        <path d="M96 264 Q160 316 224 264" />
        {/* Shoulders + drape */}
        <path d="M70 300 Q160 340 250 300 L260 400 Q160 430 60 400 Z" opacity="0.5" />
        {/* Bindi */}
        <circle cx="160" cy="118" r="3" fill="#7A1F2B" />
      </g>
    </svg>
  );
}
