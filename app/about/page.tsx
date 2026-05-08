"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Users, 
  Globe, 
  Award, 
  Zap, 
  Heart, 
  Mail, 
  Quote, 
  Target,
  ArrowRight,
  MapPin,
  Phone
} from 'lucide-react';
import FAQ from "../components/FAQ";

// --- REFINED SUB-COMPONENT: CEO HERO CARD ---
const CeoHero = () => {
  return (
  
      <section className="max-w-7xl mx-auto px-8 grid md:grid-cols-12 gap-6 mb-20 ">
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-7  rounded-xl relative overflow-hidden group"
        >  
       <span className="text-blue-950 font-black text-4xl uppercase tracking-tighter mb-4 block">CEO & Founder</span>
       <div className=" mx-auto rounded-[48px] overflow-hidden shadow-2xl border-5 border-slate-700 ">
        <img 
                src="profile.png"
                alt="CEO" 
                className="aspect-4/5 w-full h-fit object-cover transform transition-transform duration-700 hover:scale-105"
              />
           </div>       
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-5 h-150 bg-red-600 px-12 py-12 rounded-[48px] text-white flex flex-col justify-end"
        >
               <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-r from-slate-950  to-slate-500 tracking-tighter uppercase leading-[0.9] mb-4">
                  Suleiman <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-950 to-slate-500">
                Bakari <br />
              </span>
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-slate-950 to-slate-500">Faruq</span>
               </h2>
              <p className="text-lg text-slate-300 uppercase tracking-widest leading-relaxed max-w-xl">
                BSc, Business Management.</p>
              <p className="text-lg mt-4 text-slate-800 uppercase tracking-widest leading-relaxed max-w-xl">
              With a many years of logistics mastery in Abuja and beyond, Suleiman founded 4Brothers to solve the core problem of reliability in West African supply chains.
            </p>
            <div className="flex flex-wrap gap-4 pt-6">
              <a href="mailto:4brotherstransportandlogistic@gmail.com" className="flex items-center gap-3 bg-slate-950 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-800 transition-all active:scale-95 shadow-md ">
                <Mail size={18} />
                Contact Office
              </a>
            </div>
        </motion.div>
      </section>
  );
};

// --- REFINED MAIN PAGE ---
const AboutPage = () => {
  const stats = [
    { label: "Experience", value: "10+", icon: Award, color: "text-blue-600" },
    { label: "Modern Fleet", value: "50+", icon: Zap, color: "text-red-600" },
    { label: "Reach", value: "30+", icon: Globe, color: "text-blue-600" },
    { label: "Retention", value: "98%", icon: Heart, color: "text-red-600" },
  ];

  return (
    <main className="min-h-screen bg-white selection:bg-red-100 selection:text-red-600">
      
      {/* 1. ULTRA-MODERN HEADER */}
      <section className="pt-32 pb-20 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-2 px-6 rounded-full bg-red-600 text-slate-100 font-bold text-[12px] uppercase tracking-tighter mb-8 border border-slate-200">
            Established      2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black text-slate-800 tracking-[ -0.05em] leading-[0.9] mb-10">
            Moving <span className="text-red-600">Nigeria</span> <br /> 
            With <span className="relative">
              Purpose
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-600" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
            </span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            4Brothers Transport & Logistics is a premier supply chain partner dedicated to speed, security, and the spirit of brotherhood.
          </p>
        </motion.div>
  
<div className="mx-auto mt-2 flex w-fit items-center gap-3  px-6 py-3 mb-8">
<a 
  href="https://www.google.com/maps/search/?api=1&query=No+7+24+Crescent+2nd+Avenue+Guzape+Abuja"
  target="_blank"
  rel="noopener noreferrer"
  className="mx-auto flex w-fit items-center gap-3 rounded-full border border-slate-200 px-6 py-3 mb-8 shadow-sm hover:border-red-400 hover:bg-red-50/30 transition-all group"
>
  <MapPin className="text-red-600 group-hover:scale-110 transition-transform" size={18} />
  <span className="text-sm font-bold uppercase tracking-tight text-slate-600">
    No 7, 24 Crescent 2nd Avenue, Federal Housing Authority, Guzape.
  </span>
</a>
</div>
      </section>

 {/* 3. CEO HERO SECTION */}
      <CeoHero />

      {/* 2. CORE VALUES - BENTO GRID STYLE */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-6 mb-20">
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-7 bg-slate-950 p-12 rounded-[48px] text-white relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-colors"></div>
          <Users className="text-blue-500 mb-8" size={40} />
          <h3 className="text-4xl font-black mb-6">The 4Brothers Bond</h3>
          <p className="text-blue-100/60 leading-relaxed text-lg max-w-lg">
            Founded in Abuja, we operate on family values. Every shipment is handled with the personal care of a brother, ensuring your cargo is never just a number.
          </p>
         
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-5 bg-red-600 p-12 rounded-[48px] text-white flex flex-col justify-end"
        >
          <ShieldCheck className="text-white/80 mb-8" size={40} />
          <h3 className="text-4xl font-black mb-6 leading-tight">Our <br /> Guarantee</h3>
          <p className="text-red-100/80 leading-relaxed text-lg">
            100% Transparency. Real-time tracking. Zero excuses.
          </p>
        </motion.div>

      </section>

      {/* 4. STATS WITH GLASS EFFECT */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[40px] text-center group hover:bg-white/10 transition-colors"
              >
                <div className={`flex justify-center mb-6 ${stat.color} group-hover:scale-110 transition-transform`}>
                  <stat.icon size={36} strokeWidth={2.5} />
                </div>
                <p className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-slate-500 mt-4 font-medium">Everything you need to know about our operations.</p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* 6. REFINED CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="bg-slate-900 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tight leading-none">
            Ready for <br /> Seamless Logistics?
          </h2>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-600 text-white  hover:cursor-pointer px-12 py-6 rounded-full font-black text-sm tracking-[0.2em] shadow-2xl flex items-center gap-4 mx-auto uppercase"
          >
          Contact Us
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </motion.button>
        </div>
      </section>
      
    </main>
  );
};

export default AboutPage;