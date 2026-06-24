"use client";

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { User, Mail, Shield, LogOut, PackageSearch } from 'lucide-react';

export default function ProfilePage() {
  const { data: session, status } = useSession(); // 'update' is no longer needed here
  const router = useRouter();
  
  const [shipments, setShipments] = useState<any[]>([]);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await fetch('/api/shipments/history');
        const result = await res.json();
        if (result.data) setShipments(result.data);
      } catch (error) {
        console.error("Failed to fetch history", error);
      }
    };

    if (status === "authenticated") {
      fetchShipments();
    }
  }, [status]);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push('/login');
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <span className="w-8 h-8 border-4 border-gray-300 border-t-red-600 rounded-full animate-spin"></span>
      </div>
    );
  }

  if (!session?.user) return null;

  return (
    <div className="min-h-screen bg-slate-950  pt-12 py-6 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
        
        {/* Header Section */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 sm:pt-24 shadow-xl relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:top-0 sm:left-auto sm:right-0 sm:translate-x-0 sm:translate-y-0 p-6 sm:p-10 pointer-events-none">
             <Shield size={200} className="text-red-900" />
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
            <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-full bg-red-600 flex items-center justify-center text-3xl sm:text-4xl font-bold text-white shadow-lg border-4 border-gray-800">
              {session.user.name?.charAt(0).toUpperCase() || 'U'}
            </div>
            
            <div className="text-center sm:text-left space-y-1 overflow-hidden w-full">
              <h1 className="text-xl z-50 sm:text-3xl font-bold uppercase text-white tracking-tighter truncate">
                {session.user.name}
              </h1>
              <div className="flex z-50 items-center justify-center sm:justify-start gap-2 text-gray-400 font-medium">
                <Mail size={16} className="shrink-0" />
                <p className="truncate">{session.user.email}</p>
              </div>
              <span className="inline-block mt-3 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full border border-gray-700 uppercase tracking-wider">
                Active Member
              </span>
            </div>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <PackageSearch className="text-red-600" size={24} />
              Recent Activity
            </h2>

            {/* Now 'shipments' exists and this code will work perfectly! */}
            {shipments.length > 0 ? (
              <div className="space-y-3">
                {shipments.map((s: any) => (
                  <div key={s.id} className="p-4 bg-slate-50 rounded-xl border border-gray-100 flex justify-between items-center hover:border-red-200 transition-colors">
                    <div>
                      <p className="font-bold text-gray-900">{s.tracking_id}</p>
                      <p className="text-sm text-gray-500 capitalize">{s.status}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs font-bold text-red-600 uppercase">
                        {s.current_location}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        {new Date(s.updated_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-10 sm:py-12 px-4 text-center border-2 border-dashed border-gray-200 rounded-2xl">
                <p className="text-gray-500 font-medium text-sm sm:text-base mb-4">No recent shipments found.</p>
                <button
                  onClick={() => router.push('/track')} 
                  className="px-6 py-2.5 bg-slate-950 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors w-full sm:w-auto"
                >
                  Track a Package
                </button>
              </div>
            )}
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
              <User className="text-gray-400" size={24} />
              Account
            </h2>
            <div className="grow space-y-2 sm:space-y-4">
              <button 
                onClick={() => router.push('/settings')} 
                className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors border border-transparent hover:border-gray-200 text-sm sm:text-base">
                Edit Profile
              </button>
              <button
               onClick={() => router.push('/settings')} 
               className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-700 font-medium transition-colors border border-transparent hover:border-gray-200 text-sm sm:text-base">
                Security Settings
              </button>
            </div>
            
            <div className="pt-6 mt-6 border-t border-gray-100">
              <button
                onClick={() => signOut({ callbackUrl: '/' })}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-red-50 text-red-600 font-medium rounded-xl hover:bg-red-100 transition-colors text-sm sm:text-base"
              >
                <LogOut size={18} />
                Sign Out
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}