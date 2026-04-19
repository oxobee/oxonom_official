import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { blogPosts } from '../constants';
import { Search, Eye, Clock, ArrowRight, Sparkles, Navigation } from 'lucide-react';
import JsonLd from '../components/JsonLd';

export default function BlogPage() {
  useSEO({
    title: 'OXONOM Blog | Yapay Zekâ ve İletişim Teknolojileri',
    description: 'Yapay zekâ destekli müşteri iletişimi, çağrı merkezi otomasyonu ve omnichannel pazarlama trendleri hakkında güncel yazılarımızı okuyun.',
  });

  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Tümü', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = [...blogPosts].reverse().filter(post => {
    const matchesCategory = activeCategory === 'Tümü' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen relative">
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "OXONOM Blog",
        "url": "https://oxonom.com/blog",
        "description": "Yapay zekâ ve otonom teknolojiler hakkında en güncel makaleler."
      }} />

      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-brand/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-brand rounded-full text-xs font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <Sparkles className="w-4 h-4" />
            OXONOM INSIGHTS
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-dark mb-6 tracking-tight"
          >
            Geleceğin İletişimini <br className="hidden md:block"/> Keşfedin
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg font-medium"
          >
            Yapay zekâ, otomasyon, büyüme stratejileri ve çok daha fazlası.
          </motion.p>
        </div>

        {/* FEATURED POST ALANINI KALDIRDIK - İSTEK ÜZERİNE */}

        {/* FILTERS & SEARCH */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Scrollable Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeCategory === category 
                    ? 'bg-dark text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Makalelerde ara..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl outline-none focus:border-brand focus:ring-4 focus:ring-brand/10 transition-all text-sm font-medium"
            />
          </div>
        </div>

        {/* REGULAR POSTS GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/${post.categorySlug}/${post.slug}`} className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-dark/5 transition-all duration-300 h-full">
                    <div className="bg-dark/5 relative overflow-hidden flex items-center justify-center border-b border-gray-100 p-2 aspect-video">
                       {/* 1920x1080 aspect ratio uncropped dynamic image */}
                       <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-full h-full object-contain rounded-[2px]"
                       />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                         <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                           {post.category}
                         </span>
                         <span className="flex items-center gap-1.5 text-xs font-bold text-gray-400">
                           <Eye className="w-3.5 h-3.5" /> {(post.viewCount / 1000).toFixed(1)}k
                         </span>
                      </div>
                      <h3 className="text-xl font-bold text-dark leading-snug mb-3 group-hover:text-brand transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                        {post.summary}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-gray-800">{post.author.name}</span>
                         </div>
                         <span className="text-[11px] font-medium text-gray-400 flex items-center gap-1">
                           <Clock className="w-3 h-3" /> {post.readTime}
                         </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-2">Sonuç Bulunamadı</h3>
            <p className="text-gray-500">Arama kriterlerinize uygun bir makale bulamadık.</p>
          </div>
        )}

      </div>
    </div>
  );
}
