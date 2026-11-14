# Juana & Lola Digital

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Small and local businesses in Argentina and Spain that need a website, better search visibility, custom software, or practical help with technology decisions. The site serves these users in Spanish and English.

## Product Purpose

Juana & Lola Digital is Sebastian’s independent studio. The website introduces its services and work so prospective clients can start a project enquiry. Its primary success is a relevant conversation about a business’s needs.

## Positioning

An independent studio offering websites, SEO, custom software, and IT consulting around the needs of small businesses. This service scope and audience are confirmed; a more specific competitive differentiator remains open.

## Operating Context

The current site lets visitors explore services, a listen–create–support process, portfolio projects, and the story behind the studio, then enquire through the contact form or `hola@juanaylola.com`.

A free 30-minute consultation is a confirmed standing offer. Quote turnaround is undecided. The current contact copy in `src/lib/copy.ts` says a quote is sent within 24 hours; that timing is not a confirmed commitment and needs a decision before future work repeats it as a promise.

## Capabilities and Constraints

- Four confirmed services: websites, SEO and search visibility, custom software, and IT consulting.
- Spanish is served at `/`; English at `/en/`. Preserve both languages and their corresponding routes.
- The existing implementation uses Astro with static output and Netlify build configuration. Portfolio entries are Markdown files in `src/content/portfolio/es/` and `src/content/portfolio/en/`, paired by `translationKey`.
- The contact form captures name, email, service of interest, message, and language, with Netlify form handling, a honeypot, and localized thank-you pages. Actual submission handling requires a configured Netlify deployment; local preview cannot verify delivery.
- Project detail pages support public-site links and optional repository links. Real work and concept work have distinct labels; concepts must not be presented as commissioned client work.
- The current site includes localized privacy pages, canonical and alternate-language metadata, and a sitemap that excludes thank-you pages.
- Pricing, project delivery schedules, quote turnaround, and measurable business results are not established product commitments.

## Brand Commitments

The confirmed product name is **Juana & Lola Digital**, and it represents Sebastian’s independent studio. Preserve the bilingual service offering and its small-business focus.

## Evidence on Hand

- `src/lib/copy.ts` contains the current bilingual services, process, story, contact, and privacy copy. Its service promises remain subject to the confirmed constraints above.
- The existing story identifies Sebastian Castañeda as a software engineer with more than 15 years of experience and explains the name through his cats Juana and Lola, with Simón also part of the family story. These are existing content claims, not newly verified credentials.
- Two portfolio entries are currently marked as real work: Pixban (`pixban.app`) and Sebastian’s personal website and blog (`sebastiancastaneda.dev`). Details and technology descriptions live in the bilingual portfolio Markdown files; preview images live in `public/images/portfolio/`.
- Existing brand assets: `public/brand-mark.webp`, `public/favicon.svg`, and `public/og-image.png`. Cat photographs are available in `public/images/cats/`.
- No client testimonials, commissioned-client case studies, or measured business outcomes were found in the reviewed content. Do not invent them.

## Product Principles

1. Start with the needs of small and local businesses and help them take a practical next step.
2. Make the studio’s four services understandable and make starting an enquiry straightforward.
3. Maintain equivalent product information and enquiry paths in Spanish and English.
4. Present real work honestly, distinguish concepts, and make only confirmed service promises.
