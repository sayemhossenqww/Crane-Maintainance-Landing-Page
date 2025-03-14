// src/components/sections/BenefitsSection.js
import React, { useState, useEffect, useRef } from 'react';

// Animated counter component
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

    return (
        <div ref={countRef} className={className}>
            {count}{suffix}
        </div>
    );
};

const BenefitCard = ({ icon, title, description, color, index }) => {
    return (
        <div
            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(99,238,245,0.3)] hover:bg-white/[0.15]"
            data-aos="fade-up"
            data-aos-delay={index * 100}
        >
            <div className={`${color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg`}>
                {icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
            <p className="text-cyan-100">{description}</p>
        </div>
    );
};

const BenefitsSection = () => {
    const benefits = [
        {
            icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>,
            title: "Enhanced Safety Compliance",
            description: "Ensure proper inspection protocols and identify safety issues before they become problems, reducing workplace incidents and improving compliance.",
            color: "bg-gradient-to-r from-green-400 to-teal-500"
        },
        {
            icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            title: "Reduced Operational Downtime",
            description: "Proactive maintenance scheduling and rapid issue resolution minimize equipment downtime, increasing productivity and operational efficiency.",
            color: "bg-gradient-to-r from-blue-400 to-indigo-500"
        },
        {
            icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>,
            title: "Full Regulatory Compliance",
            description: "Automatically track and document all inspection and maintenance activities, ensuring compliance with regulations and avoiding costly penalties.",
            color: "bg-gradient-to-r from-purple-400 to-indigo-500"
        },
        {
            icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>,
            title: "Maintenance Cost Optimization",
            description: "Track maintenance costs, optimize spare parts inventory, and extend equipment lifespan through properly scheduled preventive maintenance.",
            color: "bg-gradient-to-r from-pink-400 to-purple-500"
        },
        {
            icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>,
            title: "Streamlined Workflows",
            description: "Digitize paperwork, automate scheduling, and eliminate manual processes to reduce administrative overhead and improve operational efficiency.",
            color: "bg-gradient-to-r from-yellow-400 to-orange-500"
        },
        {
            icon: <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>,
            title: "Data-Driven Decision Making",
            description: "Access comprehensive reporting and analytics to identify trends, anticipate maintenance needs, and make informed decisions about your equipment.",
            color: "bg-gradient-to-r from-cyan-400 to-blue-500"
        }
    ];

    const stats = [
        { value: "40", label: "Reduction in maintenance costs", suffix: "%" },
        { value: "65", label: "Decrease in equipment downtime", suffix: "%" },
        { value: "90", label: "Improvement in compliance rates", suffix: "%" },
        { value: "75", label: "Faster issue resolution time", suffix: "%" }
    ];

    return (
        <section id="benefits" className="relative py-24 bg-gradient-to-b from-indigo-950 to-indigo-900">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft glow elements */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
                    <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
                        <span className="mr-2">🚀</span>
                        Proven Results
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white leading-tight">
                        Transform Your <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Maintenance Operations</span>
                    </h2>
                    <p className="text-cyan-100">Our system delivers measurable benefits across safety, efficiency, and compliance, helping you achieve operational excellence.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            color={benefit.color}
                            index={index}
                        />
                    ))}
                </div>

                {/* Statistics */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center shadow-lg transform transition-all duration-300 hover:shadow-[0_10px_40px_-15px_rgba(99,102,241,0.3)] hover:bg-white/[0.15]"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <p className="text-cyan-300 text-4xl font-bold mb-2">
                                <AnimatedCounter
                                    target={stat.value}
                                    suffix={stat.suffix}
                                />
                            </p>
                            <p className="text-cyan-100 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonial Highlight */}
                <div className="mt-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 lg:p-12 text-center shadow-lg" data-aos="fade-up">
                    <svg className="w-12 h-12 mx-auto mb-4 text-cyan-300 opacity-70" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-2xl md:text-3xl text-white font-light mb-8 italic max-w-4xl mx-auto">
                        "Implementing this system has transformed our maintenance operations. We've reduced costs by 40% while improving compliance and safety across our entire fleet."
                    </p>
                    <div className="flex items-center justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                            alt="Michael Johnson"
                            className="w-12 h-12 rounded-full border-2 border-white/20 mr-4"
                        />
                        <div className="text-left">
                            <p className="text-white font-semibold">Michael Johnson</p>
                            <p className="text-cyan-100 text-sm">Operations Director, EastPort Logistics</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BenefitsSection;