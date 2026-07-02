# Assets — {{Client Name}}

Structure:

- `references/` — mood boards, competitor screenshots, brand-supplied files
- `generated/` — Higgsfield outputs (name files by section: `hero-01.png`, `about-portrait-02.png`, …)
- `logo/` — client-supplied or generated logo files (SVG preferred)
- `favicons/` — favicon.ico + apple-touch-icon, dropped into `../public/` when ready

Anything used at runtime by the site must be copied/moved into `../public/` — Next.js only serves from there.
