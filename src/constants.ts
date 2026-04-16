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
    { id: 'mini', name: 'Mini', minutes: '100', pricePerMin: '$0,90', totalPrice: '$90', icon: '1' },
    { id: 'standart', name: 'Standart', minutes: '200', pricePerMin: '$0,75', totalPrice: '$150', icon: '2' },
    { id: 'bronz', name: 'Bronz', minutes: '500', pricePerMin: '$0,60', totalPrice: '$300', icon: '3' },
    { id: 'gumus', name: 'Gümüş', minutes: '1.000', pricePerMin: '$0,50', totalPrice: '$500', icon: '4' },
    { id: 'altin', name: 'Altın', minutes: '2.000', pricePerMin: '$0,40', totalPrice: '$800', icon: '5' },
    { id: 'platin', name: 'Platin', minutes: '5.000', pricePerMin: '$0,30', totalPrice: '$1.500', icon: '6' },
    { id: 'elite', name: 'Elite (Max)', minutes: '10.000', pricePerMin: '$0,20', totalPrice: '$2.000', icon: '7' }
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
