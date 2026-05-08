"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  SiInstagram, 
  SiFacebook ,
  SiWhatsapp, 
  SiTiktok
} from "react-icons/si";
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { id: 1, name: "Instagram", icon: <SiInstagram />, link: "https://instagram.com/@the4brotherstransport", color: "rgb(225, 48, 108)" },
  { id: 3, name: "Facebook", icon: <SiFacebook />, link: "https://facebook.com/the4brotherstransport", color: "rgb(24, 119, 242)" },
  { id: 4, name: "WhatsApp", icon: <SiWhatsapp/>, link: "https://wa.me/2348146007875?text=Hello%204Brothers", color: 'rgb(59, 253, 0)' },
  { id: 5, name: "TickTock", icon: <SiTiktok />, link: "https://ticktock.com/@the4brotherstransport", color: "rgb(1, 1, 1)" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Fleet', href: '/#fleet' },
      { name: 'Services', href: '/#services' },
      { name: 'Contact', href: '/#contact' },
    ],
    support: [
      { name: 'Tracking', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'FAQs', href: '/#faq' },
    ]
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-64 md:pb-12 pb-[env(safe-area-inset-bottom)">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND SECTION */}
          <div className="space-y-6">
            <img src="logo.png" alt="4Brothers" className="h-8 w-auto" />
            <p className="text-blue-200/60 leading-relaxed text-sm">
              Premium logistics and transport solutions based in Abuja. We move your business forward with speed, safety, and integrity.
            </p>
            <div className="flex gap-4">
              {[SiFacebook, SiInstagram, SiTiktok, SiWhatsapp].map((Icon, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-red-600 transition-colors"
                  href="#"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
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

          {/* SUPPORT LINKS */}
          <div>
            <h4 className="text-lg font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-blue-200/60 hover:text-red-500 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-white/5 p-8 rounded-4xl border border-white/10">
            <h4 className="text-lg font-bold tracking-tighter mb-6">Get In Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <MapPin className="text-red-600 mt-1" size={20} />
                <span className="text-sm text-blue-100 tracking-tighter">Abuja, Nigeria.</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-red-600" size={20} />
                <span className="text-sm text-blue-100 tracking-tighter">+234 814 600 7875</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-red-600" size={20} />
                <span className="text-sm text-blue-100 tracking-tighter">4brotherstransportand <br /> logistic@gmail.com</span>
              </li>
            </ul>
          </div>
          
        </div>

        {/* BOTTOM BAR */}
        <div className="p-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-200/40 text-xs uppercase tracking-tighter">
            © {currentYear} 4BROTHERS TRANSPORT. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
             <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs font-bold text-red-500 uppercase tracking-widest hover:text-white transition-colors"
             >
               Back to top
             </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;