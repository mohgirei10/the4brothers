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

// Custom helper component to auto-center the map when data updates
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
  // Default map position: Abuja, Nigeria (or adjust to your primary operations base)
  const defaultCenter: [number, number] = [9.0765, 7.3986];

  // If we have active riders, center the map around the first online rider's coordinates
  const activeRiderWithGPS = riders.find(r => r.current_latitude && r.current_longitude);
  const mapCenter: [number, number] = activeRiderWithGPS 
    ? [activeRiderWithGPS.current_latitude, activeRiderWithGPS.current_longitude]
    : defaultCenter;

  return (
    <div className="w-full h-100 lg:h-125 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
      <MapContainer 
        center={mapCenter} 
        zoom={13} 
        scrollWheelZoom={true} 
        className="w-full h-full bg-slate-900"
      >
        {/* Clean, dark-mode-friendly map tiles provided by CartoDB */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        
        <RecenterMap center={mapCenter} />

        {/* Dynamic Markers for every online Rider */}
        {riders.map((rider) => {
          if (!rider.current_latitude || !rider.current_longitude) return null;
          
          return (
            <Marker 
              key={rider.id} 
              position={[rider.current_latitude, rider.current_longitude]}
            >
              <Popup>
                <div className="text-slate-900 font-sans p-1">
                  <h3 className="font-bold border-b pb-1 mb-1 text-sm">{rider.full_name}</h3>
                  <p className="text-xs text-slate-600">🚗 {rider.vehicle_type}</p>
                  <p className="text-xs text-slate-600">📞 {rider.phone_number}</p>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full inline-block mt-2 ${
                    rider.status === 'online' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {rider.status}
                  </span>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}