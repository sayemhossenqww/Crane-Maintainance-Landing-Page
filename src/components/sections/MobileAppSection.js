// src/components/sections/MobileAppSection.js
import React from 'react';
import { CheckCircle2, Camera, ClipboardCheck, Bolt } from 'lucide-react';

const MobileAppSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-indigo-900 to-indigo-950 text-white overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glow elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-15"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-15"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center relative z-10">
          {/* Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:pr-16" data-aos="fade-right">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
              <span className="mr-2">📱</span>
              Mobile Experience
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white leading-tight">
              Take <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Maintenance</span> On The Go
            </h2>
            <p className="text-cyan-100 text-lg mb-8 leading-relaxed">
              Our mobile app empowers technicians and operators to perform inspections, complete work orders, and document maintenance activities from anywhere, even offline.
            </p>

            <div className="space-y-8 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <ClipboardCheck className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white">Mobile Inspections</h4>
                  <p className="text-cyan-100">Complete inspections in the field with offline capability and
                    photo documentation. Sync when connection is restored.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Bolt className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white">Work Order Management</h4>
                  <p className="text-cyan-100">Receive, update, and complete work orders directly from your
                    mobile device with real-time collaboration.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                  <Camera className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-xl mb-2 text-white">Photo Documentation</h4>
                  <p className="text-cyan-100">Capture photos of equipment issues and attach them directly to
                    inspection reports with automated tagging.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="200">
              <a 
                href="#"
                className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-all hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)] group"
              >
                <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.566 11.991c-.041-4.055 3.305-6.001 3.458-6.095-1.881-2.759-4.819-3.138-5.858-3.181-2.491-.253-4.861 1.464-6.124 1.464-1.262 0-3.213-1.425-5.289-1.388-2.717.04-5.224 1.578-6.624 4.016-2.822 4.897-.723 12.165 2.028 16.153 1.344 1.949 2.947 4.133 5.051 4.057 2.026-.082 2.793-1.311 5.242-1.311s3.138 1.311 5.281 1.271c2.18-.041 3.562-1.984 4.898-3.939 1.544-2.26 2.18-4.441 2.216-4.551-.047-.022-4.239-1.632-4.28-6.468l.001.002Z"></path>
                    <path d="M14.366 3.591c1.11-1.35 1.859-3.228 1.653-5.091-1.597.065-3.531 1.064-4.674 2.415-1.027 1.191-1.926 3.094-1.683 4.919 1.78.141 3.595-.919 4.704-2.243Z"></path>
                  </svg>
                </span>
                <div>
                  <div className="text-xs">Download on the</div>
                  <div className="font-medium">App Store</div>
                </div>
              </a>
              <a 
                href="#"
                className="flex items-center justify-center bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-all hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.6)] group"
              >
                <span className="mr-3 text-2xl group-hover:scale-110 transition-transform">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814 13.792 12 3.61 22.186a.996.996 0 0 1-.293-.707V2.521c0-.265.106-.52.293-.707ZM14.83 13.038l2.902 2.903-10.826 6.147c-.168.097-.36.148-.554.148-.134 0-.268-.03-.395-.088a.995.995 0 0 1-.52-.736L14.83 13.038Zm0-2.076L5.441 2.686a.996.996 0 0 1 .52-.736c.29-.142.64-.116.949.06l10.826 6.146-2.907 2.907v-.001ZM21.189 12l-3.96 3.962-3.217-3.219 3.218-3.217L21.19 12Z"></path>
                  </svg>
                </span>
                <div>
                  <div className="text-xs">Get it on</div>
                  <div className="font-medium">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* App Screenshot */}
          <div className="w-full lg:w-1/2 relative" data-aos="fade-left" data-aos-delay="100">
            <div className="relative mx-auto max-w-xs">
              {/* Phone Frame */}
              <div className="relative z-20 mx-auto rounded-[3rem] overflow-hidden border-[14px] border-black shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                <img 
                  src="https://www.searchenginejournal.com/wp-content/uploads/2024/02/vl-app-store-app-name-65c10f267e194-sej.jpg"
                  alt="Mobile app interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-transparent rounded-xl"></div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full filter blur-[100px] opacity-20 z-0 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full filter blur-[100px] opacity-20 z-0 animate-pulse"></div>
            </div>

            {/* Feature Callouts */}
            <div
              className="absolute top-[20%] -left-4 sm:-left-12 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] p-3 max-w-[180px] z-30 hidden lg:block"
              data-aos="fade-right" 
              data-aos-delay="300"
            >
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-cyan-400 mr-2 flex-shrink-0" />
                <div className="font-bold">Offline Inspections</div>
              </div>
              <div className="text-cyan-100 text-sm mt-1">Complete work without internet connection</div>
            </div>

            <div
              className="absolute top-[60%] -right-4 sm:-right-12 bg-white/10 backdrop-blur-lg border border-white/20 text-white rounded-lg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] p-3 max-w-[180px] z-30 hidden lg:block"
              data-aos="fade-left" 
              data-aos-delay="500"
            >
              <div className="flex items-center">
                <CheckCircle2 size={16} className="text-cyan-400 mr-2 flex-shrink-0" />
                <div className="font-bold">Barcode Scanning</div>
              </div>
              <div className="text-cyan-100 text-sm mt-1">Quickly identify equipment with scanner</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;