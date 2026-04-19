import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import JsonLd from '../components/JsonLd';
import { 
  Puzzle, Globe, Zap, ArrowRight, MessageSquare, 
  Calendar, Box, ShoppingCart, CreditCard, ChevronRight, Layers, 
  Cloud, Smartphone, LayoutGrid
} from 'lucide-react';

const INTEGRATIONS = [
  // CRM
  { id: 'hubspot', name: 'HubSpot', category: 'CRM', icon: Cloud, bg: 'bg-[#ff7a59]/10', color: 'text-[#ff7a59]', desc: 'Müşteri adaylarını doğrudan HubSpot CRM sisteminize aktarır.' },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM', icon: Cloud, bg: 'bg-[#00a1e0]/10', color: 'text-[#00a1e0]', desc: 'Aramaları satış fırsatlarına dönüştürüp anından senkronize eder.' },
  { id: 'zoho', name: 'Zoho', category: 'CRM', icon: LayoutGrid, bg: 'bg-[#f43f5e]/10', color: 'text-rose-500', desc: 'Müşteri veritabanınızla gerçek zamanlı çift yönlü veri akışı.' },
  { id: 'pipedrive', name: 'Pipedrive', category: 'CRM', icon: Layers, bg: 'bg-[#000000]/5', color: 'text-dark', desc: 'Satış huninizi otonom aramalar ile besleyin ve analiz edin.' },
  // İletişim / Sosyal
  { id: 'whatsapp', name: 'WhatsApp', category: 'İletişim & Sosyal', icon: Smartphone, bg: 'bg-[#25D366]/10', color: 'text-[#25D366]', desc: 'Müşterilerinizle WP Business API üzerinden organik etkileşim kurun.' },
  { id: 'instagram', name: 'Instagram', category: 'İletişim & Sosyal', icon: Smartphone, bg: 'bg-[#E1306C]/10', color: 'text-[#E1306C]', desc: 'DM otomasyonlarıyla her mesaja 1 saniyede sesli/yazılı yanıt dönün.' },
  { id: 'telegram', name: 'Telegram', category: 'İletişim & Sosyal', icon: Smartphone, bg: 'bg-[#0088cc]/10', color: 'text-[#0088cc]', desc: 'Telegram kanallarınızda 7/24 aktif otonom asistan entegrasyonu.' },
  { id: 'messenger', name: 'Messenger', category: 'İletişim & Sosyal', icon: MessageSquare, bg: 'bg-[#00B2FF]/10', color: 'text-[#00B2FF]', desc: 'Facebook sayfalarınızın potansiyelini AI ile tam kapasite kullanın.' },
  // Takvim
  { id: 'calendly', name: 'Calendly', category: 'Takvim & Randevu', icon: Calendar, bg: 'bg-[#006BFF]/10', color: 'text-[#006BFF]', desc: 'Sesli asistan üzerinden gerçekleşen görüşmelerde otomatik randevu atar.' },
  { id: 'googlecalendar', name: 'Google Takvim', category: 'Takvim & Randevu', icon: Calendar, bg: 'bg-[#4285F4]/10', color: 'text-[#4285F4]', desc: 'Müsaitlik durumunuza göre otonom olarak slotlarınızı doldurur.' },
  { id: 'outlook', name: 'Outlook Takvim', category: 'Takvim & Randevu', icon: Calendar, bg: 'bg-[#0078D4]/10', color: 'text-[#0078D4]', desc: 'Microsoft ekosisteminizle çakışmasız randevu planlaması yapar.' },
  // E-Ticaret
  { id: 'shopify', name: 'Shopify', category: 'E-Ticaret', icon: ShoppingCart, bg: 'bg-[#96bf48]/10', color: 'text-[#96bf48]', desc: 'Sipariş durum sorgulama ve kargo takibini sesli otonoma bağlar.' },
  { id: 'woocommerce', name: 'WooCommerce', category: 'E-Ticaret', icon: Box, bg: 'bg-[#96588a]/10', color: 'text-[#96588a]', desc: 'WP sitenize anında entegre olarak 7/24 müşteri desteği sağlar.' },
  { id: 'ticimax', name: 'Ticimax', category: 'E-Ticaret', icon: ShoppingCart, bg: 'bg-brand/10', color: 'text-brand', desc: 'Türk e-ticaret altyapılarına özel hızlı sipariş senkronizasyonu.' },
  { id: 'ideasoft', name: 'IdeaSoft', category: 'E-Ticaret', icon: Box, bg: 'bg-orange-500/10', color: 'text-orange-500', desc: 'Katalog yönetiminden iade süreçlerine kadar tam otonom destek.' },
  // Diğer (Payment, Webhooks)
  { id: 'zapier', name: 'Zapier', category: 'Diğer', icon: Zap, bg: 'bg-[#FF4A00]/10', color: 'text-[#FF4A00]', desc: '5,000+ fazla uygulama ile hiçbir kod yazmadan entegre olun.' },
  { id: 'make', name: 'Make.com', category: 'Diğer', icon: Globe, bg: 'bg-[#7324B8]/10', color: 'text-[#7324B8]', desc: 'Görsel iş akışlarıyla kendi özel otonom senaryolarınızı yaratın.' },
  { id: 'stripe', name: 'Stripe', category: 'Diğer', icon: CreditCard, bg: 'bg-[#635BFF]/10', color: 'text-[#635BFF]', desc: 'Sesli asistan aracılığıyla güvenli tahsilat ve abonelik yönetimi.' },
  { id: 'iyzico', name: 'İyzico', category: 'Diğer', icon: CreditCard, bg: 'bg-[#142850]/10', color: 'text-[#142850]', desc: 'Yerel ödeme altyapıları ile tam uyumlu finansal operasyonlar.' },
];

const CATEGORIES = ['Tümü', ...Array.from(new Set(INTEGRATIONS.map(i => i.category)))];

export default function IntegrationsPage() {
  useSEO({
    title: 'Entegrasyonlar | Kullandığınız Tüm Araçlarla Tam Uyumlu OXONOM AI',
    description: 'OXONOM yapay zeka asistanları; mevcut CRM, Takvim, İletişim ve E-Ticaret sistemlerinizle (WhatsApp, HubSpot, Calendly vb.) pürüzsüz entegre çalışır.',
  });

  const [activeCategory, setActiveCategory] = useState('Tümü');

  const filteredIntegrations = INTEGRATIONS.filter(item => 
    activeCategory === 'Tümü' || item.category === activeCategory
  );

  return (
    <div className="pt-24 bg-white min-h-screen relative overflow-hidden">
      
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Entegrasyonlar - OXONOM AI",
        "description": "Yapay zeka asistanlarınızın dünyadaki diğer tüm lider yazılımlarla nasıl sorunsuz birleştiğini keşfedin."
      }} />

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden pointer-events-none">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[80%] bg-brand/5 blur-[120px] rounded-full"></div>
         <div className="absolute top-[10%] right-[-10%] w-[40%] h-[60%] bg-blue-500/5 blur-[100px] rounded-full"></div>
         {/* Animated grid overlay */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 pb-24">
        
        {/* HERO SECTION */}
        <div className="text-center pt-16 pb-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-100 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Puzzle className="w-4 h-4" /> KUSURSUZ UYUM
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-display font-bold text-dark mb-6 leading-tight tracking-tight"
          >
            Şimdiye kadar kullandığınız <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-blue-600">tüm araçlarla</span> birlikte çalışır.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10"
          >
            Mevcut iş akışlarınızı bozmanıza gerek yok. OXONOM yapay zeka ajanları, saniyeler içerisinde kullandığınız tüm altyapılara bağlanarak verilerinizi iki yönlü senkronize eder.
          </motion.p>
        </div>

        {/* INTERACTIVE CATEGORY TABS */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-16"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-dark text-white shadow-lg shadow-dark/10 scale-105'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-dark hover:border-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* INTEGRATIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredIntegrations.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  key={item.id}
                  className="group bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:shadow-dark/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark mb-2">{item.name}</h3>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-3">{item.category}</div>
                  <p className="text-sm text-gray-500 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

        {/* CUSTOM API CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 bg-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-dark/20"
        >
          {/* Decorative background */}
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden md:block">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M 0 0 C 100 0, 200 100, 200 200 C 200 300, 100 400, 0 400 L 400 400 L 400 0 Z" fill="currentColor" className="text-white"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-white rounded-lg text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
              <Zap className="w-4 h-4 text-brand" /> GELİŞTİRİCİ DOSTU
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Kendi Yazılımınızı <br/><span className="text-gray-400">OXONOM'a Bağlayın</span>
            </h2>
            <p className="text-gray-300 font-medium text-lg mb-8 leading-relaxed">
              Aradığınız entegrasyon listede yok mu? Özel geliştirilmiş API ve Webhook altyapımızla kendi yerel CRM veya ERP sisteminizi dakikalar içinde entegre edin.
            </p>
            <Link to="/hakkimizda" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-white text-dark font-bold rounded-2xl hover:bg-brand hover:text-white transition-all transform hover:scale-105">
              Geliştirici Dokümanları <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Code syntax visual impact */}
          <div className="relative z-10 w-full md:w-auto flex-1 hidden lg:block">
            <div className="bg-black/50 border border-white/10 p-6 rounded-2xl font-mono text-xs text-gray-300 shadow-2xl backdrop-blur-md">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <pre className="overflow-x-auto text-left">
                <code className="block mb-2"><span className="text-brand">POST</span> /api/v1/agent/action</code>
                <code className="block mb-1 text-blue-400">&#123;</code>
                <code className="block mb-1 text-gray-300">  "event": <span className="text-green-400">"call_ended"</span>,</code>
                <code className="block mb-1 text-gray-300">  "data": &#123;</code>
                <code className="block mb-1 text-gray-300">    "lead_id": <span className="text-green-400">"8f2a-4bc1"</span>,</code>
                <code className="block mb-1 text-gray-300">    "status": <span className="text-green-400">"appointment_booked"</span></code>
                <code className="block mb-1 text-gray-300">  &#125;</code>
                <code className="block text-blue-400">&#125;</code>
              </pre>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
