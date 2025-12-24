# TK PKK SIWI LESTARI

Kidstar-inspired preschool website for TK PKK Siwi Lestari. Light-only, playful, and parent-trust focused UI with modern motion and responsive layout.

## Highlights
- Light mode only (no dark theme)
- Mobile-first, fully responsive
- Soft rounded shapes and blob accents
- Framer Motion interactions
- Google Maps embed and WhatsApp CTA

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Shadcn UI
- Google Fonts (Poppins)

## Pages
- Home
- Profil
- Guru
- Galeri
- Pendaftaran
- Kontak

## Getting Started
```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure
```
src/
  app/                # App Router pages
  components/         # UI sections and shared components
  lib/                # Data and utilities
  styles/             # Global styles
public/images/        # Assets and placeholders
```

## Notes
- Update contact details in `src/lib/data.ts` if needed.
- Replace WhatsApp links in `src/app/pendaftaran/page.tsx` and `src/app/kontak/page.tsx`.
