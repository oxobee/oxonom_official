/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NotFoundPage from './pages/NotFoundPage';
import JsonLd from './components/JsonLd';
import LandingPage from './pages/LandingPage';
import SectorsPage from './pages/SectorsPage';
import SectorDetailPage from './pages/SectorDetailPage';
import PackagesPage from './pages/PackagesPage';
import MessagingPackagesPage from './pages/MessagingPackagesPage';
import VoicePackagesPage from './pages/VoicePackagesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

export default function App() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OXONOM AI",
    "url": "https://oxonom.com",
    "logo": "https://oxonom.com/logo_white.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+90-850-309-99-01",
      "contactType": "customer service",
      "email": "info@oxonom.com",
      "areaServed": "TR",
      "availableLanguage": "Turkish"
    },
    "sameAs": [
      "https://www.facebook.com/oxonom",
      "https://twitter.com/oxonom",
      "https://www.instagram.com/oxonom",
      "https://www.linkedin.com/company/oxonom"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "OXONOM AI",
    "url": "https://oxonom.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://oxonom.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Router>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sektorler" element={<SectorsPage />} />
            <Route path="/sektorler/:id" element={<SectorDetailPage />} />
            <Route path="/paketler" element={<PackagesPage />} />
            <Route path="/hakkimizda" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/:categorySlug/:slug" element={<BlogDetailPage />} />
            <Route path="/mesajlasma-paketleri" element={<MessagingPackagesPage />} />
            <Route path="/ses-paketleri" element={<VoicePackagesPage />} />
            
            {/* Catch-all route for unhandled paths -> 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}
