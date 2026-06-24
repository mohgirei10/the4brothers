"use client";

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { User, Lock, Save, Loader2 } from 'lucide-react';

export default function SettingsPage() {
  const { data: session, update } = useSession();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(session?.user?.name || "");

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/user/update', {
      method: 'POST',
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      // CRITICAL: This refreshes the NextAuth session so the name updates UI-wide
      await update({ name }); 
      alert("Profile updated!");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        
        {/* Profile Settings */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <User className="text-red-600" /> Edit Profile
          </h2>
          
          <form onSubmit={handleUpdateProfile} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-slate-800 text-white rounded-xl px-4 py-3 border border-slate-700 focus:border-red-500 outline-none"
              />
            </div>
            
            <button 
              disabled={loading}
              className="flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-red-700 transition"
            >
              {loading ? <Loader2 className="animate-spin" /> : <Save size={18} />}
              Save Changes
            </button>
          </form>
        </div>

        {/* Security Settings */}
        <div className="bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-800">
           <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Lock className="text-red-600" /> Security
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Password changes are handled via your Auth provider. 
          </p>
          <button className="text-red-500 font-semibold text-sm hover:underline">
            Request Password Reset Link
          </button>
        </div>
      </div>
    </div>
  );
}