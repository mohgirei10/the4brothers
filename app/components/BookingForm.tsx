"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Package, Weight, Send, Car } from 'lucide-react';

const BookingForm = () => {
  // ✅ 1. FIXED STATE: Separated packageType and vehicleType, and added default values
  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    packageType: 'Documents / Parcels',
    vehicleType: 'Motorcycle (Rider)',
    weight: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "2348146007875";
    // ✅ Updated message to include the fixed state variables
    const message = `*NEW BOOKING REQUEST*%0A%0A*Pickup:* ${formData.pickup}%0A*Drop-off:* ${formData.dropoff}%0A*Package Type:* ${formData.packageType}%0A*Vehicle Type:* ${formData.vehicleType}%0A*Est. Weight:* ${formData.weight || 'N/A'}kg%0A%0AHello 4Brothers, I would like to get a quote for this package.`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    // ✅ 2. FIXED LAYOUT: Added 'flex items-center' so it properly centers vertically
    <section id="book" className="relative w-full py-12 md:pt-32 md:pb-24 flex items-center justify-center overflow-x-hidden min-h-dvh lg:min-h-[75vh] bg-red-600">
      
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          {/* Responsive Typography */}
          <h2 className="text-4xl sm:text-2xl md:text-3xl font-black uppercase text-slate-950 mb-3 md:mb-4">Request a Quote</h2>
          <p className="text-white font-medium text-sm sm:text-base mb-8">Fast, reliable, and transparent pricing for every load.</p>
        </div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          // Scaled padding and border radius for mobile
          className="bg-slate-950 p-3 sm:p-8 md:p-12 rounded-3xl md:rounded-[40px] shadow-2xl space-y-6 md:space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            
            {/* PICKUP */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <MapPin size={14} className="text-red-600" /> Pickup Location
              </label>
              <input 
                required
                type="text" 
                placeholder="e.g., Gwarinpa, Abuja"
                // Changed focus ring to red to match your brand color
                className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-red-600 transition-all text-slate-800"
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
                className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-slate-800"
                onChange={(e) => setFormData({...formData, dropoff: e.target.value})}
              />
            </div>

            {/* PACKAGE TYPE */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Package size={14} className="text-slate-600" /> Package Type
              </label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-slate-600 transition-all text-slate-800 cursor-pointer"
                onChange={(e) => setFormData({...formData, packageType: e.target.value})}
                value={formData.packageType}
              >
                <option>Documents / Parcels</option>
                <option>Fragile Goods</option>
                <option>Pallets / Heavy Freight</option>
                <option>Vehicle Transport</option>
              </select>
            </div>

            {/* VEHICLE TYPE */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Car size={14} className="text-green-600" /> Vehicle Type
              </label>
              <select 
                className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-green-600 transition-all text-slate-800 cursor-pointer"
                onChange={(e) => setFormData({...formData, vehicleType: e.target.value})}
                value={formData.vehicleType}
              >
                <option>Motorcycle (Rider)</option>
                <option>Tricycle</option>
                <option>Van</option>
                <option>Lorry</option>
              </select>
            </div>

            {/* ✅ 4. ADDED MISSING INPUT: Weight field */}
            <div className="space-y-2 md:col-span-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                <Weight size={14} className="text-orange-500" /> Estimated Weight (kg)
              </label>
              <input 
                type="number" 
                placeholder="e.g., 15"
                className="w-full bg-slate-50 border border-slate-200 p-3.5 sm:p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all text-slate-800"
                onChange={(e) => setFormData({...formData, weight: e.target.value})}
              />
            </div>
          </div>

          {/* ✅ 5. BUTTON POLISH: Full width on mobile, fit content on desktop */}
          <div className="pt-2">
            <button 
              type="submit"
              className="w-[70%] hover:cursor-pointer md:w-fit mx-auto flex items-center justify-center gap-3 rounded-2xl font-bold text-white uppercase bg-red-600 px-6 py-4 sm:py-5 shadow-lg shadow-red-600/20 transition-all hover:bg-red-700 active:scale-95 group"
            >
              Instant Quote 
              <Send size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default BookingForm;