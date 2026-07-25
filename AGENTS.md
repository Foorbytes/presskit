# Foorbytes Website Agent Instructions

## Project Purpose

This repository contains the official public Foorbytes website.

It is a static website hosted through GitHub Pages from:

- Branch: `main`
- Publishing folder: repository root
- Public GitHub Pages URL: `https://foorbytes.github.io/presskit/`
- Custom domain: `https://foorbytes.com`

## Technology

Use only:

- HTML
- CSS
- Small amounts of plain JavaScript
- Local image assets

Do not introduce a framework, package manager, build process, database, server, or external hosting dependency unless explicitly requested.

## Important Rules

- Do not create GitHub Actions or temporary workflows unless explicitly requested.
- Do not create background agents or scheduled automation.
- Do not alter GitHub Pages, DNS, `CNAME`, or domain settings without explicit approval.
- Do not use Squarespace-hosted image URLs.
- All website images must live under `assets/images`.
- Preserve original image quality.
- Do not convert or recompress pixel art, logos, screenshots, or supplied PNG files without approval.
- Do not generate replacement artwork unless explicitly requested.
- Do not mention or announce Of Dice and Minions.
- Treat Bad Credit? No Problem! as the only currently announced game.
- Do not use press kit terminology. This is the official Foorbytes website.
- The public resource page is called Media & Creator Resources.
- Preserve all working Steam, App Store, Discord, YouTube, and email links.
- YouTube-hosted video embeds are permitted.

## Shared Site Shell

- The header and footer must be visually and functionally identical on every public page in the sitemap.
- `site.js` is the canonical source for the shared header and footer markup.
- Every public HTML page must load `site.js` immediately before the closing `body` tag, except when another page-specific script follows it.
- Do not create page-specific header or footer links, wording, logos, spacing, or navigation variants.
- When changing the header or footer, edit the shared templates in `site.js` and verify the change across the entire sitemap.

## Search, Sharing, and Discovery

- Keep `sitemap.xml` current whenever a public page is added, renamed, redirected, or removed.
- Keep `robots.txt` pointed at `https://foorbytes.com/sitemap.xml`.
- Keep `feed.xml` current whenever a News & Events article is added, renamed, substantially updated, or removed.
- Every public HTML page must have a unique title and description.
- Every public HTML page must have a canonical `https://foorbytes.com` URL.
- Add Open Graph and social-sharing metadata to every new public page.
- Use `assets/images/foorbytes-social-card.svg` as the default studio sharing image unless the page has more relevant artwork.
- News stories should use their own article artwork for social sharing when available.
- Preserve the structured-data generation in `site.js` and update its route metadata whenever a public page is added or renamed.
- Do not add Google Search Console verification until the exact verification value is supplied by the owner.

## Design Direction

Match the visual language of the existing Foorbytes site:

- Black background
- White rounded typography
- Bright blue accents
- Large, image-led sections
- Full-width game artwork
- Simple navigation
- Clean layouts without excessive cards or generic marketing language

Keep the site visually bold but uncomplicated.

## Main Files

- `index.html`: Foorbytes homepage
- `badcredit.html`: official Bad Credit? No Problem! game page
- `news.html`: News & Events archive
- `about.html`: studio overview
- `support.html`: player support and FAQ
- `media.html`: official Media & Creator Resources
- `404.html`: themed GitHub Pages error page
- `styles.css`: shared layout and visual system
- `updates.css`: forms and article typography
- `archive.css`: news and archived article styling
- `studio.css`: About, Support, Media, milestones, and 404 styling
- `site.js`: canonical header, footer, metadata, structured data, mobile navigation, and contact form behavior
- `media-kit.js`: browser-built ZIP download for approved media assets
- `sitemap.xml`: complete public HTML URL inventory for search engines
- `feed.xml`: RSS feed containing every News & Events article
- `robots.txt`: crawler rules and sitemap discovery
- `assets/images/`: all website-owned image files

## Content Rules

Foorbytes is a one-person indie game developer creating offbeat, irreverent PC and mobile titles built around unusual subjects.

Use the public name `Rob` unless the owner explicitly requests otherwise.

Do not add personal location, employment, family, or biographical details without explicit approval.

Keep the writing direct and natural.

Avoid:

- Corporate language
- Artificial-sounding slogans
- Generic advertising copy
- Repeating the same description across multiple sections

## Store Links

Steam:

`https://store.steampowered.com/app/3064450/`

iOS App Store:

`https://apps.apple.com/us/app/bad-credit-no-problem/id1518821090`

## Validation

Before committing website changes:

- Check the homepage at desktop width around 1440px.
- Check the site at mobile width around 390px.
- Verify there is no horizontal overflow.
- Verify all local images load.
- Verify local page links work.
- Verify the mobile menu opens and closes.
- Verify the rendered header and footer match on every URL in `sitemap.xml`.
- Verify every public HTML page loads `site.js`.
- Preserve one clear `h1` per page.
- Confirm the contact form still opens a prepared email.
- Confirm `sitemap.xml` contains every public HTML page and no removed page.
- Confirm `feed.xml` contains every News & Events article.
- Confirm `robots.txt` points to the production sitemap.
- Confirm the media ZIP button either downloads successfully or fails with a clear fallback message while individual asset links remain usable.
- Validate XML files and check JavaScript syntax.
- Do not leave diagnostic files, temporary scripts, or workflows behind.

## Change Safety

For minor approved edits, update `main` directly.

Before a major redesign or multi-page expansion:

- Create a backup branch.
- Work on a temporary branch when practical.
- Validate the complete change before moving `main`.
- Do not delete the previous design until the replacement is confirmed.
- Keep changes easy to roll back.
