import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: 'website' | 'article';
  keywords?: string;
  canonical?: string;
  /** Article-specific: ISO date string */
  publishedTime?: string;
  /** Article-specific: ISO date string */
  modifiedTime?: string;
  /** Article-specific author */
  author?: string;
  /** Article category/section */
  section?: string;
  /** JSON-LD schema object to inject (stringified into <script type="application/ld+json">) */
  schema?: Record<string, any>;
}

const SITE_URL = 'https://oxonom.com';
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

/**
 * useSEO — Dynamically injects all critical SEO, OG, Twitter and canonical tags.
 * Also updates the <html lang> and injects optional JSON-LD schema.
 */
export function useSEO({
  title,
  description,
  ogImage,
  ogUrl,
  ogType = 'website',
  keywords,
  canonical,
  publishedTime,
  modifiedTime,
  author,
  section,
  schema,
}: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes('OXONOM') ? title : `${title} | OXONOM AI`;
    const fullCanonical = canonical
      ? (canonical.startsWith('http') ? canonical : `${SITE_URL}${canonical}`)
      : window.location.href.split('?')[0];
    const fullOgUrl = ogUrl
      ? (ogUrl.startsWith('http') ? ogUrl : `${SITE_URL}${ogUrl}`)
      : fullCanonical;
    const fullOgImage = ogImage
      ? (ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`)
      : DEFAULT_OG_IMAGE;

    // ── Title ─────────────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Helper ────────────────────────────────────────────────────────────
    const setMeta = (selector: string, attrKey: string, attrVal: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // ── Standard meta ─────────────────────────────────────────────────────
    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    if (keywords) setMeta('meta[name="keywords"]', 'name', 'keywords', keywords);
    if (author) setMeta('meta[name="author"]', 'name', 'author', author);

    // ── Canonical ─────────────────────────────────────────────────────────
    setLink('canonical', fullCanonical);

    // ── Open Graph ────────────────────────────────────────────────────────
    setMeta('meta[property="og:title"]', 'property', 'og:title', fullTitle);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMeta('meta[property="og:url"]', 'property', 'og:url', fullOgUrl);
    setMeta('meta[property="og:image"]', 'property', 'og:image', fullOgImage);
    setMeta('meta[property="og:image:width"]', 'property', 'og:image:width', '1200');
    setMeta('meta[property="og:image:height"]', 'property', 'og:image:height', '630');
    setMeta('meta[property="og:locale"]', 'property', 'og:locale', 'tr_TR');
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'OXONOM AI');

    if (ogType === 'article') {
      if (publishedTime) setMeta('meta[property="article:published_time"]', 'property', 'article:published_time', publishedTime);
      if (modifiedTime) setMeta('meta[property="article:modified_time"]', 'property', 'article:modified_time', modifiedTime);
      if (author) setMeta('meta[property="article:author"]', 'property', 'article:author', author);
      if (section) setMeta('meta[property="article:section"]', 'property', 'article:section', section);
    }

    // ── Twitter Card ──────────────────────────────────────────────────────
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', fullTitle);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', fullOgImage);
    setMeta('meta[name="twitter:site"]', 'name', 'twitter:site', '@oxonom');

    // ── JSON-LD Schema ────────────────────────────────────────────────────
    if (schema) {
      const scriptId = 'page-jsonld';
      let script = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }

  }, [title, description, ogImage, ogUrl, ogType, keywords, canonical, publishedTime, modifiedTime, author, section, schema]);
}
