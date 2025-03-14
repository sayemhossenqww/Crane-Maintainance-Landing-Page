// src/components/sections/ContactSection.js
import React from 'react';
import { MapPin, Phone, Mail, Twitter, Linkedin, Facebook, Youtube } from 'lucide-react';

const ContactSection = () => {
    return (
        <section id="contact" className="relative py-24 bg-gradient-to-b from-indigo-900 to-indigo-950">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft glow elements */}
                <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Contact Information */}
                    <div className="w-full lg:w-1/3" data-aos="fade-right">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-5 text-sm text-cyan-200">
                            <span className="mr-2">✦</span>
                            Get In Touch
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                            Start Your <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">Transformation</span>
                        </h2>
                        <p className="text-cyan-100 mb-8">
                            Ready to revolutionize your crane maintenance operations? Contact us today to discuss your specific needs or schedule a personalized demo.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                                    <MapPin className="text-cyan-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">Visit Us</h4>
                                    <p className="text-cyan-100">
                                        28 Ashbourne Boulevard<br />
                                        Donnybrook 3064, Australia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                                    <Phone className="text-cyan-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">Call Us</h4>
                                    <p className="text-cyan-100">(555) 123-4567</p>
                                    <p className="text-cyan-200/70 text-sm">Mon-Fri, 8am-5pm</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                                    <Mail className="text-cyan-400" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1 text-white">Email Us</h4>
                                    <p className="text-cyan-100">info@levitatelifting.com</p>
                                    <p className="text-cyan-200/70 text-sm">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h4 className="font-bold text-lg mb-4 text-white">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-colors group shadow-lg"
                                >
                                    <Twitter size={18} className="text-cyan-100 group-hover:text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-colors group shadow-lg"
                                >
                                    <Linkedin size={18} className="text-cyan-100 group-hover:text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-colors group shadow-lg"
                                >
                                    <Facebook size={18} className="text-cyan-100 group-hover:text-white" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 hover:border-transparent transition-colors group shadow-lg"
                                >
                                    <Youtube size={18} className="text-cyan-100 group-hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className="w-full lg:w-2/3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 lg:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)]"
                        data-aos="fade-left"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-white">Request a Demo or Consultation</h3>
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-cyan-100 font-medium mb-2">First Name *</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-cyan-100 font-medium mb-2">Last Name *</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-cyan-100 font-medium mb-2">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-cyan-100 font-medium mb-2">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-cyan-100 font-medium mb-2">Company *</label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="jobTitle" className="block text-cyan-100 font-medium mb-2">Job Title</label>
                                    <input
                                        type="text"
                                        id="jobTitle"
                                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="craneCount" className="block text-cyan-100 font-medium mb-2">Number of Cranes</label>
                                <select
                                    id="craneCount"
                                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                >
                                    <option value="" className="bg-indigo-950">Please select</option>
                                    <option value="1-10" className="bg-indigo-950">1-10</option>
                                    <option value="11-50" className="bg-indigo-950">11-50</option>
                                    <option value="51-100" className="bg-indigo-950">51-100</option>
                                    <option value="100+" className="bg-indigo-950">100+</option>
                                </select>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block text-cyan-100 font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white placeholder-cyan-200/50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                                    placeholder="Tell us about your current maintenance process and challenges..."
                                ></textarea>
                            </div>

                            <div className="mb-6">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-white/20 bg-white/5 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-cyan-100 text-sm">
                                        I agree to receive communications from Levitate Lifting. You can unsubscribe at any time.
                                    </span>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="relative group w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-10px_rgba(79,209,197,0.5)]"
                            >
                                <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
                                <span className="relative">Request Demo</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;