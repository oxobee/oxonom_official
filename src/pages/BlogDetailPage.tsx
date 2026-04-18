import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { blogPosts } from '../constants';
import { Share2, Clock, Eye, ArrowLeft, Calendar, FileText, Twitter, Linkedin, MessageCircle } from 'lucide-react';
import JsonLd from '../components/JsonLd';
import NotFoundPage from './NotFoundPage';

export default function BlogDetailPage() {
  const { slug } = useParams();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const post = blogPosts.find(p => p.slug === slug);

  // If post depends on slug and is not found, fallback to 404 handled gracefully.
  if (!post) {
    return <NotFoundPage />;
  }

  useSEO({
    title: `${post.title} | OXONOM Blog`,
    description: post.summary,
  });

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [
      post.image
    ],
    "datePublished": "2026-11-12T08:00:00+08:00",
    "dateModified": "2026-11-12T09:20:00+08:00",
    "author": [{
        "@type": "Person",
        "name": post.author.name,
        "url": "https://oxonom.com/hakkimizda"
      }]
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `OXONOM Blog: ${post.title}`;

  const toggleShareMenu = () => setShowShareMenu(!showShareMenu);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen relative">
      <JsonLd data={articleSchema} />

      {/* READING PROGRESS BAR (Decorative) */}
      <div className="fixed top-0 left-0 h-1 bg-brand w-full z-50 origin-left scale-x-0 animate-pulse" />

      <main className="max-w-3xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* BACK BUTTON */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand font-bold text-sm mb-12 transition-colors group">
           <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
           Blog'a Dön
        </Link>

        {/* HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
             <span className="px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-wider">
               {post.category}
             </span>
             <span className="text-gray-400 text-sm font-medium flex items-center gap-1.5">
               <Calendar className="w-4 h-4" /> {post.date}
             </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-dark leading-[1.1] mb-8 tracking-tight">
            {post.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium mb-10">
            {post.summary}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-y border-gray-100">
             <div className="flex items-center gap-4">
               <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full border-2 border-gray-100 p-1" />
               <div>
                  <div className="font-bold text-dark">{post.author.name}</div>
                  <div className="text-xs text-gray-500 font-medium">Yazar</div>
               </div>
             </div>
             
             <div className="flex items-center gap-6 text-sm font-bold text-gray-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gray-300" />
                  {post.readTime}
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-gray-300" />
                  {/* Gerçek okuma sayıları için API entegrasyonu yapılmalıdır. Şimdilik veri tabanından gelen post.viewCount gösteriliyor. */}
                  {(post.viewCount > 1000 ? (post.viewCount / 1000).toFixed(1) + 'k' : post.viewCount)}
                </div>
                <div className="relative">
                  <button onClick={toggleShareMenu} className="flex items-center gap-2 hover:text-brand transition-colors p-2 -m-2">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <AnimatePresence>
                    {showShareMenu && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                        className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-dark/10 p-2 z-50 flex flex-col gap-1"
                      >
                         <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-green-50 text-gray-600 hover:text-green-600 rounded-xl transition-colors font-bold text-xs">
                            <MessageCircle className="w-4 h-4" /> WhatsApp
                         </a>
                         <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-gray-600 hover:text-blue-500 rounded-xl transition-colors font-bold text-xs">
                            <Twitter className="w-4 h-4" /> Twitter / X
                         </a>
                         <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-gray-600 hover:text-blue-700 rounded-xl transition-colors font-bold text-xs">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                         </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
             </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="w-full mb-16 rounded-[2.5rem] bg-gray-50 relative overflow-hidden shadow-2xl shadow-dark/5 p-2 border border-gray-100">
           <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-auto rounded-[2rem]"
              onError={(e) => {
                 (e.target as HTMLImageElement).src = 'https://www.transparenttextures.com/patterns/carbon-fibre.png';
              }}
           />
        </div>

        {/* CONTENT */}
        <article 
          className="prose prose-lg md:prose-xl prose-gray max-w-none 
                    prose-headings:font-display prose-headings:font-bold prose-headings:text-dark
                    prose-p:text-gray-600 prose-p:leading-relaxed prose-p:font-medium
                    prose-a:text-brand prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-dark"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* FOOTER ACTIONS */}
        <footer className="mt-20 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-3 relative">
              <span className="text-sm font-bold text-gray-500">Bu makaleyi faydalı buldunuz mu?</span>
              <button onClick={toggleShareMenu} className="p-3 bg-gray-50 hover:bg-brand/10 text-gray-600 hover:text-brand rounded-full transition-colors relative z-10">
                 <Share2 className="w-5 h-5" />
              </button>
              
              <AnimatePresence>
                {showShareMenu && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    className="absolute left-0 bottom-full mb-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl shadow-dark/10 p-2 z-50 flex flex-col gap-1"
                  >
                     <a href={`https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-green-50 text-gray-600 hover:text-green-600 rounded-xl transition-colors font-bold text-xs">
                        <MessageCircle className="w-4 h-4" /> WhatsApp
                     </a>
                     <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-gray-600 hover:text-blue-500 rounded-xl transition-colors font-bold text-xs">
                        <Twitter className="w-4 h-4" /> Twitter / X
                     </a>
                     <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 hover:bg-blue-50 text-gray-600 hover:text-blue-700 rounded-xl transition-colors font-bold text-xs">
                        <Linkedin className="w-4 h-4" /> LinkedIn
                     </a>
                  </motion.div>
                )}
              </AnimatePresence>

           </div>
           <Link to="/blog" className="px-6 py-3 bg-dark text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-brand transition-colors">
              <FileText className="w-5 h-5" /> Diğer Yazıları Oku
           </Link>
        </footer>

      </main>
    </div>
  );
}
