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
  { id: 5, name: "TickTock", icon: <SiTiktok />, link: "https://ticktock.com/@the4brotherstransport", color: "rgb(1, 1, 1)" },
];
import ImageCarousel from './components/ImageCarousel';
import { motion, Variants } from 'framer-motion';
import { 
  Truck, Package, MapPin, Clock, ShieldCheck, 
  Phone, ChevronRight, Globe, Warehouse, Zap, Users,
  Menu,
  X,
  Mail,
  MessageCircle
} from 'lucide-react';
import React from "react";
import Link from 'next/link';
import BookingForm from "./components/BookingForm";
import FleetGallery from "./components/FleetGallery";
import ShipmentTracker from "./components/ShipmentTracker";

const PremiumLogisticsUI = () => {
  // Animation Variants
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
      type: "spring", // Now TypeScript knows this is the specific "spring" type
      stiffness: 100 
    } 
  }
};

  const services = [
    { t: "Courier Dispatch", i: Package, c: "bg-blue-50 text-blue-600", desc: "Secure handling for small parcels and critical docs." },
    { t: "Interstate Delivery", i: Globe, c: "bg-red-50 text-red-600", desc: "Reliable freight movement across all 36 Nigerian states." },
    { t: "Relocation", i: Truck, c: "bg-slate-900 text-white", desc: "Expert home and office moving with zero-damage guarantee." },
    { t: "Warehousing", i: Warehouse, c: "bg-blue-50 text-blue-600", desc: "Safe storage solutions with real-time inventory tracking." },
    { t: "Express Delivery", i: Zap, c: "bg-red-50 text-red-600", desc: "Priority shipments delivered within the shortest possible time." },
    { t: "Door-to-Door", i: MapPin, c: "bg-blue-900 text-white", desc: "End-to-end logistics from your doorstep to theirs." }
  ];


const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
  <div className="min-h-screen bg-[#FAFBFF] font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-700 overflow-x-hidden">
      
      {/* 2. HERO SECTION WITH PATTERNED BACKGROUND */}
      <section id="home" className="relative pt-32 pb-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[40px_40px] opacity-25" />
        <div className="absolute top-0 right-0 -z-10 w-15050 bg-blue-100/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.span variants={itemVariants} className="inline-block px-4 py-1.5 rounded-lg bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 shadow-lg shadow-blue-200">
              Nationwide Logistics Partner
            </motion.span>
            
          <motion.h1 
  variants={itemVariants} 
  className="text-6xl lg:text-[90px] font-black text-blue-950 leading-[0.85] mb-8 tracking-tighter"
>
  Fast. Reliable. <br/>
  <span className="text-red-600">On Time.</span>
</motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-500 max-w-lg leading-relaxed mb-12 font-medium">
              We provide smart logistics solutions that remove the stress from your supply chain. Moving across Abuja or any state in Nigeria? We’ve got you covered.
            </motion.p>
            
            {/* Professional Tracking UI */}
            <motion.div variants={itemVariants} className="relative group">
   
             
                 <motion.button 
              onClick={() => {
              const phoneNumber = "2348146007875"; // International format without the '+'
              const message = encodeURIComponent("Hello 4Brothers! I'd like to inquire about a shipment.");
              window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent("Hello 4Brothers, I'm interested in your logistics services and would like to get a quote.")}`, '_blank');
  }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-red-600 hover:bg-blue-600 text-white font-black px-3 hover:cursor-pointer py-5 rounded-full transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-red-200 flex items-center justify-center gap-1 uppercase tracking-widest text-lg"
          >
            Book Now <ChevronRight size={18} />
          </motion.button>

            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] border-12 border-red-600 relative z-10">
                  <ImageCarousel />
            </div>
            
            {/* Floating Trust Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-6 -right-6 bg-red-600 p-6 rounded-3xl shadow-2xl shadow-red-200 z-20 text-white text-center hidden md:block"
            >
              <ShieldCheck size={32} className="mx-auto mb-2" />
              <p className="text-xs font-black uppercase tracking-widest">Secure</p>
              <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Delivery</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
       <ShipmentTracker />
       <BookingForm />

      {/* 3. BENTO SERVICES GRID */}
      <section id="services" className="py-32 bg-white">
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
              Our Core Expertise
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
                  className="group p-12 bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 rounded-[40px] transition-all duration-500 cursor-pointer hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)]"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform duration-500 ${s.c}`}>
                    <IconComp size={30} strokeWidth={2.5} />
                  </div>
                  <h4 className="text-2xl font-black text-blue-950 mb-4">{s.t}</h4>
                  <p className="text-slate-500 leading-relaxed font-semibold text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.desc}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-blue-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  <a 
  href={`https://wa.me/2348146007875?text=${encodeURIComponent("I'm at the Guzape branch and need assistance.")}`}
  target="_blank"
  className="mx-auto flex w-fit items-center gap-3 rounded-full border border-slate-200 px-6 py-3 mb-8 shadow-sm hover:border-green-400 transition-colors group"
>
  <MessageCircle className="text-green-500 group-hover:scale-110 transition-transform" size={18} />
  <span className="text-sm font-bold uppercase tracking-tight text-slate-600">
Contact Us  </span>
</a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        
      </section>

       <FleetGallery />

      {/* 4. ABOUT SECTION - THE STORY & TRUST */}
      <section id="about" className="py-32 relative overflow-hidden bg-blue-950">
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
          <motion.div variants={itemVariants} className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-black text-blue-950 mb-2">Our Mission</h4>
            <p className="text-sm text-slate-500 font-medium">To provide seamless, tech-driven logistics that bridge the gap between Nigerian businesses and their customers.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="p-6 bg-white rounded-3xl border border-slate-200/60 shadow-sm">
            <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center text-red-600 mb-4">
              <Users size={20} />
            </div>
            <h4 className="font-black text-blue-950 mb-2">Our People</h4>
            <p className="text-sm text-slate-500 font-medium">A dedicated team of professional drivers and support staff working 24/7 to ensure your cargo is safe.</p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
      </section>

      {/* 5. CONTACT & INQUIRY SECTION */}
      <section id="contact" className="py-32 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-16 items-start">
      
      {/* Left Side: Contact Information */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.span variants={itemVariants} className="text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-6 block">
          Get in Touch
        </motion.span>
        <motion.h2 variants={itemVariants} className="text-5xl font-black text-blue-950 mb-8 tracking-tighter">
          Ready to start <br/> your shipment?
        </motion.h2>
        <motion.p variants={itemVariants} className="text-lg text-slate-500 font-medium mb-12 max-w-md">
          Have a question about our rates or need a custom logistics plan? Our team is standing by to help.
        </motion.p>

        {/* Contact Cards */}
        <div className="space-y-6 uppercase">
          {[
            { icon: Phone, title: "Call Us Now", detail: "08146007875", color: "text-blue-600", bg: "bg-blue-50" },
            { icon: MapPin, title: "Head Office", detail: "No. 7, 24 Crescent 2nd Avenue, Federal Housing Authority Guzape, Abuja, Nigeria.", color: "text-red-600", bg: "bg-red-50" },
            { icon: Clock, title: "Working Hours", detail: "24/7 Operations", color: "text-slate-900", bg: "bg-slate-100" }
          ].map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="flex items-center gap-6 p-6 rounded-3xl border border-slate-100 hover:border-blue-100 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center transition-transform group-hover:scale-110`}>
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</p>
                <p className="text-xl font-bold text-blue-950">{item.detail}</p>
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
        className="bg-blue-950 p-10 lg:p-14 rounded-[48px] shadow-2xl relative overflow-hidden"
      >
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2" />
        
        <form className="relative z-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-blue-200 uppercase tracking-widest ml-1">Full Name</label>
              <input type="text" placeholder="Enter your full name" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-blue-200 uppercase tracking-widest ml-1">Phone Number</label>
              <input type="tel" placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-blue-200 uppercase tracking-widest ml-1">Service Required</label>
            <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white/50 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium appearance-none">
              <option className="bg-blue-950 text-white">Courier Dispatch</option>
              <option className="bg-blue-950 text-white">Interstate Delivery</option>
              <option className="bg-blue-950 text-white">Express Delivery</option>
              <option className="bg-blue-950 text-white">Relocation</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-blue-200 uppercase tracking-widest ml-1">Your Message</label>
            <textarea rows={4} placeholder="Tell us about your shipment..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-red-500 focus:bg-white/10 transition-all font-medium resize-none"></textarea>
          </div>

     <a 
  href="mailto:info@4brotherslogistics.com?subject=Inquiry"
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