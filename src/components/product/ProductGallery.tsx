"use client";
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const images = [
    "/placeholder_main.png", // We'll handle images differently, using placeholders for now
    "/placeholder_1.png",
    "/placeholder_2.png",
    "/placeholder_3.png"
];

const ProductGallery = () => {
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 group">
                {/* Navigation Arrows */}
                <button
                    onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : prev))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 shadow-sm"
                >
                    <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <span className="text-gray-400">Image {selectedImage + 1}</span>
                    {/* Real implementation would use Next.js Image component with src={images[selectedImage]} */}
                </div>

                <button
                    onClick={() => setSelectedImage((prev) => (prev < 3 ? prev + 1 : prev))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 shadow-sm"
                >
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto pb-2">
                {[0, 1, 2].map((idx) => (
                    <button
                        key={idx}
                        onClick={() => setSelectedImage(idx)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 bg-gray-100 ${selectedImage === idx ? 'border-gray-900' : 'border-transparent'
                            }`}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-xs text-gray-400">Thumb {idx + 1}</span>
                        </div>
                    </button>
                ))}
                <button className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-transparent flex-shrink-0 bg-black text-white flex items-center justify-center font-semibold">
                    +2
                </button>
            </div>
        </div>
    );
};

export default ProductGallery;
