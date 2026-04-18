import { useEffect } from 'react';

export function useSEO({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    // Sayfa başlığını (Title) güncelle
    document.title = title;
    
    // Meta Description etiketini güncelle
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', description);
      document.head.appendChild(metaDescription);
    }
  }, [title, description]);
}
