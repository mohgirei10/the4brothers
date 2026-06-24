"use client";

import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase'; // Adjust this path if needed
import { MapPin, Truck, Package, Clock, Loader2, RefreshCw } from 'lucide-react';

// Dynamically import the map to avoid Server-Side Rendering issues in Next.js
const LiveMap = dynamic(() => import('../components/LiveMap'), {
  ssr: false,
  loading: () => (
    <div className="h-96 w-full bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center text-slate-400 animate-pulse">
      Waking up satellite mapping...
    </div>
  )
});

export default function AdminDashboard() {
  const [riders, setRiders] = useState<any[]>([]);
  const [deliveries, setDeliveries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  // NEW: State to track which order button is currently loading
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    // 1. Fetch initial data when the dashboard loads
    async function fetchDashboardData() {
      try {
        const { data: ridersData } = await supabase.from('drivers').select('*');
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
  .channel('realtime-drivers')
  .on('postgres_changes', { event: '*', schema: 'public', table: 'drivers' }, (payload) => {
    if (payload.eventType === 'INSERT') {
      setRiders((prev) => [...prev, payload.new]);
    } else if (payload.eventType === 'UPDATE') {
      // FIXED: Merge payload.new with the existing rider data so we don't lose full_name/phone!
      setRiders((prev) => 
        prev.map(r => r.id === payload.new.id ? { ...r, ...payload.new } : r)
      );
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

const handleAutoAssign = async (order: any) => {
    setProcessingId(order.id); 
    
    try {
      // Step 1: Find a driver who is online AND NOT currently busy
      const { data: onlineDrivers, error: driverError } = await supabase
        .from('drivers')
        .select('id, full_name')
        .eq('is_online', true)
        .eq('is_busy', false) // NEW: Ensure they don't have an active order
        .limit(1);

      if (driverError) throw driverError;

      if (!onlineDrivers || onlineDrivers.length === 0) {
        alert("No available drivers. All online drivers are currently busy.");
        setProcessingId(null);
        return;
      }

      const selectedDriver = onlineDrivers[0];

      // Step 2: Run both updates (Order status AND Driver status)
      // Update the order
      const { error: deliveryError } = await supabase
        .from('deliveries')
        .update({ 
          driver_id: selectedDriver.id, 
          status: 'assigned'            
        })
        .eq('id', order.id);
        
      if (deliveryError) throw deliveryError;

      // Update the driver to mark them as busy
      const { error: busyError } = await supabase
        .from('drivers')
        .update({ is_busy: true })
        .eq('id', selectedDriver.id);

      if (busyError) throw busyError;

      console.log(`Success! Order assigned to ${selectedDriver.full_name}`);

    } catch (error: any) {
      console.error("Auto-assign error:", error);
      alert("Failed to assign order: " + error.message);
    } finally {
      setProcessingId(null); 
    }
  };

const updateDeliveryStatus = async (order: any, newStatus: string) => {
    setProcessingId(order.id); // Start loading spinner
    
    try {
      // Step 1: Always update the delivery status to the new stage
      const { error: deliveryError } = await supabase
        .from('deliveries')
        .update({ status: newStatus })
        .eq('id', order.id);
        
      if (deliveryError) throw deliveryError;

      // Step 2: If the order is successfully delivered, free up the driver!
      if (newStatus === 'delivered' && order.driver_id) {
        const { error: driverError } = await supabase
          .from('drivers')
          .update({ is_busy: false })
          .eq('id', order.driver_id);

        if (driverError) throw driverError;
        
        console.log(`Driver freed up for their next order!`);
      }

    } catch (error: any) {
      console.error("Status update error:", error);
      alert("Error updating status: " + error.message);
    } finally {
      setProcessingId(null); // Stop loading spinner
    }
  };


  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      <header className="mb-10 mt-10 flex justify-between items-center border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dispatch Command Center</h1>
          <p className="text-blue-200/60 mt-2">Live Fleet & Order Management</p>
        </div>
     <button 
  onClick={() => window.location.reload()} 
  className="bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-slate-600"
>
  <RefreshCw size={16} className="animate-spin hover:cursor-pointer" />
</button>
        <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          System Online
        </div>
      </header>

      {/* SINGLE LOADING CHECK */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="animate-spin text-blue-500 mr-3" size={24} />
          <p className="text-slate-400 animate-pulse">Loading secure data...</p>
        </div>
      ) : (
        <div className="space-y-8">
          
          {/* LIVE FLEET TRACKING MAP */}
          <LiveMap riders={riders} />

          {/* TWO PANEL COLUMNS GRID */}
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
                    <li key={order.id} className="bg-white/5 p-4 rounded-xl border border-white/5 shadow-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-sm">Pickup: <span className="font-normal text-slate-300">{order.pickup_address}</span></p>
                          <p className="font-bold text-sm mt-1">Dropoff: <span className="font-normal text-slate-300">{order.dropoff_address}</span></p>
                          <p className="text-green-400 font-bold mt-3">₦{order.price?.toLocaleString() || '0'}</p>
                        </div>
                        
                        <span className="text-[10px] uppercase font-bold bg-slate-800 px-2 py-1 rounded">
                          {order.status}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-4 flex gap-2">
                        {order.status === 'pending' && (
                          <button 
                            onClick={() => handleAutoAssign(order)}
                            disabled={processingId === order.id}
                            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
                          >
                            {processingId === order.id ?
                             <Loader2 size={12} className="animate-spin" /> : null}
                            Auto-Assign
                          </button>
                        )}

                        {order.status === 'assigned' && (
    <button 
      onClick={() => updateDeliveryStatus(order, 'in_transit')} // <-- Updated here
      disabled={processingId === order.id}
      className="bg-green-600 hover:bg-green-500 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
    >
      {processingId === order.id ? <Loader2 size={12} className="animate-spin" /> : null}
      Mark Picked Up
    </button>
  )}
                 {order.status === 'in_transit' && (
    <button 
      onClick={() => updateDeliveryStatus(order, 'delivered')} // <-- Updated here
      disabled={processingId === order.id}
      className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 text-white px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-2"
    >
      {processingId === order.id ? <Loader2 size={12} className="animate-spin" /> : null}
      Mark Delivered
    </button>
  )}
                      </div>
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
                        <p className="text-xs text-slate-400 mt-1">{rider.vehicle_type || 'Vehicle'} • {rider.phone_number}</p>
                      </div>
                      <div className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full">
                        {rider.status ? rider.status.toUpperCase() : 'ONLINE'}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

          </div>
        </div>
      )}
    </div>
  );
}