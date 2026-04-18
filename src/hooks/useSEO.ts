import { useEffect } from 'react';

export interface SEOProps {
  title: string;
  description: string;
  ogImage?: string;
  ogUrl?: string;
}

export function useSEO({ title, description, ogImage, ogUrl }: SEOProps) {
  useEffect(() => {
    // Sayfa başlığını (Title) güncelle
    document.title = title;
    
    // Helper function to set or create meta tags
    const setMetaTag = (selector: string, attribute: string, value: string, contentAttribute: string = 'content') => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, selector.match(/="([^"]+)"/)?.[1] || '');
        document.head.appendChild(tag);
      }
      tag.setAttribute(contentAttribute, value);
    };

    // Meta Description etiketini güncelle
    setMetaTag('meta[name="description"]', 'name', description);

    // Open Graph etiketleri
    setMetaTag('meta[property="og:title"]', 'property', title);
    setMetaTag('meta[property="og:description"]', 'property', description);
    
    if (ogImage) {
      // Ensure origin is attached for full path
      const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
      setMetaTag('meta[property="og:image"]', 'property', fullImageUrl);
    }
    
    if (ogUrl) {
      setMetaTag('meta[property="og:url"]', 'property', ogUrl);
    } else {
      setMetaTag('meta[property="og:url"]', 'property', window.location.href);
    }

    setMetaTag('meta[property="og:type"]', 'property', 'website');

  }, [title, description, ogImage, ogUrl]);
}
