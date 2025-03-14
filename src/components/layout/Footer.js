// src/components/layout/Footer.js
import React from 'react';
import { Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-indigo-950 text-white overflow-hidden relative">
            {/* Subtle background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Soft glow elements */}
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-10"></div>

                {/* Subtle grid pattern overlay */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:40px_40px]"></div>
            </div>

            {/* Newsletter Section */}
            <div className="border-b border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                        <p className="text-cyan-100 mb-6">Get the latest industry insights, product updates, and maintenance best practices delivered to your inbox.</p>
                        <form className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="flex-grow px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-cyan-200/60 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-lg inline-flex items-center justify-center overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_10px_20px_-10px_rgba(79,209,197,0.5)]"
                            >
                                <span className="absolute -inset-px bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:duration-200"></span>
                                <span className="relative">Subscribe</span>
                            </button>
                        </form>
                        <p className="text-cyan-200/60 text-sm mt-4">We respect your privacy. Unsubscribe at any time.</p>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-2 mb-6">
                            <span className="text-2xl">🏗️</span>
                            <span className="font-bold text-xl">Levitate Lifting</span>
                        </div>
                        <p className="text-cyan-100 mb-6">
                            Advanced crane maintenance and inspection software to improve safety, ensure compliance, and reduce downtime.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                <Twitter size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                <Facebook size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-cyan-500 transition-colors">
                                <Youtube size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#features" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Resource Library
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Support</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Documentation
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Training Videos
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    API Reference
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-cyan-100 hover:text-white flex items-center">
                                    <ArrowRight size={14} className="mr-2" />
                                    Status Page
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={18} className="mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                                <span className="text-cyan-100">
                                    28 Ashbourne Boulevard<br />
                                    Donnybrook 3064, Australia
                                </span>
                            </li>
                            <li className="flex items-start">
                                <Phone size={18} className="mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-cyan-100">(555) 123-4567</p>
                                    <p className="text-cyan-100/60 text-sm">Mon-Fri, 8am-5pm</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <Mail size={18} className="mr-3 text-cyan-400 mt-1 flex-shrink-0" />
                                <div>
                                    <p className="text-cyan-100">info@levitatelifting.com</p>
                                    <p className="text-cyan-100/60 text-sm">We'll respond within 24h</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-cyan-100/60 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Levitate Lifting. All rights reserved.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-cyan-100/60 hover:text-white text-sm">Privacy Policy</a>
                            <a href="#" className="text-cyan-100/60 hover:text-white text-sm">Terms of Service</a>
                            <a href="#" className="text-cyan-100/60 hover:text-white text-sm">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;