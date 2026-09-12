# Juan Auto Repair — Next.js rebuild

This is the Claude Design canvas for Juan Auto Repair, rebuilt as a proper Next.js (App Router) + TypeScript project. The original was a single hand-authored HTML file with inline CSS/JS and nine base64-encoded images baked directly into the markup (~1.5MB of HTML). This version keeps the exact same design and copy, restructured into:

- **Components per section** (`components/`) instead of one long HTML file — `Header`, `Hero`, `Services`, `RecentWork`, `MeetJuan`, `Faq`, `BookingSection` / `BookingForm`, `Visit`, `Footer`, `MobileBookingBar`.
- **CSS Modules** scoped per component, plus `app/globals.css` for the design tokens (colors, type scale, spacing) and the handful of classes shared across sections (`.btn`, `.section`, `.wrap`, etc.).
- **Real image files** in `public/images/` (extracted from the original's base64 data URIs) served through `next/image`, so they're responsive, lazy-loaded, and cached instead of bloating every page load.
- **TypeScript** throughout, with typed content in `lib/data.ts` (services, FAQs, repair examples, nav links) so editing the copy doesn't mean hunting through markup.
- **next/font** for Hanken Grotesk, Inter, and IBM Plex Mono — self-hosted at build time instead of a render-blocking Google Fonts `<link>`.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000. No `.env.local` needed to try it locally — the booking form already points at the live Formspree endpoint (`mzebwqjy`, targeted at **juanauto78769@gmail.com**), hardcoded as the default in `components/BookingForm.tsx`.

```bash
npm run build && npm start   # production build
npm run typecheck            # tsc --noEmit
npm run lint                 # next lint
```

### The booking form's email (Formspree)

Submissions land in **juanauto78769@gmail.com** via Formspree form `mzebwqjy`. Formspree's free tier caps at 50 submissions/month — if that becomes a problem, or the shop switches Formspree accounts, create a new form pointed at the target email, copy its ID from the Integration tab (`https://formspree.io/f/XXXXXXXX`), and either:

- set it as the new default in `components/BookingForm.tsx`, or
- override it per-environment via `.env.local` (copy `.env.local.example`, set `NEXT_PUBLIC_FORMSPREE_FORM_ID`) — useful for pointing local/test runs at a throwaway form so test submissions don't land in the real inbox.

Heads up: while testing locally, every real submission through the form goes to the real inbox (`mzebwqjy` isn't a sandbox). Use a scratch Formspree form via `.env.local` if you want to hammer on it without emailing Juan.

## What changed vs. the original, and why

- **Booking form submission**: the original posted to Formspree with a classic full-page redirect (a hidden `_next` field pointed back at the page with `?booked=1`, and some JS looked for that query param on load to reveal the success banner). This version submits with `fetch` using Formspree's `Accept: application/json` flow, so success/error is just component state — no redirect round trip, no URL cleanup. Defaults to the live form (`mzebwqjy`, targeted at juanauto78769@gmail.com); override with `NEXT_PUBLIC_FORMSPREE_FORM_ID` in `.env.local` to point elsewhere.
- **Mobile booking modal**: the original physically moved the single `<form>` DOM node into the modal and back out again (`appendChild`/`insertBefore`) whenever it opened or closed. `BookingForm` is a real component now, so the modal just renders its own instance (`<BookingForm idPrefix="book-mobile" />`) — no manual DOM surgery, and each instance's ids are namespaced by `idPrefix` so labels/inputs never collide.
- **Fixed a sizing bug**: the error-summary banner's icon (`Please fix the highlighted fields below.`) had no explicit size in the original CSS — only the success banner's icon was sized — so it rendered oversized whenever validation failed. Fixed to match (20×20px).
- **Footer year**: computed server-side (`new Date().getFullYear()` in the Footer server component) instead of a client-side script setting `textContent` after mount.
- **Everything else** — layout, copy, colors, breakpoints, the hero/footer parallax drift, FAQ accordion behavior, form validation rules — is unchanged.

## Known gaps / next steps

- **Placeholder photos**: the four "Recent Work" vehicle photos are stock images (credited to Wikimedia Commons in the footer, same as the original) — swap the files in `public/images/repairs/` for Juan's real repair photos whenever you have them; the layout doesn't need to change.
- **Dependency versions**: `next` is pinned to the latest `14.2.x` patch (14.2.35) rather than the current major (16.x), to stay close to what the original canvas assumed without introducing an untested breaking upgrade. `npm audit` will still flag a handful of advisories against the 14.x line — most only matter for specific self-hosting configurations (custom servers, i18n rewrites, etc.) that this static marketing site doesn't use, but it's worth planning a move to Next 15/16 before this goes into serious production use.
- **Analytics/SEO extras** (sitemap, robots.txt, Open Graph image, structured data for a local business) aren't included — easy to add once you know where this is actually being hosted.
