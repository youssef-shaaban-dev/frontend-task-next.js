"use client";

import { Button } from "@/components/ui/button";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const COLORS = [
    { name: "Red", value: "#ef4444" },
    { name: "Light Blue", value: "#bfdbfe" }, // approximate
    { name: "Gold", value: "#eab308" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Dark Grey", value: "#4b5563" }
];

const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(COLORS[1].name); // Light Blue default

    const increment = () => setQuantity(q => q + 1);
    const decrement = () => setQuantity(q => Math.max(1, q - 1));

    return (
        <div className="flex flex-col gap-6 font-poppins">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="rounded-full border border-pink px-4 py-1 text-sm text-pink">
                        T-Shirt
                    </span>
                    <div className="flex gap-2">
                        <button className="rounded-full border  border-pink  p-2 hover:bg-gray-50">
                            <ShoppingBag className="h-5 w-5 text-pink" />
                        </button>
                        <button className="rounded-full border  border-pink   p-2 hover:bg-gray-50">
                            <Heart className="h-5 w-5 text-pink" />
                        </button>
                    </div>
                </div>

                <h5 className="text-2xl font-semibold leading-tight text-black w-4/5">
                    J.VER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
                </h5>

                <div className="flex items-baseline gap-3">
                    <span className="text-2xl font-bold text-gray-900">$300.00</span>
                    <span className="text-lg text-gray-400 line-through">$360.00</span>
                </div>
                <p className="text-sm text-[#333333]">This price is exclusive of taxes.</p>
            </div>

            {/* Description */}
            <div className="text-black text-sm leading-relaxed space-y-2">
                <p>Lorem ipsum dolor sit , consectetuer adipiscing elit, sed diam nonummy</p>
                <p>Lorem ipsum dolor sit amet, diam nonummy</p>
            </div>

            <div className="h-px w-full bg-gray-100" />

            {/* Selectors */}
            <div className="flex flex-col gap-6 w-1/2">
                <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-gray-900">Type</label>
                    <div className="relative">
                        <select className="w-full appearance-none rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#BE968E]">
                            <option>Cotton</option>
                            <option>Polyester</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-2">
                    <label className="text-sm font-medium text-gray-900">Size</label>
                    <div className="relative">
                        <select className="w-full appearance-none rounded-xl border bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#BE968E]">
                            <option>2XL</option>
                            <option>XL</option>
                            <option>L</option>
                            <option>M</option>
                        </select>
                        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Colors */}
            <div className="space-y-3">
                <span className="text-lg font-medium text-gray-900">Colors</span>
                <div className="flex gap-4">
                    {COLORS.map((color) => (
                        <button
                            key={color.name}
                            onClick={() => setSelectedColor(color.name)}
                            className={cn(
                                "flex flex-col items-center gap-2"
                            )}
                        >
                            <div className={cn(
                                "h-8 w-8 rounded-full shadow-sm transition-all relative flex items-center justify-center",
                                selectedColor === color.name && "ring-2 ring-gray-300 ring-offset-2"
                            )}
                                style={{ backgroundColor: color.value }}
                            >
                                {selectedColor === color.name && (
                                    // Optional checkmark or inner dot if needed, design seems to just have ring
                                    <span className="sr-only">Selected</span>
                                )}
                            </div>
                            {selectedColor === color.name && (
                                <span className="text-xs text-gray-600">{color.name}</span>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-3 pt-4">
                <div className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">Quantity <span className="text-sm font-normal text-gray-400">($300.00 for Piece)</span></span>
                </div>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4 rounded-xl border bg-gray-50 px-4 py-2">
                        <button onClick={decrement} className="rounded bg-white p-1 hover:bg-gray-100">
                            <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="text-lg font-medium w-6 text-center">{String(quantity).padStart(2, '0')}</span>
                        <button onClick={increment} className="rounded bg-white p-1 hover:bg-gray-100">
                            <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                    </div>
                    <span className="text-xl font-bold text-gray-900">${(300 * quantity).toFixed(2)}</span>

                    <div className="flex-1">
                        <Button className="w-3/4  h-12 bg-[#BE968E] hover:bg-pink text-white text-lg rounded-xl gap-2">
                            Add To Cart
                            <ShoppingBag className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
