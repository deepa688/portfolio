# Deepa Shrestha — nurse portfolio

A single-page portfolio for a registered nurse, built with Next.js 15
(App Router), TypeScript and pnpm. No CSS framework, no UI library, no
icon package.

## Content

- **All content lives in `content/profile.ts`.** Nothing else needs
  editing to change what the page says. Components read from it; they
  do not hold copy.
- The content is taken from her CV. Do not invent credentials, dates,
  employers or skills. If something is not in the CV, ask.
- **Her phone number is deliberately not on the site.** Enquiries come
  by email only. Do not add it back.
- Photographs are in `public/photos/`, referenced from `profile.photos`:
  `hero-bust.png` (transparent cutout, hero), `portrait.jpg`
  (convocation, education section), `air-ambulance-1.jpg` and
  `air-ambulance-2.jpg` (gallery). `hero-cutout.png` is the full-length
  version of the hero figure, kept in case it is wanted again.

## Layout

- `app/layout.tsx`: Inter via `next/font` (normal + italic), metadata,
  the no-flash theme script, and the `<noscript>` rules that make
  everything animated start visible.
- `app/globals.css`: the whole design system. Tokens at the top, in
  three blocks — `:root`, a `prefers-color-scheme: dark` block guarded
  by `:not([data-theme="light"])`, and `[data-theme="dark"]`. Changing a
  colour means changing all three.
- `components/`: one component per section. `Icon.tsx` holds every icon
  as SVG path data.

## Motion

Every animation must be switched off under
`prefers-reduced-motion: reduce`, and in print. That includes the dot
canvas, the ECG traces, the heartbeat pulses and the scroll reveals.
`DotCanvas` and the reveal observers also skip touch pointers.

## Hosting

- Live at https://www.deepashrestha688.com.np
- Served by the Vercel project **`deepa-nurse-site`** (team
  `deepa-2ee0`), not by the projects named `portfolio` or
  `deepa-portfolio` — both of those are dead and should be deleted.
- As of 2026-09-24 that project is **not** connected to Git, so pushing
  does not deploy. Deploy with `vercel deploy --prod` from this
  directory, or connect the repo in the Vercel dashboard.
- DNS is correct and needs no further work. If the domain ever 404s
  while the dashboard looks healthy, check
  `GET /v9/projects/<name>?teamId=<team>`: `live: false` with a
  `BLOCKED` deployment means the Vercel project itself is dead and must
  be replaced rather than repaired.

## Commands

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # must pass before deploying
```

Run `pnpm exec tsc --noEmit` when the dev server holds `.next` and a
full build would fail on file locks.

## Conventions

- Files end with a newline.
- Commit messages are plain sentences in the imperative mood.
- Never commit `.env*` or `.vercel/` — the Vercel CLI writes a token
  into `.env.local`.
