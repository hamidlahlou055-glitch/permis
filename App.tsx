
import React, { useState } from 'react';
import { ICONS, WHATSAPP_NUMBER, COURSE_PRICE_ORIGINAL, COURSE_PRICE_DISCOUNTED, AUDIO_TESTIMONIALS, WRITTEN_TESTIMONIALS, PAYMENT_METHODS } from './constants';
import { getExamTips } from './services/geminiService';

const App: React.FC = () => {
  const [aiTip, setAiTip] = useState<string>("");
  const [userConcern, setUserConcern] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleGetTip = async () => {
    if (!userConcern.trim()) return;
    setIsTyping(true);
    const tip = await getExamTips(userConcern);
    setAiTip(tip);
    setIsTyping(false);
  };

  const openWhatsApp = (source: string) => {
    const message = encodeURIComponent(`سلام، جيت من ${source}. بغيت نشري دورة الأسئلة الجديدة ديال البيرمي. عفاك عطيني معلومات الدفع.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 selection:bg-blue-100 antialiased" dir="rtl">
      {/* Dynamic Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 px-4 py-3 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="bg-blue-600 p-2 rounded-xl shadow-blue-200 shadow-lg flex items-center justify-center">
              <ICONS.Car />
            </div>
            <div className="flex flex-col items-start leading-tight">
              <span className="text-xl md:text-2xl font-black text-blue-900">PERMIS<span className="text-blue-600">PRO</span></span>
              <span className="text-[10px] font-bold text-gray-400 tracking-[0.2em] uppercase">Maroc 2025</span>
            </div>
          </div>
          
          {/* Action */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => openWhatsApp('Header')}
              className="hidden md:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 active:scale-95 shadow-md"
            >
              <ICONS.WhatsApp />
              <span>اشتري الآن</span>
            </button>
            <button 
              onClick={() => openWhatsApp('Header_Mobile')}
              className="md:hidden flex items-center justify-center w-10 h-10 bg-green-500 text-white rounded-full shadow-lg"
              aria-label="WhatsApp"
            >
              <ICONS.WhatsApp />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pb-40 px-4 gradient-bg text-white relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-6 md:space-y-10 z-10">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-4 py-1.5 rounded-full text-xs font-black uppercase shadow-lg shadow-yellow-400/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-700"></span>
                </span>
                تحديثات الأسئلة الجديدة 2025
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.3] md:leading-[1.1] tracking-tight">
                البيرمي في جيبك <br/> 
                <span className="text-yellow-300 underline decoration-yellow-300/30">بلا ما تخلعك</span> <br/>
                الأسئلة الجديدة!
              </h1>
            </div>
            
            <p className="text-lg md:text-xl opacity-90 leading-[1.9] max-w-xl font-medium">
              واش خايف من السيستيم الجديد؟ جبنا ليك الحل! دورة شاملة بالدارجة كتشرح ليك الأسئلة اللي كتحط دابا بكل بساطة وفي وقت قياسي مع "كود أيوب".
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button 
                onClick={() => openWhatsApp('Hero_Main')}
                className="bg-white text-blue-900 px-10 py-5 rounded-2xl text-xl font-black hover:bg-yellow-300 transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 group"
              >
                <ICONS.WhatsApp />
                احصل على الدورة الآن
              </button>
              <div className="flex flex-col justify-center items-center sm:items-end text-sm opacity-90 bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                <div className="flex gap-1 text-yellow-400 mb-1">
                   {[...Array(5)].map((_, i) => <ICONS.Star key={i} />)}
                </div>
                <p className="font-bold">أكثر من 2,500 طالب نجحوا بفضلنا</p>
              </div>
            </div>
          </div>

          <div className="relative lg:block hidden">
            <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-[3rem] shadow-2xl animate-float">
              <div className="aspect-video bg-gray-800 rounded-3xl overflow-hidden relative group cursor-pointer border-4 border-white/10" onClick={() => openWhatsApp('Video_Preview')}>
                <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-5 rounded-full text-blue-600 shadow-xl group-hover:bg-blue-600 group-hover:text-white transition-all transform group-hover:scale-110">
                    <ICONS.Play />
                  </div>
                </div>
              </div>
              <div className="mt-8 space-y-4 px-2">
                <div className="flex justify-between items-center text-sm font-black uppercase tracking-wider">
                  <span>نسبة النجاح المتوقعة: 98%</span>
                  <span className="text-yellow-300">Edition 2025</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-yellow-400 w-[98%] rounded-full shadow-[0_0_20px_rgba(250,204,21,0.6)] animate-pulse"></div>
                </div>
              </div>
            </div>
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-yellow-400/20 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-400/20 rounded-full blur-[80px]"></div>
          </div>
        </div>
      </section>

      {/* Meet Code Ayoub Section */}
      <section className="py-24 md:py-40 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
          <div className="flex-1 space-y-8 text-right order-2 md:order-1">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-black text-blue-900 leading-[1.3]">
                تعرف على صاحب الدورة: <br className="hidden md:block" />
                <span className="text-blue-600">كود أيوب - Code Ayoub</span>
              </h2>
              <p className="text-lg md:text-2xl font-bold text-gray-500 italic leading-relaxed">المصدر الأول لتعلم السياقة وقواعد السير في المغرب 🚗📚</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-8 rounded-[2.5rem] border-r-8 border-blue-600 shadow-sm group hover:shadow-md transition-shadow">
                <h4 className="text-xl md:text-2xl font-black mb-5 text-blue-900">أشنو كانقدمو؟</h4>
                <ul className="space-y-5 text-gray-700">
                  <li className="flex items-start gap-3 leading-relaxed text-base md:text-lg font-bold">
                    <span className="bg-blue-600 w-3 h-3 rounded-full mt-2 shrink-0"></span>
                    <p>شروحات واضحة ومفصلة على قوانين السير وكيفاش تسوق بأمان.</p>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed text-base md:text-lg font-bold">
                    <span className="bg-blue-600 w-3 h-3 rounded-full mt-2 shrink-0"></span>
                    <p>توضيحات على الإشارات الطرقية والمخالفات لي كيتعرضو ليها الناس.</p>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed text-base md:text-lg font-bold">
                    <span className="bg-blue-600 w-3 h-3 rounded-full mt-2 shrink-0"></span>
                    <p>نصائح ذهبية للسائقين الجدد والمحترفين باش يحسنو مهاراتهم فالطريق.</p>
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-8 rounded-[2.5rem] border-r-8 border-yellow-400 shadow-sm group hover:shadow-md transition-shadow">
                <h4 className="text-xl md:text-2xl font-black mb-5 text-blue-900">علاش خاصك تختار Code Ayoub؟</h4>
                <ul className="space-y-5 text-gray-700">
                  <li className="flex items-start gap-3 leading-relaxed text-base md:text-lg font-bold">
                    <span className="bg-yellow-500 w-3 h-3 rounded-full mt-2 shrink-0"></span>
                    <p>محتوى زوين ومفيد ومتجدد كيتماشى مع آخر المستجدات فالقيادة.</p>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed text-base md:text-lg font-bold">
                    <span className="bg-yellow-500 w-3 h-3 rounded-full mt-2 shrink-0"></span>
                    <p>طرق سهلة وبسيطة باش تعلم قوانين الطريق وتولي تسوق بثقة.</p>
                  </li>
                  <li className="flex items-start gap-3 leading-relaxed text-base md:text-lg font-bold">
                    <span className="bg-yellow-500 w-3 h-3 rounded-full mt-2 shrink-0"></span>
                    <p>تحديثات ديما موجودة على تعليم السياقة وقوانين السير.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex-1 order-1 md:order-2 w-full max-w-sm md:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-tr from-blue-600 to-yellow-400 rounded-[3.5rem] blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative bg-white p-4 md:p-5 rounded-[3.5rem] shadow-2xl border border-gray-100 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=800" 
                  alt="Code Ayoub - Instructor" 
                  className="w-full rounded-[3rem] object-cover h-[400px] md:h-[600px] shadow-inner"
                />
                <div className="absolute bottom-10 right-10 left-10 bg-white/95 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-blue-50 text-center">
                  <p className="text-blue-600 font-black text-2xl md:text-3xl mb-1 tracking-tight">Code Ayoub</p>
                  <p className="text-gray-500 text-xs md:text-sm font-black uppercase tracking-widest">خبير تعليم السياقة بالمغرب</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Flow */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-blue-600/20">1</div>
            <h4 className="text-blue-900 text-xl font-black">تواصل معنا في واتساب</h4>
            <p className="text-gray-500 font-bold leading-relaxed text-sm md:text-base">بمجرد الضغط على الأزرار سيتم تحويلك مباشرة للدردشة معنا وتأكيد طلبك</p>
          </div>
          <div className="flex flex-col items-center gap-5 md:border-x border-gray-200 px-8">
            <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-blue-600/20">2</div>
            <h4 className="text-blue-900 text-xl font-black">خلص بطريقة آمنة</h4>
            <p className="text-gray-500 font-bold leading-relaxed text-sm md:text-base">كنقبلو الدفع عبر كاش بليس، وفا كاش، بنك CIH أو تحويل بنكي سريع</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="w-20 h-20 rounded-3xl bg-blue-600 text-white flex items-center justify-center text-3xl font-black shadow-xl shadow-blue-600/20">3</div>
            <h4 className="text-blue-900 text-xl font-black">توصل برابط الدخول فورا</h4>
            <p className="text-gray-500 font-bold leading-relaxed text-sm md:text-base">ولوج مباشر للفيديوهات والملخصات على هاتفك في أقل من 5 دقائق</p>
          </div>
        </div>
      </section>

      {/* Pricing and Payments */}
      <section className="py-24 md:py-40 px-4 gradient-bg relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white rounded-[4rem] p-8 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] text-center border-t-8 border-yellow-400">
            <div className="inline-block bg-red-100 text-red-600 px-8 py-3 rounded-full text-xs md:text-sm font-black mb-10 animate-pulse">
               خصم العرض الحصري كيسالي قريبا! ⏳
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">سجل دابا واضمن نجاحك!</h2>
            <p className="text-xl md:text-2xl text-gray-500 mb-16 font-bold leading-relaxed">الدورة المتكاملة لعام 2025 مع "كود أيوب" في عرض خاص جداً</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-20">
              <div className="flex-1 text-right space-y-6 w-full">
                {[
                  "دخول مدى الحياة للفيديوهات والشروحات",
                  "أكثر من 400 سؤال جديد محين لعام 2025",
                  "دعم شخصي 24/7 عبر الواتساب",
                  "ملخصات PDF جاهزة للمراجعة السريعة"
                ].map((text, i) => (
                  <div key={i} className="flex items-center justify-end gap-4 font-black text-gray-700 leading-tight">
                    <span className="text-base md:text-xl">{text}</span>
                    <div className="text-green-500 shrink-0"><ICONS.Check /></div>
                  </div>
                ))}
              </div>
              
              <div className="flex-1 bg-blue-50 p-12 rounded-[3.5rem] border-4 border-dashed border-blue-200 w-full flex flex-col items-center justify-center">
                <p className="text-gray-400 line-through text-2xl font-black mb-3">{COURSE_PRICE_ORIGINAL} درهم</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl md:text-4xl font-black text-blue-400 mb-2">درهم</span>
                  <p className="text-7xl md:text-9xl font-black text-blue-600 leading-none">{COURSE_PRICE_DISCOUNTED}</p>
                </div>
                <p className="text-xs font-black text-blue-400 mt-8 tracking-[0.3em] uppercase">دفع مرة واحدة فقط</p>
              </div>
            </div>

            <div className="mb-16">
              <h4 className="text-gray-400 font-black text-sm mb-8 uppercase tracking-[0.2em]">طرق الدفع المتوفرة 🇲🇦</h4>
              <div className="flex flex-wrap justify-center gap-5 md:gap-8">
                {PAYMENT_METHODS.map((method) => (
                  <div key={method.id} className="flex items-center gap-3 bg-gray-50 px-8 py-5 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl">{method.icon}</span>
                    <span className="font-black text-gray-700 text-sm md:text-lg">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <button 
              onClick={() => openWhatsApp('Bottom_Pricing')}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-8 md:py-12 rounded-[3rem] text-2xl md:text-5xl font-black transition-all transform hover:scale-[1.02] shadow-2xl shadow-green-200 flex items-center justify-center gap-5 active:scale-95 mb-8 border-b-8 border-green-700"
            >
              <ICONS.WhatsApp />
              اشتري الآن عبر الواتساب
            </button>
            <p className="text-gray-400 text-sm md:text-lg font-black italic">سجل الآن وتوصل بمعلومات الدخول في أقل من 5 دقائق ⚡</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-24 md:py-40 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-20 text-center md:text-right">
          <div className="flex flex-col items-center md:items-start gap-8">
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 p-3 rounded-2xl shadow-lg shadow-blue-900/50"><ICONS.Car /></div>
              <span className="text-4xl font-black tracking-tighter italic uppercase">Permis<span className="text-blue-500">Pro</span></span>
            </div>
            <p className="text-gray-400 max-w-sm leading-[2] font-bold text-base md:text-lg">
              المنصة المتكاملة رقم 1 في المغرب للتحضير والنجاح في امتحان السياقة مع "كود أيوب" وفق آخر تحديثات نظام الأسئلة الجديد لعام 2025.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-10">
            <div className="flex gap-6">
               {['FB', 'IG', 'TK'].map(s => (
                 <div key={s} className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all cursor-pointer font-black border border-white/10 text-lg">
                   {s}
                 </div>
               ))}
            </div>
            <div className="space-y-2">
              <p className="text-[12px] text-gray-500 uppercase font-black tracking-[0.5em]">Code Ayoub Edition 2025</p>
              <p className="text-[10px] text-gray-600 font-black text-center md:text-right">جميع الحقوق محفوظة © 2025</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <button 
          onClick={() => openWhatsApp('Mobile_Sticky')}
          className="w-full bg-green-500 text-white py-6 rounded-[2.5rem] font-black shadow-[0_20px_60px_rgba(34,197,94,0.6)] flex items-center justify-center gap-4 active:scale-95 transition-transform text-xl border-b-4 border-green-700"
        >
          <ICONS.WhatsApp />
          سجل دابا واضمن نجاحك!
        </button>
      </div>
    </div>
  );
};

export default App;
