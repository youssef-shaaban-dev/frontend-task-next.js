"use client";

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ReviewsSection = () => {
    return (
        <section className="font-poppins text-black pr-0 md:pr-16">
            <h2 className="text-xl font-bold bg-white text-black mb-8 border-b-2 border-[#BE968E] w-fit pb-2">
                Rating & Reviews
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start justify-between">
                {/* Left: Rating Number */}
                <div className="flex items-end gap-2">
                    <span className="text-6xl md:text-8xl font-medium">4,5</span>
                    <span className="text-gray-400 text-lg md:text-xl font-medium mb-2">/5</span>
                </div>

                {/* Middle: Progress Bars */}
                <div className="flex-1 w-full max-w-md space-y-2">
                    {[
                        { star: 5, pct: 67 },
                        { star: 4, pct: 15 },
                        { star: 3, pct: 6 },
                        { star: 2, pct: 3 },
                        { star: 1, pct: 9 }
                    ].map((item) => (
                        <div key={item.star} className="flex items-center gap-3">
                            <div className="flex items-center gap-1 w-8 text-sm font-medium text-gray-500">
                                <Star className="w-4 h-4 fill-[#BE968E] text-[#BE968E]" /> {item.star}
                            </div>
                            <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-[#BE968E] rounded-full"
                                    style={{ width: `${item.pct}%` }}
                                />
                            </div>
                            <div className="text-xs font-medium text-gray-400 w-8 text-right">%{item.pct}</div>
                        </div>
                    ))}
                </div>

                {/* Right: Total Reviews & Add Comment */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="text-center ">
                        <div className="text-xs md:text-sm text-gray-400">Total Reviews</div>
                        <div className="text-3xl md:text-4xl font-bold">3.0K</div>
                    </div>
                    <Button className="bg-[#BE968E] hover:bg-[#a8857d] text-white rounded-lg px-6">
                        Add Comment <span className="ml-2 bg-white/20 rounded-full w-4 h-4 flex items-center justify-center text-[10px]">...</span>
                    </Button>
                </div>
            </div>

            {/* Review List */}
            <div className="mt-12 space-y-10">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <h4 className="font-bold text-lg">Alex Daewn</h4>
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map(s => (
                                        <Star key={s} className="w-4 h-4 fill-[#BE968E] text-[#BE968E]" />
                                    ))}
                                </div>
                            </div>
                            <span className="text-sm text-gray-400">4 months ago</span>
                        </div>

                        {/* Correction: In the screenshot, the stars next to "Alex Daewn" are clearly a rose/brown color, same as the main star. */}

                        <p className="text-gray-500 text-sm leading-relaxed mt-2">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                            sed diam nonummy dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-10 flex justify-center">
                {/* "View More Comments" button logic 
                     Design shows a light button, centered. 
                 */}
                <Button variant="ghost" className="bg-[#F9F3F1] hover:bg-[#ebdcd6] text-[#BE968E] font-medium px-8 py-2 rounded-lg">
                    View More Comments
                </Button>
            </div>
        </section>
    );
};

export default ReviewsSection;
