import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import JsonLd from './JsonLd';

const faqs = [
  {
    question: 'OXONOM yapay zeka ajanları nasıl çalışır?',
    answer: 'OXONOM, gelişmiş Doğal Dil İşleme (NLP) ve Büyük Dil Modelleri (LLM) kullanarak müşterilerinizle insan doğallığında iletişim kurar. Sektörünüze özel eğitilmiş modellerimiz, müşteri taleplerini anlar, sınıflandırır ve anında yanıtlar.'
  },
  {
    question: 'Kurulum süreci ne kadar sürüyor?',
    answer: 'Sektörünüze özel hazır şablonlarımız sayesinde temel kurulum dakikalar içinde tamamlanır. Özelleştirilmiş entegrasyonlar ve spesifik eğitim süreçleri ise işletmenizin ihtiyaçlarına göre birkaç gün içinde canlıya alınabilir.'
  },
  {
    question: 'Hangi platformlarla entegre çalışabilir?',
    answer: 'WhatsApp, Instagram, Telegram, web siteniz ve mevcut CRM/ERP sistemlerinizle (Salesforce, HubSpot, SAP vb.) sorunsuz entegre çalışır. Tüm kanalları tek bir merkezden yönetebilirsiniz.'
  },
  {
    question: 'Müşteri verilerimiz güvende mi?',
    answer: 'Evet. Tüm verileriniz uçtan uca şifreleme ile korunur ve KVKK/GDPR standartlarına tam uyumlu olarak işlenir. Verileriniz sadece sizin sistemlerinizde kalır ve 3. şahıslarla paylaşılmaz.'
  },
  {
    question: 'Canlı destek ekibimize nasıl aktarım yapılıyor?',
    answer: 'Yapay zeka ajanı, karmaşık veya duygusal hassasiyet gerektiren durumlarda görüşmeyi anında ve kesintisiz olarak (tüm konuşma geçmişiyle birlikte) yetkili canlı operatöre aktarır.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      <JsonLd data={faqSchema} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[100px] -mr-64 -mt-64 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-dark rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm"
          >
            <HelpCircle className="w-3.5 h-3.5 text-brand" />
            SIKÇA SORULAN SORULAR
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-dark mb-6 tracking-tight"
          >
            Aklınıza Takılanlar
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                openIndex === index ? 'border-brand/30 shadow-lg shadow-brand/5' : 'border-gray-200 shadow-sm hover:border-brand/30'
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
              >
                <span className="font-bold text-dark pr-8">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                  openIndex === index ? 'bg-brand text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-brand/10 group-hover:text-brand'
                }`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-gray-500 font-medium leading-relaxed border-t border-gray-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
