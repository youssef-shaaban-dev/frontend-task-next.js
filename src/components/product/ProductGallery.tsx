"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const IMAGES = [
    "/products/produc-1.png",
    "/products/produc-2.png",
    "/products/produc-3.png",
    "/products/produc-4.png",
];

const ProductGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextImage = () => {
        setActiveIndex((prev) => (prev + 1) % IMAGES.length);
    };

    const prevImage = () => {
        setActiveIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
    };

    return (
        <div className="flex flex-col gap-4 md:gap-6">
            {/* Main Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl md:rounded-3xl bg-gray-100">
                <Image
                    src={IMAGES[activeIndex]}
                    alt={`Product image ${activeIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                />

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-white/80 shadow-sm backdrop-blur-sm transition-colors hover:bg-white"
                >
                    <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-gray-600" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-[#BE968E] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#a8857d]"
                >
                    <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-white" />
                </button>

                {/* Top Bar Indicator */}
                <div className="absolute top-3 md:top-4 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
                    {IMAGES.map((_, idx) => (
                        <div
                            key={idx}
                            className={cn(
                                "h-0.5 md:h-1 w-6 md:w-8 rounded-full transition-colors",
                                idx === activeIndex ? "bg-white" : "bg-white/30"
                            )}
                        />
                    ))}
                </div>
            </div>

            {/* Thumbnails - Hidden on mobile */}
            <div className="hidden md:flex gap-4 overflow-x-auto pb-2">
                {IMAGES.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={cn(
                            "relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all",
                            activeIndex === idx
                                ? "border-[#BE968E]"
                                : "border-transparent opacity-70 hover:opacity-100"
                        )}
                    >

                        <Image
                            src={img}
                            alt={`Thumbnail ${idx + 1}`}
                            fill
                            className="object-cover"
                        />

                    </button>
                ))}


            </div>
        </div>
    );
};

export default ProductGallery;
