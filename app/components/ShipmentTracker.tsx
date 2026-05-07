"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Package, Truck, CheckCircle2, LocateFixed, MapPin, Calendar } from 'lucide-react';

const ShipmentTracker = () => {
  const [trackingID, setTrackingID] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [shipmentData, setShipmentData] = useState<any>(null);

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingID.trim()) return;

    setIsSearching(true);
    setShowResult(false);

    try {
      const response = await fetch(`/api/track/${trackingID.trim()}`);
      const data = await response.json();

      if (response.ok) {
        setShipmentData(data);
        setShowResult(true);
      } else {
        alert("Shipment not found.");
      }
    } catch (error) {
      alert("Connection error.");
    } finally {
      setIsSearching(false);
    }
  };

  // Helper to format MongoDB dates
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Logic to determine which step is active based on shipmentData.status
  const getStepStatus = (stepLabel: string) => {
    const statusOrder = ['Picked Up', 'In Transit', 'Out for Delivery', 'Delivered'];
    const currentIdx = statusOrder.indexOf(shipmentData?.status || 'Picked Up');
    const stepIdx = statusOrder.indexOf(stepLabel);

    if (stepIdx < currentIdx) return 'complete';
    if (stepIdx === currentIdx) return 'current';
    return 'pending';
  };

  return (
    <section id="track" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[48px] p-8 md:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow Decor */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Track Your Shipment</h2>
            <p className="text-slate-400 font-medium">Global logistics tracking for 4Brothers clients.</p>
          </div>

          {/* Premium Search Bar */}
          <form onSubmit={handleTrack} className="relative z-10 max-w-2xl mx-auto mb-16">
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Enter Tracking ID"
                className="w-full bg-slate-800 border border-slate-700 text-white p-6 pr-40 rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-xl font-medium"
                value={trackingID}
                onChange={(e) => setTrackingID(e.target.value)}
              />
              <button 
                type="submit"
                disabled={isSearching}
                className="absolute right-3 hover:cursor-pointer top-3 bottom-3 bg-blue-600 hover:bg-blue-500 text-white px-10 rounded-2xl font-bold flex items-center gap-2 transition-transform active:scale-95 disabled:opacity-50"
              >
                {isSearching ? '...' : 'TRACK'}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {showResult && shipmentData && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 bg-white rounded-4xl overflow-hidden shadow-2xl"
              >
                {/* Header Summary Card */}
                <div className="bg-slate-50 p-8 border-b border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Shipment ID</span>
                    <p className="text-xl font-bold text-slate-900">{shipmentData.trackingId}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Route</span>
                    <p className="text-lg font-bold text-slate-900 flex items-center gap-2">
                      {shipmentData.pickupLocation} <Truck size={16} className="text-blue-500" /> {shipmentData.dropoffLocation}
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-xs font-black uppercase">
                      {shipmentData.status}
                    </span>
                    <p className="text-[10px] text-slate-400 mt-2">Last Updated: {formatDate(shipmentData.updatedAt)}</p>
                  </div>
                </div>

                {/* Timeline Section */}
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row justify-between relative gap-8">
                    {/* Background Progress Bar */}
                    <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-slate-100 z-0"></div>
                    
                    {['Picked Up', 'In Transit', 'Out for Delivery', 'Delivered'].map((label, idx) => {
                      const stepStatus = getStepStatus(label);
                      return (
                        <div key={idx} className="relative z-10 flex md:flex-col items-center text-center gap-4 md:gap-0 flex-1">
                          <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                            stepStatus === 'complete' ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 
                            stepStatus === 'current' ? 'bg-blue-100 text-blue-600 ring-4 ring-blue-50' : 'bg-slate-100 text-slate-300'
                          }`}>
                            {stepStatus === 'complete' ? <CheckCircle2 size={20} /> : <Package size={20} />}
                          </div>
                          <div>
                            <h4 className={`text-sm font-bold ${stepStatus === 'pending' ? 'text-slate-300' : 'text-slate-900'}`}>{label}</h4>
                            {stepStatus === 'current' && (
                              <p className="text-[10px] text-blue-500 font-bold uppercase mt-1 animate-pulse italic">
                                Live at {shipmentData.currentLocation}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ShipmentTracker;