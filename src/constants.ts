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
  voice: [
    { id: 'mini', name: 'Mini', minutes: '100', pricePerMin: '$0,90', totalPrice: '$90', icon: '1' },
    { id: 'standart', name: 'Standart', minutes: '200', pricePerMin: '$0,75', totalPrice: '$150', icon: '2' },
    { id: 'bronz', name: 'Bronz', minutes: '500', pricePerMin: '$0,60', totalPrice: '$300', icon: '3' },
    { id: 'gumus', name: 'Gümüş', minutes: '1.000', pricePerMin: '$0,50', totalPrice: '$500', icon: '4' },
    { id: 'altin', name: 'Altın', minutes: '2.000', pricePerMin: '$0,40', totalPrice: '$800', icon: '5' },
    { id: 'platin', name: 'Platin', minutes: '5.000', pricePerMin: '$0,30', totalPrice: '$1.500', icon: '6' },
    { id: 'elite', name: 'Elite', minutes: '10.000', pricePerMin: '$0,20', totalPrice: '$2.000', icon: '7' },
    { id: 'unlimited', name: 'Unlimited', minutes: '25.000', pricePerMin: '$0,15', totalPrice: '$3.750', icon: '8' }
  ],
  messaging: {
    individual: [
      { id: 'm-starter', name: 'Starter', messages: '500', price: '$19', perMsg: '$0.038' },
      { id: 'm-growth', name: 'Growth', messages: '1.500', price: '$39', perMsg: '$0.026' },
      { id: 'm-pro', name: 'Professional', messages: '5.000', price: '$79', perMsg: '$0.015', popular: true },
      { id: 'm-scale', name: 'Scale', messages: '12.000', price: '$149', perMsg: '$0.012' },
      { id: 'm-enterprise', name: 'Enterprise', messages: '25.000', price: '$249', perMsg: '$0.0099' },
      { id: 'm-unlimited', name: 'Unlimited', messages: 'Sınırsız', price: '$399', perMsg: 'En Düşük' }
    ],
    social: [
      { id: 's-starter', name: 'Social Starter', messages: '2.000', price: '$49', perMsg: '$0.024' },
      { id: 's-growth', name: 'Social Growth', messages: '6.000', price: '$99', perMsg: '$0.016', popular: true },
      { id: 's-pro', name: 'Social Professional', messages: '15.000', price: '$179', perMsg: '$0.011' },
      { id: 's-unlimited', name: 'Social Unlimited', messages: 'Sınırsız', price: '$299', perMsg: 'En Düşük' }
    ],
    dmSuite: [
      { id: 'dm-starter', name: 'DM Starter', messages: '3.000', price: '$69', perMsg: '$0.023' },
      { id: 'dm-pro', name: 'DM Professional', messages: '8.000', price: '$129', perMsg: '$0.016', popular: true },
      { id: 'dm-scale', name: 'DM Scale', messages: '20.000', price: '$219', perMsg: '$0.010' },
      { id: 'dm-unlimited', name: 'DM Unlimited', messages: 'Sınırsız', price: '$349', perMsg: 'En Düşük' }
    ],
    omni: [
      { id: 'omni-starter', name: 'Omni Starter', messages: '5.000', price: '$119', perMsg: '$0.023' },
      { id: 'omni-growth', name: 'Omni Growth', messages: '12.000', price: '$179', perMsg: '$0.015', popular: true },
      { id: 'omni-pro', name: 'Omni Professional', messages: '30.000', price: '$299', perMsg: '$0.0099' },
      { id: 'omni-unlimited', name: 'Omni Unlimited', messages: 'Sınırsız', price: '$449', perMsg: 'En Düşük' }
    ],
    fullStack: [
      { id: 'fs-starter', name: 'Full Stack Starter', messages: '8.000', price: '$149', perMsg: '$0.018' },
      { id: 'fs-growth', name: 'Full Stack Growth', messages: '20.000', price: '$249', perMsg: '$0.012', popular: true },
      { id: 'fs-pro', name: 'Full Stack Professional', messages: '50.000', price: '$399', perMsg: '$0.008' },
      { id: 'fs-unlimited', name: 'Full Stack Unlimited', messages: 'Sınırsız', price: '$599', perMsg: 'En Düşük' }
    ]
  },
  combo: [
    { id: 'ai-starter', name: 'AI Starter', messages: '1.000', minutes: '200', price: '$99', perUnits: '$0.020 / $0.39' },
    { id: 'ai-business', name: 'AI Business', messages: '5.000', minutes: '750', price: '$179', perUnits: '$0.012 / $0.23', popular: true },
    { id: 'ai-growth', name: 'AI Growth', messages: '12.000', minutes: '2.000', price: '$299', perUnits: '$0.010 / $0.14' },
    { id: 'ai-scale', name: 'AI Scale', messages: '30.000', minutes: '5.000', price: '$499', perUnits: '$0.008 / $0.10' },
    { id: 'ai-enterprise', name: 'AI Enterprise', messages: '75.000', minutes: '10.000', price: '$799', perUnits: '$0.006 / $0.079' },
    { id: 'ai-unlimited', name: 'AI Unlimited', messages: 'Sınırsız', minutes: '25.000', price: '$3.250', perUnits: 'Limitsiz / $0.13' }
  ],
  notes: [
    'Kullanılmayan dakikalar/mesajlar: Bir sonraki aya %20\'si devreder.',
    'Sınırsız paketlerde adil kullanım kotası uygulanabilir.'
  ]
};

export const sectors = [
  {
    id: 'e-ticaret',
    name: 'E-Ticaret',
    icon: ShoppingBag,
    heroTitle: 'Satışlarınızı 7/24 Otomatize Edin',
    description: '7/24 sipariş takibi ve müşteri desteği ile satışlarınızı artırın.',
    longDescription: 'E-ticaret dünyasında hız her şeydir. OXONOM AI ajanları, müşterilerinizin sipariş durumlarını anlık olarak sorgular, iade süreçlerini yönetir ve sepet terk oranlarını düşürmek için kişiselleştirilmiş teklifler sunar.',
    useCases: ['Sipariş Durumu Sorgulama', 'İade ve Değişim Süreçleri', 'Kişiselleştirilmiş Ürün Önerileri'],
    seoKeywords: ['e-ticaret yapay zeka', 'ai müşteri hizmetleri', 'otomatik sipariş takibi'],
    stats: { conversion: '%35 Artış', responseTime: '< 2 Saniye' },
    painPoints: [
      { title: 'Terk Edilen Sepetler', desc: 'Müşterilerin %70\'i ödeme adımında sepeti bırakıyor.', stat: '%22 Geri Kazanım' },
      { title: 'Mesai Dışı Talepler', desc: 'Gece gelen ürün soruları yanıt bekler.', stat: '7/24 Aktif' },
      { title: 'Yüksek İade Oranları', desc: 'Yanlış beden/özellik seçimi iadeleri artırır.', stat: '%15 Daha Az İade' }
    ],
    voiceScenarios: [
      { title: 'Sepet Hatırlatma', desc: 'Ödeme yapmayan müşteriyi arayıp indirim kodu sunar.', transcript: 'Merhaba, sepetinizde unuttuğunuz ürünler için size özel %10 indirim tanımladım. Tamamlamak ister misiniz?' },
      { title: 'Sipariş Sorgulama', desc: 'Kargom nerede diyen müşteriye anlık bilgi verir.', transcript: 'Siparişiniz şu an Transfer Merkezinde, yarın öğleden önce teslim edilmesi planlanıyor.' }
    ],
    comparison: {
      traditional: ['Sadece mesai saatleri', 'Geç yanıt verme', 'Manuel sipariş girişi'],
      oxonom: ['Saniyeler içinde yanıt', 'Uykusuz 7/24 satış', 'Otomatik ERP entegrasyonu']
    },
    chartData: [
      { name: 'Pzt', value: 400 }, { name: 'Sal', value: 300 }, { name: 'Çar', value: 600 }, { name: 'Per', value: 800 }, { name: 'Cum', value: 500 }, { name: 'Cmt', value: 900 }, { name: 'Paz', value: 1100 }
    ]
  },
  {
    id: 'saglik',
    name: 'Sağlık',
    icon: Stethoscope,
    heroTitle: 'Hasta Dönüşümünü Yöneten Akıllı Sistem',
    description: 'Randevu yönetimi ve hasta bilgilendirme süreçlerini dijitalleştirin.',
    longDescription: 'Sağlık sektöründe güven ve hız bir aradadır. AI ajanlarımız hastalarınızın randevularını organize eder, tahlil sonuçları hakkında bilgi verir ve tedavi sonrası takip süreçlerini otomatikleştirerek klinik verimliliğini artırır.',
    useCases: ['Online Randevu Alımı', 'Tahlil Sonucu Bilgilendirme', 'Nöbetçi Eczane Sorgulama'],
    seoKeywords: ['sağlık sektörü ai', 'hastane randevu otomasyonu', 'medikal yapay zeka'],
    stats: { conversion: '%50 Verimlilik', responseTime: 'Anlık' },
    painPoints: [
      { title: 'Telefonda Bekleme', desc: 'Hastalar telefonda bekletildiğinde kapatma eğilimindedir.', stat: '%30 Kayıp Önleme' },
      { title: 'Unutulan Randevular', desc: 'Gelmeyen hastalar kapasiteyi boşa harcar.', stat: '%25 Doluluk Artışı' },
      { title: 'Hatalı Bilgilendirme', desc: 'İnsani hatalar yanlış tahlil bilgisine yol açabilir.', stat: '%99.9 Doğruluk' }
    ],
    voiceScenarios: [
      { title: 'Randevu Onayı', desc: 'Yarınki randevuyu hatırlatıp onay alır.', transcript: 'Yarın saat 14:00\'teki muayeneniz için uygun musunuz? Sizi bekliyoruz.' },
      { title: 'Tahlil Sonucu', desc: 'Sonuçlar çıktığında hastayı bilgilendirir.', transcript: 'Tahlil sonuçlarınız sistemimize düştü. Genel durumunuz iyi görünüyor.' }
    ],
    comparison: {
      traditional: ['Sınırlı hat kapasitesi', 'Manuel hatırlatma aramaları', 'Hafta sonu kapalı'],
      oxonom: ['Sınırsız eş zamanlı arama', 'Otomatik hatırlatma sistemi', 'Kesintisiz 7/24 hizmet']
    },
    chartData: [
      { name: 'H1', value: 200 }, { name: 'H2', value: 450 }, { name: 'H3', value: 300 }, { name: 'H4', value: 700 }
    ]
  },
  {
    id: 'gayrimenkul',
    name: 'Gayrimenkul',
    icon: Building2,
    heroTitle: 'Portföyünüzü AI ile 7/24 Pazarlayın',
    description: 'Portföy sunumu ve randevu otomasyonu ile satış sürecini hızlandırın.',
    longDescription: 'Emlak piyasasında doğru zamanda doğru bilgiye ulaşmak kritik önem taşır. AI ajanlarımız portföyünüzdeki mülkleri tanıtır, sanal tur randevuları oluşturur ve potansiyel alıcıların sorularını 7/24 yanıtlar.',
    useCases: ['Emlak Portföy Sorgulama', 'Ekspertiz Randevusu', 'Sanal Tur Planlama'],
    seoKeywords: ['emlak ai', 'gayrimenkul satış otomasyonu', 'yapay zeka emlakçı'],
    stats: { conversion: '%40 Daha Fazla Lead', responseTime: '7/24' },
    painPoints: [
      { title: 'Cevapsız Aramalar', desc: 'Sahadaki emlakçılar her telefona yetişemez.', stat: '%100 Yanıtlama' },
      { title: 'Niteliksiz Leadler', desc: 'Ciddi olmayan alıcılarla vakit kaybetmek verimliliği düşürür.', stat: '%50 Kaliteli Lead' },
      { title: 'Yavaş Bilgi Akışı', desc: 'WhatsApp\'tan fotoğraf bekleyen müşteri beklemek istemez.', stat: 'Anında Paylaşım' }
    ],
    voiceScenarios: [
      { title: 'Yeni Portföy Duyurusu', desc: 'Kriterlerine uygun ev bulan müşteriyi arar.', transcript: 'Aradığınız kriterlerde, deniz manzaralı yeni bir ilanımız var. Görmek ister misiniz?' }
    ],
    comparison: {
      traditional: ['Yetişilemeyen telefonlar', 'Manuel ilan takibi', 'Mesai saatlerine bağlılık'],
      oxonom: ['AI emlak asistanı', 'Otomatik eşleştirme', 'Gece gündüz satış']
    },
    chartData: [
      { name: 'Q1', value: 300 }, { name: 'Q2', value: 500 }, { name: 'Q3', value: 400 }, { name: 'Q4', value: 800 }
    ]
  },
  {
    id: 'dis-klinikleri',
    name: 'Diş Klinikleri',
    heroTitle: 'Klinik Gelirinizi Artıran Akıllı Sekreter',
    icon: Activity,
    description: 'Özel randevu ve hasta takip sistemi ile kliniğinizi dijitalleştirin.',
    longDescription: 'Diş hekimliği hassas bir süreçtir. AI ajanlarımız hastaların şikayetlerini dinler, uygun hekime randevu oluşturur ve tedavi sonrası bakım hatırlatmaları yaparak hasta sadakatini artırır.',
    useCases: ['Randevu Otomasyonu', 'Hasta Ön Değerlendirme', 'WhatsApp Destek'],
    seoKeywords: ['diş kliniği ai', 'diş hekimi otomasyonu', 'yapay zeka randevu'],
    stats: { conversion: '%45 Randevu Doluluğu', responseTime: 'Hassas' },
    painPoints: [
      { title: 'Mesai Dışı Kayıp', desc: 'Akşam 8\'den sonra gelen aramalar rakiplere gider.', stat: '7/24 Randevu' },
      { title: 'Eski Hasta Takibi', desc: 'Kontrolü gelen hastaları davet etmek büyük yüktür.', stat: '%35 Geri Kazanım' },
      { title: 'Sekreterlik Maliyeti', desc: 'Yüksek maaş ve eğitim maliyetleri yükü artırır.', stat: '%80 Avantaj' }
    ],
    voiceScenarios: [
      { title: 'İmplant Takibi', desc: 'Ameliyat sonrası hastaya durumunu sorar.', transcript: 'Merhaba, dün yapılan işlemden sonra ağrı veya şişlik var mı?' }
    ],
    comparison: {
      traditional: ['Kaçan gece aramaları', 'Unutulan kontroller', 'Yüksek personel gideri'],
      oxonom: ['Uykusuz randevu hattı', 'Otomatik geri kazanım', 'Düşük sabit maliyet']
    },
    chartData: [
      { name: 'Rnd', value: 600 }, { name: 'Tkp', value: 400 }
    ]
  },
  {
    id: 'telekom',
    name: 'Telekomünikasyon',
    heroTitle: 'Milyonlarca Aboneye Saniyeler İçinde Yanıt',
    icon: Phone,
    description: 'Abonelik işlemleri ve arıza bildirimi süreçlerini hızlandırın.',
    longDescription: 'Milyonlarca aboneye hizmet vermek yüksek kapasite gerektirir. AI ajanlarımız fatura sorgulama, paket değişikliği ve arıza kaydı gibi rutin işlemleri saniyeler içinde tamamlar.',
    useCases: ['Fatura Sorgulama ve Ödeme', 'Paket ve Tarife Değişikliği', 'Arıza Kaydı Oluşturma'],
    seoKeywords: ['telekom ai', 'müşteri hizmetleri otomasyonu', 'yapay zeka operatör'],
    stats: { conversion: '%35 Maliyet Tasarrufu', responseTime: 'Yüksek Kapasite' },
    painPoints: [
      { title: 'Yoğun Arıza Dönemleri', desc: 'Fırtına veya kesinti anlarında hatların kilitlenmesi.', stat: '%100 Yanıtlama' },
      { title: 'Yüksek Churn Oranı', desc: 'Sözleşme bitişinde aranmayan müşterilerin rakiplere geçmesi.', stat: '%40 Geri Kazanım' },
      { title: 'Tahsilat Gecikmeleri', desc: 'Fatura hatırlatması yapılmayan müşterilerin ödemeleri aksatması.', stat: '%25 Daha Hızlı Tahsilat' }
    ],
    voiceScenarios: [
      { title: 'Arıza Bilgilendirme', desc: 'Bölgesel kesinti için arayan binlerce kişiyi karşılar.', transcript: 'Bölgenizdeki genel arızadan haberdarız, ekibimiz sahada. Tahmini onarım süresi 2 saattir.' },
      { title: 'Kampanya Onayı', desc: 'Süresi biten aboneyi arayıp yeni paket onaylar.', transcript: 'Taahhüdünüz haftaya bitiyor. Size özel 100 Mbps paketini aynı fiyata yenileyelim mi?' }
    ],
    comparison: {
      traditional: ['Uzun IVR menüleri', 'Yetersiz hat kapasitesi', 'Yüksek personel turnover'],
      oxonom: ['Sessiz ve hızlı işlem', 'Sınırsız eş zamanlı çağrı', 'Düşük operasyonel maliyet']
    },
    chartData: [
      { name: 'Pzt', value: 1000 }, { name: 'Sal', value: 900 }, { name: 'Çar', value: 1100 }
    ]
  },
  {
    id: 'sigorta',
    name: 'Sigorta',
    heroTitle: 'Poliçe ve Hasar Yönetiminde Yapay Zeka Hızı',
    icon: ShieldCheck,
    description: 'Poliçe teklifi ve hasar yönetimi süreçlerini kolaylaştırın.',
    longDescription: 'Sigorta süreçleri karmaşık olabilir. AI ajanlarımız müşterilere en uygun poliçe tekliflerini sunar, hasar dosyalarının durumunu takip eder ve yenileme zamanlarını hatırlatır.',
    useCases: ['Sigorta Teklifi Alımı', 'Hasar Dosyası Takibi', 'Poliçe Yenileme Hatırlatması'],
    seoKeywords: ['sigorta ai', 'insurtech otomasyonu', 'yapay zeka sigortacı'],
    stats: { conversion: '%25 Daha Hızlı Teklif', responseTime: 'Güvenli' },
    painPoints: [
      { title: 'Karmaşık Poliçe Soruları', desc: 'Müşterilerin kapsam dışı maddeleri anlamaması şikayetleri artırır.', stat: '%90 Bilgi Doğruluğu' },
      { title: 'Hasar Dosya Sorguları', desc: 'Dosyam ne durumda diye arayan yüzlerce müşteri personeli meşgul eder.', stat: 'Anlık Durum Bilgisi' },
      { title: 'Kaçan Yenilemeler', desc: 'Poliçe bitişi hatırlatılmayan müşteriler başka acenteye gider.', stat: '%30 Daha Fazla Yenileme' }
    ],
    voiceScenarios: [
      { title: 'Hasar Dosya Takibi', desc: 'Dosya durumu hakkında meraklı müşteriyi yanıtlar.', transcript: 'Eksper raporu sisteme yüklendi, ödemeniz 3 iş günü içinde hesabınıza geçecektir.' },
      { title: 'Yenileme Teklifi', desc: 'Kasko süresi dolan müşteriye fiyat sunar.', transcript: 'Kaskonuz yarın bitiyor. Hasarsızlık indirimiyle beraber yeni teklifiniz $450. Onaylıyor musunuz?' }
    ],
    comparison: {
      traditional: ['Manuel hasar takibi', 'Yavaş teklif süreci', 'Mesai saatine bağlılık'],
      oxonom: ['Dijital hasar asistanı', 'Saniyeler içinde teklif', '7/24 Aktif destek']
    },
    chartData: [
      { name: 'Kasko', value: 600 }, { name: 'Konut', value: 300 }, { name: 'Sağlık', value: 800 }
    ]
  },
  {
    id: 'otomotiv',
    name: 'Otomotiv',
    heroTitle: 'Satış ve Serviste Geleceğin Showroomu',
    icon: Car,
    description: 'Servis randevusu ve araç tanıtımı ile müşteri deneyimini iyileştirin.',
    longDescription: 'Araç sahipleri servis randevularını kolayca almak ister. AI ajanlarımız servis takvimini yönetir, yeni modelleri tanıtır ve test sürüşü taleplerini organize eder.',
    useCases: ['Servis Randevusu', 'Test Sürüşü Planlama', 'Yedek Parça Sorgulama'],
    seoKeywords: ['otomotiv ai', 'araç servis otomasyonu', 'yapay zeka showroom'],
    stats: { conversion: '%40 Servis Doluluğu', responseTime: 'Hızlı' },
    painPoints: [
      { title: 'Randevu Karmaşası', desc: 'Aynı saate iki araç alınması servis operasyonunu kilitler.', stat: 'Kusursuz Takvim' },
      { title: 'İkinci El Fiyat Merakı', desc: 'Aracım ne kadar eder sorusuna anında yanıt verilememesi.', stat: 'Hızlı Ekspertiz' },
      { title: 'Test Sürüşü Takibi', desc: 'Form dolduran ama aranmayan potansiyel alıcılar.', stat: '%22 Daha Fazla Satış' }
    ],
    voiceScenarios: [
      { title: 'Periyodik Bakım Çağrısı', desc: 'Bakımı gelen araç sahibini arar.', transcript: 'Aracınızın 30.000 km bakımı yaklaştı. Cumartesi sabahı için randevu oluşturalım mı?' },
      { title: 'Parça Bekleme Bilgisi', desc: 'Parçası gelen müşteriyi servise davet eder.', transcript: 'Beklediğiniz fren balataları stoklarımıza girdi. Yarın montaj için müsaitsiniz?' }
    ],
    comparison: {
      traditional: ['Telefonla randevu alma', 'Yavaş araç tanıtımı', 'Sınırlı servis takibi'],
      oxonom: ['Sesli AI randevu hattı', 'Interaktif araç uzmanı', 'Otomatik müşteri takibi']
    },
    chartData: [
      { name: 'Servis', value: 800 }, { name: 'Satış', value: 400 }, { name: 'Test', value: 200 }
    ]
  },
  {
    id: 'ik',
    name: 'İnsan Kaynakları',
    heroTitle: 'Yetenek Avında Yapay Zeka Filtresi',
    icon: Users,
    description: 'Aday ön değerlendirme ve mülakat planlama süreçlerini otomatikleştirin.',
    longDescription: 'Doğru yeteneği bulmak zaman alır. AI ajanlarımız başvuruları toplar, adaylara ön eleme soruları sorar ve uygun adaylar için mülakat takvimini otomatik olarak oluşturur.',
    useCases: ['İş Başvurusu Alımı', 'Sıkça Sorulan Sorular (Yan Haklar vb.)', 'Mülakat Randevusu'],
    seoKeywords: ['ik ai', 'recruitment otomasyonu', 'yapay zeka mülakat'],
    stats: { conversion: '%55 Zaman Tasarrufu', responseTime: 'Objektif' },
    painPoints: [
      { title: 'Aday Eleme Yükü', desc: 'Binlerce CV arasından nitelikli olanı bulmak günler sürer.', stat: '%70 Daha Hızlı Eleme' },
      { title: 'İletişim Kopukluğu', desc: 'Adaylara geri dönüş yapılmaması işveren markasına zarar verir.', stat: '%100 Geri Bildirim' },
      { title: 'Mülakat Organizasyonu', desc: 'Takvim çakışmaları ve sürekli değişen randevular.', stat: 'Otomatik Planlama' }
    ],
    voiceScenarios: [
      { title: 'Ön Eleme Araması', desc: 'Adaya iş tecrübesi hakkında sorular sorar.', transcript: 'Python ve React konusunda kaç yıl tecrübeniz var? Teknik mülakat için uygun saatiniz nedir?' },
      { title: 'Yan Haklar Bilgilendirme', desc: 'Adayın maaş ve sigorta sorularını yanıtlar.', transcript: 'Yemek kartı, özel sağlık sigortası ve hibrit çalışma modelimiz mevcuttur.' }
    ],
    comparison: {
      traditional: ['Manuel CV tarama', 'Geciken geri dönüşler', 'Subjektif değerlendirme'],
      oxonom: ['AI ön eleme asistanı', 'Anlık aday iletişimi', 'Objektif veri analizi']
    },
    chartData: [
      { name: 'Basvuru', value: 1200 }, { name: 'Eleme', value: 400 }, { name: 'Mülakat', value: 100 }
    ]
  },
  {
    id: 'kamu',
    name: 'Kamu & Belediyeler',
    heroTitle: 'Şeffaf ve Hızlı Kamu Hizmetleri',
    icon: Landmark,
    description: 'Vatandaş talepleri ve bilgi edinme süreçlerini şeffaflaştırın.',
    longDescription: 'Vatandaşlar belediye hizmetlerine her an ulaşabilmelidir. AI ajanlarımız şikayetleri alır, borç sorgulama işlemlerini yapar ve sosyal etkinlikleri duyurarak katılımı artırır.',
    useCases: ['Başvuru ve Şikayet Takibi', 'Borç Sorgulama', 'Etkinlik Duyuruları'],
    seoKeywords: ['kamu ai', 'belediye otomasyonu', 'yapay zeka vatandaş asistanı'],
    stats: { conversion: '%80 Vatandaş Memnuniyeti', responseTime: 'Resmi' },
    painPoints: [
      { title: 'Sıra Bekleme', desc: 'Basit bir borç sorgusu için bile belediyeye gitmek zorunda kalmak.', stat: 'Sıfır Bekleme' },
      { title: 'Cevapsız Şikayetler', desc: 'Vatandaşın çözüm beklediği sorunların takipsiz kalması.', stat: '%100 Kayıt Altında' },
      { title: 'Bilgi Kirliliği', desc: 'Etkinlik ve duyuruların doğru kitleye ulaşmaması.', stat: '%50 Daha Fazla Katılım' }
    ],
    voiceScenarios: [
      { title: 'Şikayet Kaydı', desc: 'Vatandaştan çöp veya yol şikayeti alır.', transcript: 'Şikayetinizi aldım, ilgili birime ilettim. Takip numaranız: 4452. Teşekkürler.' },
      { title: 'Vergi Hatırlatması', desc: 'Emlak vergisi ödeme zamanını bildirir.', transcript: 'Emlak vergisi ödemeniz için son gün yarın. İnternet sitemizden hızlıca ödeyebilirsiniz.' }
    ],
    comparison: {
      traditional: ['Fiziksel başvuru', 'Yavaş bürokrasi', 'Manuel bilgi verme'],
      oxonom: ['Sesli kamu asistanı', 'Anlık dijital çözüm', 'Şeffaf takip sistemi']
    },
    chartData: [
      { name: 'Talep', value: 2000 }, { name: 'Cözüm', value: 1800 }
    ]
  },
  {
    id: 'medya',
    name: 'Medya & Eğlence',
    heroTitle: 'Kişiselleştirilmiş Eğlence Deneyimi',
    icon: Tv,
    description: 'İçerik önerileri ve abonelik desteği ile etkileşimi artırın.',
    longDescription: 'Eğlence dünyasında kişiselleştirme anahtardır. AI ajanlarımız kullanıcı tercihlerine göre içerik önerir, bilet satışlarını yönetir ve abonelik sorunlarını anında çözer.',
    useCases: ['İçerik Arama ve Öneri', 'Bilet Satış ve Rezervasyon', 'Yarışma ve Katılım Formları'],
    seoKeywords: ['medya ai', 'eğlence otomasyonu', 'yapay zeka içerik asistanı'],
    stats: { conversion: '%45 Daha Fazla Etkileşim', responseTime: 'Eğlenceli' },
    painPoints: [
      { title: 'Karar Verememe', desc: 'Binlerce içerik arasında ne izleyeceğini bulamayan kullanıcı.', stat: '%30 Daha Fazla İzleme' },
      { title: 'Bilet İptalleri', desc: 'Etkinliğe gidemeyenlerin bilet iade/devir süreçlerindeki zorluklar.', stat: 'Hızlı İşlem' },
      { title: 'Kopuk Üyelik Süreci', desc: 'Ödeme hatası nedeniyle izleme keyfi bozulan kullanıcı.', stat: '%50 Azalan Kayıp' }
    ],
    voiceScenarios: [
      { title: 'Öneri Araması', desc: 'Kullanıcının keyfine göre film önerir.', transcript: 'Korku filmi mi arıyorsunuz? Sizin için en yüksek puanlı 3 film seçtim. İzleyelim mi?' },
      { title: 'Bilet Onay', desc: 'Konser bileti alan kullanıcıyı arayıp QR kodu gönderir.', transcript: 'Biletiniz onaylandı. QR kodunuz telefonunuza SMS olarak iletildi. İyi eğlenceler!' }
    ],
    comparison: {
      traditional: ['Standart öneriler', 'Yavaş müşteri desteği', 'Manuel biletleme'],
      oxonom: ['Kişiselleştirilmiş AI', 'Anlık abonelik yardımı', 'Dijital bilet asistanı']
    },
    chartData: [
      { name: 'Video', value: 1200 }, { name: 'Müzik', value: 800 }, { name: 'Bilet', value: 400 }
    ]
  },
  {
    id: 'perakende',
    name: 'Perakende',
    heroTitle: 'Mağaza Deneyimini Yapay Zeka ile Dijitalleştirin',
    icon: Store,
    description: 'Mağaza içi destek ve stok sorgulama süreçlerini dijitalleştirin.',
    longDescription: 'Fiziksel mağazalar dijital hızla birleşiyor. AI ajanlarımız stok durumunu kontrol eder, en yakın mağazayı bulur ve sadakat programı puanlarını sorgulayarak alışverişi kolaylaştırır.',
    useCases: ['Stok Durumu Sorgulama', 'En Yakın Mağaza Bulucu', 'Sadakat Programı Yönetimi'],
    seoKeywords: ['perakende ai', 'mağaza otomasyonu', 'yapay zeka perakendeci'],
    stats: { conversion: '%30 Mağaza Trafiği', responseTime: 'Yerel' },
    painPoints: [
      { title: 'Mağazada Ürün Bulamama', desc: 'Müşterinin aradığı ürünü bulamayıp mağazadan çıkması.', stat: '%25 Satış Koruması' },
      { title: 'Kasiyer Kuyruğu', desc: 'Puan sorgulama veya basit soruların ödeme sürecini yavaşlatması.', stat: 'Hızlı İşlem' },
      { title: 'Nerede Bu Mağaza', desc: 'Konum ve saat bilgisi için sürekli aranan merkez hatlar.', stat: '%80 Azalan Yük' }
    ],
    voiceScenarios: [
      { title: 'Stok Sorgulama', desc: 'Müşterinin aradığı beden/renk stokta var mı bakar.', transcript: 'Aradığınız kırmızı elbise Suadiye mağazamızda mevcut. Ayıralım mı?' },
      { title: 'Kampanya Bilgisi', desc: 'Müşterinin kazandığı puanları hatırlatır.', transcript: 'Hesabınızda $50 değerinde puan var. Bu hafta sonu harcamak ister misiniz?' }
    ],
    comparison: {
      traditional: ['Manuel stok sayımı', 'Telefonla şube arama', 'Basılı kartlar'],
      oxonom: ['Dijital stok entegrasyonu', 'Hızlı şube bulucu', 'Akıllı sadakat asistanı']
    },
    chartData: [
      { name: 'Stok', value: 1500 }, { name: 'Sorgu', value: 900 }
    ]
  },
  {
    id: 'hukuk',
    name: 'Hukuk',
    heroTitle: 'Hukuki Süreçlerde Profesyonel AI Desteği',
    icon: Gavel,
    description: 'Danışmanlık randevusu ve dosya takibi süreçlerini profesyonelleştirin.',
    longDescription: 'Hukuki süreçlerde gizlilik ve düzen önemlidir. AI ajanlarımız müvekkil randevularını organize eder, dava dosyalarının durumunu sorgular ve basit hukuki belgelerin hazırlanmasına yardımcı olur.',
    useCases: ['Dava Dosyası Sorgulama', 'Danışmanlık Randevusu', 'Belge Hazırlama Yardımı'],
    seoKeywords: ['hukuk ai', 'avukat otomasyonu', 'yapay zeka hukuk asistanı'],
    stats: { conversion: '%40 Daha Düzenli Takvim', responseTime: 'Gizli' },
    painPoints: [
      { title: 'Sürekli Dosya Soran Müvekkiller', desc: 'Avukatın asıl işine odaklanmasını engelleyen telefon trafiği.', stat: '%70 Daha Az Kesinti' },
      { title: 'Kaçan Randevular', desc: 'Müvekkillerin gelmediği görüşmelerin iş programını bozması.', stat: 'Otomatik Hatırlatma' },
      { title: 'Evrak Hazırlama Yükü', desc: 'Basit dilekçe ve randevu formlarının manuel doldurulması.', stat: '%50 Zaman Tasarrufu' }
    ],
    voiceScenarios: [
      { title: 'Müvekkil Bilgilendirme', desc: 'Dava duruşma tarihini müvekkile bildirir.', transcript: 'Duruşmanız 15 Mayıs saat 10:00\'a ertelendi. Hazırlık için yarın ofise bekliyoruz.' },
      { title: 'Randevu Onayı', desc: 'Yeni gelen danışmanlık talebini onaylar.', transcript: 'Ön görüşme için yarın 14:00 uygun mu? Kaydınızı oluşturdum.' }
    ],
    comparison: {
      traditional: ['Manuel dosya takibi', 'Yoğun telefon trafiği', 'Statik ajandalar'],
      oxonom: ['Akıllı dava takipçisi', 'Dijital randevu asistanı', 'Gizli ve güvenli AI']
    },
    chartData: [
      { name: 'Dava', value: 300 }, { name: 'Randevu', value: 500 }
    ]
  },
  {
    id: 'turizm',
    name: 'Turizm & Otelcilik',
    heroTitle: 'Konuklarınıza 7/24 Dijital Resepsiyon',
    icon: Plane,
    description: 'Rezervasyon ve misafir destek süreçlerini otomatikleştirin.',
    longDescription: 'Turizm sektörü zaman farkı gözetmez. AI ajanlarımız misafirlerinizin rezervasyon taleplerini alır, oda özelliklerini anlatır ve check-in öncesi bilgilendirme yaparak kusursuz bir deneyim sunar.',
    useCases: ['Oda Rezervasyonu', 'Otel Hizmetleri Bilgilendirme', 'Check-in Öncesi Destek'],
    seoKeywords: ['turizm ai', 'otel otomasyonu', 'yapay zeka rezervasyon'],
    stats: { conversion: '%30 Daha Fazla Rezervasyon', responseTime: 'Küresel' },
    painPoints: [
      { title: 'Gece Gelen Çağrılar', desc: 'Farklı saat dilimlerinden arayan konukların yanıtsız kalması.', stat: '7/24 Aktif' },
      { title: 'Tekrar Eden Sorular', desc: 'Kahvaltı saati veya Wi-Fi şifresi gibi soruların personeli yorması.', stat: '%80 Otomatik Yanıt' },
      { title: 'İptal Yönetimi', desc: 'İptal edilmeyen oda rezervasyonlarının yarattığı gelir kaybı.', stat: '%15 Daha Az Kayıp' }
    ],
    voiceScenarios: [
      { title: 'Rezervasyon Onayı', desc: 'Konuğun talebini onaylamak için arar.', transcript: 'Merhaba, 15-18 Temmuz arası için oda rezervasyonunuzu onayladım. Sizi bekliyoruz!' },
      { title: 'Transfer Planlama', desc: 'Havalimanı transferi için detayları sorar.', transcript: 'Uçağınız saat kaçta inecek? Transfer aracımız sizi çıkışta bekliyor olacak.' }
    ],
    comparison: {
      traditional: ['Sınırlı resepsiyon saati', 'Dil engeli sorunları', 'Yavaş rezervasyon onayı'],
      oxonom: ['Sınırsız eş zamanlı destek', 'Çok dilli AI kabiliyeti', 'Anlık dijital konfirmasyon']
    },
    chartData: [
      { name: 'Oda', value: 900 }, { name: 'Sorgu', value: 1200 }
    ]
  },
  {
    id: 'restoran',
    name: 'Restoran & Cafe',
    heroTitle: 'Masanız Her An Hazır, Siparişiniz Yolda',
    icon: Utensils,
    description: 'Rezervasyon ve paket servis hatlarınızı yapay zeka ile yönetin.',
    longDescription: 'Yoğun saatlerde telefonlara yetişmek zordur. AI ajanlarımız rezervasyonları alır, paket servis siparişlerini sisteme işler ve müşterilerinize bekleme süresi hakkında bilgi verir.',
    useCases: ['Masa Rezervasyonu', 'Paket Servis Siparişi', 'Menü ve Fiyat Bilgilendirme'],
    seoKeywords: ['restoran ai', 'paket servis otomasyonu', 'yapay zeka rezervasyon'],
    stats: { conversion: '%25 Daha Az Kayıp Çağrı', responseTime: 'Lezzetli' },
    painPoints: [
      { title: 'Meşgul Telefonlar', desc: 'Yoğunlukta açılmayan telefonlar sipariş kaybı demektir.', stat: '%100 Yanıtlama' },
      { title: 'Hatalı Siparişler', desc: 'Gürültülü ortamda yanlış alınan adres veya ürün bilgisi.', stat: 'Kusursuz Kayı' },
      { title: 'Rezervasyon Unutma', desc: 'Not defterine yazılıp unutulan masa rezervasyonları.', stat: 'Dijital Takvim' }
    ],
    voiceScenarios: [
      { title: 'Masa Rezervasyonu', desc: 'Müşteriye uygun saati sorar.', transcript: 'Cuma akşamı saat 20:00 için 4 kişilik masanız hazır. Özel bir isteğiniz var mı?' },
      { title: 'Sipariş Onayı', desc: 'Adresi teyit edip süreyi bildirir.', transcript: 'Karışık pizzanız hazırlanıyor. 25 dakika içinde kapınızda olacak.' }
    ],
    comparison: {
      traditional: ['Meşgul çalan hatlar', 'Manuel sipariş girişi', 'Gürültülü iletişim'],
      oxonom: ['Sessiz ve hızlı işlem', 'Otomatik POS entegrasyonu', 'Net ve açık iletişim']
    },
    chartData: [
      { name: 'Masa', value: 400 }, { name: 'Siparis', value: 1100 }
    ]
  },
  {
    id: 'egitim',
    name: 'Eğitim & Kurslar',
    heroTitle: 'Öğrenci Kayıt Süreçlerinde AI Hızı',
    icon: GraduationCap,
    description: 'Kayıt ve bilgilendirme süreçlerini yapay zeka ile profesyonelleştirin.',
    longDescription: 'Eğitim dönemlerinde yoğun başvuru trafiği yaşanır. AI ajanlarımız aday öğrencilere kurslar hakkında bilgi verir, seviye belirleme sınavlarını planlar ve ödeme hatırlatmaları yapar.',
    useCases: ['Kurs Kayıt ve Bilgi', 'Sınav Tarihi Hatırlatma', 'Ödeme Takibi'],
    seoKeywords: ['eğitim ai', 'kurs otomasyonu', 'yapay zeka eğitim asistanı'],
    stats: { conversion: '%40 Daha Fazla Kayıt', responseTime: 'Eğitici' },
    painPoints: [
      { title: 'Kaçan Adaylar', desc: 'Form doldurup 2 gün sonra aranmayan öğrenci rakipten kurs alır.', stat: '%60 Daha Hızlı Dönüş' },
      { title: 'Tahsilat Takibi', desc: 'Aylık kurs ücretlerini hatırlatmak için ayrılan uzun mesailer.', stat: 'Nazik Hatırlatma' },
      { title: 'Soru Yağmuru', desc: 'Kurs saatleri ve içerikleriyle ilgili her gün gelen aynı sorular.', stat: '%85 Otomatik Yanıt' }
    ],
    voiceScenarios: [
      { title: 'Aday Bilgilendirme', desc: 'Kurs içeriği hakkında bilgi verir.', transcript: 'İngilizce kursumuz haftada 3 gün, akşam saatlerindedir. Katılmak ister misiniz?' },
      { title: 'Sınav Hatırlatma', desc: 'Öğrenciye yarınki sınavını bildirir.', transcript: 'Yarın saat 10:00\'daki deneme sınavı için başarınız dileriz. Kalem getirmeyi unutmayın!' }
    ],
    comparison: {
      traditional: ['Manuel aday takibi', 'Yavaş kayıt süreci', 'Mesaiye bağlılık'],
      oxonom: ['AI eğitim asistanı', 'Anlık kayıt konfirmasyonu', '7/24 Kesintisiz bilgi']
    },
    chartData: [
      { name: 'Aday', value: 700 }, { name: 'Kayit', value: 300 }
    ]
  },
  {
    id: 'lojistik',
    name: 'Lojistik & Kargo',
    heroTitle: 'Gönderiniz Her An Takibimizde',
    icon: Truck,
    description: 'Kargo takibi ve operasyonel süreçleri hızlandırın.',
    longDescription: 'Lojistik dünyasında şeffaflık güven demektir. AI ajanlarımız gönderilerin anlık durumunu bildirir, teslimat randevularını yönetir ve adres değişikliklerini anında sisteme işler.',
    useCases: ['Anlık Kargo Sorgulama', 'Teslimat Randevusu', 'Adres Güncelleme'],
    seoKeywords: ['lojistik ai', 'kargo otomasyonu', 'yapay zeka sevkiyat asistanı'],
    stats: { conversion: '%45 Daha Hızlı Bilgi', responseTime: 'Yolda' },
    painPoints: [
      { title: 'Nerede Benim Kargom', desc: 'Müşterilerin en çok sorduğu ve personeli en çok yoran soru.', stat: 'Anlık Yanıt' },
      { title: 'Adreste Bulunamama', desc: 'Gidilen adreste kimsenin olmaması nedeniyle yaşanan yakıt kaybı.', stat: '%22 Randevulu Tasarruf' },
      { title: 'Operasyonel Hatalar', desc: 'Yanlış alınan adres bilgilerinin yarattığı gecikmeler.', stat: 'Sesli Veri Doğrulama' }
    ],
    voiceScenarios: [
      { title: 'Teslimat Onayı', desc: 'Kurye gelmeden önce müşteriyi arayıp yerinde mi sorar.', transcript: 'Kargonuz 15 dakika içinde kapınızda olacak. Adresinizde misiniz?' },
      { title: 'Adres Düzenleme', desc: 'Yanlış adresi düzelttirir.', transcript: 'Adresinizdeki bina numarası eksik görünüyor. Lütfen teyit eder misiniz?' }
    ],
    comparison: {
      traditional: ['Manuel kurye takibi', 'Sesli yanıt (IVR) kuyrukları', 'Yavaş adres güncelleme'],
      oxonom: ['Gerçek zamanlı AI takibi', 'Sıfır bekleme süresi', 'Dijital sevkiyat asistanı']
    },
    chartData: [
      { name: 'Kargo', value: 1500 }, { name: 'Teslimat', value: 1400 }
    ]
  },
  {
    id: 'saas',
    name: 'Yazılım & SaaS',
    heroTitle: 'Geleceğin Yazılım Desteği Bugün Burada',
    icon: Cpu,
    description: 'Müşteri başarısı ve teknik destek süreçlerini otomatize edin.',
    longDescription: 'SaaS dünyasında müşteri başarısı her şeydir. AI ajanlarımız teknik soruları yanıtlar, demo randevuları oluşturur ve abonelik yenileme süreçlerini yöneterek churn oranını düşürür.',
    useCases: ['Teknik Destek (L1)', 'Demo Randevusu Oluşturma', 'Abonelik ve Churn Yönetimi'],
    seoKeywords: ['saas ai', 'yazılım otomasyonu', 'yapay zeka müşteri başarısı'],
    stats: { conversion: '%50 Azalan Churn', responseTime: 'Yüksek Teknoloji' },
    painPoints: [
      { title: 'Yavaş Teknik Destek', desc: 'Basit bir soru için 4 saat bekleyen kullanıcı platformu bırakır.', stat: 'Saniye Altı Yanıt' },
      { title: 'Demo Kaçırma', desc: 'Hafta sonu gelen demo taleplerinin pazartesiye kadar soğuması.', stat: '%40 Daha Fazla Demo' },
      { title: 'Düşük Onboarding', desc: 'Sistemi kuramayan kullanıcının yaşadığı zorluklar.', stat: '%25 Daha Hızlı Geçiş' }
    ],
    voiceScenarios: [
      { title: 'Demo Onayı', desc: 'Talep bırakan kullanıcıyı arayıp takvim set eder.', transcript: 'Demo isteğinizi aldım. Yarın saat 11:00 uygun mu? Zoom linkini iletiyorum.' },
      { title: 'Abonelik Hatırlatma', desc: 'Deneme süresi biten kullanıcıyı arar.', transcript: 'Deneme süreniz bugün bitiyor. Avantajlı yıllık paketimize geçmek ister misiniz?' }
    ],
    comparison: {
      traditional: ['Yavaş e-posta desteği', 'Zaman alan döküman okuma', 'Sınırlı müşteri başarısı'],
      oxonom: ['Anlık sesli yardım', 'Proaktif kullanıcı takibi', 'Yapay zeka dökümantasyon rehberi']
    },
    chartData: [
      { name: 'Demo', value: 300 }, { name: 'Ticket', value: 800 }
    ]
  },
  {
    id: 'enerji',
    name: 'Enerji & Altyapı',
    heroTitle: 'Kesintisiz Enerji, Kusursuz İletişim',
    icon: Zap,
    description: 'Abonelik ve kesinti bilgilendirme süreçlerini anlık yönetin.',
    longDescription: 'Enerji kesintileri anında bilgi gerektirir. AI ajanlarımız kesinti bölgelerini bildirir, sayaç okuma verilerini alır ve yeni abonelik başvurularını dijital ortamda tamamlar.',
    useCases: ['Arıza ve Kesinti Bildirimi', 'Sayaç Okuma ve Bildirim', 'Tarife Bilgilendirme'],
    seoKeywords: ['enerji ai', 'altyapı otomasyonu', 'yapay zeka enerji asistanı'],
    stats: { conversion: '%50 Daha Hızlı Çözüm', responseTime: 'Kritik' },
    painPoints: [
      { title: 'Kesinti Anında Kilitlenen Hatlar', desc: 'Binlerce kişinin aynı anda arıza bildirmek için araması.', stat: '%100 Yanıtlama Hızı' },
      { title: 'Hatalı Sayaç Okuma', desc: 'Yanlış okunan verilerin fatura itirazlarına neden olması.', stat: 'Hatasız Veri Girişi' },
      { title: 'Yavaş Abonelik Süreci', desc: 'Yeni hat açtırmak için günlerce bekleyen müşteriler.', stat: '%40 Daha Hızlı Açılış' }
    ],
    voiceScenarios: [
      { title: 'Arıza Bildirme', desc: 'Karanlıkta kalan aboneyi karşılar.', transcript: 'Sokağınızdaki elektrik arızasından haberdarız. Tahmini açılış saati: 22:30.' },
      { title: 'Sayaç Okuma Talebi', desc: 'Aboneye sayaç fotosu göndermesi için link atar.', transcript: 'Sayaç bilginizi anında sisteme girmem için telefonunuza gelen linki kullanın.' }
    ],
    comparison: {
      traditional: ['Cevapsız arıza hatları', 'Manuel sayaç okuma', 'Yavaş şube işlemleri'],
      oxonom: ['AI arıza operatörü', 'Dijital veri toplama', 'Otomatik abonelik akışı']
    },
    chartData: [
      { name: 'Arıza', value: 800 }, { name: 'Abone', value: 400 }
    ]
  },
  {
    id: 'gaming',
    name: 'Oyun & Gaming',
    heroTitle: 'Oyuncular İçin 7/24 Kesintisiz Destek',
    icon: Gamepad2,
    description: 'Oyuncu desteği ve topluluk yönetimi ile oyun deneyimini kesintisiz kılın.',
    longDescription: 'Oyuncular 7/24 aktiftir. AI ajanlarımız oyun içi sorunları çözer, hesap güvenliği adımlarında yardımcı olur ve turnuva kayıtlarını saniyeler içinde gerçekleştirir.',
    useCases: ['Oyun İçi Destek', 'Hesap Güvenliği Yardımı', 'Turnuva Kayıtları'],
    seoKeywords: ['gaming ai', 'oyun otomasyonu', 'yapay zeka oyuncu desteği'],
    stats: { conversion: '%65 Oyuncu Bağlılığı', responseTime: '7/24' },
    painPoints: [
      { title: 'Gece Gelen Destek Talepleri', desc: 'Canlı desteğin kapalı olduğu saatlerde oyun bırakan oyuncular.', stat: 'Kesintisiz Hizmet' },
      { title: 'Hesap Çalma Girişimleri', desc: 'Güvenlik adımlarında saniyeler süren gecikmelerin paniğe yol açması.', stat: 'Anlık Müdahale' },
      { title: 'Hantal Turnuva Kaydı', desc: 'Formlarla uğraşmak istemeyen e-sporcular.', stat: '%50 Daha Hızlı Kayıt' }
    ],
    voiceScenarios: [
      { title: 'Şifre Sıfırlama', desc: 'Hesabı çalınan oyuncuyu arayıp doğrular.', transcript: 'Telefonunuza bir doğrulama kodu gönderdim. Okur musunuz? Hesabınızı kurtarıyoruz.' },
      { title: 'Turnuva Daveti', desc: 'Elmas ligdeki oyuncuları turnuvaya çağırır.', transcript: 'Hafta sonu yapılacak $10.000 ödüllü turnuvada yeriniz hazır. Takımınızı kaydedelim mi?' }
    ],
    comparison: {
      traditional: ['Ticket tabanlı yavaş destek', 'Sınırlı zaman dilimi', 'Standart yardım metinleri'],
      oxonom: ['Sesli ve hızlı AI destek', 'Uykusuz 7/24 asistan', 'Kişiselleştirilmiş oyuncu rehberi']
    },
    chartData: [
      { name: 'Destek', value: 1500 }, { name: 'Güvenlik', value: 600 }
    ]
  },
  {
    id: 'pazarlama',
    name: 'Pazarlama & Ajanslar',
    heroTitle: 'Dönüşümü Artıran Akıllı Lead Mıknatısı',
    icon: Megaphone,
    description: 'Lead toplama ve kampanya yönetimi ile ROI değerlerinizi artırın.',
    longDescription: 'Pazarlama kampanyalarında her saniye değerlidir. AI ajanlarımız potansiyel müşterileri yakalar, brief toplar ve kampanya detaylarını merak edenlere anında yanıt vererek dönüşümü artırır.',
    useCases: ['Potansiyel Müşteri Formları', 'Kampanya Bilgilendirme', 'Brief Toplama'],
    seoKeywords: ['pazarlama ai', 'ajans otomasyonu', 'yapay zeka pazarlamacı'],
    stats: { conversion: '%50 Daha Yüksek ROI', responseTime: 'Yaratıcı' },
    painPoints: [
      { title: 'Yavaş Geri Dönüşler', desc: 'Lead düştükten 24 saat sonra aranan müşterinin ilgisini kaybetmesi.', stat: '%60 Daha Fazla Satış' },
      { title: 'Kalitesiz Lead Havuzu', desc: 'Gerçek olmayan numaralarla uğraşarak vakit kaybeden ekipler.', stat: 'Ön Eleme Onayı' },
      { title: 'Sınırlı Follow-up', desc: 'Sadece bir kez aranıp bırakılan leadlerin yarattığı kayıp.', stat: '%40 Geri Kazanım' }
    ],
    voiceScenarios: [
      { title: 'Lead Doğrulama', desc: 'Form dolduran kişiyi 10 saniye içinde arar.', transcript: 'Dermapen tedavimizle ilgilendiğinizi gördüm. Size en yakın şubemiz için bir randevu set edelim mi?' },
      { title: 'Etkinlik Follow-up', desc: 'Webinar sonrası ilgili kişiyi arayıp teklif sunar.', transcript: 'Eğitimimizi izlediğiniz için teşekkürler! Bugün kayıt olursanız %20 indiriminiz var.' }
    ],
    comparison: {
      traditional: ['Manuel lead aramaları', 'Günler süren follow-up', 'Düşük dönüşüm oranları'],
      oxonom: ['Anında AI müdahalesi', 'Otomatik kampanya takibi', 'Yüksek ROI odaklı akış']
    },
    chartData: [
      { name: 'Lead', value: 800 }, { name: 'ROI', value: 1200 }
    ]
  }
];

export const blogPosts: Array<{
  id: string;
  slug: string;
  title: string;
  summary: string;
  content: string;
  category: string;
  readTime: string;
  viewCount: number;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
  date: string;
}> = [
  {
    id: "1",
    slug: "musteri-hizmetlerinde-yeni-cag-ai-sesli-asistanlar-ile-7-24-kesintisiz-destek",
    title: "Müşteri Hizmetlerinde Yeni Çağ: AI Sesli Asistanlar ile 7/24 Kesintisiz Destek",
    summary: "Bekleyen müşteri kaybedilir. Anında cevap veren kazanır. AI sesli asistanların müşteri deneyimindeki devrimsel rolünü inceleyin.",
    content: `
      <p class="text-xl font-medium text-dark leading-relaxed mb-8"><strong>Dijital müşteri deneyimi artık insan hızının ötesinde.</strong> <br/>Müşteri hizmetleri uzun yıllar boyunca insan gücüne dayalı, sınırlı saatlerde çalışan ve yoğun dönemlerde ciddi performans kaybı yaşayan bir yapı olarak ilerledi. Ancak günümüzde bu model hızla değişiyor. Artık kullanıcılar beklemek istemiyor, gecikmeye tahammül etmiyor ve her kanaldan anında geri dönüş bekliyor.</p>
      
      <p>Bu noktada devreye AI sesli asistanlar giriyor. Yapay zekâ destekli bu sistemler, yalnızca mesajlara cevap veren chatbot’lar değil; aynı zamanda telefon aramalarını karşılayan, rezervasyon yapan, sipariş alan ve sorun çözen gelişmiş dijital çalışanlar olarak konumlanıyor.</p>
      
      <hr class="my-10 border-gray-100" />
      
      <h3 class="text-2xl font-bold text-dark mt-8 mb-4">7/24 kesintisiz hizmet artık bir avantaj değil, standart</h3>
      <p>Modern işletmeler için müşteri hizmetlerinde en kritik konu hızdır. Ancak insan ekiplerle 7/24 kesintisiz hizmet sunmak hem maliyetli hem de operasyonel olarak sürdürülebilir değildir.</p>
      <div class="bg-gray-50 p-6 rounded-2xl my-6 border border-gray-100">
        <p class="font-bold text-dark mb-4">AI sesli asistanlar bu problemi kökten çözer:</p>
        <ul class="list-disc pl-5 mb-0 space-y-2 text-gray-600 font-medium">
          <li>Aynı anda sınırsız görüşme yapabilir</li>
          <li>Bekleme süresini sıfıra indirir</li>
          <li>Gece-gündüz fark etmeksizin hizmet verir</li>
          <li>Yoğun dönemlerde bile performans kaybı yaşamaz</li>
        </ul>
      </div>
      <p>Bu yapı özellikle e-ticaret, restoran, sağlık hizmetleri, emlak ve rezervasyon odaklı sektörlerde ciddi bir dönüşüm yaratır.</p>
      
      <h3 class="text-2xl font-bold text-dark mt-8 mb-4">Müşteri iletişiminde yeni standart: İnsan ötesi hız</h3>
      <p>Geleneksel çağrı merkezlerinde en büyük sorunlardan biri, yoğun saatlerde artan bekleme süresidir. Bu durum doğrudan müşteri kaybına yol açar. AI tabanlı sistemler ise bu zinciri kırar. Gelen bir çağrı ya da mesaj:</p>
      <ul class="list-disc pl-5 my-6 space-y-2 text-gray-600 font-medium">
        <li>Anında karşılanır</li>
        <li>Kullanıcının niyeti analiz edilir</li>
        <li>Doğru aksiyon otomatik başlatılır</li>
        <li>Gerekirse insan temsilciye sorunsuz devredilir</li>
      </ul>
      <p>Bu yapı "otomasyon" değil, akıllı müşteri deneyimi mimarisi olarak düşünülmelidir.</p>
      
      <blockquote class="border-l-4 border-brand pl-6 text-dark font-display font-medium italic my-10 py-2 text-xl bg-gradient-to-r from-brand/5 to-transparent rounded-r-2xl">
        Yeni nesil AI sesli asistanlar yalnızca bilgi veren sistemler değildir. Asıl güçleri <strong>işlem yapabilmeleridir.</strong>
      </blockquote>
      
      <p>Bu sayede; randevu oluşturma ve yönetme, sipariş alma ve doğrulama, müşteri kaydı oluşturma (CRM entegrasyonu), WhatsApp, Instagram ve web mesajlarını yönetme, arama yönlendirme ve kayıt alma işlemleri aynı merkezden ve saniyeler içinde gerçekleşir.</p>
      
      <h3 class="text-2xl font-bold text-dark mt-8 mb-4">İşletmeler için en büyük avantaj: Ölçeklenebilirlik</h3>
      <p>Geleneksel sistemlerde büyüme, doğrudan personel artışı anlamına gelir. Ancak AI destekli sistemlerde durum tamamen farklıdır.</p>
      <div class="flex items-center gap-4 my-6 p-4 bg-brand/5 border border-brand/10 rounded-2xl">
        <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand font-bold shrink-0 shadow-sm text-xl">🚀</div>
        <p class="text-dark font-medium m-0">Aynı sistem; <strong>10 müşteriyle de, 10.000 müşteriyle de</strong> aynı performansta çalışabilir. Bu da işletmelere sınırsız ölçeklenebilirlik sağlar.</p>
      </div>
      
      <h3 class="text-2xl font-bold text-dark mt-8 mb-4">Verimlilik + Maliyet Optimizasyonu = Sürdürülebilir Büyüme</h3>
      <p>AI sesli asistanların en güçlü taraflarından biri de maliyet optimizasyonudur. Çağrı merkezi personel maliyetini düşürür, operasyon yükünü azaltır, hata oranını minimuma indirir ve insan kaynaklı gecikmeleri ortadan kaldırır. Bu sadece bir teknoloji yatırımı değil, aynı zamanda uzun vadeli bir iş modeli optimizasyonudur.</p>
      
      <hr class="my-10 border-gray-100" />
      
      <h3 class="text-2xl font-bold text-dark mt-8 mb-4">Türkiye ve Global Pazarda Yeni Dönem</h3>
      <p>İstanbul gibi büyük ticaret merkezlerinde işletmeler artık rekabeti sadece ürünle değil, müşteri deneyimiyle kazanıyor. Bugünün müşterisi şunu bekliyor:</p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center hover:bg-brand hover:text-white transition-colors group">
           <span class="block text-2xl mb-2 group-hover:scale-110 transition-transform">⚡</span>
           <span class="font-bold text-sm">Hızlı Yanıt</span>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center hover:bg-brand hover:text-white transition-colors group">
           <span class="block text-2xl mb-2 group-hover:scale-110 transition-transform">🕒</span>
           <span class="font-bold text-sm">7/24 Erişim</span>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center hover:bg-brand hover:text-white transition-colors group">
           <span class="block text-2xl mb-2 group-hover:scale-110 transition-transform">🎯</span>
           <span class="font-bold text-sm">Kişiselleştirme</span>
        </div>
        <div class="bg-gray-50 rounded-2xl p-4 border border-gray-100 text-center hover:bg-brand hover:text-white transition-colors group">
           <span class="block text-2xl mb-2 group-hover:scale-110 transition-transform">🔄</span>
           <span class="font-bold text-sm">Omnichannel</span>
        </div>
      </div>
      
      <h3 class="text-2xl font-bold text-dark mt-8 mb-4">Sonuç: Gelecek artık otomasyon değil, akıllı iletişim</h3>
      <p>Müşteri hizmetleri artık bir destek fonksiyonu değil, doğrudan satış ve marka algısı belirleyen bir merkez haline geldi. AI sesli asistanlar bu dönüşümün merkezinde yer alıyor. İşletmeler için bu teknoloji artık "opsiyonel" değil, rekabetin temel şartı.</p>
      
      <div class="bg-dark text-white p-8 md:p-12 rounded-[2.5rem] text-center mt-12 shadow-2xl shadow-dark/20 relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.05]"></div>
        <p class="text-xs md:text-sm font-black font-display uppercase tracking-[0.3em] text-[#FF4B4B] mb-4 relative z-10">Kısaca yeni dönem şunu söylüyor:</p>
        <p class="text-2xl md:text-4xl lg:text-5xl font-light leading-tight font-display relative z-10">
          "Bekleyen müşteri <span class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">kaybedilir.</span><br/> Anında cevap veren <span class="font-bold text-brand">kazanır.</span>"
        </p>
      </div>
    `,
    category: "Yapay Zekâ",
    readTime: "3 Dakika",
    viewCount: 14250,
    author: {
      name: "OXONOM Insights",
      avatar: "/author-avatar.png"
    },
    image: "/blog/ai-sesli-asistanlar-2.png",
    date: "18 Nisan 2026"
  }
];

