# Juana & Lola Digital

A bilingual Astro website for Juana & Lola Digital. Spanish is served at `/`; English is served at `/en/`. The site is statically generated for Netlify.

## Run locally

Use Node 22.12 or newer.

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

The production files are written to `dist/`. Netlify reads the build command and publish directory from `netlify.toml`; no server adapter is required.

## Update the portfolio

Portfolio content lives in `src/content/portfolio/es/` and `src/content/portfolio/en/`. Add one Markdown file in each language for every project, using the same `translationKey`. The filename becomes that language's project-page slug. The site generates `/proyectos/<slug>/` and `/en/projects/<slug>/` automatically.

Each file needs these frontmatter fields:

```yaml
---
language: es
translationKey: my-project
name: Nombre del proyecto
description: Una descripción breve para la tarjeta y los buscadores.
detailLink: /proyectos/my-project/
previewImage: /images/portfolio/my-project.svg
imageAlt: Descripción de la imagen de vista previa.
category: Landing page
kind: concept
order: 4
---
```

Write the project details in the Markdown body. Add the preview image under `public/images/portfolio/`. Set `detailLink` to the generated local detail URL, matching the file's language and slug. For a public site, add `projectLink: https://example.com/`. To show an optional GitHub repository link, add `repositoryLink: https://github.com/owner/repo`. Both links appear on the homepage card and detail page. Set `kind: real` for real work; keep concept work clearly identified and avoid invented client claims or results.

## Add the cat photos

Place the photos under `public/images/cats/`, then replace the three `null` values in `src/lib/pets.ts` with their root-relative paths. The order is Juana, Lola, Simón. The existing photo frames and localized alternative text will be used automatically.

## Netlify form and launch

1. Connect the repository to Netlify and set `juanaylola.com` as the primary HTTPS domain.
2. Enable form detection in the site's **Forms** settings and deploy again. The static HTML contains the `contact` form in both languages, a honeypot, and language-specific thank-you paths.
3. Send a test enquiry on the deployed site and check that it appears in Netlify's Forms dashboard. Configure notification emails there if desired. Local Astro preview cannot process Netlify form submissions.
4. Check `/robots.txt`, `/sitemap-index.xml`, both language homepages, and the project pages on the deployed domain. Verify the domain in Google Search Console and Bing Webmaster Tools, then submit `https://juanaylola.com/sitemap-index.xml` and monitor indexing reports.

The thank-you pages are excluded from the sitemap and contain `noindex` metadata. Public pages have canonical and reciprocal language URLs. `robots.txt` permits search and AI answer crawlers while opting out of the separate GPTBot, ClaudeBot, and Applebot-Extended training controls. Google-Extended is allowed because it also supports Gemini answer grounding.

Changing `public/og-image.svg` requires regenerating `public/og-image.png`. With dependencies installed, run:

```sh
node --input-type=module -e 'import sharp from "sharp"; await sharp("public/og-image.svg").png().toFile("public/og-image.png")'
```
