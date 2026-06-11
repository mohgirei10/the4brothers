"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; // Adjust this path if your lib folder is somewhere else
import { MapPin, Truck, Package, Clock } from 'lucide-react';

const LiveMap = dynamic(() => import('../components/LiveMap'), {
  ssr: false,
  loading: () => <div className="h-100 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-slate-400 animate-pulse">Waking up satellite mapping...</div>
});

export default function AdminDashboard() {
  const [riders, setRiders] = useState<any[]>([]);
  const [deliveries, setDeliveries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    // 1. Fetch initial data when the dashboard loads
    async function fetchDashboardData() {
      try {
        const { data: ridersData } = await supabase.from('riders').select('*');
        const { data: deliveriesData } = await supabase.from('deliveries').select('*');
        
        if (ridersData) setRiders(ridersData);
        if (deliveriesData) setDeliveries(deliveriesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();

    // 2. Listen to LIVE updates on the riders table
    const ridersSubscription = supabase
      .channel('realtime-riders')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'riders' }, (payload) => {
        
        console.log("🚨 LIVE DATA RECEIVED:", payload); // <-- Add this line!

        if (payload.eventType === 'INSERT') {
          setRiders((prev) => [...prev, payload.new]);
        } else if (payload.eventType === 'UPDATE') {
          setRiders((prev) => prev.map(r => r.id === payload.new.id ? payload.new : r));
        } else if (payload.eventType === 'DELETE') {
          setRiders((prev) => prev.filter(r => r.id !== payload.old.id));
        }
      })
      .subscribe();

    // 3. Listen to LIVE updates on the deliveries table
    const deliveriesSubscription = supabase
      .channel('realtime-deliveries')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'deliveries' }, (payload) => {
        if (payload.eventType === 'INSERT') {
          setDeliveries((prev) => [...prev, payload.new]);
        } else if (payload.eventType === 'UPDATE') {
          setDeliveries((prev) => prev.map(d => d.id === payload.new.id ? payload.new : d));
        } else if (payload.eventType === 'DELETE') {
          setDeliveries((prev) => prev.filter(d => d.id !== payload.old.id));
        }
      })
      .subscribe();

    // Clean up connections when user leaves the page
    return () => {
      supabase.removeChannel(ridersSubscription);
      supabase.removeChannel(deliveriesSubscription);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <header className="mb-10 mt-10 flex justify-between items-center border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dispatch Command Center</h1>
          <p className="text-blue-200/60 mt-2">Live Fleet & Order Management</p>
        </div>
        <div className="bg-red-500/10 text-red-500 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          System Online
        </div>
      </header>

{loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-slate-400 animate-pulse">Loading secure data...</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* LIVE FLEET TRACKING MAP */}
          <LiveMap riders={riders} />

          {/* TWO PANEL COLUMNS GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
             {/* ... leave the existing Pending Orders and Active Fleet columns code here ... */}
          </div>
        </div>
      )}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-slate-400 animate-pulse">Loading secure data...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* INCOMING ORDERS PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <Package className="text-blue-400" />
                Pending Orders
              </h2>
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                {deliveries.length}
              </span>
            </div>
            
            {deliveries.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-white/10 rounded-2xl">
                <Clock className="mx-auto text-slate-500 mb-3" size={32} />
                <p className="text-slate-500">No pending orders in the queue.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {deliveries.map((order) => (
                  <li key={order.id} className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <p className="font-bold text-sm">Pickup: <span className="font-normal text-slate-300">{order.pickup_address}</span></p>
                    <p className="font-bold text-sm mt-1">Dropoff: <span className="font-normal text-slate-300">{order.dropoff_address}</span></p>
                    <p className="text-green-400 font-bold mt-3">₦{order.price.toLocaleString()}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ACTIVE FLEET PANEL */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold flex items-center gap-3">
                <Truck className="text-red-400" />
                Active Fleet
              </h2>
              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold">
                {riders.length} Online
              </span>
            </div>

            {riders.length === 0 ? (
              <div className="text-center py-12 border-2 border-dashed border-white/10 rounded-2xl">
                <MapPin className="mx-auto text-slate-500 mb-3" size={32} />
                <p className="text-slate-500">No riders currently online.</p>
              </div>
            ) : (
              <ul className="space-y-4">
                {riders.map((rider) => (
                  <li key={rider.id} className="bg-white/5 p-4 rounded-xl flex justify-between items-center border border-white/5">
                    <div>
                      <p className="font-bold">{rider.full_name}</p>
                      <p className="text-xs text-slate-400 mt-1">{rider.vehicle_type} • {rider.phone_number}</p>
                    </div>
                    <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                      {rider.status.toUpperCase()}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      )}
    </div>
  );
}