"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone, User, LogOut } from "lucide-react";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // NextAuth Session Hooks
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  const phoneNumber = "+2348146007875";
  const whatsappUrl = `https://wa.me/2348146007875?text=${encodeURIComponent(
    "Hello 4Brothers, I'm interested in your logistics services."
  )}`;

  return (
    <nav className="fixed w-full z-50 bg-slate-950 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-start py-0">
          <Link href="/" className=" font-black tracking-tightest ">
          <span className="text-xl font-light  text-blue-500">THE</span><span className="text-red-700 font-black z-50 text-3xl">4</span> <br /> <span className="text-white italic px-1  rounded-lg bg-red-700">BROTHERS</span>
          <br />
          <p className="text-[8px] font-light h-2 w-auto mb-2 "> TRANSPORT & LOGISTICS</p>
          </Link>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex gap-8">
            {['Home', 'Services', 'About', 'FAQs'].map((item) => (
              <Link
                key={item}
                href={
                  item === 'Home' ? '/' : 
                  item === 'About' ? '/about' : 
                  item === 'FAQs' ? '/about#faqs' : 
                  `/#${item.toLowerCase()}`
                }
                className="text-xl font-medium text-slate-400 hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="h-6 w-px bg-white/20" />

          {/* Auth Section (Desktop) */}
          <div className="flex items-center gap-4">
            {isLoading ? (
              <div className="h-10 w-24 bg-gray-800 rounded-xl animate-pulse"></div>
            ) : session?.user ? (
              // Logged In State
              <div className="flex items-center gap-4">
                <Link 
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full hover:border-gray-600 transition-all text-sm font-medium text-white"
                >
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center text-xs font-bold">
                    {session.user.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  Hi, {session.user.name?.split(' ')[0] || 'User'}
                </Link>
              </div>
            ) : (
              // Logged Out State
              <div className="flex items-center gap-3">
             <Link 
  href="/login" 
  className="flex items-center gap-2 text-xl border border-white font-medium text-gray-300 hover:text-white transition-colors px-3 py-2"
>
  <span>Sign In</span>
  <User size={22} />
</Link>
              </div>
            )}
          </div>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="lg:hidden flex items-center gap-4">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
        className="lg:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
      >
        <div className="flex flex-col p-8 gap-6">
          {['Home', 'Services', 'About', 'FAQs'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'FAQs' ? '/about#faqs' : `/#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl text-white font-light uppercase"
            >
              {item}
            </Link>
          ))}
          
          <hr className="border-white/10" />

          {/* Mobile Auth Section */}
          {isLoading ? (
             <div className="w-full h-14 bg-gray-800 rounded-xl animate-pulse"></div>
          ) : session?.user ? (
            // Logged In Mobile
            <div className="flex flex-col gap-3">
              <Link 
                href="/profile" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 border border-white/20 bg-gray-900 py-4 rounded-xl text-white font-bold"
              >
                <User size={18} /> Profile ({session.user.name?.split(' ')[0] || 'User'})
              </Link>
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  signOut({ callbackUrl: '/' });
                }}
                className="w-full flex items-center justify-center gap-2 border border-red-900/50 bg-red-950/30 text-red-500 py-4 rounded-xl font-bold"
              >
                <LogOut size={18} /> Sign Out
              </button>
            </div>
          ) : (
            // Logged Out Mobile
            <div className="flex flex-col gap-3">
              <Link 
                href="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-center border border-white/20 py-4 rounded-xl text-white font-bold"
              >
                Sign In
              </Link>
            </div>
          )}
          
          {/* Contact Buttons */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            <a href={`tel:${phoneNumber}`} className="flex items-center justify-center gap-2 bg-red-600 p-4 rounded-2xl font-bold text-sm text-white">
              <Phone size={18} /> Call
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white p-4 rounded-2xl font-bold text-sm">
              <SiWhatsapp size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;