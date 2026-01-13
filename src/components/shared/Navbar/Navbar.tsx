import { Search, ShoppingBag, Heart, User, Menu } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="border-b bg-white">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="text-2xl font-bold text-orange-500">
                        Toprate
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <Link href="#" className="hover:text-orange-500">Home</Link>
                    <Link href="#" className="hover:text-orange-500">Our Categories</Link>
                    <Link href="#" className="hover:text-orange-500">About Us</Link>
                    <Link href="#" className="hover:text-orange-500">Contact Us</Link>
                    <Link href="#" className="hover:text-orange-500">FAQs</Link>
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 text-gray-600">
                    <button className="hover:text-orange-500">
                        <Search className="w-5 h-5" />
                    </button>
                    <button className="hover:text-orange-500 relative">
                        <ShoppingBag className="w-5 h-5" />
                        <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">2</span>
                    </button>
                    <button className="hover:text-orange-500">
                        <Heart className="w-5 h-5" />
                    </button>
                    <Link href="/login" className="hover:text-orange-500 flex items-center gap-1">
                        <User className="w-5 h-5" />
                    </Link>
                    <button className="md:hidden hover:text-orange-500">
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
