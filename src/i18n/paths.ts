import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from './ui';

type BlogCollection = 'footprints' | 'savour' | 'pages-frames' | 'in-motion';

/** Strip the leading `en/` or `bg/` prefix to get the bare slug. */
export function bareSlug(slug: string): string {
  return slug.replace(/^(en|bg)\//, '');
}

/**
 * Build getStaticPaths entries for a given collection + language.
 *
 * English: one path per EN post.
 * Bulgarian: one path per EN post (so every article has a BG URL).
 *   - If a BG version exists, use it.
 *   - Otherwise, fall back to the EN post and set `isFallback: true`.
 */
export async function getCategoryPaths(collection: BlogCollection, lang: Lang) {
  const all = await getCollection(collection);
  const enPosts = all.filter(p => p.slug.startsWith('en/'));

  if (lang === 'en') {
    return enPosts.map(post => ({
      params: { slug: bareSlug(post.slug) },
      props: { post, isFallback: false },
    }));
  }

  // Bulgarian — find matching BG post or fall back to EN
  const bgPosts = all.filter(p => p.slug.startsWith('bg/'));
  const bgBySlug = Object.fromEntries(bgPosts.map(p => [bareSlug(p.slug), p]));

  return enPosts.map(enPost => {
    const slug = bareSlug(enPost.slug);
    const bgPost = bgBySlug[slug];
    return {
      params: { slug },
      props: {
        post: bgPost ?? enPost,
        isFallback: !bgPost,
      },
    };
  });
}

/** For a category listing: return posts for the given lang, sorted by date. */
export async function getCategoryPosts(collection: BlogCollection, lang: Lang) {
  const all = await getCollection(collection, ({ data }) => !data.draft);
  return all
    .filter(p => p.slug.startsWith(`${lang}/`))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
