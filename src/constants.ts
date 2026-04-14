import { 
  ShoppingBag, 
  Stethoscope, 
  Building2, 
  Plane, 
  Utensils, 
  GraduationCap, 
  Truck, 
  Cpu, 
  Phone, 
  ShieldCheck, 
  Car, 
  Users, 
  Landmark, 
  Tv, 
  Store, 
  Gavel, 
  Zap, 
  Gamepad2, 
  Megaphone, 
  Briefcase,
  Activity
} from 'lucide-react';

export const pricing = {
  payAsYouGo: {
    name: 'Kullandıkça Öde',
    price: '$1,10',
    unit: 'Dakika',
    description: 'Faturasız Tarife'
  },
  packages: [
    {
      id: 'mini',
      name: 'Mini',
      minutes: '100',
      pricePerMin: '$0,90',
      totalPrice: '$90',
      icon: '1'
    },
    {
      id: 'standart',
      name: 'Standart',
      minutes: '200',
      pricePerMin: '$0,75',
      totalPrice: '$150',
      icon: '2'
    },
    {
      id: 'bronz',
      name: 'Bronz',
      minutes: '500',
      pricePerMin: '$0,60',
      totalPrice: '$300',
      icon: '3'
    },
    {
      id: 'gumus',
      name: 'Gümüş',
      minutes: '1.000',
      pricePerMin: '$0,50',
      totalPrice: '$500',
      icon: '4'
    },
    {
      id: 'altin',
      name: 'Altın',
      minutes: '2.000',
      pricePerMin: '$0,40',
      totalPrice: '$800',
      icon: '5'
    },
    {
      id: 'platin',
      name: 'Platin',
      minutes: '5.000',
      pricePerMin: '$0,30',
      totalPrice: '$1.500',
      icon: '6'
    },
    {
      id: 'elite',
      name: 'Elite (Max)',
      minutes: '10.000',
      pricePerMin: '$0,20',
      totalPrice: '$2.000',
      icon: '7'
    }
  ],
  notes: [
    'Kullanılmayan dakikalar: Bir sonraki aya %20\'si devreder.'
  ]
};

export const sectors = [
  {
    id: 'e-ticaret',
    name: 'E-Ticaret',
    icon: ShoppingBag,
    description: '7/24 sipariş takibi ve müşteri desteği ile satışlarınızı artırın.',
    longDescription: 'E-ticaret dünyasında hız her şeydir. OXONOM AI ajanları, müşterilerinizin sipariş durumlarını anlık olarak sorgular, iade süreçlerini yönetir ve sepet terk oranlarını düşürmek için kişiselleştirilmiş teklifler sunar.',
    useCases: ['Sipariş Durumu Sorgulama', 'İade ve Değişim Süreçleri', 'Kişiselleştirilmiş Ürün Önerileri'],
    seoKeywords: ['e-ticaret yapay zeka', 'ai müşteri hizmetleri', 'otomatik sipariş takibi'],
    stats: { conversion: '%35 Artış', responseTime: '< 2 Saniye' },
    chartData: [
      { name: 'Pzt', value: 400 },
      { name: 'Sal', value: 300 },
      { name: 'Çar', value: 600 },
      { name: 'Per', value: 800 },
      { name: 'Cum', value: 500 },
      { name: 'Cmt', value: 900 },
      { name: 'Paz', value: 1100 }
    ]
  },
  {
    id: 'saglik',
    name: 'Sağlık',
    icon: Stethoscope,
    description: 'Randevu yönetimi ve hasta bilgilendirme süreçlerini dijitalleştirin.',
    longDescription: 'Sağlık sektöründe güven ve hız bir aradadır. AI ajanlarımız hastalarınızın randevularını organize eder, tahlil sonuçları hakkında bilgi verir ve tedavi sonrası takip süreçlerini otomatikleştirerek klinik verimliliğini artırır.',
    useCases: ['Online Randevu Alımı', 'Tahlil Sonucu Bilgilendirme', 'Nöbetçi Eczane Sorgulama'],
    seoKeywords: ['sağlık sektörü ai', 'hastane randevu otomasyonu', 'medikal yapay zeka'],
    stats: { conversion: '%50 Verimlilik', responseTime: 'Anlık' },
    chartData: [
      { name: 'Hafta 1', value: 200 },
      { name: 'Hafta 2', value: 450 },
      { name: 'Hafta 3', value: 300 },
      { name: 'Hafta 4', value: 700 }
    ]
  },
  {
    id: 'finans',
    name: 'Finans & Bankacılık',
    icon: Landmark,
    description: 'Güvenli işlem ve anlık finansal destek ile müşteri sadakatini güçlendirin.',
    longDescription: 'Finansal işlemlerde doğruluk ve güvenlik esastır. OXONOM, karmaşık finansal sorguları yanıtlar, kredi hesaplamaları yapar ve şüpheli işlemleri anında tespit ederek hem bankayı hem müşteriyi korur.',
    useCases: ['Kredi Hesaplama', 'Döviz Kuru Bilgisi', 'Şüpheli İşlem Bildirimi'],
    seoKeywords: ['finansal ai', 'bankacılık otomasyonu', 'yapay zeka yatırım danışmanı'],
    stats: { conversion: '%25 Güven Artışı', responseTime: '< 1 Saniye' },
    chartData: [
      { name: 'Ocak', value: 1000 },
      { name: 'Şubat', value: 1200 },
      { name: 'Mart', value: 1100 },
      { name: 'Nisan', value: 1500 }
    ]
  },
  {
    id: 'gayrimenkul',
    name: 'Gayrimenkul',
    icon: Building2,
    description: 'Portföy sunumu ve randevu otomasyonu ile satış sürecini hızlandırın.',
    longDescription: 'Emlak piyasasında doğru zamanda doğru bilgiye ulaşmak kritik önem taşır. AI ajanlarımız portföyünüzdeki mülkleri tanıtır, sanal tur randevuları oluşturur ve potansiyel alıcıların sorularını 7/24 yanıtlar.',
    useCases: ['Emlak Portföy Sorgulama', 'Ekspertiz Randevusu', 'Sanal Tur Planlama'],
    seoKeywords: ['emlak ai', 'gayrimenkul satış otomasyonu', 'yapay zeka emlakçı'],
    stats: { conversion: '%40 Daha Fazla Lead', responseTime: '7/24' },
    chartData: [
      { name: 'Q1', value: 300 },
      { name: 'Q2', value: 500 },
      { name: 'Q3', value: 400 },
      { name: 'Q4', value: 800 }
    ]
  },
  {
    id: 'turizm',
    name: 'Turizm & Otelcilik',
    icon: Plane,
    description: 'Rezervasyon ve misafir ilişkileri yönetimi ile kusursuz bir deneyim sunun.',
    longDescription: 'Misafirleriniz tatil planlarken beklemek istemez. AI ajanlarımız rezervasyonları yönetir, check-in süreçlerini hızlandırır ve otel içi hizmetler hakkında anlık bilgi vererek misafir memnuniyetini zirveye taşır.',
    useCases: ['Otel Rezervasyonu', 'Check-in/Check-out İşlemleri', 'Tur ve Aktivite Bilgisi'],
    seoKeywords: ['otel ai', 'turizm otomasyonu', 'yapay zeka rezervasyon'],
    stats: { conversion: '%30 Rezervasyon Artışı', responseTime: 'Global' },
    chartData: [
      { name: 'Haz', value: 600 },
      { name: 'Tem', value: 950 },
      { name: 'Ağu', value: 1100 },
      { name: 'Eyl', value: 700 }
    ]
  },
  {
    id: 'restoran',
    name: 'Restoran & Yeme-İçme',
    icon: Utensils,
    description: 'Sipariş ve masa rezervasyon otomasyonu ile operasyonunuzu hafifletin.',
    longDescription: 'Yoğun saatlerde telefonlara yetişmek zordur. Sesli ve yazılı AI ajanlarımız siparişleri alır, masa rezervasyonlarını organize eder ve menü değişikliklerini anında müşterilere yansıtır.',
    useCases: ['Online Yemek Siparişi', 'Masa Rezervasyonu', 'Menü ve Fiyat Bilgisi'],
    seoKeywords: ['restoran ai', 'yemek sipariş otomasyonu', 'yapay zeka garson'],
    stats: { conversion: '%20 Operasyonel Tasarruf', responseTime: 'Hızlı' },
    chartData: [
      { name: 'Öğle', value: 200 },
      { name: 'Akşam', value: 800 },
      { name: 'Gece', value: 300 }
    ]
  },
  {
    id: 'egitim',
    name: 'Eğitim',
    icon: GraduationCap,
    description: 'Öğrenci kayıt ve kurs bilgilendirme süreçlerini akıllı hale getirin.',
    longDescription: 'Eğitim kurumlarında bilgi akışı süreklidir. AI ajanlarımız yeni kayıt başvurularını toplar, ders programlarını paylaşır ve öğrencilerin idari sorularını yanıtlayarak personelin yükünü azaltır.',
    useCases: ['Kurs Kayıt İşlemleri', 'Ders Programı Sorgulama', 'Sınav Sonucu Bildirimi'],
    seoKeywords: ['eğitim ai', 'okul otomasyonu', 'yapay zeka eğitim asistanı'],
    stats: { conversion: '%45 Bilgi Hızı', responseTime: '7/24' },
    chartData: [
      { name: 'Güz', value: 1000 },
      { name: 'Bahar', value: 800 },
      { name: 'Yaz', value: 300 }
    ]
  },
  {
    id: 'lojistik',
    name: 'Lojistik & Kargo',
    icon: Truck,
    description: 'Gönderi takibi ve teslimat yönetimi ile şeffaflığı artırın.',
    longDescription: 'Müşteriler kargolarının nerede olduğunu her an bilmek ister. AI ajanlarımız takip numarası üzerinden anlık konum bilgisi verir, kurye taleplerini alır ve teslimat sorunlarını proaktif olarak çözer.',
    useCases: ['Kargo Takibi', 'Kurye Çağırma', 'Teslimat Şubesi Sorgulama'],
    seoKeywords: ['lojistik ai', 'kargo takip otomasyonu', 'yapay zeka sevkiyat'],
    stats: { conversion: '%60 Daha Az Çağrı Merkezi Yükü', responseTime: 'Anlık' },
    chartData: [
      { name: '08:00', value: 100 },
      { name: '12:00', value: 600 },
      { name: '18:00', value: 900 },
      { name: '22:00', value: 300 }
    ]
  },
  {
    id: 'saas',
    name: 'SaaS & Teknoloji',
    icon: Cpu,
    description: 'Teknik destek ve onboarding süreçlerini yapay zeka ile ölçeklendirin.',
    longDescription: 'Teknoloji şirketleri için destek hızı bir üründür. AI ajanlarımız teknik dökümantasyonu tarayarak soruları yanıtlar, yeni kullanıcıları sisteme dahil eder ve hata bildirimlerini kategorize eder.',
    useCases: ['Teknik Destek Talebi', 'Üyelik ve Plan Yönetimi', 'API ve Entegrasyon Yardımı'],
    seoKeywords: ['saas ai', 'teknik destek otomasyonu', 'yapay zeka onboarding'],
    stats: { conversion: '%70 İlk Yanıt Hızı', responseTime: 'Teknik' },
    chartData: [
      { name: 'M1', value: 400 },
      { name: 'M2', value: 800 },
      { name: 'M3', value: 1200 }
    ]
  },
  {
    id: 'telekom',
    name: 'Telekomünikasyon',
    icon: Phone,
    description: 'Abonelik işlemleri ve arıza bildirimi süreçlerini hızlandırın.',
    longDescription: 'Milyonlarca aboneye hizmet vermek yüksek kapasite gerektirir. AI ajanlarımız fatura sorgulama, paket değişikliği ve arıza kaydı gibi rutin işlemleri saniyeler içinde tamamlar.',
    useCases: ['Fatura Sorgulama ve Ödeme', 'Paket ve Tarife Değişikliği', 'Arıza Kaydı Oluşturma'],
    seoKeywords: ['telekom ai', 'müşteri hizmetleri otomasyonu', 'yapay zeka operatör'],
    stats: { conversion: '%35 Maliyet Tasarrufu', responseTime: 'Yüksek Kapasite' },
    chartData: [
      { name: 'Pzt', value: 1000 },
      { name: 'Sal', value: 900 },
      { name: 'Çar', value: 1100 }
    ]
  },
  {
    id: 'sigorta',
    name: 'Sigorta',
    icon: ShieldCheck,
    description: 'Poliçe teklifi ve hasar yönetimi süreçlerini kolaylaştırın.',
    longDescription: 'Sigorta süreçleri karmaşık olabilir. AI ajanlarımız müşterilere en uygun poliçe tekliflerini sunar, hasar dosyalarının durumunu takip eder ve yenileme zamanlarını hatırlatır.',
    useCases: ['Sigorta Teklifi Alımı', 'Hasar Dosyası Takibi', 'Poliçe Yenileme Hatırlatması'],
    seoKeywords: ['sigorta ai', 'insurtech otomasyonu', 'yapay zeka sigortacı'],
    stats: { conversion: '%25 Daha Hızlı Teklif', responseTime: 'Güvenli' },
    chartData: [
      { name: 'Kasko', value: 600 },
      { name: 'Konut', value: 300 },
      { name: 'Sağlık', value: 800 }
    ]
  },
  {
    id: 'otomotiv',
    name: 'Otomotiv',
    icon: Car,
    description: 'Servis randevusu ve araç tanıtımı ile müşteri deneyimini iyileştirin.',
    longDescription: 'Araç sahipleri servis randevularını kolayca almak ister. AI ajanlarımız servis takvimini yönetir, yeni modelleri tanıtır ve test sürüşü taleplerini organize eder.',
    useCases: ['Servis Randevusu', 'Test Sürüşü Planlama', 'Yedek Parça Sorgulama'],
    seoKeywords: ['otomotiv ai', 'araç servis otomasyonu', 'yapay zeka showroom'],
    stats: { conversion: '%40 Servis Doluluğu', responseTime: 'Hızlı' },
    chartData: [
      { name: 'Servis', value: 800 },
      { name: 'Satış', value: 400 },
      { name: 'Test', value: 200 }
    ]
  },
  {
    id: 'ik',
    name: 'İnsan Kaynakları',
    icon: Users,
    description: 'Aday ön değerlendirme ve mülakat planlama süreçlerini otomatikleştirin.',
    longDescription: 'Doğru yeteneği bulmak zaman alır. AI ajanlarımız başvuruları toplar, adaylara ön eleme soruları sorar ve uygun adaylar için mülakat takvimini otomatik olarak oluşturur.',
    useCases: ['İş Başvurusu Alımı', 'Sıkça Sorulan Sorular (Yan Haklar vb.)', 'Mülakat Randevusu'],
    seoKeywords: ['ik ai', 'recruitment otomasyonu', 'yapay zeka mülakat'],
    stats: { conversion: '%55 Zaman Tasarrufu', responseTime: 'Objektif' },
    chartData: [
      { name: 'Başvuru', value: 1200 },
      { name: 'Eleme', value: 400 },
      { name: 'Mülakat', value: 100 }
    ]
  },
  {
    id: 'kamu',
    name: 'Kamu & Belediyeler',
    icon: Landmark,
    description: 'Vatandaş talepleri ve bilgi edinme süreçlerini şeffaflaştırın.',
    longDescription: 'Vatandaşlar belediye hizmetlerine her an ulaşabilmelidir. AI ajanlarımız şikayetleri alır, borç sorgulama işlemlerini yapar ve sosyal etkinlikleri duyurarak katılımı artırır.',
    useCases: ['Başvuru ve Şikayet Takibi', 'Borç Sorgulama', 'Etkinlik Duyuruları'],
    seoKeywords: ['kamu ai', 'belediye otomasyonu', 'yapay zeka vatandaş asistanı'],
    stats: { conversion: '%80 Vatandaş Memnuniyeti', responseTime: 'Resmi' },
    chartData: [
      { name: 'Talep', value: 2000 },
      { name: 'Çözüm', value: 1800 }
    ]
  },
  {
    id: 'medya',
    name: 'Medya & Eğlence',
    icon: Tv,
    description: 'İçerik önerileri ve abonelik desteği ile etkileşimi artırın.',
    longDescription: 'Eğlence dünyasında kişiselleştirme anahtardır. AI ajanlarımız kullanıcı tercihlerine göre içerik önerir, bilet satışlarını yönetir ve abonelik sorunlarını anında çözer.',
    useCases: ['İçerik Arama ve Öneri', 'Bilet Satış ve Rezervasyon', 'Yarışma ve Katılım Formları'],
    seoKeywords: ['medya ai', 'eğlence otomasyonu', 'yapay zeka içerik asistanı'],
    stats: { conversion: '%45 Daha Fazla Etkileşim', responseTime: 'Eğlenceli' },
    chartData: [
      { name: 'Video', value: 1200 },
      { name: 'Müzik', value: 800 },
      { name: 'Bilet', value: 400 }
    ]
  },
  {
    id: 'perakende',
    name: 'Perakende',
    icon: Store,
    description: 'Mağaza içi destek ve stok sorgulama süreçlerini dijitalleştirin.',
    longDescription: 'Fiziksel mağazalar dijital hızla birleşiyor. AI ajanlarımız stok durumunu kontrol eder, en yakın mağazayı bulur ve sadakat programı puanlarını sorgulayarak alışverişi kolaylaştırır.',
    useCases: ['Stok Durumu Sorgulama', 'En Yakın Mağaza Bulucu', 'Sadakat Programı Yönetimi'],
    seoKeywords: ['perakende ai', 'mağaza otomasyonu', 'yapay zeka perakendeci'],
    stats: { conversion: '%30 Mağaza Trafiği', responseTime: 'Yerel' },
    chartData: [
      { name: 'Stok', value: 1500 },
      { name: 'Sorgu', value: 900 }
    ]
  },
  {
    id: 'hukuk',
    name: 'Hukuk',
    icon: Gavel,
    description: 'Danışmanlık randevusu ve dosya takibi süreçlerini profesyonelleştirin.',
    longDescription: 'Hukuki süreçlerde gizlilik ve düzen önemlidir. AI ajanlarımız müvekkil randevularını organize eder, dava dosyalarının durumunu sorgular ve basit hukuki belgelerin hazırlanmasına yardımcı olur.',
    useCases: ['Dava Dosyası Sorgulama', 'Danışmanlık Randevusu', 'Belge Hazırlama Yardımı'],
    seoKeywords: ['hukuk ai', 'avukat otomasyonu', 'yapay zeka hukuk asistanı'],
    stats: { conversion: '%40 Daha Düzenli Takvim', responseTime: 'Gizli' },
    chartData: [
      { name: 'Dava', value: 300 },
      { name: 'Randevu', value: 500 }
    ]
  },
  {
    id: 'enerji',
    name: 'Enerji & Altyapı',
    icon: Zap,
    description: 'Abonelik ve kesinti bilgilendirme süreçlerini anlık yönetin.',
    longDescription: 'Enerji kesintileri anında bilgi gerektirir. AI ajanlarımız kesinti bölgelerini bildirir, sayaç okuma verilerini alır ve yeni abonelik başvurularını dijital ortamda tamamlar.',
    useCases: ['Arıza ve Kesinti Bildirimi', 'Sayaç Okuma ve Bildirim', 'Tarife Bilgilendirme'],
    seoKeywords: ['enerji ai', 'altyapı otomasyonu', 'yapay zeka enerji asistanı'],
    stats: { conversion: '%50 Daha Hızlı Çözüm', responseTime: 'Kritik' },
    chartData: [
      { name: 'Arıza', value: 800 },
      { name: 'Abone', value: 400 }
    ]
  },
  {
    id: 'gaming',
    name: 'Oyun & Gaming',
    icon: Gamepad2,
    description: 'Oyuncu desteği ve topluluk yönetimi ile oyun deneyimini kesintisiz kılın.',
    longDescription: 'Oyuncular 7/24 aktiftir. AI ajanlarımız oyun içi sorunları çözer, hesap güvenliği adımlarında yardımcı olur ve turnuva kayıtlarını saniyeler içinde gerçekleştirir.',
    useCases: ['Oyun İçi Destek', 'Hesap Güvenliği Yardımı', 'Turnuva Kayıtları'],
    seoKeywords: ['gaming ai', 'oyun otomasyonu', 'yapay zeka oyuncu desteği'],
    stats: { conversion: '%65 Oyuncu Bağlılığı', responseTime: '7/24' },
    chartData: [
      { name: 'Destek', value: 1500 },
      { name: 'Güvenlik', value: 600 }
    ]
  },
  {
    id: 'pazarlama',
    name: 'Pazarlama & Ajanslar',
    icon: Megaphone,
    description: 'Lead toplama ve kampanya yönetimi ile ROI değerlerinizi artırın.',
    longDescription: 'Pazarlama kampanyalarında her saniye değerlidir. AI ajanlarımız potansiyel müşterileri yakalar, brief toplar ve kampanya detaylarını merak edenlere anında yanıt vererek dönüşümü artırır.',
    useCases: ['Potansiyel Müşteri Formları', 'Kampanya Bilgilendirme', 'Brief Toplama'],
    seoKeywords: ['pazarlama ai', 'ajans otomasyonu', 'yapay zeka pazarlamacı'],
    stats: { conversion: '%50 Daha Yüksek ROI', responseTime: 'Yaratıcı' },
    chartData: [
      { name: 'Lead', value: 800 },
      { name: 'ROI', value: 1200 }
    ]
  },
  {
    id: 'dis-klinikleri',
    name: 'Diş Klinikleri',
    icon: Activity,
    description: 'Özel randevu ve hasta takip sistemi ile kliniğinizi dijitalleştirin.',
    longDescription: 'Diş hekimliği hassas bir süreçtir. AI ajanlarımız hastaların şikayetlerini dinler, uygun hekime randevu oluşturur ve tedavi sonrası bakım hatırlatmaları yaparak hasta sadakatini artırır.',
    useCases: ['Randevu Otomasyonu', 'Hasta Ön Değerlendirme', 'WhatsApp Destek'],
    seoKeywords: ['diş kliniği ai', 'diş hekimi otomasyonu', 'yapay zeka randevu'],
    stats: { conversion: '%45 Randevu Doluluğu', responseTime: 'Hassas' },
    chartData: [
      { name: 'Randevu', value: 600 },
      { name: 'Takip', value: 400 }
    ]
  }
];
