import { ShoppingBag, Heart, User, Home, LayoutGrid, MousePointerClick, Captions, BadgeInfo, Bell, Languages } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DesktopMenuItems = [
    { name: 'Home', href: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'Our Category', href: 'our-category', icon: <LayoutGrid className="w-5 h-5" /> },
    { name: 'About Us', href: '/about', icon: <MousePointerClick className="w-5 h-5" /> },
    { name: 'Contact Us', href: '/contact', icon: <Captions className="w-5 h-5" /> },
    { name: 'FAQs', href: '/faqs', icon: <BadgeInfo className="w-5 h-5" /> },
];

const IconsButtons = [
    { name: 'Shopping Bag', icon: <ShoppingBag className="w-5 h-5" /> },
    { name: 'Notification', icon: <Bell className="w-5 h-5" /> },
    { name: 'Wishlist', icon: <Heart className="w-5 h-5" /> },
    { name: 'Language', icon: <Languages className="w-5 h-5" /> },
    { name: 'User Account', icon: <User className="w-5 h-5" /> },
];

const Navbar = () => {
    return (
        <nav className="border-b bg-white ">
            <div className="  flex items-center justify-between section-padding">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/logo.png"
                        alt="Logo"
                        width={65}
                        height={51}
                        loading="eager"
                        className="w-16 h-12"
                    />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm font-normal text-black-200">
                    {DesktopMenuItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-orange-500 flex items-center"
                        >
                            {item.icon}
                            <span className="ml-2 text-black-200 font-normal">{item.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Icons */}
                <div className="flex items-center gap-4 text-black-200">
                    {IconsButtons.map((item) => (
                        <button
                            key={item.name}
                            className="hover:text-orange-500 cursor-pointer"
                            aria-label={item.name}
                        >
                            {item.icon}
                        </button>
                    ))}
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
