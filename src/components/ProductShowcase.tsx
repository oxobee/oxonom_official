import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, MessageSquare, ArrowRight, CheckCircle2, Activity, Zap, Instagram, Facebook, Globe } from 'lucide-react';

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState<'voice' | 'chat'>('chat');

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Toggle */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-50 p-1.5 rounded-full border border-gray-100 shadow-sm">
            <button
              onClick={() => setActiveTab('voice')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'voice' 
                  ? 'bg-white text-brand shadow-md shadow-black/5' 
                  : 'text-gray-500 hover:text-dark'
              }`}
            >
              <PhoneCall className="w-4 h-4" /> Voice Agent
            </button>
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeTab === 'chat' 
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20' 
                  : 'text-gray-500 hover:text-dark'
              }`}
            >
              <MessageSquare className="w-4 h-4" /> Chat Agent
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'chat' ? (
            <motion.div
              key="chat"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-gray-50/50 rounded-[2rem] md:rounded-[2.5rem] border border-gray-100 p-6 md:p-12 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                    <MessageSquare className="w-3.5 h-3.5 mr-2" /> SOSYAL MEDYA AI OTOMASYONU
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-6 leading-[1.1] tracking-tight">
                    DM'leriniz artık <br /> satışa dönüşüyor.
                  </h2>
                  <p className="text-base md:text-lg text-gray-500 mb-8 font-medium leading-relaxed">
                    Instagram, TikTok, Facebook, WhatsApp ve web sitenize gelen her mesaja ve yoruma gerçek bir insan gibi yanıt veren, firmanıza özel eğitilmiş yapay zeka otomasyonu. Uyurken bile müşteri kazanır, randevu alır, sipariş oluşturur.
                  </p>
                  
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600"><Instagram className="w-3.5 h-3.5 text-pink-500" /> Instagram</div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600"><MessageSquare className="w-3.5 h-3.5 text-green-500" /> WhatsApp</div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600"><Globe className="w-3.5 h-3.5 text-dark" /> TikTok</div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600"><Facebook className="w-3.5 h-3.5 text-blue-600" /> Facebook</div>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-bold text-gray-600"><Globe className="w-3.5 h-3.5 text-orange-500" /> Web Sitesi</div>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {[
                      "DM'lere ve yorumlara <1 dk içinde insansı yanıt",
                      "Firmanıza özel eğitim — kendi marka sesinizle konuşur",
                      "Sohbet içinden randevu oluşturur ve sipariş alır",
                      "Tekrarlayan soruların %80'ini otomatik çözer"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                        </div>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex overflow-x-auto gap-4 mb-10 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar snap-x">
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center min-w-[140px] shrink-0 snap-center flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">391%</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">DAHA YÜKSEK<br/>DÖNÜŞÜM*</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center min-w-[140px] shrink-0 snap-center flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">98%</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">WHATSAPP<br/>AÇILMA ORANI</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center min-w-[140px] shrink-0 snap-center flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">%80</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">OTOMASYON<br/>KAPSAMI</div>
                    </div>
                  </div>
                  
                  <p className="text-[10px] text-gray-400 mb-8">* 1 dakika içinde yanıt veren markalarda ölçüldü — Alhena AI, 2025</p>

                  <button className="w-full sm:w-auto justify-center px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-sm hover:bg-blue-700 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20 group">
                    Chat Agent'ı Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Mockups */}
                <div className="space-y-6 w-full max-w-full overflow-hidden">
                  {/* Instagram Mockup */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-dark/5 border border-gray-100 w-full">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                      <div className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest truncate">INSTAGRAM YORUM → OTOMATİK DM</span>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-4 md:p-5 border border-gray-100">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs shrink-0">AY</div>
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-dark truncate block">@ayse.yilmaz</span>
                          <span className="text-[10px] text-gray-400">Az önce</span>
                        </div>
                      </div>
                      <p className="text-sm text-dark font-medium mb-4">Fiyat listesi nereden öğrenebilirim? 🙏</p>
                      
                      <div className="bg-blue-50/50 rounded-xl p-3 md:p-4 border border-blue-100/50">
                        <div className="flex items-center gap-2 mb-2">
                          <MessageSquare className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest truncate">OXONOM AI YANIT VERDİ — 23 SANİYE</span>
                        </div>
                        <p className="text-sm text-dark font-medium leading-relaxed">
                          Merhaba Ayşe hanım! Detaylı fiyat listemizi DM olarak gönderdim. İsterseniz hemen randevu da oluşturabiliriz 😊
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Mockup */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-dark/5 border border-gray-100 w-full">
                    <div className="flex items-center gap-2 mb-4 md:mb-6">
                      <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest truncate">WHATSAPP — RANDEVU AKIŞI</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-gray-600">K</div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-3 text-xs md:text-sm text-dark font-medium">
                          Diş temizliği için randevu almak istiyorum
                        </div>
                      </div>
                      
                      <div className="flex gap-2 md:gap-3 flex-row-reverse">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-white">OX</div>
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tr-none p-3 text-xs md:text-sm text-dark font-medium text-right">
                          Merhaba! Uygun tarihlerimiz:<br/>📅 Per 14:00 - Cum 10:30 - Pzt 09:00
                        </div>
                      </div>

                      <div className="flex gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-gray-600">K</div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-3 text-xs md:text-sm text-dark font-medium">
                          Perşembe 14:00 olsun
                        </div>
                      </div>

                      <div className="flex gap-2 md:gap-3 flex-row-reverse">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-white">OX</div>
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl rounded-tr-none p-3 text-xs md:text-sm text-dark font-medium text-right">
                          ✅ Randevunuz oluşturuldu!<br/>Perşembe 14:00 — Adresi onaylayabilir misiniz?
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12 md:mt-16 pt-8 md:pt-10 border-t border-gray-200">
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">SOSYAL TİCARET PAZARI</p>
                  <p className="text-2xl font-bold text-dark mb-1">$100 Milyar</p>
                  <p className="text-xs text-gray-500">2026 küresel projeksiyon</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">AYLIK INSTAGRAM İŞ MESAJI</p>
                  <p className="text-2xl font-bold text-dark mb-1">150 Milyon</p>
                  <p className="text-xs text-gray-500">Kullanıcı işletmelere yazıyor</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">WHATSAPP GÜNLÜK KONUŞMA</p>
                  <p className="text-2xl font-bold text-dark mb-1">175 Milyon</p>
                  <p className="text-xs text-gray-500">WhatsApp Business mesajı/gün</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">INSTAGRAM TİCARET GELİRİ</p>
                  <p className="text-2xl font-bold text-dark mb-1">$37.2 Milyar</p>
                  <p className="text-xs text-gray-500">Yıllık sosyal ticaret geliri</p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="voice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-red-50/30 rounded-[2rem] md:rounded-[2.5rem] border border-red-100 p-6 md:p-12 overflow-hidden"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                {/* Content */}
                <div>
                  <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-red-100">
                    <PhoneCall className="w-3.5 h-3.5 mr-2" /> OTONOM SESLİ ASİSTAN
                  </div>
                  <h2 className="text-3xl md:text-5xl font-display font-bold text-dark mb-6 leading-[1.1] tracking-tight">
                    Binlerce çağrıyı aynı anda, hiç bekletmeden.
                  </h2>
                  <p className="text-base md:text-lg text-gray-500 mb-8 font-medium leading-relaxed">
                    Gelen ve giden telefon görüşmelerini gerçek bir müşteri temsilcisi gibi yöneten, CRM'inizle anlık entegre çalışan otonom yapay zeka sistemi. Randevu alır, sipariş işler, duygu analizi yapar. 7/24 kesintisiz aktif.
                  </p>

                  <ul className="space-y-4 mb-10">
                    {[
                      "340 ms altı yanıt süresi — insan algısının 8 katı hız",
                      "Ses tonundan anlık duygu analizi ve akıllı yönlendirme",
                      "60+ dil, sınırsız eş zamanlı görüşme kapasitesi",
                      "Salesforce, HubSpot, Zendesk ve özel CRM entegrasyonu"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-bold text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                        </div>
                        <span className="flex-1">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex overflow-x-auto gap-4 mb-10 pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible no-scrollbar snap-x">
                    <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm text-center min-w-[140px] shrink-0 snap-center flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold text-brand mb-2">%70</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">MALİYET<br/>DÜŞÜŞÜ</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm text-center min-w-[140px] shrink-0 snap-center flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold text-brand mb-2">96.4%</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">BAŞARILI<br/>ÇÖZÜM</div>
                    </div>
                    <div className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm text-center min-w-[140px] shrink-0 snap-center flex flex-col justify-center">
                      <div className="text-2xl md:text-3xl font-bold text-brand mb-2">7/24</div>
                      <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider leading-relaxed">KESİNTİSİZ<br/>AKTİF</div>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto justify-center px-8 py-4 bg-brand text-white rounded-xl font-bold text-sm hover:bg-red-600 transition-all flex items-center gap-2 shadow-lg shadow-brand/20 group">
                    Voice Agent'ı Keşfet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {/* Mockups */}
                <div className="space-y-6 w-full max-w-full overflow-hidden">
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-dark/5 border border-red-100 w-full overflow-hidden">
                    <div className="flex items-center justify-between mb-4 md:mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest truncate">CANLI GÖRÜŞME</span>
                      </div>
                      <span className="text-xs font-mono text-gray-400">01:47</span>
                    </div>
                    
                    <div className="space-y-4 mb-6 md:mb-8">
                      <div className="flex gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-gray-600">M</div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-3 md:p-4 text-xs md:text-sm text-dark font-medium min-w-0 flex-1">
                          Siparişim iptal etmek istiyorum, biraz sinirli konuşacağım belki.
                        </div>
                      </div>
                      
                      <div className="flex gap-2 md:gap-3 flex-row-reverse">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-white">OX</div>
                        <div className="bg-red-50 border border-red-100 rounded-2xl rounded-tr-none p-3 md:p-4 text-xs md:text-sm text-dark font-medium text-right min-w-0 flex-1">
                          Sizi anlıyorum, hemen yardımcı olacağım. Sipariş numaranızı öğrenebilir miyim? 😊
                        </div>
                      </div>

                      <div className="flex gap-2 md:gap-3">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-gray-600">M</div>
                        <div className="bg-gray-50 border border-gray-100 rounded-2xl rounded-tl-none p-3 md:p-4 text-xs md:text-sm text-dark font-medium min-w-0">
                          #4821
                        </div>
                      </div>

                      <div className="flex gap-2 md:gap-3 flex-row-reverse">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-brand flex items-center justify-center shrink-0 text-[10px] md:text-xs font-bold text-white">OX</div>
                        <div className="bg-red-50 border border-red-100 rounded-2xl rounded-tr-none px-3 py-2 md:px-4 md:py-3 flex items-center gap-1">
                          <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-1.5 h-1.5 bg-brand/50 rounded-full" />
                          <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }} className="w-1.5 h-1.5 bg-brand/50 rounded-full" />
                          <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }} className="w-1.5 h-1.5 bg-brand/50 rounded-full" />
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-3 md:p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest truncate">DUYGU ANALİZİ — ANLIK</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-orange-500 w-[65%]" />
                          </div>
                          <span className="text-[10px] md:text-xs font-bold text-orange-600 w-14 md:w-16 text-right">Gergin 65%</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 w-[35%]" />
                          </div>
                          <span className="text-[10px] md:text-xs font-bold text-green-600 w-14 md:w-16 text-right">Nötr 35%</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 md:gap-2 text-[9px] md:text-[10px] font-bold text-gray-400">
                        <Zap className="w-3 h-3 text-yellow-500 shrink-0" /> Özel sabır senaryosu aktive edildi
                      </div>
                    </div>
                  </div>

                  {/* Bottom Stats */}
                  <div className="bg-white rounded-2xl p-4 md:p-6 shadow-xl shadow-dark/5 border border-red-100 w-full overflow-hidden">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4 truncate">AKTİF METRİKLERİ</p>
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="bg-red-50/50 rounded-2xl p-4 md:p-5 text-center border border-red-100 flex flex-col justify-center">
                        <p className="text-2xl md:text-3xl font-bold text-brand mb-1 md:mb-2">340ms</p>
                        <p className="text-[10px] md:text-xs text-gray-500 font-medium">Yanıt Süresi</p>
                      </div>
                      <div className="bg-red-50/50 rounded-2xl p-4 md:p-5 text-center border border-red-100 flex flex-col justify-center">
                        <p className="text-3xl md:text-4xl font-bold text-brand mb-1 leading-none">∞</p>
                        <p className="text-[10px] md:text-xs text-gray-500 font-medium mt-1">Eş Zamanlı</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
