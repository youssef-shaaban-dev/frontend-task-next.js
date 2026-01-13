import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#3D3D3D] text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <div className="text-2xl font-bold text-orange-500 mb-4">Toprate</div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Let Us Help</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-orange-500">My Account</a></li>
                            <li><a href="#" className="hover:text-orange-500">FAQs</a></li>
                            <li><a href="#" className="hover:text-orange-500">Categories</a></li>
                            <li><a href="#" className="hover:text-orange-500">Shipping & Returns</a></li>
                        </ul>
                    </div>

                    {/* Policies */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Policies</h3>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><a href="#" className="hover:text-orange-500">Security Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-orange-500">Terms of Use</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Send Email</h3>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-white text-gray-900 px-4 py-2 rounded flex-1 text-sm outline-none"
                            />
                            <button className="bg-[#D4A373] hover:bg-[#c29060] text-white px-4 py-2 rounded text-sm font-medium">
                                Send
                            </button>
                        </div>
                        <div className="mt-6">
                            <h4 className="text-sm font-semibold mb-3">Follow Us</h4>
                            <div className="flex gap-4">
                                <a href="#" className="hover:text-orange-500"><Facebook className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-orange-500"><Twitter className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-orange-500"><Instagram className="w-5 h-5" /></a>
                                <a href="#" className="hover:text-orange-500"><Linkedin className="w-5 h-5" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-xs">
                © 2024 Toprate. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;
