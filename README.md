# Yefeng Miao — Portfolio

Personal design portfolio, deployed via GitHub Pages.

## Structure

- `site/` — the live site. Static HTML/CSS/JS, no build step, no dependencies.
  - `index.html` — single-page app shell; all pages live here as `<div class="page">` sections.
  - `js/app.js` — hash-based client-side routing (`go('pitchbook')`, etc.) and the sticky
    case-title bar behavior.
  - `css/` — base styles + self-hosted Inter font faces.
  - `assets/img`, `assets/fonts` — images and font files referenced by the site.
- `Design/` — original Figma export and `.fig` source, kept for reference.

## Local preview

```
cd site
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes `site/` to
GitHub Pages.
