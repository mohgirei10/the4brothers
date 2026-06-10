"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// ✅ 1. YOUR DATA
const carouselImages = [
  { id: 1, url:'slide1.jpeg', description: 'Local Delivery Fleet' },
  { id: 2, url:'slide2.jpeg', description: 'International Shipping' },
  { id: 3, url:'slide3.jpeg', description: 'Storage & Fulfillment' },
  { id: 4, url:'slide4.jpeg', description: 'End-to-End Tracking' },
  { id: 5, url:'slide5.jpeg', description: 'End-to-End Tracking' }
];

// ✅ 2. SLIDE ANIMATION VARIANTS
const slideVariants = {
  enter: (direction: number) => ({  // Add : number here
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({  // Add : number here
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    zIndex: 0,
  }),
};

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  // Add : number right here 👇
  const paginate = (newDirection: number) => {
    let nextIndex = index + newDirection;
    if (nextIndex >= carouselImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = carouselImages.length - 1;

    setDirection(newDirection);
    setIndex(nextIndex);
  };

  // ✅ 2.5 AUTO-SLIDE LOGIC
  useEffect(() => {
    // Automatically move to the next slide every 4 seconds (4000ms)
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);

    // Cleanup interval on unmount or when the index changes.
    // Clearing it when 'index' changes prevents rapid skipping if the user clicks manually!
    return () => clearInterval(timer);
  }, [index]); // The dependency array includes 'index' so the timer resets on manual clicks.

  const currentItem = carouselImages[index];

  return (
    // ✅ 3. THE "CARD" CONTAINER
    <div className="relative w-full max-w-5xl mx-auto h-100 md:h-125 rounded-4xl overflow-hidden group shadow-2xl bg-slate-900 border border-slate-800">
      
      {/* IMAGES & ANIMATION */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentItem.id}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent z-10" />
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 z-20">
              <div className="flex items-center gap-3 bg-white/10 w-fit text-white px-5 py-2.5 rounded-full backdrop-blur-sm mb-4 border border-white/10">
                  <MapPin size={20} className="text-blue-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter max-w-xl">{currentItem.description}</h2>
          </div>

          <img 
            src={currentItem.url} 
            alt={currentItem.description} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ✅ 4. NAVIGATION ARROWS */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 active:scale-95"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-4 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20 active:scale-95"
      >
        <ChevronRight size={24} />
      </button>

      {/* ✅ 5. INDICATOR DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1); 
              setIndex(i);
            }}
            className={`transition-all rounded-full ${
              i === index ? 'w-8 h-2.5 bg-blue-500' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;