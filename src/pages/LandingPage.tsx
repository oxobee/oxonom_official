import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import Features from '../components/Features';
import FeaturedSectors from '../components/FeaturedSectors';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import CTASection from '../components/CTASection';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <Features />
      <Pricing />
      <FeaturedSectors />
      <HowItWorks />
      <CTASection />
    </main>
  );
}
