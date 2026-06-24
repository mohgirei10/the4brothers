"use client";

import { 
  SiInstagram, 
  SiFacebook ,
  SiWhatsapp, 
  SiTiktok
} from "react-icons/si";

const socialLinks = [
  { id: 1, name: "Instagram", icon: <SiInstagram />, link: "https://instagram.com/@the4brotherstransport", color: "rgb(225, 48, 108)" },
  { id: 3, name: "Facebook", icon: <SiFacebook />, link: "https://facebook.com/the4brotherstransport", color: "rgb(24, 119, 242)" },
  { id: 4, name: "WhatsApp", icon: <SiWhatsapp/>, link: "https://wa.me/2348146007875?text=Hello%204Brothers", color: 'rgb(59, 253, 0)' },
  { id: 5, name: "TickTock", icon: <SiTiktok />, link: "https://ticktok.com/@the4brotherstransport", color: "rgb(1, 1, 1)" },
];
import ImageCarousel from './components/ImageCarousel';
import { motion, Variants } from 'framer-motion';
import { 
  Truck, Package, MapPin, Clock, ShieldCheck, 
  Phone, ChevronRight, Globe, Warehouse, Zap, Users,
  X,
  Mail,
  MessageCircle,
  ArrowRight,
  ChevronDown,
  Car
} from 'lucide-react';
import React from "react";
import Link from 'next/link';
import BookingForm from "./components/BookingForm";

const PremiumLogisticsUI = () => {
 const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { 
      type: "spring",
      stiffness: 100 
    } 
  }
};

  const services = [
    { t: "Courier Dispatch", i: Package, c: "bg-blue-50 text-blue-600", desc: "Secure handling for small parcels and critical docs." },
    { t: "Interstate Delivery", i: Globe, c: "bg-red-50 text-red-600", desc: "Reliable freight movement across all 36 Nigerian states." },
    { t: "Relocation", i: Truck, c: "bg-slate-900 text-white", desc: "Expert home and office moving with zero-damage guarantee." },
    { t: "Warehousing", i: Warehouse, c: "bg-blue-50 text-blue-600", desc: "Safe storage solutions with real-time inventory tracking." },
    { t: "Express Delivery", i: Zap, c: "bg-red-50 text-red-600", desc: "Priority packages delivered within the shortest possible time." },
    { t: "Door-to-Door", i: MapPin, c: "bg-blue-900 text-white", desc: "End-to-end logistics from your doorstep to theirs." }
  ];

const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
  <div className="min-h-screen bg-[#FAFBFF] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
{/* 2. HERO SECTION */}
<section id="home" className="relative w-full pt-24 pb-12 overflow-x-hidden min-h-dvh lg:min-h-[80vh] flex flex-col justify-center bg-slate-50">
  <div className="absolute left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]  opacity-20"></div>

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10 w-full">
    
    {/* LEFT COLUMN: Text & Interactive CTA */}
    <motion.div initial="hidden" animate="visible" variants={containerVariants}>
      <motion.span variants={itemVariants} className="inline-block px-5 py-2 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-blue-200 border border-blue-500">
        Nationwide Logistics Partner
      </motion.span>
      
      <motion.h1 
        variants={itemVariants} 
        className="text-5xl md:text-7xl lg:text-[90px] font-black text-red-600 leading-[0.95] md:leading-[0.85] tracking-tighter"
      >
        Fast. <br /><span className="text-blue-600">Reliable.</span>  <br/>
        <span className="relative inline-block text-red-600">
          On Time.
          <svg className="absolute -bottom-2 left-0 w-full h-2 text-blue-600 mb-2" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 5 Q 50 0 100 5" stroke="currentColor" strokeWidth="4" fill="none"/>
          </svg>
        </span>
      </motion.h1>
      
      <motion.p variants={itemVariants} className="text-base mt-2 md:text-lg text-slate-600 max-w-lg leading-relaxed mb-8 font-medium">
        We provide smart logistics solutions that remove the stress from your supply chain. Moving across Abuja or any state in Nigeria? We’ve got you covered.
      </motion.p>
      
      {/* WA.ME REDIRECT BUTTON */}
      <motion.div variants={itemVariants}>
         <motion.a 
          href={`https://wa.me/2348146007875?text=${encodeURIComponent("Hello 4Brothers, I'm interested in your logistics services and would like to get a quote.")}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03, backgroundColor: '#1d4ed8' }} 
          whileTap={{ scale: 0.98 }}
          className="w-full sm:w-[50%] mt-12 bg-red-600 text-white font-black px-5 py-3 rounded-full transition-all shadow-2xl shadow-red-200 flex items-center justify-center uppercase  text-md group"
        >
          Book Now <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>
      </motion.div>
    </motion.div>

    {/* RIGHT COLUMN: Interactive Media Deck */}
    <motion.div 
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mt-12 lg:mt-0"
    >
      <div className="rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_60px_120px_-20px_rgba(30,58,138,0.2)] border-8 md:border-16 border-red-600 relative z-10 bg-white">
        <div className="w-full aspect-4/3 bg-slate-100 flex items-center justify-center text-slate-500">
          <ImageCarousel />
        </div>
      </div>
      
      {/* --- FIXED TYPESCRIPT ERROR: Moved responsive sizing into standard classes --- */}
      <motion.div 
        animate={{ y: [0, -12, 0] }} 
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-10 -right-4 md:-right-8 bg-white p-4 md:p-6 rounded-3xl shadow-[0_32px_64px_-10px_rgba(0,0,0,0.1)] z-20 hidden sm:flex items-center gap-4 border border-slate-100"
      >
        <div className="w-12 h-12 md:w-16 md:h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-red-100">
          <ShieldCheck className="w-7 h-7 md:w-9 md:h-9" strokeWidth={2.5} />
        </div>
        <div>
          <p className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 mb-1">Secure</p>
          <p className="text-lg md:text-xl font-extrabold text-blue-950 tracking-tight leading-none">Delivery</p>
        </div>
      </motion.div>
    </motion.div>

  </div>
</section>

<BookingForm />

      {/* Centered Address Badge */}
    <a 
      href="https://www.google.com/maps/search/?api=1&query=No+7+24+Crescent+2nd+Avenue+Guzape+Abuja"
      target="_blank"
      rel="noopener noreferrer"
      className="mx-auto flex w-fit items-center gap-3 mt-12 rounded-full border border-slate-200 px-6 py-3 shadow-sm hover:border-red-400 hover:bg-red-50/30 transition-all group"
    >
      <MapPin className="text-red-600 group-hover:scale-110 transition-transform" size={18} />
      <span className="text-sm font-bold uppercase tracking-tight text-slate-600">
        No. 7, 24 Crescent 2nd Avenue, Federal Housing Authority, Abuja
      </span>
    </a>

      {/* 3. SOCIAL*/}
    <section className="max-w-5xl mx-auto px-6 py-6 pb-24 mt-12">
        <div className="bg-slate-900 rounded-[50px] p-8 md:p-12 text-center relative overflow-hidden border border-white/5 shadow-2xl">
                {/* ✅ 3. FIXED BACKGROUND: Moved to section level so it covers the whole screen */}
<div className="absolute bottom-2 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] object-cover  opacity-20"></div>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-12 tracking-tighter leading-[0.85] relative z-10">
            <span className="text-red-600">Ready</span> to <br /> Scale <span className="text-red-600">Up?</span>
          </h2>
            <h4 className="text-3xl text-red-600 font-black mb-10">Connect <span className="text-white">With </span>Us</h4>
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

      {/* 3. BENTO SERVICES GRID */}
      <section id="services" className="py-12 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">
            <motion.h2 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6"
            >
              Excellence in Motion
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-blue-950"
            >
              Our Core Services
            </motion.h3>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((s, idx) => {
              const IconComp = s.i;
              return (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -12 }}
                  className="group p-12 bg-slate-950 hover:bg-red-600 border hover:text-slate-900 border-transparent hover:border-slate-150 rounded-[40px] transition-all duration-500 cursor-pointer hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,1)]"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500 ${s.c}`}>
                    <IconComp size={30} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-2xl font-black text-white mb-4">{s.t}</h4>
                  <p className="text-zinc-300 leading-relaxed font-semibold text-sm opacity-80 group-hover:opacity-100  transition-opacity">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-green-500 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  <a 
  href={`https://wa.me/2348146007875?text=${encodeURIComponent("I'm at the Guzape branch and need assistance.")}`}
  target="_blank"
  className="mx-auto flex w-fit items-center gap-3 rounded-full border border-green-500 px-6 py-3 mb-8 shadow-sm transition-colors group"
>
  <SiWhatsapp className="text-green-500 group-hover:scale-110 transition-transform" size={18} />
  <span className="text-sm font-bold uppercase tracking-tight text-green-500">
Contact Us  </span>
</a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
      </section>

      {/* 4. ABOUT SECTION - THE STORY & TRUST */}
   <section id="about" className="py-32 relative overflow-hidden bg-slate-950">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      
      {/* Visual Side: Image Composition */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
       <div className="max-w-7xl mx-auto rounded-[40px] overflow-hidden shadow-2xl border-8 border-red-600 h-100">
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126093.84155106297!2d7.36195438671875!3d9.07000570000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0baf7ad48fd5%3A0x53d10f2747d97488!2sAbuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1710555000000!5m2!1sen!2sng" 
    width="100%" 
    height="100%" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
    className="grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
  />
</div>
        {/* Decorative background element */}
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-red-600 rounded-[30px] -z-10 opacity-10" />
        
        {/* Floating Stat Card */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-6 -right-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 z-20 max-w-60"
        >
          <p className="text-5xl font-black text-blue-900 mb-2">36</p>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-tight">
            States Covered Across Nigeria
          </p>
        </motion.div>
      </motion.div>

      {/* Content Side */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.span variants={itemVariants} className="text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-6 block">
          Behind the Wheels
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
          Nigeria's Most Reliable <br/> Logistics Network.
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-slate-400 font-medium leading-relaxed mb-10">
          Founded on the principles of speed and integrity, 4Brothers Transport & Logistics has grown from a local Abuja courier to a nationwide powerhouse. We don't just move boxes; we move businesses, homes, and dreams.
        </motion.p>

        {/* Mission / Vision Mini-Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div variants={itemVariants} className="p-6 bg-red-600 rounded-3xl border border-slate-900 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-900 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-black text-blue-950 mb-2">Our Mission</h4>
            <p className="text-sm text-slate-50 font-medium">To provide seamless, tech-driven logistics that bridge the gap between Nigerian businesses and their customers.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-red-600 rounded-3xl border border-slate-900 shadow-sm">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
              <Users size={20} />
            </div>
            <h4 className="font-black text-blue-950 mb-2">Our People</h4>
            <p className="text-sm text-slate-50 font-medium">A dedicated team of professional drivers and support staff working 24/7 to ensure your cargo is safe.</p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
      </section>

      {/* 5. CONTACT & INQUIRY SECTION */}
  <section id="contact" className=" bg-white">
    <div className="absolute  h-full w-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]  opacity-20"></div>

  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Side: Contact Information */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-black text-blue-950 mb-2 mt-2 uppercase tracking-tighter">
         <span className="text-blue-950">fast</span>,<span className="text-red-600 ">reliable</span>, and <span className="text-red-600">budget-friendly</span> services.
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-slate-500 font-medium mb-12 max-w-md">
          Have a question about our rates or need a custom logistics plan? Our team is standing by to help.
        </motion.p>

        {/* Contact Cards */}
   <div className="space-y-2 uppercase">
  {[
    { 
      icon: Phone, 
      title: "Call Us Now", 
      detail: (
        <div className="flex flex-col space-y-1">
          <span>0814 600 7875</span>
          <span>0905 500 6699</span>
          <span>0916 505 9691</span>
        </div>
      ), 
      color: "text-blue-600", 
      bg: "bg-blue-50" 
    },
    { 
      icon: MapPin, 
      title: "Head Office", 
      detail: "No. 7, 24 Crescent 2nd Avenue, Federal Housing Authority Guzape, Abuja, Nigeria.", 
      color: "text-red-600", 
      bg: "bg-red-50" 
    },
    { 
      icon: Clock, 
      title: "Working Hours", 
      detail: "24/7 Operations", 
      color: "text-slate-900", 
      bg: "bg-slate-100" 
    }
  ].map((item, i) => (
    <motion.div 
      key={i}
      variants={itemVariants}
      whileHover={{ x: 10 }}
      className="flex items-center gap-2 p-6 rounded-3xl border mb-3 border-slate-800 hover:border-red-600 hover:shadow-lg transition-all cursor-pointer group"
    >
      <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-transform group-hover:scale-110 shrink-0`}>
        <item.icon size={24} />
      </div>
      <div>
        <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
        <div className="text-xl font-bold text-blue-950">{item.detail}</div>
      </div>
    </motion.div>
  ))}
</div>
      </motion.div>

      {/* Right Side: Inquiry Form */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-slate-950 p-6 lg:p-12 rounded-[48px] shadow-2xl relative mt-4 mb-4 overflow-hidden"
      >
        <span className="text-red-600 font-black text-4xl uppercase tracking-tight mb-4 block">
          Get in Touch
        </span>
        {/* Background Glow */}
        <div className="absolute top-0 right-0 py-12 bg-slate-950 rounded-full  -translate-y-1/2 translate-x-1/2" />
        
        <form className="relative z-10 space-y-2" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-2">
            <div className="space-y-2">
              <label className="text-xs font-black text-white uppercase tracking-widest ml-1">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-white uppercase tracking-widest ml-1">Phone Number</label>
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium" />
            </div>
          </div>

        <div className="space-y-2 ">
                           <label className="text-xs font-black text-white uppercase tracking-widest ml-1 bg-white/5 ">
                      Vehicle Type
                    </label>
                    <select 
                         className='w-full bg-white/5 border p-6 border-white/10 rounded-2xl px-4 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium' >
                      <option className="hover:cursor-pointer bg-slate-950 text-zinc-400">Motorbike(Rider)</option>
                      <option className="hover:cursor-pointer bg-slate-950 text-zinc-400">Tricycle</option>
                     <option className="hover:cursor-pointer bg-slate-950 text-zinc-400">Van</option>
                     <option className="hover:cursor-pointer bg-slate-950 text-zinc-400">Lorry</option>
                    </select>
                  </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-white uppercase tracking-widest ml-1">
              Your Message</label>
            <textarea rows={2} placeholder="Tell us about your package..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium resize-none"></textarea>
          </div>

     <a 
  href="mailto:4brotherstransportandlogistic@gmail.com?subject=Inquiry"
  className="mx-auto flex w-fit items-center gap-5 rounded-xl bg-red-600 px-8 py-4 mb-8 shadow-sm  transition-colors group"
>
  <Mail className="text-slate-100 group-hover:scale-110 transition-transform" size={18} />
  <span className="text-sm font-bold uppercase tracking-tight text-slate-100">
    Send Inquiry 
  </span>
</a>
        </form>
      </motion.div>

    </div>
  </div>
  </section>

    </div>
  );
};

export default PremiumLogisticsUI;