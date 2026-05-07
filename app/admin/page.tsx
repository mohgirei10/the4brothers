"use client";
import { useState } from 'react';

export default function AdminPanel() {
  const [form, setForm] = useState({
    trackingId: '',
    senderName: '',
    pickupLocation: '',
    dropoffLocation: '',
    currentLocation: '',
    status: 'Picked Up'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Shipment Created Successfully!");
      setForm({ trackingId: '', senderName: '', pickupLocation: '', dropoffLocation: '', currentLocation: '', status: 'Picked Up' });
    } else {
      alert("Error creating shipment.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">4Brothers - New Shipment</h1>
      <form onSubmit={handleSubmit} className="grid gap-4">
        <input className="border p-2 rounded" placeholder="Tracking ID (e.g. 4B-101)" value={form.trackingId} onChange={e => setForm({...form, trackingId: e.target.value})} required />
        <input className="border p-2 rounded" placeholder="Sender Name" value={form.senderName} onChange={e => setForm({...form, senderName: e.target.value})} required />
        <input className="border p-2 rounded" placeholder="Pickup (e.g. Gwarinpa)" value={form.pickupLocation} onChange={e => setForm({...form, pickupLocation: e.target.value})} />
        <input className="border p-2 rounded" placeholder="Destination (e.g. Lekki)" value={form.dropoffLocation} onChange={e => setForm({...form, dropoffLocation: e.target.value})} />
        <input className="border p-2 rounded" placeholder="Current Location" value={form.currentLocation} onChange={e => setForm({...form, currentLocation: e.target.value})} />
        <button type="submit" className="bg-blue-600 text-white p-3 rounded font-bold">Create Shipment</button>
      </form>
    </div>
  );
}