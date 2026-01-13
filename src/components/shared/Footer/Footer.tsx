"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#4D4139] text-white pt-16 pb-8 font-poppins relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            {/* Placeholder for the Tinytales logo */}
                           <Image src="/logo.png" alt="Logo" width={100} height={100} className="text-2xl font-bold text-orange-500 mb-4" />
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
                            Ipsam in eos qui consequatur ab cum maxime. Soluta dolor quae Ipsam in eos qui consequatur ab.
                        </p>
                    </div>

                    {/* Links - Let Us Help */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Let Us Help</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">My Account</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">FAQs</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">Categories</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">All Products</a></li>
                        </ul>
                    </div>

                    {/* Links - Policies */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Policies</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">Refund Policy</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">Cancellation Policy</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">Terms and Conditions</a></li>
                            <li><a href="#" className="hover:text-[#BE968E] transition-colors">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Send Email */}
                    <div>
                        <h3 className="text-xl font-bold mb-6 text-white">Send Email</h3>
                        <div className="relative mb-8">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white text-gray-900 pl-4 pr-24 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#BE968E]"
                            />
                            <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#BE968E] hover:bg-[#a8857d] text-white px-6 rounded-lg text-sm font-medium transition-colors">
                                Send
                            </button>
                        </div>

                        <div>
                            <h4 className="text-base font-bold mb-4 text-white">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="text-white hover:text-[#BE968E] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-white hover:text-[#BE968E] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-white hover:text-[#BE968E] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <Instagram className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-white hover:text-[#BE968E] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <Linkedin className="w-4 h-4" />
                                </a>
                                <a href="#" className="text-white hover:text-[#BE968E] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" /></svg>
                                </a>
                                <a href="#" className="text-white hover:text-[#BE968E] transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20">
                                    <Send className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
