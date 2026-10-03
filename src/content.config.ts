import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    language: z.enum(['es', 'en']),
    translationKey: z.string(),
    name: z.string(),
    description: z.string(),
    link: z.string(),
    previewImage: z.string(),
    imageAlt: z.string(),
    category: z.string(),
    kind: z.enum(['concept', 'real']),
    order: z.number().int(),
  }),
});

export const collections = { portfolio };
