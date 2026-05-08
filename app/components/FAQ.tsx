"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "What areas do you cover?",
    answer: "While our main hub is in Bwari, Abuja, we provide nationwide coverage across all 36 states in Nigeria, with dedicated daily routes to Lagos, Kano, and Port Harcourt."
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
    question: "How do I track my shipment?",
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
        className="w-full py-6 flex items-center justify-between text-left hover:text-blue-600 transition-colors"
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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center md:justify-start">
          <HelpCircle className="text-red-600" size={20} />
          <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em]">Information Hub</span>
        </div>
        
        <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-12 text-center md:text-left">
          Common Questions.
        </h2>

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

        {/* CTA in FAQ */}
        <div className="mt-16 p-8 bg-slate-50 rounded-4xl border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-blue-950">Still have questions?</h4>
            <p className="text-slate-500 font-medium">We're here to help you move with peace of mind.</p>
          </div>
          <button>
            <a 
  href={`https://wa.me/2348146007875?text=${encodeURIComponent("I need assistance.")}`}
  target="_blank"
  className="mx-auto flex w-fit items-center gap-3 rounded-full border border-slate-200 px-6 py-3 mb-8 shadow-sm hover:border-green-400 transition-colors group"
>
  <MessageCircle className="text-blue-600 group-hover:scale-110 transition-transform" size={18} />
  <span className="text-sm font-bold uppercase tracking-tight text-slate-600">
Contact Support  </span>
</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;