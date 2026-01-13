"use client";

import { ShoppingBag, Heart, User, Home, LayoutGrid, MousePointerClick, Captions, BadgeInfo, Bell, Languages, Menu, X, ChevronDown, LogIn, UserPlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const DesktopMenuItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Our Category', href: '/our-category', icon: <LayoutGrid className="w-5 h-5" /> },
    { name: 'About Us', href: '/about', icon: <MousePointerClick className="w-5 h-5" /> },
    { name: 'Contact Us', href: '/contact', icon: <Captions className="w-5 h-5" /> },
    { name: 'FAQs', href: '/faqs', icon: <BadgeInfo className="w-5 h-5" /> },
];

const IconsButtons = [
    { name: 'Shopping Bag', icon: <ShoppingBag className="w-5 h-5" />, href: '/cart' },
    { name: 'Notification', icon: <Bell className="w-5 h-5" />, href: '/notification' },
    { name: 'Wishlist', icon: <Heart className="w-5 h-5" />, href: '/wishlist' },
    { name: 'Language', icon: <Languages className="w-5 h-5" />, href: '/language' },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userDropdownOpen, setUserDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setUserDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when window is resized to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <nav className="border-b bg-white sticky top-0 z-50">
                <div className="flex items-center justify-between section-padding py-3 md:py-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={65}
                            height={51}
                            loading="eager"
                            className="w-12 h-9 md:w-16 md:h-12"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-normal text-black-200">
                        {DesktopMenuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="hover:text-[#BE968E] flex items-center gap-2 transition-colors"
                            >
                                {item.icon}
                                <span className="text-black-200 font-normal">{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Right Side: Icons + User Dropdown */}
                    <div className="flex items-center gap-3 md:gap-4">
                        {/* Desktop Icons - Hidden on mobile/tablet */}
                        <div className="hidden lg:flex items-center gap-4 text-black-200">
                            {IconsButtons.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item?.href}
                                    className="hover:text-[#BE968E] cursor-pointer transition-colors"
                                    aria-label={item.name}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>

                        {/* User Account Dropdown - Visible on ALL screens */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                                className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                                aria-label="User Account"
                            >
                                <User className="w-4 h-4 md:w-5 md:h-5 text-black-200" />
                                <span className="text-xs md:text-sm font-medium text-black-200 hidden sm:inline">Account</span>
                                <ChevronDown className={cn(
                                    "w-3 h-3 md:w-4 md:h-4 text-black-200 transition-transform",
                                    userDropdownOpen && "rotate-180"
                                )} />
                            </button>

                            {/* Dropdown Menu */}
                            {userDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 md:w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                                    <Link
                                        href="/login"
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                                        onClick={() => setUserDropdownOpen(false)}
                                    >
                                        <LogIn className="w-4 h-4 md:w-5 md:h-5 text-[#BE968E]" />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Sign In</div>
                                            <div className="text-xs text-gray-500">Access your account</div>
                                        </div>
                                    </Link>
                                    <div className="h-px bg-gray-100 my-1" />
                                    <Link
                                        href="/register"
                                        className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 transition-colors"
                                        onClick={() => setUserDropdownOpen(false)}
                                    >
                                        <UserPlus className="w-4 h-4 md:w-5 md:h-5 text-[#BE968E]" />
                                        <div>
                                            <div className="text-sm font-medium text-gray-900">Create Account</div>
                                            <div className="text-xs text-gray-500">Join us today</div>
                                        </div>
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Mobile Menu Button - Hidden on desktop */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-6 h-6 text-black-200" />
                            ) : (
                                <Menu className="w-6 h-6 text-black-200" />
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Slide-in Menu */}
                    <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 shadow-2xl lg:hidden overflow-y-auto">
                        <div className="p-6">
                            {/* Close Button */}
                            <div className="flex justify-between items-center mb-8">
                                <h2 className="text-xl font-bold text-gray-900">Menu</h2>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Navigation Items */}
                            <div className="space-y-1 mb-8">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Navigation</h3>
                                {DesktopMenuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="text-[#BE968E]">{item.icon}</span>
                                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                    </Link>
                                ))}
                            </div>

                            {/* Icons Section */}
                            <div className="space-y-1">
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Access</h3>
                                {IconsButtons.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="text-[#BE968E]">{item.icon}</span>
                                        <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Navbar;
