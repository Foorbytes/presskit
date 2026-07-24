# Foorbytes Website Agent Instructions

## Project Purpose

This repository contains the official public Foorbytes website.

It is a static website hosted through GitHub Pages from:

- Branch: `main`
- Publishing folder: repository root
- Public GitHub Pages URL: `https://foorbytes.github.io/presskit/`
- Intended custom domain: `foorbytes.com`

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
- Preserve all working Steam, App Store, Discord, YouTube, and email links.
- YouTube-hosted video embeds are permitted.

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
- `styles.css`: shared layout and visual system
- `updates.css`: forms and article typography
- `archive.css`: news and archived article styling
- `site.js`: mobile navigation and contact form behavior
- `assets/images/`: all website-owned image files

## Content Rules

Foorbytes is a one-person indie game developer creating offbeat, irreverent PC and mobile titles built around unusual subjects.

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
- Preserve one clear `h1` per page.
- Confirm the contact form still opens a prepared email.
- Do not leave diagnostic files, temporary scripts, or workflows behind.

## Change Safety

For minor approved edits, update `main` directly.

Before a major redesign:

- Create a backup branch.
- Do not delete the previous design until the replacement is confirmed.
- Keep changes easy to roll back.
