// src/components/sections/HeroSection.js
import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import AOS from 'aos';

const HeroSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease-out',
        });
    }, []);

    // Generate floating bubbles/shapes with randomized properties
    const renderFloatingShapes = () => {
        const shapes = [];
        const shapeTypes = ['circle', 'square', 'triangle', 'hexagon', 'plus'];
        const shapeCount = 12; // Number of shapes to generate

        for (let i = 0; i < shapeCount; i++) {
            const size = Math.floor(Math.random() * 30) + 10; // Random size between 10-40px
            const shape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            const left = `${Math.floor(Math.random() * 100)}%`;
            const top = `${Math.floor(Math.random() * 100)}%`;
            const animationDuration = Math.floor(Math.random() * 30) + 20; // 20-50s
            const animationDelay = Math.floor(Math.random() * 15); // 0-15s
            const opacity = (Math.random() * 0.07) + 0.03; // Very subtle opacity between 0.03-0.1

            let shapeElement;

            switch (shape) {
                case 'circle':
                    shapeElement = (
                        <div
                            key={`circle-${i}`}
                            className="absolute rounded-full bg-white/10"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left,
                                top,
                                opacity,
                                animation: `float ${animationDuration}s ease-in-out infinite`,
                                animationDelay: `${animationDelay}s`,
                            }}
                        ></div>
                    );
                    break;
                case 'square':
                    shapeElement = (
                        <div
                            key={`square-${i}`}
                            className="absolute bg-white/10"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                left,
                                top,
                                opacity,
                                animation: `float ${animationDuration}s ease-in-out infinite, rotate-slow ${animationDuration * 2}s linear infinite`,
                                animationDelay: `${animationDelay}s`,
                            }}
                        ></div>
                    );
                    break;
                case 'triangle':
                    shapeElement = (
                        <div
                            key={`triangle-${i}`}
                            className="absolute bg-white/10"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                                left,
                                top,
                                opacity,
                                animation: `float ${animationDuration}s ease-in-out infinite, rotate-slow ${animationDuration * 1.5}s linear infinite`,
                                animationDelay: `${animationDelay}s`,
                            }}
                        ></div>
                    );
                    break;
                case 'hexagon':
                    shapeElement = (
                        <div
                            key={`hexagon-${i}`}
                            className="absolute bg-white/10"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                left,
                                top,
                                opacity,
                                animation: `float ${animationDuration}s ease-in-out infinite, rotate-slow ${animationDuration * 1.8}s linear infinite`,
                                animationDelay: `${animationDelay}s`,
                            }}
                        ></div>
                    );
                    break;
                case 'plus':
                    shapeElement = (
                        <div
                            key={`plus-${i}`}
                            className="absolute bg-white/10"
                            style={{
                                width: `${size}px`,
                                height: `${size}px`,
                                clipPath: 'polygon(33% 0%, 66% 0%, 66% 33%, 100% 33%, 100% 66%, 66% 66%, 66% 100%, 33% 100%, 33% 66%, 0% 66%, 0% 33%, 33% 33%)',
                                left,
                                top,
                                opacity,
                                animation: `float ${animationDuration}s ease-in-out infinite, rotate-slow ${animationDuration}s linear infinite`,
                                animationDelay: `${animationDelay}s`,
                            }}
                        ></div>
                    );
                    break;
                default:
                    shapeElement = null;
            }

            shapes.push(shapeElement);
        }

        return shapes;
    };

    // Generate translucent bubbles
    const renderBubbles = () => {
        const bubbles = [];
        const bubbleCount = 15; // Number of bubbles to generate

        for (let i = 0; i < bubbleCount; i++) {
            const size = Math.floor(Math.random() * 60) + 20; // Random size between 20-80px
            const left = `${Math.floor(Math.random() * 100)}%`;
            const bottom = `-${Math.floor(Math.random() * 20)}%`; // Start below the viewport
            const animationDuration = Math.floor(Math.random() * 60) + 40; // 40-100s
            const opacity = (Math.random() * 0.06) + 0.02; // Very subtle opacity between 0.02-0.08

            bubbles.push(
                <div
                    key={`bubble-${i}`}
                    className="absolute rounded-full"
                    style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        left,
                        bottom,
                        opacity,
                        background: 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
                        animation: `rise ${animationDuration}s linear infinite`,
                        animationDelay: `${Math.floor(Math.random() * 40)}s`, // 0-40s delay
                    }}
                ></div>
            );
        }

        return bubbles;
    };

    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-indigo-900 to-indigo-950">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft glow elements */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-pulse-slow animation-delay-2000"></div>
                <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[100px] opacity-10 animate-float-slow animation-delay-1000"></div>

                {/* Add large gentle wave effect */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-wave-pattern bg-repeat bg-[length:400px_400px] animate-wave-slow"></div>
                    <div className="absolute inset-0 bg-wave-pattern-2 bg-repeat bg-[length:300px_300px] animate-wave-slow-reverse animation-delay-2000"></div>
                </div>

                {/* Floating bubbles that rise slowly */}
                <div className="absolute inset-0 overflow-hidden">
                    {renderBubbles()}
                </div>

                {/* Floating geometric shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    {renderFloatingShapes()}
                </div>

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Content Side */}
                    <div
                        className="w-full lg:w-1/2 z-10"
                        data-aos="fade-right"
                    >
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 text-sm text-cyan-200 animate-shimmer-slow">
                            <span className="mr-2 text-cyan-200 animate-pulse">✦</span>
                            Next Generation Maintenance Platform
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                            Elevate Your <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent bg-animate-gradient">Crane Maintenance</span> Operations
                        </h1>

                        <p className="text-cyan-100 text-lg mb-10 leading-relaxed max-w-xl">
                            Transform your entire crane maintenance lifecycle with intelligent inspections, predictive analytics, and seamless compliance monitoring.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
                            <a href="#contact"
                                className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-10px_rgba(79,209,197,0.5)]"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
                                <span className="relative flex items-center">
                                    <svg className="w-5 h-5 mr-2 animate-pulse-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                                    </svg>
                                    Book Live Demo
                                </span>
                            </a>
                            <a href="#features"
                                className="px-6 py-3 bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/15 text-white font-medium rounded-lg inline-flex items-center justify-center transition-all duration-300 ease-out hover:scale-[1.02]"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                Explore Features
                            </a>
                        </div>

                        {/* Enhanced Trust Indicators with Animation */}
                        <div
                            className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mt-12 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-500 hover:shadow-[0_10px_25px_-12px_rgba(79,209,197,0.15)]"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="flex -space-x-3">
                                <img
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-800/50 border border-white/20 shadow-lg animate-bounce-subtle animation-delay-100"
                                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                    alt="User"
                                />
                                <img
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-800/50 border border-white/20 shadow-lg animate-bounce-subtle animation-delay-300"
                                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                    alt="User"
                                />
                                <img
                                    className="inline-block h-10 w-10 rounded-full ring-2 ring-indigo-800/50 border border-white/20 shadow-lg animate-bounce-subtle animation-delay-500"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                                    alt="User"
                                />
                            </div>
                            <div>
                                <div className="flex items-center space-x-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className={`text-yellow-400 fill-yellow-400 animate-pulse-star animation-delay-${i * 200}`} />
                                    ))}
                                </div>
                                <p className="text-cyan-100 text-sm group-hover:text-cyan-200 transition-colors">
                                    Trusted by <span className="text-cyan-300 font-semibold animate-shimmer-slow">500+</span> companies worldwide
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div
                        className="w-full lg:w-1/2"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <div className="relative animate-float-subtle">
                            {/* Main Image */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] transition-all duration-700 hover:shadow-[0_25px_60px_-12px_rgba(56,189,248,0.2)]">
                                <img
                                    src="https://www.advancedcranes.com.sa/wp-content/uploads/2019/06/cropped-IMG_1936.jpg"
                                    alt="Advanced Crane Maintenance Dashboard"
                                    className="w-full rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/30 to-transparent rounded-2xl"></div>
                            </div>

                            {/* Floating Statistics Cards with Animation */}
                            <div
                                className="absolute -top-4 -right-4 md:top-6 md:-right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-lg z-20 transform transition-all duration-500 hover:translate-y-[-5px] hover:bg-white/15 animate-float animation-delay-1000"
                                data-aos="fade-left"
                                data-aos-delay="300"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500/90 text-white animate-pulse-subtle">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-white/80">Compliance Rate</p>
                                        <p className="text-lg font-bold text-white animate-number-count" data-value="98.5">98.5%</p>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="absolute -bottom-4 -left-4 md:-bottom-4 md:-left-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-lg z-20 transform transition-all duration-500 hover:translate-y-[5px] hover:bg-white/15 animate-float animation-delay-2000"
                                data-aos="fade-right"
                                data-aos-delay="500"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500/90 text-white animate-pulse-subtle">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-white/80">Downtime Reduction</p>
                                        <p className="text-lg font-bold text-white animate-number-count" data-value="65">65%</p>
                                    </div>
                                </div>
                            </div>

                            {/* Third floating card with customer satisfaction and animation */}
                            <div
                                className="absolute top-1/2 -left-8 md:top-1/2 md:-left-12 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-lg shadow-lg z-20 transform transition-all duration-500 hover:translate-x-[5px] hidden md:block hover:bg-white/15 animate-float animation-delay-3000"
                                data-aos="fade-right"
                                data-aos-delay="400"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-yellow-500/90 text-white animate-pulse-subtle">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-xs font-medium text-white/80">Customer Satisfaction</p>
                                        <p className="text-lg font-bold text-white animate-number-count" data-value="4.9">4.9/5</p>
                                    </div>
                                </div>
                            </div>

                            {/* Animated decorative element */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl -z-10 blur opacity-20 animate-pulse-slow"></div>
                        </div>
                    </div>
                </div>

                {/* Client Logos - Add sliding animation */}
                {/* <div className="mt-24 pt-10 border-t border-white/10 overflow-hidden" data-aos="fade-up">
                    <p className="text-center text-cyan-100 font-medium mb-8">Trusted by industry leaders worldwide</p>

                    <div className="flex items-center gap-8 animate-marquee hover:pause overflow-hidden py-4">
                        <div className="flex items-center justify-center shrink-0" data-aos="fade-up" data-aos-delay="100">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/siemens-logo-png-transparent.png" alt="Siemens" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0" data-aos="fade-up" data-aos-delay="200">
                            <img src="https://cdn.worldvectorlogo.com/logos/voith-2.svg" alt="Voith" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0" data-aos="fade-up" data-aos-delay="300">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-1-logo-png-transparent.png" alt="General Electric" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0" data-aos="fade-up" data-aos-delay="400">
                            <img src="https://cdn.worldvectorlogo.com/logos/abb-logo.svg" alt="ABB" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0" data-aos="fade-up" data-aos-delay="500">
                            <img src="https://cdn.worldvectorlogo.com/logos/sany-group-logo.svg" alt="Sany Group" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/siemens-logo-png-transparent.png" alt="Siemens" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0">
                            <img src="https://cdn.worldvectorlogo.com/logos/voith-2.svg" alt="Voith" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0">
                            <img src="https://cdn.freebiesupply.com/logos/large/2x/general-electric-1-logo-png-transparent.png" alt="General Electric" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0">
                            <img src="https://cdn.worldvectorlogo.com/logos/abb-logo.svg" alt="ABB" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                        <div className="flex items-center justify-center shrink-0">
                            <img src="https://cdn.worldvectorlogo.com/logos/sany-group-logo.svg" alt="Sany Group" className="h-8 brightness-200 opacity-70 hover:opacity-100 transition-all duration-300" />
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;