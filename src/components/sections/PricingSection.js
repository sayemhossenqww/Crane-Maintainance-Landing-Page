// src/components/sections/PricingSection.js
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingCard = ({ plan, isAnnual, isPopular, index }) => {
  const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
  
  return (
    <div 
      className={`relative bg-white/10 backdrop-blur-md border border-white/20 rounded-xl transition-all duration-300 overflow-hidden
        ${isPopular ? 'lg:scale-110 shadow-[0_10px_40px_-15px_rgba(99,102,241,0.5)] z-10' : 'hover:shadow-[0_10px_40px_-15px_rgba(79,209,197,0.3)] hover:bg-white/[0.15]'}
      `}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {isPopular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 text-sm font-bold uppercase">
            Most Popular
          </div>
        </div>
      )}
      <div className="p-8 text-center border-b border-white/10">
        <h3 className="text-xl font-semibold mb-2 text-white">{plan.name}</h3>
        <p className="text-cyan-200 mb-6">{plan.description}</p>
        <div className="flex items-center justify-center">
          <span className="text-cyan-200 text-lg">$</span>
          <span className="text-4xl font-bold mx-1 text-white">{price}</span>
          <span className="text-cyan-200">/mo</span>
        </div>
        <p className="text-sm text-cyan-200 mt-2">
          per month, billed {isAnnual ? 'annually' : 'monthly'}
        </p>
      </div>
      <div className="p-8">
        <ul className="space-y-4">
          {plan.features.map((feature, idx) => (
            <li key={idx} className={`flex items-start ${!feature.included ? 'text-cyan-300/50' : 'text-cyan-100'}`}>
              {feature.included ? (
                <Check className="mt-1 mr-3 h-5 w-5 text-cyan-400 flex-shrink-0" />
              ) : (
                <X className="mt-1 mr-3 h-5 w-5 flex-shrink-0" />
              )}
              <span>{feature.name}</span>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className={`mt-8 ${
            isPopular
              ? 'relative group bg-gradient-to-r from-cyan-500 to-blue-500 hover:shadow-[0_10px_20px_-10px_rgba(79,209,197,0.5)]'
              : 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20'
          } w-full py-3 rounded-lg font-medium inline-block text-center text-white transition-all`}
        >
          {isPopular && (
            <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
          )}
          <span className="relative">{plan.cta}</span>
        </a>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Standard',
      description: 'For small businesses',
      monthlyPrice: 499,
      annualPrice: 399,
      features: [
        { name: 'Up to 10 crane assets', included: true },
        { name: 'Basic inspection management', included: true },
        { name: 'Digital logbooks', included: true },
        { name: 'Work order management', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'API integrations', included: false },
        { name: 'Custom reporting', included: false },
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      description: 'For growing businesses',
      monthlyPrice: 999,
      annualPrice: 799,
      features: [
        { name: 'Up to 50 crane assets', included: true },
        { name: 'Advanced inspection management', included: true },
        { name: 'Digital logbooks with analytics', included: true },
        { name: 'Complete work order system', included: true },
        { name: 'Basic analytics dashboard', included: true },
        { name: 'Standard API integrations', included: true },
        { name: 'Custom reporting', included: false },
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      description: 'For large organizations',
      monthlyPrice: 2499,
      annualPrice: 1999,
      features: [
        { name: 'Unlimited crane assets', included: true },
        { name: 'Complete inspection management', included: true },
        { name: 'Advanced digital logbooks', included: true },
        { name: 'Enterprise work order system', included: true },
        { name: 'Advanced analytics & forecasting', included: true },
        { name: 'Full API access & custom integrations', included: true },
        { name: 'Custom reporting & dashboards', included: true },
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-gradient-to-b from-indigo-900 to-indigo-950">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glow elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
            <span className="mr-2">💲</span>
            Flexible Pricing
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Simple Pricing for Your 
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent"> Business</span>
          </h2>
          <p className="text-cyan-100">Choose the plan that fits your organization's needs and scale as you grow.</p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex items-center justify-center mb-16" data-aos="fade-up">
          <span className={`text-${isAnnual ? 'cyan-200/70' : 'white'} font-medium transition-colors`}>Monthly</span>
          <label className="mx-4 relative inline-block w-14 h-8 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isAnnual}
              onChange={() => setIsAnnual(!isAnnual)}
            />
            <span
              className={`absolute inset-0 rounded-full ${isAnnual ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/20'} transition-all`}
            ></span>
            <span
              className={`absolute inset-y-0 left-0 w-6 h-6 m-1 rounded-full bg-white transition-all transform ${
                isAnnual ? 'translate-x-6' : ''
              } shadow-md`}
            ></span>
          </label>
          <span className={`text-${isAnnual ? 'white' : 'cyan-200/70'} font-medium transition-colors flex items-center`}>
            Annual 
            <span className="ml-2 text-sm py-0.5 px-2 bg-gradient-to-r from-cyan-500 to-cyan-400 text-white rounded-full font-medium">Save 20%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard 
              key={index} 
              plan={plan} 
              isAnnual={isAnnual} 
              isPopular={plan.popular}
              index={index}
            />
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <p className="text-cyan-100 mb-4">Need a custom solution for your specific requirements?</p>
          <a href="#contact" className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium transition-colors">
            Contact our enterprise sales team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;