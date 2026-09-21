/**
 * Resolves static asset paths taking into account Vite's base path
 * (e.g. for GitHub Pages project sites hosted under /Ceylon-Tuk-Tuk-Tours/)
 */
export function getAssetPath(path: string | undefined | null): string {
  if (!path) return '';
  // Don't modify external URLs, protocol-relative URLs, or data URIs
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('//')
  ) {
    return path;
  }

  let base = '/Ceylon-Tuk-Tuk-Tours/';
  try {
    if (typeof import.meta !== 'undefined' && import.meta && import.meta.env && import.meta.env.BASE_URL) {
      base = import.meta.env.BASE_URL;
    }
  } catch {
    base = '/Ceylon-Tuk-Tuk-Tours/';
  }

  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const baseWithoutLeadingSlash = cleanBase.startsWith('/') ? cleanBase.slice(1) : cleanBase;

  // If already prefixed with base, return with leading slash
  if (cleanBase !== '/' && (path.startsWith(cleanBase) || path.startsWith(baseWithoutLeadingSlash))) {
    return path.startsWith('/') ? path : `/${path}`;
  }

  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

/**
 * Deeply transforms any string property in an object or array that looks like
 * a static asset path (e.g. logoUrl, heroImage, image, galleryImages) to
 * correctly include Vite's base path.
 */
export function resolveAssetPaths<T>(data: T): T {
  if (!data || typeof data !== 'object') return data;
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      data[i] = resolveAssetPaths(data[i]);
    }
    return data;
  }
  const obj = data as any;
  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === 'string') {
      if (
        (key === 'logoUrl' ||
          key === 'image' ||
          key === 'heroImage' ||
          key === 'src') &&
        (val.startsWith('/') || val.startsWith('images/') || val.startsWith('home.'))
      ) {
        obj[key] = getAssetPath(val);
      }
    } else if (Array.isArray(val)) {
      if (key === 'galleryImages' || key === 'images') {
        for (let i = 0; i < val.length; i++) {
          if (typeof val[i] === 'string') {
            val[i] = getAssetPath(val[i]);
          } else {
            val[i] = resolveAssetPaths(val[i]);
          }
        }
      } else {
        for (let i = 0; i < val.length; i++) {
          val[i] = resolveAssetPaths(val[i]);
        }
      }
    } else if (typeof val === 'object' && val !== null) {
      resolveAssetPaths(val);
    }
  }
  return data;
}

