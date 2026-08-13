/**
 * Image sources.
 *
 * Every photograph used in the product is declared here, once, with the alt
 * text it ships with. Swapping in licensed brand photography is a single-file
 * change — no component references a URL directly.
 *
 * NOTE FOR PRODUCTION: these are Unsplash photographs, hotlinked from
 * images.unsplash.com. They are free to use under the Unsplash License, but a
 * third-party CDN with no SLA is not something to depend on in production.
 * Before launch, replace `SOURCES` with self-hosted, art-directed assets from
 * a shoot the hospital owns the rights to. The `img()` helper's contract
 * (width-based srcset, AVIF/WebP negotiation) is what the components rely on,
 * so a local pipeline can be dropped in behind it unchanged.
 *
 * People shown are stock models, not actual clinicians or patients of any
 * hospital. All names, credentials and quotes in this product are fictional
 * demo content — see `src/data/`.
 */

const CDN = 'https://images.unsplash.com';
const PEXELS_CDN = 'https://images.pexels.com/photos';

/**
 * Widths we actually render at, across all breakpoints. The top two exist for
 * high-DPI displays: a card that occupies 11vw still needs ~1600 real pixels
 * to look sharp on a 3x phone, and the clinician portraits are the one place
 * on the page where softness reads as cheap.
 */
const SRCSET_WIDTHS = [320, 480, 640, 960, 1280, 1600, 1920];

/**
 * Build a single Unsplash source URL.
 * `fm=auto` lets the CDN negotiate AVIF/WebP; `fit=crop` with an explicit
 * aspect keeps art direction stable instead of letting the browser letterbox.
 *
 * `crop` is per-image, not global: face detection is right for a portrait but
 * wrong for a still life or an interior, where it finds nothing and falls back
 * to a centre crop that can cut the subject. Portraits opt into `faces`.
 */
function unsplashSrc(id, { w = 800, ar, q = 72, crop = 'entropy' } = {}) {
  const params = new URLSearchParams({
    w: String(w),
    q: String(q),
    fm: 'auto',
    fit: 'crop',
    crop,
    auto: 'format',
  });
  if (ar) params.set('ar', ar);
  return `${CDN}/${id}?${params.toString()}`;
}

/**
 * Build a single Pexels source URL.
 *
 * Pexels serves the clinician portraits (see SOURCES) because its free library
 * carries properly art-directed studio work at 4K+ — the Unsplash equivalents
 * were a grab-bag of mismatched backdrops and other clinics' embroidered
 * branding, which is what made the team grid look like cheap stock.
 *
 * Two quirks of this CDN shape the code: it ignores `crop`/`fp-*` entirely
 * (so framing is always a centre crop — every portrait here was checked at its
 * rendered aspect to confirm the face survives it), and it ignores `q` (so
 * sharpness is bought with width, via SRCSET_WIDTHS, not a quality knob).
 * `ar` is converted to an explicit `h` because it has no aspect parameter.
 */
function pexelsSrc(id, { w = 800, ar } = {}) {
  const params = new URLSearchParams({
    auto: 'compress',
    cs: 'tinysrgb',
    fit: 'crop',
    w: String(w),
  });
  if (ar) {
    const [wRatio, hRatio] = ar.split('/').map(Number);
    params.set('h', String(Math.round((w * hRatio) / wRatio)));
  }
  return `${PEXELS_CDN}/${id}/pexels-photo-${id}.jpeg?${params.toString()}`;
}

/** Dispatch to the right CDN for an entry. */
function src(entry, { w, ar, q } = {}) {
  return entry.provider === 'pexels'
    ? pexelsSrc(entry.id, { w, ar })
    : unsplashSrc(entry.id, { w, ar, q: q ?? entry.q, crop: entry.crop ?? 'entropy' });
}

/** Build a width-descriptor srcset for responsive selection. */
function srcSet(entry, { ar, q } = {}) {
  return SRCSET_WIDTHS.map((w) => `${src(entry, { w, ar, q })} ${w}w`).join(', ');
}

/**
 * Public accessor. Returns everything an <img> needs, including intrinsic
 * dimensions so the browser reserves space and the page never shifts.
 */
export function img(key, { ar = '4/3', sizes = '100vw', q } = {}) {
  const entry = SOURCES[key];
  if (!entry) throw new Error(`Unknown image key: ${key}`);
  const [wRatio, hRatio] = ar.split('/').map(Number);
  return {
    src: src(entry, { w: 960, ar, q }),
    srcSet: srcSet(entry, { ar, q }),
    sizes,
    alt: entry.alt,
    width: 960,
    height: Math.round((960 * hRatio) / wRatio),
  };
}

const SOURCES = {
  /* --- Hero & about ---------------------------------------------------- */
  heroClinician: {
    id: 'photo-1651008376811-b90baee60c1f',
    alt: 'Smiling physician in a white coat with a stethoscope.',
    crop: 'faces,entropy',
  },
  careTeam: {
    id: 'photo-1666214280391-8ff5bd3c0bf0',
    alt: 'Two clinicians reviewing diagnostic imaging together on a monitor.',
  },
  emergencyEntrance: {
    id: 'photo-1587351021759-3e566b6af7cc',
    alt: 'Hospital emergency department entrance, open and clearly signposted.',
  },

  /* --- Specialists ------------------------------------------------------ */
  drCardiology: {
    id: 'photo-1594824476967-48c8b964273f',
    alt: 'Portrait of a cardiologist in teal scrubs.',
    crop: 'faces,entropy',
  },
  drNeurology: {
    id: 'photo-1622902046580-2b47f47f5471',
    alt: 'Portrait of a neurologist in a white coat, arms folded.',
    crop: 'faces,entropy',
  },
  drOrthopedics: {
    id: 'photo-1622253692010-333f2da6031d',
    alt: 'Portrait of an orthopedic surgeon in blue scrubs.',
    crop: 'faces,entropy',
  },
  drObgyn: {
    id: 'photo-1559839734-2b71ea197ec2',
    alt: 'Portrait of an obstetrician-gynecologist in a white coat.',
    crop: 'faces,entropy',
  },

  /* --- Patient stories -------------------------------------------------- */
  storyCardiac: {
    id: 'photo-1472099645785-5658abf4ff4e',
    alt: 'Portrait of an older man wearing glasses, smiling.',
  },
  storyOrtho: {
    id: 'photo-1544005313-94ddf0286df2',
    alt: 'Portrait of a woman with long hair, smiling.',
  },
  storyOncology: {
    id: 'photo-1607746882042-944635dfe10e',
    alt: 'Portrait of a woman with dark hair against a dark background.',
  },

  /* --- Testimonial avatars ---------------------------------------------- */
  avatarMale: { id: 'photo-1500648767791-00dcc994a43e', alt: '' },
  avatarFemale: { id: 'photo-1494790108377-be9c29b29330', alt: '' },
  avatarYoung: { id: 'photo-1438761681033-6461ffad8d80', alt: '' },

  /* --- Editorial -------------------------------------------------------- */
  articleHeart: {
    id: 'photo-1505751172876-fa1923c5c528',
    alt: 'A stethoscope resting on a pale surface.',
  },
  articleNutrition: {
    id: 'photo-1512621776951-a57141f2eefd',
    alt: 'A bowl of fresh vegetables, chickpeas and avocado.',
  },
  articleStress: {
    id: 'photo-1506126613408-eca07ce68773',
    alt: 'A person sitting cross-legged in silhouette at sunrise.',
  },
};

export const IMAGE_KEYS = Object.keys(SOURCES);
