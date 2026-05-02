# Ahmad Mansee — Portfolio

A dark-themed personal portfolio for Ahmad Mansee (Product & UX Designer). Built with React + Vite + TailwindCSS + Framer Motion + Wouter routing.

## Stack

- **Frontend:** React 18 + Vite, TailwindCSS, Framer Motion, Wouter (router), TanStack Query, shadcn/ui
- **Backend:** Express (light shell, mostly serves the SPA)
- **Hosting:** Replit (single port — `npm run dev` runs both)

## Routes

| Path | Component | Notes |
|------|-----------|-------|
| `/` | `Home` | Hero, projects grid |
| `/about` | `About` | Bio, experience, toolbox |
| `/contact` | `Contact` | Phone + email |
| `/case-study/pickup` | `CaseStudyPickup` | Delivery Hero — pickup map |
| `/case-study/edugla` | `CaseStudyEdugla` | Edugla AI |
| `/case-study/voice` | `CaseStudyVoice` | Jahez voice-to-cart |
| `*` | `not-found` | Branded 404 |

## Project Structure

```
client/
  index.html              # SEO meta, fonts (3 families), favicon, OG image
  public/
    favicon.svg / .png    # Pink rounded square + white G
    og-image.png          # 1200×630 share image
    robots.txt
    sitemap.xml
    case-study/{voice,pickup}/  # case study assets
  src/
    App.tsx               # Routes
    pages/                # Home, About, Contact, CaseStudy*, not-found
    components/
      Navbar, Footer, CaseStudyNav   # Shared chrome
      PageMeta              # Per-page title + meta tags
      ScrollProgress        # Pink progress bar (case studies)
      ScrollToTop           # Floating button (case studies)
      ui/                   # shadcn primitives
```

## Design System

- **Colors:** `bg-black` page, `#2B2D33` dark sections, `#cf3570` pink accent, `#b8b8b8` muted text, `#95989c` secondary text
- **Fonts:** Inter Tight (primary), Be Vietnam Pro (CTAs), Manrope (occasional). Trimmed from ~40 families to 3.
- **Motion:** `fadeUp` variant defined per page; cubic ease `[0.25, 0.1, 0.25, 1]`
- **Carousels:** `DragCarousel` defined locally in case study pages (drag-to-scroll)
- **Video:** `VideoPlayer` (Pickup) / `VideoEmbed` (Edugla) — phone mockup + Google Drive iframe + play overlay

## Recent Improvements (May 2026)

- **SEO:** Per-page `<PageMeta>` (title + description + OG/Twitter), `robots.txt`, `sitemap.xml`, OG image (1200×630)
- **Performance:** Trimmed Google Fonts request (40 → 3 families), `loading="lazy"` on below-fold images
- **UX:** `<ScrollProgress>` bar at top of case studies, `<ScrollToTop>` floating button, branded 404 page
- **Polish:** Hero "Currently" status line, Footer email icon, accessible LinkedIn link, color contrast bump (`#aaa` → `#b8b8b8`)
- **Pickup case study:** `VideoPlayer` with phone mockup, emoji metric grid, updated test images

## Forbidden / Pinned

- Don't edit `package.json` directly — use the package install tool
- Don't change `vite.config.ts` or `server/vite.ts`
- Don't modify `drizzle.config.ts`

## Running

The "Start application" workflow runs `npm run dev` (Express + Vite on port 5000).
