"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react"; // Added Phone icon
import Link from "next/link";
import {SiWhatsapp} from "react-icons/si";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const phoneNumber = "+2348146007875"; // Using your number from the WhatsApp link
  const whatsappUrl = `https://wa.me/2348146007875?text=${encodeURIComponent("Hello 4Brothers, I'm interested in your logistics services.")}`;

  return (
    <nav className="fixed w-full z-50 bg-slate-900 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/">
            <img src="/logo.png" alt="4Brothers Logo" className="h-10 md:h-14 w-auto object-contain cursor-pointer" />
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex text-[15px] items-center py-2 px-4 gap-6">
          {['Home', 'Services', 'About', 'FAQs'].map((item) => (
          <Link
    key={item}
    href={
      item === 'Home' ? '/' : 
      item === 'About' ? '/about' : 
      item === 'FAQs' ? '/about#faqs' : // Force it to go to the About page FAQ section
      `/#${item.toLowerCase()}`
    }
    onClick={() => setIsMenuOpen(false)}
              className="text-[12px] font-black text-white hover:text-red-600 uppercase tracking-[0.2em] transition-colors"
            >
              {item}
            </Link>
          ))}

          {/* CALL REDIRECT ICON */}
          <motion.a 
            href={whatsappUrl}
            whileHover={{ scale: 1.1 }}
            className="p-2 text-white  bg-green-500 rounded-full hover:transition-colors"
            title="Call Support"
          >
           <SiWhatsapp/>
          </motion.a>

          {/* WHATSAPP CTA */}
          <motion.a 
            href={`tel:${phoneNumber}`}
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black text-xs tracking-widest shadow-l shadow-red-200 transition-all uppercase"
          >
            Contact Us
          </motion.a>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden flex items-center gap-4">
           {/* Direct Call for Mobile (Very important for logistics) */}
          <a href={`tel:${phoneNumber}`} className="text-red-600 p-2">
            <Phone size={24} fill="currentColor" />
          </a>
          <button onClick={toggleMenu} className=" text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden bg-slate-800 border-b border-slate-100 overflow-hidden"
      >
        <div className="flex flex-col p-8 gap-6">
          {['Home', 'Services', 'About', 'FAQs'].map((item) => (
      <Link
    key={item}
    href={
      item === 'Home' ? '/' : 
      item === 'About' ? '/about' : 
      item === 'FAQs' ? '/about#faqs' : // Force it to go to the About page FAQ section
      `/#${item.toLowerCase()}`
    }
    onClick={() => setIsMenuOpen(false)}
              className="text-xl text-white font-bold uppercase tracking-tighter"
            >
              {item}
            </Link>
          ))}
          <hr className="border-slate-100" />
          
          {/* Mobile Call & WhatsApp Actions */}
          <div className="grid grid-cols-2 gap-4">
            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-red-600 p-4 rounded-2xl font-bold text-sm">
              <Phone size={18} /> Call
            </a>
            <a href={whatsappUrl} target="_blank" className="flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-2xl font-bold text-sm">
              <SiWhatsapp/>
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;