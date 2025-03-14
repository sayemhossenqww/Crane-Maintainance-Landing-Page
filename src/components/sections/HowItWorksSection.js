// src/components/sections/HowItWorksSection.js
import React from 'react';
import { Play } from 'lucide-react';

const StepCard = ({ number, title, description, delay }) => {
  return (
    <div 
      className="flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay={delay * 100}
    >
      <div className="relative z-10">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center text-xl font-bold mb-6 shadow-lg relative z-20">
          {number}
        </div>
        <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-white/10 blur-[2px] transform scale-110 z-10 animate-pulse"></div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 shadow-lg w-full text-center relative z-10 h-full transition-all duration-300 hover:shadow-[0_10px_30px_-15px_rgba(79,209,197,0.3)] hover:bg-white/[0.15]">
        <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
        <p className="text-cyan-100">{description}</p>
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Asset Registration",
      description: "Register your cranes and components with detailed specifications for complete lifecycle management."
    },
    {
      number: "2",
      title: "Inspection Planning",
      description: "Our AI intelligently schedules inspections based on usage patterns and regulatory requirements."
    },
    {
      number: "3",
      title: "Maintenance Execution",
      description: "Technicians perform and document maintenance with complete workflow guidance."
    },
    {
      number: "4",
      title: "Analysis & Optimization",
      description: "Generate insights and continuously improve your maintenance strategy with data-driven recommendations."
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-indigo-900">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glow elements */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
            <span className="mr-2">🔄</span>
            Streamlined Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Works</h2>
          <p className="text-cyan-100">Our intuitive system streamlines every aspect of your crane maintenance operations through a simple four-step process.</p>
        </div>

        <div className="relative">
          {/* Progress Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 -translate-y-1/2 z-0"></div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <StepCard 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                delay={index}
              />
            ))}
          </div>
        </div>

        {/* System Demo */}
        <div 
          className="mt-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">See the System in Action</h3>
              <p className="text-cyan-100 mb-8">
                Watch our interactive demo to experience how our platform streamlines crane maintenance operations,
                improves safety protocols, and ensures regulatory compliance.
              </p>
              <a href="#contact"
                className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-10px_rgba(79,209,197,0.5)]"
              >
                <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
                <span className="relative flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Schedule a Personalized Demo
                </span>
              </a>
            </div>
            <div className="w-full lg:w-1/2 bg-gray-900 relative min-h-[300px]">
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transition-all transform hover:scale-110 hover:bg-white/20">
                  <Play className="h-8 w-8 text-white" />
                </button>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="System demonstration video"
                className="w-full h-full object-cover opacity-60" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;