// src/pages/HomePage.js
import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '../components/sections/ContactSection';
import FAQSection from '../components/sections/FAQSection';
import MobileAppSection from '../components/sections/MobileAppSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
// Import other sections as needed

const HomePage = () => {
    // Ensure smooth scrolling for anchor links
    useEffect(() => {
        const handleAnchorClick = (e) => {
            const target = e.target.closest('a');
            if (!target) return;

            const href = target.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            e.preventDefault();
            const element = document.getElementById(href.substring(1));
            if (!element) return;

            const headerHeight = 80; // Adjust based on your header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <>
            <HeroSection />
            <FeaturesSection />
            <BenefitsSection />
            <HowItWorksSection />
            <MobileAppSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <ContactSection />
            {/* Add other sections here */}
        </>
    );
};

export default HomePage;