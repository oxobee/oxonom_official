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
    id: 'diş-klinikleri',
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
  }
];
