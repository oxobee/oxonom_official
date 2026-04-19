import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-brand/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/logo_night.png" 
                alt="OXONOM Logo" 
                className="h-8 object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed font-medium max-w-sm">
              Yapay zeka teknolojileri ile işletmenizin iletişim süreçlerini dijitalleştiriyor, verimliliğinizi artırıyoruz. Geleceğin müşteri deneyimini bugünden sunun.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: 'https://instagram.com/oxonomturkiye' },
                { Icon: Facebook, href: 'https://facebook.com/oxonomturkiye' },
                { Icon: Twitter, href: 'https://x.com/oxonomturkiye' },
                { Icon: Youtube, href: 'https://youtube.com/@oxonomturkiye' }
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-brand hover:border-brand hover:-translate-y-1 transition-all duration-300 group backdrop-blur-sm">
                  <Icon className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-brand" /> HIZLI MENÜ
            </h4>
            <ul className="space-y-4">
              {['Ürün', 'Entegrasyonlar', 'Sektörler', 'Paketler', 'Mesajlaşma Paketleri', 'Blog'].map((item) => (
                <li key={item}>
                  <Link to={item === 'Paketler' ? '/paketler' : item === 'Mesajlaşma Paketleri' ? '/mesajlasma-paketleri' : item === 'Sektörler' ? '/sektorler' : item === 'Entegrasyonlar' ? '/entegrasyonlar' : item === 'Blog' ? '/blog' : '/'} className="text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-brand opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-blue-500" /> SEKTÖRLER
            </h4>
            <ul className="space-y-4">
              {['E-Ticaret', 'Sağlık', 'Eğitim', 'Finans', 'Lojistik'].map((item) => (
                <li key={item}>
                  <Link to="/sektorler" className="text-sm font-bold text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 text-blue-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-8 flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-green-500" /> İLETİŞİM
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand/20 group-hover:border-brand/30 transition-all duration-300 backdrop-blur-sm">
                  <Phone className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mb-1 tracking-wider">Telefon</p>
                  <p className="text-sm font-bold text-white group-hover:text-brand transition-colors">+90 850 309 99 01</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-300 backdrop-blur-sm">
                  <Mail className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase mb-1 tracking-wider">E-Posta</p>
                  <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">info@oxonom.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold text-gray-500">
            © {new Date().getFullYear()} OXONOM AI. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors">Gizlilik Politikası</a>
            <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors">Kullanım Şartları</a>
            <a href="#" className="text-xs font-bold text-gray-500 hover:text-white transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
