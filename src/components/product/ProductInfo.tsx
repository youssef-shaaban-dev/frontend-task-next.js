"use client";
import React, { useState } from 'react';
import { Minus, Plus, Share2, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductInfo = () => {
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState('blue');
    const [selectedSize, setSelectedSize] = useState('M');

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
                <div>
                    <div className="text-xs font-semibold text-[#D4A373] bg-[#D4A373]/10 px-2 py-1 rounded w-fit mb-2">
                        NEW ARRIVAL
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">
                        J.VER Men Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue
                    </h1>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Share2 className="w-5 h-5" /></button>
                    <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><Heart className="w-5 h-5" /></button>
                </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-gray-900">$309.00</span>
                <span className="text-lg text-gray-400 line-through">$400.00</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>

            {/* Selectors */}
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-sm font-semibold text-gray-900 mb-2 block">Color</label>
                    <button className="w-full flex items-center justify-between border rounded-lg px-3 py-2 text-sm text-gray-600">
                        <span>Blue</span>
                    </button>
                    {/* Color Swatches */}
                    <div className="flex gap-2 mt-3">
                        {['red', 'blue', 'green', 'black'].map(color => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-gray-900' : 'border-transparent'} p-0.5`}
                            >
                                <div className={`w-full h-full rounded-full bg-${color}-500`} style={{ backgroundColor: color === 'black' ? '#333' : color }} />
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="text-sm font-semibold text-gray-900 mb-2 block">Size</label>
                    <button className="w-full flex items-center justify-between border rounded-lg px-3 py-2 text-sm text-gray-600">
                        <span>M</span>
                    </button>
                    {/* Size options implementation can be expanded */}
                </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t mt-2">
                {/* Quantity */}
                <div className="flex items-center border rounded-lg h-12 w-32">
                    <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900"
                    >
                        <Minus className="w-4 h-4" />
                    </button>
                    <div className="flex-1 text-center font-medium">{quantity.toString().padStart(2, '0')}</div>
                    <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-full flex items-center justify-center text-gray-500 hover:text-gray-900"
                    >
                        <Plus className="w-4 h-4" />
                    </button>
                </div>

                <div className="flex-1 flex items-center gap-4">
                    <span className="text-xl font-bold min-w-[80px]">${(309 * quantity).toFixed(2)}</span>
                    <Button className="flex-1 h-12 bg-[#C28562] hover:bg-[#a87051] text-white text-base rounded-lg">
                        Add to Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
