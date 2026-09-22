/**
 * Resolves static asset paths taking into account Vite's base path and deployment target:
 * - On custom domain (ceylontuktuktours.com.lk) or localhost/preview -> root path (/images/...)
 * - On GitHub Pages project subpath (/Ceylon_Tuk_Tuk_Tours/) -> (/Ceylon_Tuk_Tuk_Tours/images/...)
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

  // Strip leading ./ or /
  let cleanPath = path.replace(/^\.?\//, '');

  // If path was already prefixed with Ceylon_Tuk_Tuk_Tours/, strip it so we don't duplicate
  if (cleanPath.startsWith('Ceylon_Tuk_Tuk_Tours/')) {
    cleanPath = cleanPath.slice('Ceylon_Tuk_Tuk_Tours/'.length);
  }

  // Determine runtime base path dynamically based on browser location
  if (typeof window !== 'undefined' && window.location && window.location.pathname) {
    if (window.location.pathname.startsWith('/Ceylon_Tuk_Tuk_Tours')) {
      return `/Ceylon_Tuk_Tuk_Tours/${cleanPath}`;
    }
    // Custom domain (ceylontuktuktours.com.lk), root domain, or local/preview
    return `/${cleanPath}`;
  }

  // Fallback for SSR or build-time evaluation
  return `./${cleanPath}`;
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

