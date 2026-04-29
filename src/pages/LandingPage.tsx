import { useSEO } from '../hooks/useSEO';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import MessagingPricing from '../components/MessagingPricing';
import FeaturedSectors from '../components/FeaturedSectors';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';
import { useLocation } from 'react-router-dom';
import { getLangFromPath, landingUi, withLang } from '../lib/i18n';

export default function LandingPage() {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const copy = landingUi[lang];

  useSEO({
    title: copy.seoTitle,
    description: copy.seoDescription,
    canonical: withLang('/', lang),
    keywords: copy.seoKeywords,
  });

  return (
    <main>
      <Hero copy={copy} />
      <ProductShowcase copy={copy.product} />
      <Features />
      <Pricing />
      <MessagingPricing />
      <FeaturedSectors />
      <HowItWorks />
      <CTASection />
    </main>
  );
}
