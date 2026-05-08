"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* LOGO */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-10 md:h-14 w-auto object-contain cursor-pointer" />
          </Link>
        </motion.div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-10">
          {['Home', 'Services', 'About'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'About' ? '/about' : `/#${item.toLowerCase()}`}
              className="text-sm font-bold text-blue-800 hover:text-red-800 uppercase tracking-widest transition-colors"
            >
              {item}
            </Link>
          ))}
          <button 
  className="bg-red-600 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl shadow-red-200 transition-all hover:scale-105 hover:cursor-pointer">
  <a href={`https://wa.me/2348146007875?text=${encodeURIComponent("Hello 4Brothers, I'm interested in your logistics services and would like to get a quote.")}`}
  target="_blank"
>CONTACT US
</a>
 </button>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="p-2 text-blue-800 font-bold">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
      >
        <div className="flex flex-col p-6 gap-6">
          {['Home', 'Services', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'About' ? '/about' : `/#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-bold text-slate-700 hover:text-blue-600 transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};
export default Navbar;