"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, Weight, Send, Car } from 'lucide-react';

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
    const message = `*NEW BOOKING REQUEST*%0A%0A*Pickup:* ${formData.pickup}%0A*Drop-off:* ${formData.dropoff}%0A*Package Type:* ${formData.type}%0A*Est. Weight:* ${formData.weight}kg%0A%0AHello 4Brothers, I would like to get a quote for this package.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="book" className="py-24 bg-slate-900 ">

      <div className="max-w-4xl mx-auto px-6">
       <div className="absolute top-20 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Request a Quote</h2>
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

 <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Car size={14} className="text-green-600" /> Vehicle Type
              </label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-slate-700"
                onChange={(e) => setFormData({...formData, type: e.target.value})}
              >
                <option>Motorcycle (Rider)</option>
                <option>Tricycle</option>
                 <option>Van</option>
                 <option>Lorry</option>

              </select>
            </div>
          </div>

          <button 
            type="submit"
               className="mx-auto flex w-fit items-center gap-5 rounded-xl font-bold text-white uppercase bg-red-600 px-8 py-4 mb-8 shadow-sm  transition-colors group"
          >
          Instant Quote<Send size={20} />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;