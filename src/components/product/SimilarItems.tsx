"use client";

import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';


const ITEMS = [
    {
        id: 1,
        image: "/items/item-1.png",
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        price: 900,
        originalPrice: null,
        rating: 4.5,
        reviews: 2910,
        category: "Dresses",
        colors: ["#C28562", "#000000", "#FFFFFF"]
    },
    {
        id: 2,
        image: "/items/item-2.png",
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        price: 900,
        originalPrice: 1300,
        rating: 4.5,
        reviews: 2910,
        category: "Dresses",
        discount: "25% OFF",
        colors: ["#C28562", "#000000", "#FFFFFF"]
    },
    {
        id: 3,
        image: "/items/item-1.png", // Reuse 1 if file missing, or try item-3
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        price: 900,
        originalPrice: null,
        rating: 4.5,
        reviews: 2910,
        category: "Dresses",
        colors: ["#C28562", "#000000", "#FFFFFF"]
    },
    {
        id: 4,
        image: "/items/item-2.png",
        title: "J.VER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow",
        price: 900,
        originalPrice: 1300,
        rating: 4.5,
        reviews: 2910,
        category: "Dresses",
        discount: "25% OFF",
        colors: ["#C28562", "#000000", "#FFFFFF"]
    }
];

const SimilarItems = () => {
 
    const sliderData = [...ITEMS, ...ITEMS]; // 8 items
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 4;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + itemsPerPage >= sliderData.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? sliderData.length - itemsPerPage : prev - 1
        );
    };

    return (
        <section className="mt-20 mb-20 font-poppins">
            <h2 className="text-xl font-bold text-black mb-8 border-b-2 border-[#BE968E] w-fit pb-2">
                Similar Items
            </h2>

            <div className="relative overflow-hidden">
                <div
                    className="flex gap-6 transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }}
                >
                    {sliderData.map((item, idx) => (
                        <div key={`${item.id}-${idx}`} className="min-w-[calc(25%-18px)] flex-shrink-0 group cursor-pointer">
                            {/* Card Image */}
                            <div className="relative aspect-4/2 bg-white rounded-3xl border border-gray-100 p-4 mb-4">
                                {item.discount && (
                                    <div className="absolute top-4 left-4 bg-white shadow-sm px-3 py-1 text-[10px] font-bold text-[#BE968E] rounded-md uppercase tracking-wider">
                                        {item.discount}
                                    </div>
                                )}
                                <div className="absolute top-4 right-4 flex gap-2 z-10">
                                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 hover:bg-[#BE968E] text-[#BE968E] hover:text-white transition-all">
                                        <ShoppingBag className="w-4 h-4" />
                                    </button>
                                    <button className="w-9 h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 hover:bg-[#BE968E] text-[#BE968E] hover:text-white transition-all">
                                        <Heart className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="w-full h-full relative mix-blend-multiply">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-2">
                                <div className="flex justify-between items-center text-xs text-gray-500 font-medium">
                                    <span>{item.category}</span>
                                    <div className="flex items-center gap-1">
                                        <Star className="w-3.5 h-3.5 fill-[#BE968E] text-[#BE968E]" />
                                        <span className="text-gray-900 font-bold">{item.rating}</span>
                                        <span className="text-gray-400">({item.reviews})</span>
                                    </div>
                                </div>

                                <h3 className="text-sm font-bold text-gray-900 line-clamp-2 leading-relaxed h-10">
                                    {item.title}
                                </h3>

                                <div className="flex items-center justify-between pt-1">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-bold text-gray-900">AED {item.price}</span>
                                        {item.originalPrice && (
                                            <span className="text-xs text-gray-400 line-through decoration-gray-400">AED {item.originalPrice}</span>
                                        )}
                                    </div>

                                    {/* Colors */}
                                    <div className="flex items-center gap-1.5">
                                        {item.colors.slice(0, 3).map((color, cIdx) => (
                                            <div
                                                key={cIdx}
                                                className={cn(
                                                    "w-3.5 h-3.5 rounded-full ring-1 ring-offset-1 ring-transparent hover:ring-[#BE968E] transition-all cursor-pointer",
                                                    color === "#FFFFFF" && "border border-gray-200"
                                                )}
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                        <span className="text-[10px] font-medium text-gray-500 ml-0.5">+2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-[#E5E7EB66] flex items-center justify-center hover:bg-[#d1d5db] transition-colors"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-[#BE968E] flex items-center justify-center hover:bg-[#a8857d] transition-colors shadow-sm"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            </div>
        </section>
    );
};

export default SimilarItems;
