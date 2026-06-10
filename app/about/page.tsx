"use client";

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  Award, 
  Zap, 
  Heart, 
  Mail, 
  ArrowRight,
  MapPin,
  Target
} from 'lucide-react';
import FAQ from "../components/FAQ";
import { SiFacebook, SiInstagram, SiTiktok, SiWhatsapp } from 'react-icons/si';
import React from 'react';

// --- REFINED SUB-COMPONENT: CEO HERO CARD ---
const CeoHero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-32">
    
     <div className="grid mt-8 md:grid-cols-12 gap-8 items-stretch">
        
        {/* CEO IMAGE - Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 relative group"
        >
          <div className="absolute -inset-4 bg-slate-100 rounded-[60px] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[6px] border-white">
            <img 
              src="ceo.png" 
              alt="Muhammad Inuwa Bassi" 
              className="aspect-4/5 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden lg:flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white">
              <Target size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leadership</p>
              <p className="text-sm uppercase font-bold text-slate-900">CEO & Founder</p>
            </div>
          </div>
        </motion.div>

        {/* CEO CONTENT - Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 flex flex-col justify-center bg-slate-950 p-12 md:p-16 rounded-[48px] relative overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>

          <header className="relative z-10 mb-8">
            <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Managing Director</span>
            <h2 className="text-4xl lg:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4">
Muhammad<br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">
                Inuwa Bassi
              </span>
            </h2>
            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
          </header>

          <div className="space-y-6 relative z-10">
            <p className="text-xl font-bold tracking-tighter italic text-slate-300 border-l-2 border-red-600 pl-4">
              Farmer & Businessman
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
Inuwa Bassi is the visionary Founder and CEO of 4Brothers Transport & Logistics. Dedicated his career to mastering the complexities of the West African supply chain. Driven by the core philosophy that logistics is the backbone of regional prosperity, he established 4Brothers to bridge the gap between industrial scale and personal reliability.
            </p>
            
            <div className="pt-8">
              <a 
                href="mailto:4brotherstransportandlogistic@gmail.com" 
            className="bg-red-600 group inline-flex items-center gap-4 text-white px-6 py-4 rounded-full font-black text-sm tracking-tighter shadow-[0_20px_50px_rgba(220,38,38,0.3)] mx-auto uppercase  z-10 hover:bg-red-700 active:scale-95 hover:scale-105 transition-colors"
              >
                <Mail size={18} className="group-hover:animate-bounce" />
                Contact Office
              </a>
            </div>
          </div>
        </motion.div>
      </div>

       <div className="grid mt-8 md:grid-cols-12 gap-8 items-stretch">
        
        {/* CEO IMAGE - Left Column */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 relative group"
        >
          <div className="absolute -inset-4 bg-slate-100 rounded-[60px] -z-10 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border-[6px] border-white">
            <img 
              src="profile.png" 
              alt=" Suleiman Bakari Faruq" 
              className="aspect-4/5 w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          {/* Decorative Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden lg:flex items-center gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center text-white">
              <Target size={24} />
            </div>
            <div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Leadership</p>
              <p className="text-sm uppercase font-bold text-slate-900">Managing Director</p>
            </div>
          </div>
        </motion.div>

        {/* CEO CONTENT - Right Column */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="md:col-span-6 flex flex-col justify-center bg-slate-950 p-12 md:p-16 rounded-[48px] relative overflow-hidden"
        >
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-[100px]"></div>

          <header className="relative z-10 mb-8">
            <span className="text-red-500 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Managing Director</span>
            <h2 className="text-5xl lg:text-7xl font-black uppercase text-white leading-[0.9] tracking-tighter mb-4">
              Suleiman <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-slate-500">
                Bakari Faruq
              </span>
            </h2>
            <div className="h-1 w-20 bg-red-600 rounded-full"></div>
          </header>

          <div className="space-y-6 relative z-10">
            <p className="text-xl font-bold tracking-tighter italic text-slate-300 border-l-2 border-red-600 pl-4">
              BSc, Business Management
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              With a career built on logistics mastery across Nigeria, Suleiman managed 4Brothers to redefine reliability. His philosophy is simple: logistics isn't about trucks; it's about the trust behind every delivery.
            </p>
            
            <div className="pt-8">
              <a 
                href="mailto:4brotherstransportandlogistic@gmail.com" 
            className="bg-red-600 group inline-flex items-center gap-4 text-white px-6 py-4 rounded-full font-black text-sm tracking-tighter shadow-[0_20px_50px_rgba(220,38,38,0.3)] mx-auto uppercase  z-10 hover:bg-red-700 active:scale-95 hover:scale-105 transition-colors"
              >
                <Mail size={18} className="group-hover:animate-bounce" />
                Contact Office
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
    
  );
};

// --- REFINED MAIN PAGE ---
const AboutPage = () => {
  const stats = [
    { label: "Industry Experience", value: "10+", icon: Award, color: "text-blue-500" },
    { label: "Active Fleet", value: "50+", icon: Zap, color: "text-red-500" },
    { label: "Regional Reach", value: "30+", icon: Globe, color: "text-blue-500" },
    { label: "Client Loyalty", value: "98%", icon: Heart, color: "text-red-500" },
  ];

  const socialLinks = [
  { id: 1, name: "Instagram", icon: <SiInstagram />, link: "https://instagram.com/@the4brotherstransport", color: "rgb(225, 48, 108)" },
  { id: 3, name: "Facebook", icon: <SiFacebook />, link: "https://facebook.com/the4brotherstransport", color: "rgb(24, 119, 242)" },
  { id: 4, name: "WhatsApp", icon: <SiWhatsapp/>, link: "https://wa.me/2348146007875?text=Hello%204Brothers", color: 'rgb(59, 253, 0)' },
  { id: 5, name: "TickTock", icon: <SiTiktok />, link: "https://ticktock.com/@the4brotherstransport", color: "rgb(1, 1, 1)" },
];

  return (
    <main className="min-h-screen bg-white selection:bg-red-600 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <section className="pt-40 pb-24 px-6 relative overflow-hidden">
        {/* Aesthetic Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.span 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-slate-50 border border-slate-200 text-slate-500 font-bold text-[10px] uppercase tracking-[0.3em] mb-10"
          >
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
            Established 2026
          </motion.span>
          
          <h1 className="text-6xl md:text-9xl font-black text-blue-950 tracking-[-0.06em] leading-[0.85] mb-12">
            Moving <span className="text-red-600">Nigeria</span> <br /> 
            With <span className="relative inline-block">
              Purpose
              <svg className="absolute -bottom-4 left-0 w-full h-4 text-red-600" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="6" fill="none"/>
              </svg>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed mb-16">
            4Brothers is more than a logistics firm. We are a premier supply chain partner dedicated to the spirit of brotherhood and industrial speed.
          </p>

          {/* Centered Address Badge */}
    <a 
      href="https://www.google.com/maps/search/?api=1&query=No+7+24+Crescent+2nd+Avenue+Guzape+Abuja"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex w-fit items-center gap-3 rounded-full border border-slate-200 px-6 py-3 mb-8 shadow-sm hover:border-red-400 hover:bg-red-50/30 transition-all group"
    >
      <MapPin className="text-red-600 group-hover:scale-110 transition-transform" size={18} />
      <span className="text-sm font-bold uppercase tracking-tight text-slate-600">
        No. 7, 24 Crescent 2nd Avenue, Federal Housing Authority, Abuja
      </span>
    </a>
        </motion.div>
      </section>

      {/* 2. CEO SECTION */}
      <CeoHero />

      {/* 3. CORE VALUES - BENTO GRID */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 mb-32">
        <motion.div 
          whileHover={{ y: -10 }}
          className="md:col-span-8 bg-slate-950 p-16 rounded-[56px] text-white relative overflow-hidden group border border-white/5"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] group-hover:bg-blue-600/20 transition-colors"></div>
          <Users className="text-red-600 mb-10" size={48} />
          <h3 className="text-5xl font-black mb-8 tracking-tighter italic">The 4Brothers Bond</h3>
          <p className="text-slate-400 leading-relaxed text-xl max-w-xl font-medium">
            Founded in Abuja, we operate on deep-rooted family values. Every delivery is handled with the personal care of a brother, ensuring your cargo is never just a tracking number.
          </p>
        </motion.div>

        <motion.div 
          whileHover={{ y: -10 }}
          className="md:col-span-4 bg-red-600 p-16 rounded-[56px] text-white flex flex-col justify-end shadow-2xl shadow-red-900/20"
        >
          <ShieldCheck className="text-white mb-10" size={48} />
          <h3 className="text-4xl font-black mb-6 leading-none tracking-tighter">Reliability <br /> Guaranteed.</h3>
          <p className="text-red-100 leading-relaxed font-bold text-lg opacity-80">
            Real-time tracking. Zero excuses. That is the 4Brothers way.
          </p>
        </motion.div>
      </section>

      {/* 4. STATS SECTION */}
      <section className="py-32 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-center p-8 rounded-[40px] border border-white/5 hover:bg-white/2 transition-colors group"
              >
                <div className={`flex justify-center mb-8 ${stat.color} group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon size={40} strokeWidth={2} />
                </div>
                <p className="text-6xl font-black text-white mb-3 tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

          <FAQ />

          {/* 3. SOCIAL*/}
        <section className="max-w-5xl mx-auto px-6 pb-24">
            <div className="bg-slate-950 rounded-[80px] p-16 md:p-32 text-center relative overflow-hidden border border-white/5 shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
              
              <h2 className="text-6xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-[0.85] relative z-10">
                <span className="text-red-600">Ready</span> to <br /> Scale <span className="text-red-600">Up?</span>
              </h2>
                <h4 className="text-3xl text-red-600 font-bold mb-10">Connect <span className="text-white">With </span>Us</h4>
          {/* 1. SOCIAL ICONS CONTAINER: Centered on top */}
        <div className="flex justify-center items-center gap-4 mb-4 relative z-10">
          {[SiFacebook, SiInstagram, SiTiktok, SiWhatsapp].map((Icon, i) => (
            <motion.a
              key={i}
              whileHover={{ y: -5, backgroundColor: '#dc2626' }} 
              className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center transition-colors border border-white/10"
              href="#"
            >
              <Icon size={20} className="text-white" />
            </motion.a>
          ))}
        </div>
            </div>
          </section>
      
    </main>
  );
};

export default AboutPage;
