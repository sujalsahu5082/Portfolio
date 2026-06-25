# Sujal Sahu — Portfolio

A premium, dark-mode, recruiter-focused personal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Every piece of content (experience, projects, skills, achievements, leadership, certifications, contact info) is sourced directly from `Sujal_Sahu_Resume.pdf` and lives in one typed file: `lib/data.ts`.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with a custom design-token system (navy / indigo / electric blue / violet)
- **Framer Motion** for scroll reveals, the navbar active-pill, and the scroll-progress bar
- Hand-written **shadcn/ui-style** primitives (`Button`, `Card`) — no external UI package needed
- **Lucide React** icons
- Self-hosted, optimized fonts via `next/font/google`: Space Grotesk (display), Inter (body), JetBrains Mono (data/stats)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Updating content

All resume content lives in `lib/data.ts`. Edit the values there — no need to touch component files — and the entire site updates. The PDF behind the "Download Resume" button is at `public/resume/Sujal_Sahu_Resume.pdf`; replace that file to update the download.

## Build for production

```bash
npm run build
npm run start
```

## Project structure

```
app/                 Root layout, global styles, page composition
components/          One component per section (hero, about, experience, ...)
components/ui/       Reusable primitives (button, card, reveal, section-heading)
lib/data.ts          Single source of truth for all resume content
lib/utils.ts         cn() class-merging helper
public/resume/       Downloadable PDF resume
```
