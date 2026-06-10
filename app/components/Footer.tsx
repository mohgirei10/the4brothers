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

const socialLinks = [
  { id: 1, name: "Instagram", icon: <SiInstagram size={20} />, link: "https://instagram.com/the4brotherstransport", hoverColor: "hover:bg-pink-500" },
  { id: 2, name: "Facebook", icon: <SiFacebook size={20} />, link: "https://facebook.com/profile.php?id=61565267652819", hoverColor: "hover:bg-blue-600" },
  { id: 3, name: "WhatsApp", icon: <SiWhatsapp size={20} />, link: "https://wa.me/2348146007875?text=Hello%204Brothers", hoverColor: "hover:bg-green-500" },
  { id: 4, name: "TikTok", icon: <SiTiktok size={20} />, link: "https://tiktok.com/@sb.faruq", hoverColor: "hover:bg-zinc-900" },
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
    <footer className="bg-slate-950 text-white pt-16 pb-28 md:pb-16 border-t border-slate-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* BRAND & SOCIALS SECTION */}
          <div className="md:col-span-2 lg:col-span-4 space-y-6 text-left">
            <img src="/logo.png" alt="4Brothers Logistics" className="h-9 w-auto object-contain" />
            <p className="text-slate-400 leading-relaxed text-sm max-w-sm">
              Premium logistics and transport solutions based in Abuja. We move your business forward with speed, safety, and integrity.
            </p>
            {/* Expanded social links container for easier tapping on mobile */}
            <div className="flex flex-wrap gap-4 pt-2">
              {socialLinks.map((social) => (
                <motion.a 
                  key={social.id}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${social.name}`}
                  className={`w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center text-slate-300 transition-all duration-300 ${social.hoverColor} hover:text-white`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* LINKS SECTION (Two structural columns on mobile, clean columns on desktop) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 sm:gap-6">
            <div>
              <h4 className="text-xl font-bold tracking-wider text-white uppercase mb-5 mt-10">Company</h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2 group py-1">
                      <ArrowRight size={12} className="hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold tracking-wider text-white uppercase mb-5 mt-10">Support</h4>
              <ul className="space-y-4">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-slate-400 hover:text-red-500 text-sm transition-colors flex items-center gap-2 group py-1">
                      <ArrowRight size={12} className="hidden sm:inline-block opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT SECTION (Stacks beautifully underneath links on mobile layouts) */}
          <div className="md:col-span-2 lg:col-span-4">
            <div className="bg-white/2 p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm">
              <h4 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-5">Get In Touch</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="bg-red-500/10 p-2.5 rounded-xl shrink-0 mt-0.5">
                    <MapPin className="text-red-500" size={16} />
                  </div>
                  <span className="text-sm text-slate-300 leading-relaxed">
                    Federal Housing Authority, Guzape, Abuja, Nigeria.
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <a href="tel:+2348146007875" className="flex items-center gap-4 group w-full py-0.5">
                    <div className="bg-red-500/10 p-2.5 rounded-xl shrink-0 transition-colors group-hover:bg-red-500/20">
                      <Phone className="text-red-500" size={16} />
                    </div>
                    <span className="text-sm text-slate-300 tracking-wide group-hover:text-white transition-colors">
                      +234 814 600 7875 <br />
                      +234 916 505 9691 <br />
                      +234 905 500 6699
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <a href="mailto:4brotherstransportandlogistic@gmail.com" className="flex items-center gap-4 group w-full py-0.5 min-w-0">
                    <div className="bg-red-500/10 p-2.5 rounded-xl shrink-0 transition-colors group-hover:bg-red-500/20">
                      <Mail className="text-red-500" size={16} />
                    </div>
                    <span className="text-sm text-slate-300 break-all sm:break-normal truncate group-hover:text-white transition-colors">
                      4brotherstransportandlogistic@gmail.com
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
        </div>

        {/* BOTTOM SECTION (Structured columns for desktop, clean stacked layouts on mobile) */}
        <div className="pt-8 border-t border-white/5 flex flex-col-reverse lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
          
          <div className="space-y-2 lg:space-y-1">
            <p className="text-slate-500 text-[11px] uppercase tracking-widest">
              &copy; {currentYear} 4BROTHERS TRANSPORT. ALL RIGHTS RESERVED.
            </p>
            <p className="text-slate-500 text-[11px] uppercase tracking-widest block">
              Designed & Developed by AMG-TECH —{" "}
              <a 
                href="https://mohgirei10.github.io/"
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-red-500 hover:text-red-400 font-semibold transition-colors duration-200 underline underline-offset-4 inline-block"
              >
                Adamu Muhammed Girei
              </a>
            </p>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs font-bold text-red-500 hover:text-red-400 uppercase tracking-widest transition-colors flex items-center gap-2 group py-2 px-4 rounded-full bg-white/5 lg:bg-transparent"
          >
            Back to top
            <motion.div
              animate={{ y: [0, -4, 0] }}
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