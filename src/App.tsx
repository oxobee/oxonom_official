/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
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
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/sektorler" element={<SectorsPage />} />
            <Route path="/sektorler/:id" element={<SectorDetailPage />} />
            <Route path="/paketler" element={<PackagesPage />} />
            <Route path="/mesajlasma-paketleri" element={<MessagingPackagesPage />} />
            <Route path="/ses-paketleri" element={<VoicePackagesPage />} />
          </Routes>
        </div>
        <FAQ />
        <Footer />
      </div>
    </Router>
  );
}
