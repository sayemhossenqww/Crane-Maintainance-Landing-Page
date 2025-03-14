// src/components/sections/FeaturesSection.js
import React from 'react';

const FeatureCard = ({ icon, title, description, features, index }) => {
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(79,70,229,0.3)] hover:bg-white/[0.15]"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-cyan-100 mb-5">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg 
              className="w-5 h-5 text-cyan-300 mt-1 mr-2 flex-shrink-0" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
              />
            </svg>
            <span className="text-cyan-100 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
      title: "Smart Inspection Management",
      description: "Schedule, conduct, and document inspections with AI-optimized checklists based on regulatory requirements.",
      features: [
        "Intelligent inspection scheduling",
        "Digital forms with photo documentation",
        "Real-time compliance tracking"
      ]
    },
    {
      icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>,
      title: "Intelligent Work Orders",
      description: "Generate, assign, and track maintenance work orders through their entire lifecycle with smart scheduling.",
      features: [
        "Automated task assignment",
        "Real-time collaboration",
        "Comprehensive documentation"
      ]
    },
    {
      icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg>,
      title: "Advanced Asset Management",
      description: "Register and track all crane assets and components with detailed specifications and lifecycle monitoring.",
      features: [
        "Digital twin technology",
        "Component-level tracking",
        "Predictive maintenance modeling"
      ]
    },
    {
      icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>,
      title: "Digital Safety Logbooks",
      description: "Maintain digital pre-shift and post-shift safety checks with automated compliance verification.",
      features: [
        "Voice-activated data entry",
        "Biometric verification",
        "Real-time safety alerts"
      ]
    },
    {
      icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>,
      title: "Inventory Optimization",
      description: "Track inventory levels, automate reordering, and manage component replacement with predictive analytics.",
      features: [
        "AI-driven inventory forecasting",
        "Automated reorder system",
        "Component lifespan tracking"
      ]
    },
    {
      icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>,
      title: "Comprehensive Analytics",
      description: "Generate insights through customizable dashboards and reports with machine learning-driven recommendations.",
      features: [
        "Custom KPI dashboards",
        "Predictive maintenance insights",
        "Compliance reporting automation"
      ]
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-indigo-950">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glow elements */}
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
            <span className="mr-2">⚡</span>
            Powerful Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
            Intelligent Platform for Complete 
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> Crane Management</span>
          </h2>
          <p className="text-cyan-100">Our system provides all the tools you need to manage your entire crane maintenance and inspection workflow in one secure platform.</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              index={index}
            />
          ))}
        </div>

        {/* Feature Highlight */}
        <div 
          className="mt-20 bg-gradient-to-br from-indigo-800 to-blue-900 rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-white/10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-6">Role-Based Access for Your Entire Team</h3>
              <p className="text-cyan-100 mb-8">
                Our system provides tailored interfaces for administrators, technicians, operators, and customers, 
                ensuring everyone has the right tools for their specific responsibilities.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start" data-aos="fade-right" data-aos-delay="100">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Administrator Portal</h4>
                    <p className="text-cyan-100 text-sm">Complete system control with analytics and configuration options</p>
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right" data-aos-delay="200">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Technician Portal</h4>
                    <p className="text-cyan-100 text-sm">Mobile-optimized tools for maintenance and inspection tasks</p>
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right" data-aos-delay="300">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Operator Interface</h4>
                    <p className="text-cyan-100 text-sm">Simple tools for safety checks and logbook management</p>
                  </div>
                </li>
                <li className="flex items-start" data-aos="fade-right" data-aos-delay="400">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mr-4 flex-shrink-0 shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Customer Dashboard</h4>
                    <p className="text-cyan-100 text-sm">Overview of assets, compliance status, and service history</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Role-based access dashboards"
                className="w-full h-full object-cover" 
                data-aos="fade-left"
                data-aos-delay="200"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/70 via-indigo-800/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;