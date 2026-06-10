"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  SiInstagram, 
  SiFacebook,
  SiWhatsapp, 
  SiTiktok
} from "react-icons/si";
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

// ✅ Fixed spelling ("TikTok") and ensured data is ready for the map function
const socialLinks = [
  { id: 1, name: "Instagram", icon: <SiInstagram size={18} />, link: "https://instagram.com/the4brotherstransport", hoverColor: "hover:bg-pink-500" },
  { id: 2, name: "Facebook", icon: <SiFacebook size={18} />, link: "https://facebook.com/the4brotherstransport", hoverColor: "hover:bg-blue-600" },
  { id: 3, name: "WhatsApp", icon: <SiWhatsapp size={18} />, link: "https://wa.me/2348146007875?text=Hello%204Brothers", hoverColor: "hover:bg-green-500" },
  { id: 4, name: "TikTok", icon: <SiTiktok size={18} />, link: "https://tiktok.com/@the4brotherstransport", hoverColor: "hover:bg-zinc-900" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/#services' },
      { name: 'Contact', href: '/#contact' },
    ],
    support: [
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'FAQs', href: '/#faq' },
    ]
  };

  return (

<footer className="bg-slate-950 text-white pt-10 pb-32 md:pb-12 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
        
        {/* ✅ Upgraded Grid: 1 col mobile -> 12 cols desktop for perfect proportional spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-4">
          
          {/* BRAND SECTION */}
          <div className="lg:col-span-4 space-y-6">
            <img src="logo.png" alt="4Brothers" className="h-8 w-auto" />
            <p className="text-blue-200/60 leading-relaxed text-sm max-w-sm">
              Premium logistics and transport solutions based in Abuja. We move your business forward with speed, safety, and integrity.
            </p>
            <div className="flex gap-4 pt-2">
              {/* ✅ Now properly maps your socialLinks array so links actually work */}
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.name}
                  whileHover={{ y: -4 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className={`w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center transition-colors duration-300 ${social.hoverColor}`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-6">COMPANY</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-200/60 hover:text-red-500 text-sm transition-colors flex items-center gap-2 group">
                      <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6">SUPPORT</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                   <Link href={link.href} className="text-blue-200/60 hover:text-red-500 text-sm transition-colors flex items-center gap-2 group">
                     <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT INFO */}
          <div className="lg:col-span-4">
            <div className="bg-white/5 p-6 md:p-8 rounded-3xl border border-white/10 shadow-xl">
              <h4 className="text-lg font-bold mb-6">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-red-600/20 p-2 rounded-lg mt-0.5">
                    <MapPin className="text-red-500" size={18} />
                  </div>
                  <span className="text-sm text-blue-100/80 leading-relaxed">
                    Abuja, Nigeria.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-red-600/20 p-2 rounded-lg">
                    <Phone className="text-red-500" size={18} />
                  </div>
                  <span className="text-sm text-blue-100/80 tracking-wide">
                    +234 814 600 7875
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <div className="bg-red-600/20 p-2 rounded-lg">
                    <Mail className="text-red-500" size={18} />
                  </div>
                  {/* ✅ Added break-words so the long email doesn't stretch the screen on tiny iPhones */}
                  <span className="text-sm text-blue-100/80 break-all md:wrap-break-word">
                    4brotherstransportandlogistic@gmail.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* BOTTOM BAR */}
        {/* ✅ Fixed the massive p-12 which looked awkward on mobile */}
        <div className="pt-4 pb-24 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-blue-200/40 text-xs uppercase tracking-wider">
            © {currentYear} 4BROTHERS TRANSPORT. ALL RIGHTS RESERVED.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest transition-colors flex items-center gap-2 group"
          >
            Back to top
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowRight size={14} className="-rotate-90" />
            </motion.div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;