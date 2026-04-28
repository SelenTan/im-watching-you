# Animal Crossing Personal Site Template

A cozy, Animal Crossing-themed personal website built with **Astro**, **TailwindCSS**, and **DaisyUI**. Features a warm cream palette, NookPhone-style sidebar navigation, light/dark mode, and charming rounded aesthetics.

## Features

- Animal Crossing visual style — warm colors, rounded shapes, 3D press-down buttons
- Light (Day) and Dark (Night) themes with localStorage persistence
- NookPhone-inspired sidebar with icon navigation
- Theme-aware banner images (light/dark variants)
- Blog, Notes, Projects, CV, and Personal pages
- Markdown/MDX content with KaTeX math support
- GitHub Pages deployment workflow included
- Responsive — mobile drawer sidebar, desktop persistent sidebar

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [pnpm](https://pnpm.io/)

### Setup

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open `http://localhost:4321` in your browser.
Deplyed site:https://selentan.github.io/im-watching-you/
## Fonts

- **Latin text**: Nunito Variable (rounded, friendly)
- **CJK text**: LXGW WenKai (霞鹜文楷)

Fonts are composed via CSS `@font-face` with `unicode-range` in `src/styles/global.css`.

## Deployment (GitHub Pages)

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`.

1. Push your code to a `gh-pages` branch
2. The workflow builds the site and deploys to GitHub Pages
3. Set `BASE_URL` in the workflow to match your repo name (e.g., `/your-repo/`)
4. Update `site` in `astro.config.mjs` to your GitHub Pages URL

For a custom domain, add a `CNAME` file to `public/` and update the `site` field.

## Credits

- [Astro](https://astro.build/) — Static site framework
- [TailwindCSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) — Styling
- [Animal Crossing](https://www.nintendo.com/us/store/products/animal-crossing-new-horizons-switch/) by Nintendo — Visual inspiration
- [animal-crossing-ui](https://github.com/guokaigdg/animal-crossing-ui) — Design reference
- [okpng nookphone icons](https://okpng.gumroad.com/) - Icon assets

