import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import MessagingPricing from '../components/MessagingPricing';
import FeaturedSectors from '../components/FeaturedSectors';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

export default function LandingPage() {
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
