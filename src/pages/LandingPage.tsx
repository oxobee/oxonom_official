import { useSEO } from '../hooks/useSEO';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import MessagingPricing from '../components/MessagingPricing';
import FeaturedSectors from '../components/FeaturedSectors';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

export default function LandingPage() {
  useSEO({
    title: 'OXONOM | 7/24 Otonom Yapay Zeka Asistanları',
    description: "OXONOM'un insan doğallığındaki sesli ve yazılı AI asistanları ile müşteri iletişiminizi 7/24 otomatikleştirin ve satışlarınızı hızla ölçeklendirin.",
    canonical: '/',
    keywords: 'yapay zeka asistan, ai ajan, sesli asistan, chatbot, müşteri hizmetleri otomasyonu, çağrı merkezi yapay zeka, oxonom, otonom müşteri temsilcisi, whatsapp yapay zeka, instagram bot',
  });

  return (
    <main>
      <Hero />
      <ProductShowcase />
      <Features />
      <Pricing />
      <MessagingPricing />
      <FeaturedSectors />
      <HowItWorks />
      <CTASection />
    </main>
  );
}
