"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// ✅ 1. YOUR DATA
const carouselImages = [
  { id: 1, url: 'slide1.jpeg', description: 'Local Delivery Fleet' },
  { id: 2, url: 'slide2.jpeg', description: 'International Shipping' },
  { id: 3, url: 'slide3.jpeg', description: 'Storage & Fulfillment' },
  { id: 4, url: 'slide4.jpeg', description: 'End-to-End Tracking' },
  { id: 5, url: 'slide5.jpeg', description: 'Real-Time Updates' } // Fixed duplicate text here for polish
];

// ✅ 2. SLIDE ANIMATION VARIANTS
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    zIndex: 0,
  }),
};

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); 

  const paginate = (newDirection: number) => {
    let nextIndex = index + newDirection;
    if (nextIndex >= carouselImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = carouselImages.length - 1;

    setDirection(newDirection);
    setIndex(nextIndex);
  };

  // ✅ 2.5 AUTO-SLIDE LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 4000);

    return () => clearInterval(timer);
  }, [index]);

  const currentItem = carouselImages[index];

  return (
    // ✅ 3. THE "CARD" CONTAINER
    <div className="relative w-full max-w-5xl mx-auto h-100 sm:h-125 lg:h-150 rounded-3xl sm:rounded-4xl overflow-hidden group shadow-2xl bg-slate-900 border border-slate-800">
      
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
          
          {/* Responsive Padding inside the card */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 z-20">
              {/* Scaled the badge down slightly on mobile */}
              <div className="flex items-center gap-2 sm:gap-3 bg-white/10 w-fit text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-full backdrop-blur-sm mb-3 sm:mb-4 border border-white/10 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />Abuja
              </div>
              {/* Responsive typography for the title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tighter max-w-xl">
                {currentItem.description}
              </h2>
          </div>

          <img 
            src={currentItem.url} 
            alt={currentItem.description} 
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* ✅ 4. NAVIGATION ARROWS */}
      {/* Opacity is 100 on mobile, 0 on md+ screens until hover. Reduced padding/size on mobile. */}
      <button 
        onClick={() => paginate(-1)}
        className="absolute left-3 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-2.5 sm:p-3 md:p-4 rounded-full border border-white/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white/20 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>
      <button 
        onClick={() => paginate(1)}
        className="absolute right-3 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/10 backdrop-blur-sm text-white p-2.5 sm:p-3 md:p-4 rounded-full border border-white/10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-white/20 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      {/* ✅ 5. INDICATOR DOTS */}
      {/* Adjusted bottom spacing for mobile */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-2.5">
        {carouselImages.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1); 
              setIndex(i);
            }}
            // Scaled the active dot width and inactive dot size for smaller screens
            className={`transition-all rounded-full ${
              i === index 
              ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-blue-500' 
              : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;