// src/components/layout/Header.js
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'py-3 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏗️</span>
            <span className="font-bold text-xl text-white">Levitate Lifting</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white/80 hover:text-white font-medium transition-colors">
              Features
            </a>
            <a href="#benefits" className="text-white/80 hover:text-white font-medium transition-colors">
              Benefits
            </a>
            <a href="#how-it-works" className="text-white/80 hover:text-white font-medium transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white font-medium transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-white/80 hover:text-white font-medium transition-colors">
              FAQ
            </a>
            <a href="#contact" 
               className="relative group px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg overflow-hidden transition-all hover:shadow-[0_8px_16px_-8px_rgba(79,209,197,0.5)]">
              <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
              <span className="relative">Get Started</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-indigo-900/95 backdrop-blur-md mt-4 py-4 px-2 rounded-lg border border-white/10 shadow-lg">
            <div className="flex flex-col space-y-4 px-2">
              <a
                href="#features"
                className="text-white/80 hover:text-white font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-white/80 hover:text-white font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                className="text-white/80 hover:text-white font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#pricing"
                className="text-white/80 hover:text-white font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="text-white/80 hover:text-white font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-5 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;