// src/components/sections/FAQSection.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, toggle, index }) => {
  return (
    <div 
      className="mb-6 border-b border-white/10 pb-6"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <button 
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={toggle}
      >
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{question}</h3>
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-cyan-500/20">
          {isOpen ? (
            <ChevronUp className="text-cyan-400 transition-transform" size={18} />
          ) : (
            <ChevronDown className="text-cyan-400 transition-transform" size={18} />
          )}
        </div>
      </button>
      <div 
        className={`mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-cyan-100">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqItems = [
    {
      question: "How long does it take to implement the system?",
      answer: "Implementation time varies based on the size of your organization and the number of assets. For a standard implementation, we typically complete setup, data migration, and training within 4 months. Our enterprise implementation includes a detailed project plan with milestones to ensure a smooth transition to the new system."
    },
    {
      question: "Can we import our existing maintenance records?",
      answer: "Yes, our system includes data migration tools that support importing existing records from Excel, CSV files, or other maintenance management systems. During implementation, our team will work with you to map your data to our system and ensure a complete transfer of your historical maintenance and inspection records."
    },
    {
      question: "Is the system compliant with industry regulations?",
      answer: "Our system is designed to meet regulatory requirements for crane inspections and maintenance across multiple jurisdictions. The digital inspection forms and scheduling tools are configured to comply with OSHA, ASME, and other relevant standards. The system maintains comprehensive records with audit trails for regulatory compliance and provides built-in reporting for certification and inspection documentation."
    },
    {
      question: "Does the system work on mobile devices?",
      answer: "Yes, our system is fully responsive and optimized for use on tablets and smartphones. Field technicians can complete inspections, update work orders, and access documentation from their mobile devices. The system also supports offline functionality, allowing work to continue even in areas with limited connectivity, with automatic synchronization when connection is restored."
    },
    {
      question: "What kind of support is included?",
      answer: "All plans include email support during business hours, access to our extensive knowledge base, and regular system updates. Professional and Enterprise plans include priority support with faster response times, phone support, and a dedicated account manager. Our Enterprise customers receive 24/7 emergency support, custom development services, and on-site technical visits as needed."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-gradient-to-b from-indigo-950 to-indigo-900">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft glow elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
        
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
            <span className="mr-2">❓</span>
            Common Questions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
          <p className="text-cyan-100">Have questions about our crane maintenance management system? Find answers to common questions below.</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-[0_10px_40px_-15px_rgba(79,70,229,0.2)]" data-aos="fade-up" data-aos-delay="100">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index} 
              question={item.question} 
              answer={item.answer} 
              isOpen={openIndex === index}
              toggle={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>

        {/* Additional CTA */}
        <div className="mt-12 text-center" data-aos="fade-up" data-aos-delay="200">
          <p className="text-cyan-100 mb-4">Still have questions? We're here to help.</p>
          <a 
            href="#contact" 
            className="relative group inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white font-medium transition-all duration-300 hover:bg-white/15"
          >
            Contact our support team
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;