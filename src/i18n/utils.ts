import { ui, defaultLang, type Lang, type UIKey } from './ui';

export function getLang(locale: string | undefined): Lang {
  return locale === 'bg' ? 'bg' : 'en';
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    const val = (ui[lang] as Record<string, string>)[key]
             ?? (ui[defaultLang] as Record<string, string>)[key]
             ?? key;
    return val;
  };
}

/** Prefix a root-relative href with /en for English, leave bare for Bulgarian (default). */
export function localHref(href: string, lang: Lang): string {
  return lang === 'en' ? `/en${href}` : href;
}

/** Convert a category name key to its URL slug. */
export const categorySlug: Record<string, string> = {
  'nav.footprints':  'footprints',
  'nav.savour':      'savour',
  'nav.pagesFrames': 'pages-frames',
  'nav.inMotion':    'in-motion',
};
