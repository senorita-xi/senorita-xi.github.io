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
    'nav.contacts':    'Contacts',

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

    // ── Contacts ──────────────────────────────────────
    'contacts.desc':             'Collaborations, questions, or just to say hello.',
    'contacts.intro':            "I'm always open to conversations about travel, food, books, and everything in between. Whether you'd like to collaborate, share a recommendation, or simply connect — feel free to reach out.",
    'contacts.instagram.label':  'Instagram',
    'contacts.instagram.note':   'The most immediate place to find me — stories, posts, and moments from the road.',
    'contacts.collab.label':     'Collaborations',
    'contacts.collab.text':      'Open to travel partnerships, restaurant features, book & film collaborations, and wellness brand projects that align with the spirit of this space.',
    'contacts.hello.label':      'Say Hello',
    'contacts.hello.text':       'A destination recommendation? A book I must read? A restaurant not to miss? I genuinely love hearing from people who share the same curiosities.',
  },

  bg: {
    // ── Navigation ────────────────────────────────────
    'nav.footprints':  'Следи',
    'nav.savour':      'Вкус',
    'nav.pagesFrames': 'Страници и Кадри',
    'nav.inMotion':    'В Движение',
    'nav.contacts':    'Контакти',

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

    // ── Contacts ──────────────────────────────────────
    'contacts.desc':             'Сътрудничество, въпроси или просто поздрав.',
    'contacts.intro':            'Винаги съм отворена за разговори за пътуване, храна, книги и всичко между тях. Ако искате да си сътрудничим, да споделите препоръка или просто да се свържете — не се колебайте.',
    'contacts.instagram.label':  'Instagram',
    'contacts.instagram.note':   'Най-бързото място да ме намерите — истории, публикации и моменти от пътя.',
    'contacts.collab.label':     'Сътрудничество',
    'contacts.collab.text':      'Отворена за туристически партньорства, ресторантски препоръки, книжни и филмови колаборации и проекти, отговарящи на духа на това пространство.',
    'contacts.hello.label':      'Поздрав',
    'contacts.hello.text':       'Препоръка за дестинация? Книга, която задължително трябва да прочета? Ресторант, който не бива да пропускам? Обичам да чувам от хора, споделящи същото любопитство.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UIKey = keyof typeof ui[typeof defaultLang];
