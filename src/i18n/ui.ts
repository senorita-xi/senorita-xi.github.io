export const defaultLang = 'en' as const;

export const languages = {
  en: 'EN',
  bg: 'BG',
} as const;

export const ui = {
  en: {
    // ── Navigation ────────────────────────────────────
    'nav.footprints':  'Footprints',
    'nav.savour':      'Savour',
    'nav.pagesFrames': 'Pages & Frames',
    'nav.inMotion':    'In Motion',
    'nav.contacts':    'Connect',

    // ── Home ──────────────────────────────────────────
    'home.tagline': 'Wandering the world, one bite, book & mile at a time.',

    // ── Category descriptions ─────────────────────────
    'desc.footprints':  'Places visited, roads taken, and the moments that made them memorable.',
    'desc.savour':      'Food experiences, restaurants worth finding, and meals that linger long after the last bite.',
    'desc.pagesFrames': 'Reviews of books and films that stayed with me long after I finished them.',
    'desc.inMotion':    'Movement, fitness, and the body in motion — running, swimming, yoga, and everything in between.',

    // ── UI strings ────────────────────────────────────
    'ui.viewAll':          'View all',
    'ui.read':             'Read →',
    'ui.followAlong':      'Follow Along',
    'ui.viewOnInstagram':  'View on Instagram',
    'ui.sendMessage':      'Send a message on Instagram',
    'ui.backTo':           'Back to',
    'ui.copyright':        '© {year}',
    'ui.fallbackNotice':   'This post is not yet available in Bulgarian. Showing the English version.',

    // ── Connect page ──────────────────────────────────
    'connect.desc':              'Find me across the internet.',
    'connect.intro':             'Follow along on the platforms where I share the most.',
    'connect.ig.note':           'Daily stories, travel snapshots & food moments.',
    'connect.strava.note':       'Running logs, routes & fitness milestones.',
    'connect.yt.note':           'Videos, travel vlogs & longer stories.',
    'connect.follow':            'Follow',
    'connect.subscribe':         'Subscribe',
  },

  bg: {
    // ── Navigation ────────────────────────────────────
    'nav.footprints':  'Следи',
    'nav.savour':      'Вкус',
    'nav.pagesFrames': 'Страници и Кадри',
    'nav.inMotion':    'В Движение',
    'nav.contacts':    'Свържи се',

    // ── Home ──────────────────────────────────────────
    'home.tagline': 'Скитам по света — хапка по хапка, книга по книга, миля по миля.',

    // ── Category descriptions ─────────────────────────
    'desc.footprints':  'Посетени места, изминати пътища и моменти, запечатани завинаги в паметта.',
    'desc.savour':      'Гастрономически преживявания и ресторанти, заслужаващи да бъдат открити.',
    'desc.pagesFrames': 'Рецензии на книги и филми, които ме следват дълго след последната страница.',
    'desc.inMotion':    'Движение, фитнес и тялото в действие — бягане, плуване, йога и всичко между тях.',

    // ── UI strings ────────────────────────────────────
    'ui.viewAll':          'Виж всички',
    'ui.read':             'Прочети →',
    'ui.followAlong':      'Следвай ме',
    'ui.viewOnInstagram':  'Виж в Instagram',
    'ui.sendMessage':      'Изпрати съобщение в Instagram',
    'ui.backTo':           'Назад към',
    'ui.copyright':        '© {year}',
    'ui.fallbackNotice':   'Тази статия все още не е налична на български. Показва се английската версия.',

    // ── Connect page ──────────────────────────────────
    'connect.desc':              'Намери ме в интернет.',
    'connect.intro':             'Последвай ме в платформите, където споделям най-много.',
    'connect.ig.note':           'Ежедневни истории, снимки от пътя и кулинарни моменти.',
    'connect.strava.note':       'Тренировъчни дневници, маршрути и фитнес постижения.',
    'connect.yt.note':           'Видеа, влогове от пътувания и по-дълги истории.',
    'connect.follow':            'Последвай',
    'connect.subscribe':         'Абонирай се',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof ui[typeof defaultLang];
