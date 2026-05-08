"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, Weight, Send } from 'lucide-react';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    type: 'Documents',
    weight: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "2348146007875";
    const message = `*NEW BOOKING REQUEST*%0A%0A*Pickup:* ${formData.pickup}%0A*Drop-off:* ${formData.dropoff}%0A*Package Type:* ${formData.type}%0A*Est. Weight:* ${formData.weight}kg%0A%0AHello 4Brothers, I would like to get a quote for this shipment.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="book" className="py-24 bg-slate-350">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-blue-950 mb-4">Request a Quote</h2>
          <p className="text-red-600 font-medium">Fast, reliable, and transparent pricing for every load.</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-2xl space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* PICKUP */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={14} className="text-red-600" /> Pickup Location
              </label>
              <input 
                required
                type="text" 
                placeholder="e.g., Gwarinpa, Abuja"
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                onChange={(e) => setFormData({...formData, pickup: e.target.value})}
              />
            </div>

            {/* DROP-OFF */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={14} className="text-blue-600" /> Drop-off Location
              </label>
              <input 
                required
                type="text" 
                placeholder="e.g., Victoria Island, Lagos"
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
              />
            </div>

            {/* PACKAGE TYPE */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Package size={14} className="text-slate-600" /> Package Type
              </label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-slate-700"
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option>Documents / Parcels</option>
                <option>Fragile Goods</option>
                <option>Pallets / Heavy Freight</option>
                <option>Vehicle Transport</option>
              </select>
            </div>

            {/* WEIGHT */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Weight size={14} className="text-slate-600" /> Est. Weight (KG)
              </label>
              <input 
                type="number" 
                placeholder="Optional"
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all"
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white hover:cursor-pointer p-5 rounded-2xl font-black text-lg shadow-xl shadow-red-200/50 transition-all transform hover:scale-[1.02] flex justify-center items-center gap-3 mt-4"
          >
            Get Instant Quote on WhatsApp <Send size={20} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;