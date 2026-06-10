"use client";

import React from 'react';
import { ShieldCheck, Eye, Database, Share2 } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "June 2026";

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex p-3 bg-red-600/10 text-red-500 rounded-2xl mb-2">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-blue-200/40 uppercase tracking-widest">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-xl backdrop-blur-md">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <Eye size={20} className="text-red-500" />
              1. Information We Collect
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              To effectively manage, optimize, and safely coordinate your logistics orders, 4Brothers Transport collects specific personal and corporate identifiers. This data includes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="text-sm font-bold text-white mb-1">Direct Details</h4>
                <p className="text-xs text-blue-200/50">Sender & Receiver names, delivery addresses, dynamic telephone contact links, and business email channels.</p>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <h4 className="text-sm font-bold text-white mb-1">Operational Metrics</h4>
                <p className="text-xs text-blue-200/50">Item specifications, weight dimensions, pick-up points, geographic destination points, and transactional logs.</p>
              </div>
            </div>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <Database size={20} className="text-red-500" />
              2. How We Use Data
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              We never trade, rent, or vend corporate data profiles to external ad networks. Collected pipelines are deployed strictly to execute the baseline operational goals of our transport network:
            </p>
            <ul className="list-disc pl-5 text-sm text-blue-200/60 space-y-2">
              <li>Processing logistics invoices and managing digital route waybills.</li>
              <li>Providing active real-time status notifications and SMS delivery coordination updates.</li>
              <li>Responding instantly to customer service inquiries or custom freight quotes.</li>
            </ul>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <Share2 size={20} className="text-red-500" />
              3. Data Sharing and Third Parties
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Information sharing is localized and restricted strictly to trusted agents essential to the supply line ecosystem. This encompasses authorized fleet operations team members, digital mapping tracking plug-ins, and secure banking portals utilized to verify wire transitions. We will release personal identification metrics only when compelled strictly by Nigerian federal legal statutes.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              4. Security Measures
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Data protection protocols are managed thoroughly. We implement commercial-grade encryption and secure database structures to eliminate unintended access, unauthorized alteration, or distribution leaks of user manifests.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              5. Your Privacy Choices
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              You maintain full authority to audit, modify, or completely delete any corporate details linked to past logistics bookings by interacting directly with our administrative help desk via email at <span className="text-red-400 font-medium">4brotherstransportandlogistic@gmail.com</span>.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;