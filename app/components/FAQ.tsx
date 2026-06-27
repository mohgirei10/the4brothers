"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "While our main hub is in Garki, Abuja, we provide nationwide coverage across all 36 states in Nigeria, with dedicated daily routes to Lagos, Kano, and Port Harcourt."
  },
  {
    question: "How long does interstate delivery take?",
    answer: "Standard interstate delivery typically takes 24 to 72 hours depending on the destination. Express options are available for urgent shipments."
  },
  {
    question: "Are my goods insured during transit?",
    answer: "Yes. 4Brothers provides Goods in Transit (GIT) insurance for all shipments, ensuring your items are protected against unforeseen circumstances from pickup to delivery."
  },
  {
    question: "How do I track my package?",
    answer: "Once your booking is confirmed, you receive a unique tracking ID. You can use our on-site tracking tool or contact our 24/7 support line for real-time updates."
  },
  {
    question: "Do you handle fragile or high-value items?",
    answer: "Absolutely. We have specialized handling protocols and secure packaging options for electronics, glassware, and luxury items like perfumes."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: any) => {
  return (
    <div className="border-b border-slate-200">
      <button
        onClick={onClick}
        className="w-full py-4 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
      >
        <span className="text-lg font-bold text-blue-950">{question}</span>
        <div className={`p-1 rounded-full transition-transform duration-300 ${isOpen ? 'bg-red-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 font-medium leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Inside your FAQ.tsx
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-12 mt-2 bg-white scroll-mt-8"> 
        <div className="text-center mb-20">
                <motion.h2 
                  initial={{ opacity: 0 }} 
                  whileInView={{ opacity: 1 }} 
                  className="text-xs font-black text-red-600 uppercase tracking-[0.4em] mb-6"
                >
4Brothers Transport And Logistics
                </motion.h2>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-5xl font-black text-blue-950"
                >
                  Frequently Asked Questions
                </motion.h3>
              </div>

      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

    
      </div>
    </section>
  );
};



export default FAQ;