# SmartToolPicks.net

Expert SaaS reviews, software comparisons, and productivity tool guides.

## Quick Start

```bash
npm install
npm run dev        # → localhost:3000
npm run build      # Production build
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── guides/               # Software review directory + detail pages
│   ├── compare/              # Tool comparisons
│   ├── blog/                 # Blog listing
│   ├── style-quiz/           # Tool finder quiz
│   ├── about/privacy/contact # Legal pages
│   └── layout.tsx            # Root layout
├── components/
│   ├── Header.tsx            # Navigation
│   ├── Footer.tsx            # Footer
│   ├── GuideCard.tsx         # Review card
│   ├── ShopTheLook.tsx       # Affiliate product display
│   └── NewsletterCTA.tsx     # Email signup
├── lib/
│   └── guides-data.ts        # Content database
└── styles/
    └── globals.css            # Tailwind + design system
```

## Adding Content

### New Software Review
Add to `src/lib/guides-data.ts` → page auto-generates at `/guides/[slug]`

### New Comparison
Create folder `src/app/compare/[tool-a-vs-tool-b]/page.tsx`

## Monetization

- **Affiliate**: Amazon Associates + Skimlinks
- **AdSense**: Display ads
- **Newsletter**: Email signup for tool recommendations

## Tech Stack

Next.js 14 + TypeScript + Tailwind CSS + GitHub Pages
