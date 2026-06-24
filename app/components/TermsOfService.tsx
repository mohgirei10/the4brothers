"use client";

import React from 'react';
import { ShieldCheck, FileText, Scale, AlertTriangle } from 'lucide-react';

const TermsOfService = () => {

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex p-3 bg-red-600/10 text-red-500 rounded-2xl mb-2">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Terms of Service</h1>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 space-y-8 shadow-xl backdrop-blur-md">
          
          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              1. Acceptance of Terms
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              By accessing or utilizing the premium logistics, haulage, and transport services provided by 4Brothers Transport (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), you explicitly agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must refrain from using our services immediately.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              2. Scope of Service & Operations
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              4Brothers Transport provides local delivery, domestic haulage, storage, and supply chain fulfillment solutions based primarily out of Abuja, Nigeria. 
            </p>
            <ul className="list-disc pl-5 text-sm text-blue-200/60 space-y-2">
              <li>All dispatch requests, shipping times, and delivery windows provided are estimates and are subject to traffic, weather, and environmental operational variables.</li>
              <li>We reserve the right to refuse the transportation of hazardous materials, illegal contraband, or items deemed unsafe under Nigerian transit laws.</li>
            </ul>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              3. Customer Obligations
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              As a user of our transport solutions, you declare that all assets, goods, and cargo provided for transit are accurately declared in value, description, and destination data. Customers are completely responsible for ensuring proper internal packaging for any fragile cargo before it is handed off to our fleet handlers.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              4. Payment & Cancellation
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Payment policies, including invoices, quotes, and deposits for major transport runs, are subject to negotiated service agreements. Cancellations made after a dispatch vehicle has already been designated and deployed to a loading site may be subject to a standard deployment convenience fee.
            </p>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              5. Limitation of Liability
            </h2>
            <div className="bg-red-600/10 border border-red-500/20 p-4 rounded-2xl flex gap-4 items-start">
              <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
              <p className="text-xs text-blue-200/80 leading-relaxed">
                4Brothers Transport acts with complete integrity and prioritizes top-tier safety tracking protocols. However, we shall not be held liable for delayed transit or cargo deterioration resulting directly from acts of God, civil unrest, unexpected mechanical failures on federal highways, or government enforcement delays.
              </p>
            </div>
          </section>

          <hr className="border-white/10" />

          <section className="space-y-3">
            <h2 className="text-xl font-bold flex items-center gap-3 text-red-500">
              <span className="w-1.5 h-6 bg-red-600 rounded-full inline-block" />
              6. Governing Law
            </h2>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              These terms are governed, managed, and interpreted entirely under the Federal Laws of the Republic of Nigeria, with specific reference to regulations enforced in the Federal Capital Territory (FCT), Abuja.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};

export default TermsOfService;