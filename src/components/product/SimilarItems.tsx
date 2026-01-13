"use client";

import { ChevronLeft, ChevronRight, Heart, ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { cn } from '@/lib/utils';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
    },
    {
        id: 5,
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
        id: 6,
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
    return (
        <section className="mt-12 md:mt-20 mb-12 md:mb-20 font-poppins">
            <h2 className="text-lg md:text-xl font-bold text-black mb-6 md:mb-8 border-b-2 border-[#BE968E] w-fit pb-2">
                Similar Items
            </h2>

            <div className="relative similar-items-swiper">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    navigation={{
                        nextEl: '.swiper-button-next-custom',
                        prevEl: '.swiper-button-prev-custom',
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 1.5,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3.5,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 4.2,
                            spaceBetween: 24,
                        },
                    }}
                    className="!pb-12"
                >
                    {ITEMS.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="group cursor-pointer h-full">
                                {/* Card Image */}
                                <div className="relative aspect-[4/5] bg-white rounded-2xl md:rounded-3xl border border-gray-100 p-3 md:p-4 mb-3 md:mb-4">
                                    {item.discount && (
                                        <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-white shadow-sm px-2 md:px-3 py-1 text-[9px] md:text-[10px] font-bold text-[#BE968E] rounded-md uppercase tracking-wider">
                                            {item.discount}
                                        </div>
                                    )}
                                    <div className="absolute top-3 md:top-4 right-3 md:right-4 flex gap-1.5 md:gap-2 z-10">
                                        <button className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 hover:bg-[#BE968E] text-[#BE968E] hover:text-white transition-all">
                                            <ShoppingBag className="w-3 h-3 md:w-4 md:h-4" />
                                        </button>
                                        <button className="w-7 h-7 md:w-9 md:h-9 flex items-center justify-center bg-white rounded-full shadow-sm border border-gray-100 hover:bg-[#BE968E] text-[#BE968E] hover:text-white transition-all">
                                            <Heart className="w-3 h-3 md:w-4 md:h-4" />
                                        </button>
                                    </div>
                                    <div className="w-full h-full relative mix-blend-multiply">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-1 md:p-2"
                                        />
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="space-y-1.5 md:space-y-2">
                                    <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-500 font-medium">
                                        <span>{item.category}</span>
                                        <div className="flex items-center gap-0.5 md:gap-1">
                                            <Star className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 fill-[#BE968E] text-[#BE968E]" />
                                            <span className="text-gray-900 font-bold text-[10px] md:text-xs">{item.rating}</span>
                                            <span className="text-gray-400 text-[9px] md:text-xs">({item.reviews})</span>
                                        </div>
                                    </div>

                                    <h3 className="text-xs md:text-sm font-bold text-gray-900 line-clamp-2 leading-relaxed min-h-[2.5rem] md:min-h-[2.5rem]">
                                        {item.title}
                                    </h3>

                                    <div className="flex items-center justify-between pt-0.5 md:pt-1">
                                        <div className="flex items-center gap-1.5 md:gap-2">
                                            <span className="text-xs md:text-sm font-bold text-gray-900">AED {item.price}</span>
                                            {item.originalPrice && (
                                                <span className="text-[10px] md:text-xs text-gray-400 line-through decoration-gray-400">AED {item.originalPrice}</span>
                                            )}
                                        </div>

                                        {/* Colors */}
                                        <div className="flex items-center gap-1 md:gap-1.5">
                                            {item.colors.slice(0, 3).map((color, cIdx) => (
                                                <div
                                                    key={cIdx}
                                                    className={cn(
                                                        "w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full ring-1 ring-offset-1 ring-transparent hover:ring-[#BE968E] transition-all cursor-pointer",
                                                        color === "#FFFFFF" && "border border-gray-200"
                                                    )}
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                            <span className="text-[9px] md:text-[10px] font-medium text-gray-500 ml-0.5">+2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="flex justify-center gap-3 md:gap-4 mt-6 md:mt-8">
                    <button
                        className="swiper-button-prev-custom w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-200/60 flex items-center justify-center hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                    </button>
                    <button
                        className="swiper-button-next-custom w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#BE968E] flex items-center justify-center hover:bg-[#a8857d] transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SimilarItems;
