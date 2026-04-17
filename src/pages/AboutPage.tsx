import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import JsonLd from '../components/JsonLd';

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Oxonom Hakkımızda",
    "description": "Oxonom, işletmelerin iletişim, operasyon ve büyüme süreçlerini yeniden tanımlayan, yapay zekâ odaklı global bir teknoloji şirketidir.",
    "url": "https://oxonom.com/hakkimizda",
    "inLanguage": "tr"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-gray-50 py-16 px-4 md:px-8 lg:px-12 flex flex-col items-center"
    >
      <JsonLd data={aboutSchema} />
      <article className="prose prose-lg max-w-4xl text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-8">Hakkımızda</h1>
        <p>Oxonom, işletmelerin iletişim, operasyon ve büyüme süreçlerini yeniden tanımlayan, yapay zekâ odaklı global bir teknoloji şirketidir. İleri düzey yapay zekâ teknolojilerini sektörel içgörülerle birleştirerek, markaların dünya standartlarında, kesintisiz ve akıllı müşteri deneyimleri sunmasını sağlar.</p>
        <p>Dijitalleşmenin hız kazandığı günümüzde rekabet; hız, doğruluk ve erişilebilirlik üzerine kuruludur. Oxonom, yalnızca chatbot çözümleri sunan bir yapı değil; konuşma tabanlı yapay zekâ, sesli asistanlar, otomasyon altyapıları ve sektörlere özel geliştirilen akıllı sistemlerden oluşan kapsamlı bir ekosistem sunar. Geliştirdiğimiz teknolojiler, bağlamı anlayan, doğal iletişim kurabilen ve gerçek zamanlı aksiyon alabilen insan benzeri etkileşimler sağlar.</p>
        <p>Platformumuz sayesinde işletmeler; WhatsApp, Instagram, web sitesi ve diğer tüm iletişim kanallarını tek bir merkezden yönetebilir. Bununla birlikte, yapay zekâ destekli sesli çözümlerimiz gelen ve giden çağrıları yönetir, randevu oluşturur, sipariş süreçlerini takip eder ve müşteri iletişimini proaktif şekilde yürütür.</p>
        <p>Oxonom’un en güçlü yönlerinden biri, sürekli gelişen teknolojiye hızla adapte olan ve inovasyonu merkeze alan yapısıdır. Sadece mevcut ihtiyaçlara çözüm üretmekle kalmaz, aynı zamanda farklı sektörlerin dinamiklerine özel yeni nesil yapay zekâ ürünleri geliştirir. Sağlık, e‑ticaret, perakende ve hizmet sektörleri başta olmak üzere birçok alana özel, ölçeklenebilir ve yüksek performanslı çözümler sunar.</p>
        <p>İletişim teknolojilerinin ötesinde, e‑ticaret ve tekstil sektörüne yönelik geliştirdiğimiz yapay zekâ destekli görselleştirme sistemleri ile ürünlerinizi dijital modeller üzerinde gerçekçi şekilde sunabilir, profesyonel fotoğraf ve video içeriklerini hızlı ve düşük maliyetle üretebilirsiniz.</p>
        <p>Vizyonumuz; işletmelerin insan gücüne dayalı süreçlerini akıllı sistemlerle güçlendirerek daha verimli, ölçeklenebilir ve global ölçekte rekabet edebilir yapılar oluşturmasını sağlamaktır. Misyonumuz ise, her ölçekte işletmenin erişebileceği güçlü, esnek ve sürekli gelişen yapay zekâ çözümleri sunarak dijital dönüşümü hızlandırmaktır.</p>
        <p><strong>Anahtar Kelimeler:</strong> yapay zekâ çözümleri, konuşma tabanlı AI, sesli yapay zekâ asistanı, iş süreçleri otomasyonu, müşteri deneyimi yönetimi, çok kanallı iletişim, sektör bazlı AI çözümleri, e‑ticaret görselleştirme, ölçeklenebilir yapay zekâ sistemleri</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 mt-12">
          <Link to="/" className="px-6 py-3 bg-brand text-white rounded-full font-semibold hover:bg-dark transition-colors text-center">
            Ana Sayfa
          </Link>
          <Link to="/paketler" className="px-6 py-3 bg-gray-200 text-brand rounded-full font-semibold hover:bg-gray-300 transition-colors text-center">
            Paketler
          </Link>
        </div>
      </article>
    </motion.div>
  );
}
