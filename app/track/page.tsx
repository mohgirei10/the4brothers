"use client";

import { useState } from 'react';
import { Search, Package, MapPin, Truck, CheckCircle, AlertCircle } from 'lucide-react';

export default function TrackPage() {
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingId.trim()) return;

    setLoading(true);
    setError('');
    setShipment(null);

    try {
      const res = await fetch(`/api/track/${trackingId}`);
      const data = await res.json();

      if (res.ok) {
        setShipment(data.data);
      } else {
        setError(data.error || 'Shipment not found.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Track Your Package</h1>
        
        {/* Search Input */}
        <form onSubmit={handleTrack} className="bg-slate-900 p-2 rounded-2xl shadow-lg border border-slate-800 flex gap-2">
          <input
            type="text"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            placeholder="Enter tracking ID (e.g., 4B-XXXXXX)"
            className="flex-1 bg-transparent text-white px-4 py-3 outline-none placeholder:text-slate-500"
            required
          />
          <button 
            type="submit" 
            disabled={loading}
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
          >
            {loading ? 'Searching...' : <Search size={20} />}
          </button>
        </form>

        {/* Error Display */}
        {error && (
          <div className="mt-6 p-4 bg-red-950 border border-red-900 rounded-xl text-red-400 flex items-center gap-2">
            <AlertCircle size={20} />
            {error}
          </div>
        )}

        {/* Result Card */}
        {shipment && (
          <div className="mt-8 bg-white rounded-3xl p-6 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm font-medium text-slate-400">Tracking ID</p>
                <h2 className="text-xl font-bold text-slate-900">{shipment.tracking_id}</h2>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase tracking-wider">
                {shipment.status}
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><MapPin size={20} /></div>
                <div>
                  <p className="text-xs text-slate-400">Pickup Location</p>
                  <p className="font-medium text-slate-900">{shipment.pickup_location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><Truck size={20} /></div>
                <div>
                  <p className="text-xs text-slate-400">Current Location</p>
                  <p className="font-medium text-slate-900">{shipment.current_location}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600"><CheckCircle size={20} /></div>
                <div>
                  <p className="text-xs text-slate-400">Dropoff Location</p>
                  <p className="font-medium text-slate-900">{shipment.dropoff_location}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}