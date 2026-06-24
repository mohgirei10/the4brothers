"use client";

import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for missing default Leaflet icons in Next.js/React environments
const DefaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

function RecenterMap({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom());
    }
  }, [center, map]);
  return null;
}

interface LiveMapProps {
  riders: any[];
}

export default function LiveMap({ riders }: LiveMapProps) {
  // Default map position: Abuja, Nigeria
  const defaultCenter: [number, number] = [9.0765, 7.3986];

  const activeRiderWithGPS = riders.find(r => r.latitude && r.longitude && r.is_online);
  
  const mapCenter: [number, number] = activeRiderWithGPS 
    ? [activeRiderWithGPS.latitude, activeRiderWithGPS.longitude]
    : defaultCenter;

  return (
    /* FIXED: Swapped h-100/h-125 for explicit Tailwind arbitrary pixel heights */
    <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
      <MapContainer 
        center={mapCenter} 
        zoom={13} 
        scrollWheelZoom={true} 
        className="w-full h-full bg-slate-900"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        <RecenterMap center={mapCenter} />

        {riders.map((rider) => {
          if (!rider.latitude || !rider.longitude || !rider.is_online) return null;
          
          return (
            <Marker 
              key={rider.id} 
              position={[rider.latitude, rider.longitude]}
            >
              <Popup>
                <div className="text-slate-900 font-sans p-1">
                  {/* FIXED: Added clear fallback string if full_name is null */}
                  <h3 className="font-bold border-b pb-1 mb-1 text-sm">
                    {rider.full_name || 'Unnamed Rider Logged In'}
                  </h3>
                  <p className="text-xs text-slate-600">🚗 {rider.vehicle_type || 'No Vehicle Specified'}</p>
                  <p className="text-xs text-slate-600">📞 {rider.phone_number || 'No Phone Registered'}</p>
                  
                  <div className="mt-2 flex gap-1 flex-wrap">
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-800">
                      Online
                    </span>
                    {rider.is_busy && (
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                        Busy
                      </span>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}