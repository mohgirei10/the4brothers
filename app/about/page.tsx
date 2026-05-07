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
} from 'lucide-react';
import FAQ from "../components/FAQ";

// --- SUB-COMPONENT: CEO HERO CARD ---
const CeoHero = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden rounded-[64px] my-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl -mt-24 -mr-24 opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl -mb-24 -ml-24 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-[40px] p-8 md:p-16 shadow-2xl shadow-blue-950/5 grid grid-cols-1 md:grid-cols-[1fr,1.2fr] gap-12 lg:gap-20 items-center border border-slate-100"
        >
          {/* CEO IMAGE */}
          <div className="relative group mx-auto md:mx-0">
            <div className="absolute -inset-4 bg-slate-900 rounded-4xl rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-500"></div>
            <div className="relative w-72 h-80 lg:w-90 lg:h-100 bg-slate-100 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <img 
                src="profile.png"
                alt="CEO" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-5 rounded-3xl shadow-lg border-4 border-white flex items-center gap-3">
              <Target size={24} />
              <span className="font-bold text-lg text-white">LEADERSHIP</span>
            </div>
          </div>

          {/* CEO CONTENT */}
          <div className="space-y-8">
            <header>
              <div className="bg-slate-100 text-slate-500 px-5 py-2 rounded-full w-fit mb-3 text-xs font-black uppercase tracking-widest">CEO & Founder, 4Brothers Logistics </div>
              <h2 className="text-5xl lg:text-6xl font-black text-slate-800 tracking-tighter leading-tight">Suleiman<br />Bakari<br/>Faruk</h2>
              <p className="text-xl uppercase font-bold text-blue-900 mt-2">
                Bsc. Business management, mau yola. <br />
Diploma in Transport and Logistics. <br />
Nigerian institute of transport technology zaria
                </p>
            </header>

            {/* <div className="relative">
              <Quote className="absolute -top-4 -left-4 text-blue-50" size={56} strokeWidth={4}/>
              <p className="relative z-10 text-xl md:text-2xl text-slate-700 font-medium leading-relaxed italic">
                "Our vision for 4BROTHERS is simple: transparency, trust, and technological innovation. We aren't just moving cargo; we are building partnerships."
              </p>
            </div> */}

            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              Suleiman brings over many years of operational excellence in Nigerian logistics. Before co-founding 4Brothers, he scaled supply chains for major global brands.
            </p>

            <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
              <p className="text-sm font-black text-slate-400 uppercase tracking-wide">Connect:</p>
              <a href="mailto:ceo@4brotherslogistics.com" className="w-12 h-12 rounded-full border border-slate-200 text-slate-500 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
const AboutPage = () => {
  const stats = [
    { label: "Years of Service", value: "10+", icon: Award },
    { label: "Fleet Size", value: "50+", icon: Zap },
    { label: "States Covered", value: "36", icon: Globe },
    { label: "Happy Clients", value: "5k+", icon: Heart },
  ];

  return (
    <main className="min-h-screen bg-white pt-20">
      
      {/* 1. HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 text-center mb-24">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block"
        >
          Our Story
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black text-blue-950 tracking-tighter"
        >
          Built on Trust. <br /> Driven by <span className="text-red-600">Integrity.</span>
        </motion.h1>
      </section>

      {/* 3. CEO HERO SECTION (Integrated Here) */}
      <CeoHero />

       {/* 2. MISSION & VISION */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-slate-50 p-12 rounded-[40px] border border-slate-100"
        >
          <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-200">
            <ShieldCheck size={28} />
          </div>
          <h3 className="text-3xl font-black text-blue-950 mb-6">Our Mission</h3>
          <p className="text-slate-500 leading-relaxed font-medium text-lg">
            To revolutionize the Nigerian logistics landscape by providing a seamless, reliable, and technology-driven transportation network.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-blue-950 p-12 rounded-[40px] text-white"
        >
          <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-red-900/40">
            <Users size={28} />
          </div>
          <h3 className="text-3xl font-black mb-6 text-white">The 4Brothers Bond</h3>
          <p className="text-blue-100/70 leading-relaxed font-medium text-lg">
            Founded in Abuja, 4Brothers is built on family values. We treat every package as if it were our own.
          </p>
        </motion.div>
      </section>

      {/* 4. STATS GRID */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-4xl shadow-sm border border-slate-100 text-center"
              >
                <div className="flex justify-center mb-4 text-blue-600">
                  <stat.icon size={32} strokeWidth={2.5} />
                </div>
                <p className="text-4xl font-black text-blue-950 mb-2">{stat.value}</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQ SECTION */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
         <FAQ />
      </div>

      {/* 6. CALL TO ACTION */}
      <section className="max-w-5xl mx-auto px-6 py-32 text-center">
        <div className="bg-blue-950 rounded-[48px] p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -ml-20 -mt-20"></div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-8 relative z-10">Ready to move with the best?</h2>
          <button className="bg-red-600 text-white px-12 py-5 rounded-full font-black text-sm tracking-[0.2em] shadow-2xl shadow-red-900/40 hover:scale-105 transition-transform uppercase relative z-10">
            Work With Us
          </button>
        </div>
      </section>
      
    </main>
  );
};

export default AboutPage;