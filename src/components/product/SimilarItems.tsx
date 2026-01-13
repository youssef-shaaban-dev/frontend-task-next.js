import { Heart } from 'lucide-react';

const SimilarItems = () => {
    return (
        <div className="mt-16 mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 inline-block border-[#C28562]">Similar Items</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="group">
                        <div className="relative aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                            <div className="absolute top-4 left-4 text-[10px] font-bold bg-white px-2 py-1 rounded">HOT</div>
                            <button className="absolute top-4 right-4 p-1.5 bg-white rounded-full text-gray-400 hover:text-red-500">
                                <Heart className="w-4 h-4" />
                            </button>
                            <div className="w-full h-full flex items-center justify-center text-gray-300">
                                Item {item}
                            </div>
                        </div>
                        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-1">
                            J.VER Men Shirts Solid Long Sleeve
                        </h3>
                        <div className="flex items-center justify-between">
                            <div className="font-bold text-gray-900">$200.00</div>
                            <div className="flex items-center gap-1">
                                <div className="w-3 h-3 rounded-full bg-black"></div>
                                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                                <span className="text-xs text-gray-500">+1</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SimilarItems;
