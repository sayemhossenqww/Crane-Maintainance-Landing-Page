// src/components/sections/TestimonialsSection.js
import React, { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, ArrowRight, Quote } from 'lucide-react';

// Animated counter component for statistics - fixed to use span instead of div
const AnimatedCounter = ({ target, duration = 2000, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      if (entry.isIntersecting) {
        let start = 0;
        const end = parseInt(target);
        const increment = end / 40; // Dividing by steps for smooth animation
        const timer = setInterval(() => {
          start += increment;
          setCount(Math.floor(start));
          if (start >= end) {
            clearInterval(timer);
            setCount(end);
          }
        }, duration / 40);

        // Cleanup
        return () => clearInterval(timer);
      }
    }, { threshold: 0.5 });

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [target, duration]);

  // Using span instead of div to avoid invalid nesting
  return (
    <span ref={countRef} className={className}>
      {count}{suffix}
    </span>
  );
};

const TestimonialCard = ({ quote, name, position, company, rating, image, index }) => {
  // Calculate full and partial stars
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div 
      className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 shadow-lg transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(79,209,197,0.3)] hover:bg-white/[0.15] h-full flex flex-col group"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="flex items-center mb-6">
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < fullStars ? (
                <Star className="fill-yellow-400" size={18} />
              ) : i === fullStars && hasHalfStar ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="half-star text-yellow-400">
                  <defs>
                    <linearGradient id="half" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="50%" stopColor="#FACC15" />
                      <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="url(#half)" />
                </svg>
              ) : (
                <Star size={18} />
              )}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-2 text-cyan-500/20 h-8 w-8" />
        <p className="text-cyan-100 italic flex-grow relative z-10 pl-5">
          "{quote}"
        </p>
      </div>
      
      <div className="mt-auto pt-6 flex items-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/30 mr-4 group-hover:border-cyan-400 transition-colors shadow-lg"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mr-4 font-bold text-white shadow-lg">
            {name.split(' ').map(part => part[0]).join('')}
          </div>
        )}
        <div>
          <h4 className="font-bold text-white group-hover:text-cyan-300 transition-colors">{name}</h4>
          <p className="text-cyan-200 text-sm">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

const CaseStudyCard = () => {
  return (
    <div 
      className="bg-gradient-to-br from-indigo-800 to-indigo-900 rounded-xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] border border-white/10 h-full"
      data-aos="fade-up" 
      data-aos-delay="200"
    >
      <div className="flex flex-col lg:flex-row h-full">
        <div className="w-full lg:w-2/5 relative">
          <img 
            src="https://www.dcvelocity.com/media-library/massive-cranes-installed-at-port-of-virginia.jpg?id=53536578&width=980&quality=90" 
            alt="Shipping cranes at port"
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/90 via-indigo-800/40 to-transparent"></div>
        </div>
        <div className="w-full lg:w-3/5 p-8 lg:p-12 flex flex-col justify-center">
          <div 
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200 w-fit"
          >
            <span className="mr-2">✓</span>
            Success Story
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">How GlobeCrane Reduced Downtime by 65%</h3>
          <p className="text-cyan-100 mb-6">
            GlobeCrane, an international lifting equipment provider, implemented our system across their
            fleet of 120+ cranes and achieved remarkable improvements in operational efficiency and
            compliance.
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                <CheckIcon className="text-green-400" size={14} />
              </div>
              <span className="text-cyan-100">65% reduction in equipment downtime</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                <CheckIcon className="text-green-400" size={14} />
              </div>
              <span className="text-cyan-100">98% compliance rate with regulatory inspections</span>
            </li>
            <li className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                <CheckIcon className="text-green-400" size={14} />
              </div>
              <span className="text-cyan-100">$250,000 annual savings in maintenance costs</span>
            </li>
          </ul>
          <a 
            href="#" 
            className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center transition-colors group"
          >
            Read the full case study
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const CheckIcon = ({ className, size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  
  const testimonials = [
    {
      quote: "The inspection management system has significantly improved our compliance rates and simplified our record-keeping. We've reduced inspection time by 40% and have all documentation readily available for audits.",
      name: "John Donahue",
      position: "Maintenance Manager",
      company: "Industrial Cranes Inc.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "The digital operator logbooks have been a game-changer for our safety protocols. Our operators now complete pre-shift checks consistently, and we can immediately address any issues they report, preventing potential accidents.",
      name: "Sarah Ramirez",
      position: "Safety Director",
      company: "Harbor Logistics",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    },
    {
      quote: "The analytics dashboard gives us visibility into maintenance trends we never had before. We've optimized our spare parts inventory and reduced emergency repairs by implementing more targeted preventive maintenance.",
      name: "Michael Patel",
      position: "Operations Director",
      company: "Construct Co.",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Stats for impact demonstration
  const stats = [
    { value: "40", label: "Reduction in maintenance costs", suffix: "%" },
    { value: "65", label: "Decrease in equipment downtime", suffix: "%" },
    { value: "90", label: "Improvement in compliance rates", suffix: "%" },
    { value: "250", label: "Average annual savings per crane", suffix: "K" }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-indigo-900 to-indigo-950">
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
            <span className="mr-2">💬</span>
            Client Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Clients Say</span></h2>
          <p className="text-cyan-100">Don't just take our word for it. See how our system has transformed operations for our clients.</p>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-16 py-6 px-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden" data-aos="fade-up">
          <div className="flex items-center justify-center space-x-12 animate-marquee">
            <img src="https://cdn.freebiesupply.com/logos/large/2x/siemens-logo-png-transparent.png" alt="Siemens" className="h-8 brightness-200 opacity-70" />
            <img src="https://cdn.worldvectorlogo.com/logos/voith-2.svg" alt="Voith" className="h-8 brightness-200 opacity-70" />
            <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-1-logo-png-transparent.png" alt="General Electric" className="h-8 brightness-200 opacity-70" />
            <img src="https://cdn.worldvectorlogo.com/logos/abb-logo.svg" alt="ABB" className="h-8 brightness-200 opacity-70" />
            <img src="https://cdn.worldvectorlogo.com/logos/sany-group-logo.svg" alt="Sany Group" className="h-8 brightness-200 opacity-70" />
            <img src="https://cdn.freebiesupply.com/logos/large/2x/siemens-logo-png-transparent.png" alt="Siemens" className="h-8 brightness-200 opacity-70" />
            <img src="https://cdn.worldvectorlogo.com/logos/voith-2.svg" alt="Voith" className="h-8 brightness-200 opacity-70" />
          </div>
        </div>

        {/* Desktop Testimonials - 3 column grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              {...testimonial}
              index={index}
            />
          ))}
        </div>

        {/* Mobile Testimonials - Carousel */}
        <div className="md:hidden relative mb-16">
          <div className="overflow-hidden" ref={carouselRef}>
            <div 
              className="flex transition-all duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard 
                    {...testimonial}
                    index={0} // No delay for mobile
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between items-center px-2 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white pointer-events-auto shadow-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white pointer-events-auto shadow-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-gradient-to-r from-cyan-500 to-blue-500' : 'bg-white/20'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Statistics Section - FIXED STRUCTURE */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center shadow-lg transform transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(99,102,241,0.3)] hover:bg-white/[0.15] hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Fixed: Using proper heading instead of p tag with nested div */}
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </h3>
              <p className="text-cyan-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Feature Testimonial / Case Study */}
        <div className="mt-16" data-aos="fade-up">
          <CaseStudyCard />
        </div>

        {/* Featured Quote */}
        <div className="mt-20 text-center max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          <div className="relative">
            <Quote className="absolute -top-6 -left-6 h-32 w-32 text-cyan-400/10 transform -rotate-12" />
            <div className="relative z-10">
              <p className="text-2xl md:text-3xl text-white font-light italic leading-relaxed">
                "Implementing Levitate Lifting has been the single best investment we've made for our maintenance operations. The ROI was evident within just 3 months, and our safety incidents have dropped by 78%."
              </p>
            </div>
          </div>
          <div className="mt-8 inline-flex items-center">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              alt="Robert Johnson"
              className="w-14 h-14 rounded-full object-cover border-2 border-cyan-500/30 mr-4"
            />
            <div className="text-left">
              <p className="font-semibold text-white">Robert Johnson</p>
              <p className="text-cyan-200">CEO, Global Lifting Solutions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="300">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Get Results Like These?</h3>
            <p className="text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied companies who have transformed their crane maintenance operations with our advanced platform.
            </p>
            <a 
              href="#contact" 
              className="relative group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-10px_rgba(79,209,197,0.5)]"
            >
              <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
              <span className="relative flex items-center">
                Schedule a Free Consultation
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-950 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TestimonialsSection;