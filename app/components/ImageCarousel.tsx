"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// ✅ 1. YOUR DATA: Define the pictures you want to slide.
// Replace these paths with actual images in your /public folder (e.g., "/truck1.jpg")
const carouselImages = [
  { 
    id: 1, 
    url:'slide1.jpeg',
    description: 'Local Delivery Fleet' 
  },
  { 
    id: 2, 
    url:'slide2.jpeg',
    description: 'International Shipping' 
  },
  { 
    id: 3, 
    url:'slide3.jpeg',
    description: 'Storage & Fulfillment' 
  },
  { 
    id: 4, 
    url:'slide4.jpeg',
    description: 'End-to-End Tracking' 
  },
   { 
    id: 5, 
    url:'slide5.jpeg',
    description: 'End-to-End Tracking' 
  }
];

// ✅ 2. SLIDE ANIMATION VARIANTS: Defines how images slide in/out
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000, // Slides in from right if moving forward, left if back
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 1000 : -1000, // Slides out to left if moving forward, right if back
    opacity: 0,
    zIndex: 0,
  }),
};

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // Tracks if sliding forward (1) or backward (-1)

  // Function to move slides
  const paginate = (newDirection: number) => {
    let nextIndex = index + newDirection;
    // Handle looping (going past last image or before first)
    if (nextIndex >= carouselImages.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = carouselImages.length - 1;

    setDirection(newDirection);
    setIndex(nextIndex);
  };

  const currentItem = carouselImages[index];

  return (
    // ✅ 3. THE "CARD" CONTAINER
    <div className="relative w-full max-w-5xl mx-auto h-100 md:h-125 rounded-4xl overflow-hidden group shadow-2xl bg-slate-900 border border-slate-800">
      
      {/* IMAGES & ANIMATION */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentItem.id} // Important for Framer to know which image is animating
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
          {/* Overlays (Gradient for readability) */}
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

      {/* ✅ 4. NAVIGATION ARROWS (Hidden initially, shown on hover) */}
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
              setDirection(i > index ? 1 : -1); // Slide in correct direction
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