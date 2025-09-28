# bykr - Minimal Next.js scaffold

This is a minimal starter scaffold for **bykr.co** (Next.js App Router + Tailwind CSS).

## What's included
- Next.js (app router) skeleton
- Tailwind CSS config files (you need to install deps)
- Hero video component (place your `hero.mp4` into `public/hero.mp4`)
- NavBar with compatibility dropdowns and social-media radio-style buttons (open in new tab)
- Product grid using `data/products.json`
- Sample data in `data/`

## How to run locally
1. Install Node.js 18+ and npm.
2. From the project root:
   ```bash
   npm install
   npm run dev
   ```
3. Open `http://localhost:3000`

## Notes
- This scaffold uses placeholder files for images and video. Replace the files in `public/` with your actual media.
- Tailwind is configured but you need to run `npm install` to get dev dependencies.
- Payment/checkout and server APIs are intentionally left as stubs/placeholders. I can add Stripe integration next.

## Deploy to Vercel
- Push to GitHub.
- Connect the repo to Vercel and set environment variables as needed.
- Add your `hero.mp4` and image assets to the `public/` folder (or use a CDN).

