import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from './copy';

export type PortfolioEntry = CollectionEntry<'portfolio'>;

export async function getProjects(locale: Locale) {
  const entries = await getCollection('portfolio', ({ data }) => data.language === locale);
  return entries.sort((a, b) => a.data.order - b.data.order);
}

export function projectSlug(entry: PortfolioEntry) {
  return entry.id.split('/').at(-1) ?? entry.id;
}
