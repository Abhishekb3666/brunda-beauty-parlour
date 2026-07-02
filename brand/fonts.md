# Fonts — Brunda Beauty Parlour

## Chosen pairing
- **Display / Headings:** **Fraunces** — variable serif with editorial flair, soft optical warmth. Handles both restrained (300 weight, low SOFT) and dramatic (700 weight, high SOFT) states.
- **Body:** **Inter** — clean, high-legibility sans. Balances Fraunces's flourish; keeps forms and service copy readable at every size.

## Rationale
The card uses a calligraphic English wordmark plus a gold serif for services. We can't ship a calligraphic web font without loading multiple weights, so we treat the wordmark as an *image* (SVG) and let Fraunces carry the ambient editorial tone. Inter for body is neutral enough not to fight the serif.

## Implementation
Wired in `src/app/layout.tsx` via `next/font/google`:

```ts
import { Fraunces, Inter } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["SOFT", "opsz"],
});
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
```

Exposed to Tailwind v4 via `@theme` in `globals.css`:

```css
--font-display: var(--font-display);
--font-body:    var(--font-body);
```
