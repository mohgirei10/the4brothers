"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Navigation, ShieldCheck } from 'lucide-react';

const FleetGallery = () => {
  const fleet = [
    {
      name: "City Delivery Vans",
      capacity: "Up to 1.5 Tons",
      bestFor: "Local Abuja deliveries, parcels, and fragile goods.",
      icon: Truck
    },
    {
      name: "Interstate Box Trucks",
      capacity: "5 - 10 Tons",
      bestFor: "Commercial goods, moving services, and palletized freight.",
      icon: Navigation
    },
    {
      name: "Heavy Duty Flatbeds",
      capacity: "Up to 30 Tons",
      bestFor: "Construction materials, vehicles, and oversized loads.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <span className="text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">Our Capacity</span>
            <h2 className="text-4xl md:text-5xl font-black text-blue-950">A Fleet Built for<br/>Every Challenge.</h2>
          </div>
          <p className="max-w-md text-slate-500 font-medium">From nimble city vans to heavy-duty haulers, our vehicles are GPS-tracked and maintained to the highest safety standards.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fleet.map((vehicle, idx) => (
            <motion.div 
              key={vehicle.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-4xl hover:cursor-pointer border border-slate-100 shadow-sm group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <vehicle.icon size={32} strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-blue-950 mb-2">{vehicle.name}</h3>
              <p className="text-red-600 font-bold text-sm mb-4 bg-red-50 inline-block px-3 py-1 rounded-lg">
                Capacity: {vehicle.capacity}
              </p>
              <p className="text-slate-500 font-medium leading-relaxed">
                <span className="text-slate-700 font-bold">Best For: </span>{vehicle.bestFor}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetGallery;