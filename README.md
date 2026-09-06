# Deepa Shrestha — Nurse Portfolio

Single-page nurse portfolio. Next.js 15 (App Router), TypeScript, pnpm, no CSS framework.

## Editing

All content lives in one file: `content/profile.ts`. Name, licence number, employers,
dates, skills, credentials, and contact details are placeholders — replace them there
and nothing else needs to change.

Skill levels are `Independent` (4 ticks), `Proficient` (3), or `Competent` (2).

Drop the CV at `public/deepa-shrestha-cv.pdf`, or point `profile.cvHref` somewhere else.

## Running

    pnpm install
    pnpm dev         # http://localhost:3000
    pnpm build       # production build

## Deploying to Vercel

Push to a Git remote and import the repo at vercel.com/new. Vercel reads `pnpm-lock.yaml`
and the `packageManager` field, so it installs with pnpm on its own — no settings to change.
Or from this directory:

    pnpm dlx vercel

## Structure

    app/layout.tsx        fonts, metadata, global CSS
    app/page.tsx          section order
    app/globals.css       the whole design system
    components/           one component per section
    content/profile.ts    all editable content
