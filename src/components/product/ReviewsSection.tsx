import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ReviewsSection = () => {
    return (
        <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4 inline-block border-[#C28562]">Rating & Reviews</h2>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Rating Summary */}
                <div className="flex-1 max-w-sm">
                    <div className="flex items-end gap-4 mb-8">
                        <div className="text-6xl font-bold text-gray-900">4.5</div>
                        <div className="text-gray-400 pb-2">/5</div>
                    </div>

                    {/* Bars */}
                    <div className="space-y-3">
                        {[5, 4, 3, 2, 1].map((star) => (
                            <div key={star} className="flex items-center gap-4">
                                <div className="flex items-center gap-1 w-8 text-sm text-gray-600">
                                    <Star className="w-3 h-3 fill-orange-400 text-orange-400" /> {star}
                                </div>
                                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#C28562] rounded-full"
                                        style={{ width: star === 5 ? '70%' : star === 4 ? '15%' : '5%' }}
                                    />
                                </div>
                                <div className="text-xs text-gray-400 w-8">{star === 5 ? '1.5k' : '200'}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Total Reviews & Action */}
                <div className="flex flex-col items-start justify-center">
                    <div className="text-sm text-gray-500 mb-2">Total Reviews</div>
                    <div className="text-4xl font-bold text-gray-900 mb-4">3.0K</div>
                    <Button variant="outline" className="bg-[#C28562] text-white hover:bg-[#a87051] border-none">
                        Add Comment
                    </Button>
                </div>
            </div>

            {/* Review List */}
            <div className="mt-12 space-y-8">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="border-b pb-8">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-bold text-gray-900">Alex Doesrun</h4>
                            <span className="text-sm text-gray-400">2 months ago</span>
                        </div>
                        <div className="flex items-center gap-1 mb-3">
                            {[1, 2, 3, 4, 5].map(s => (
                                <Star key={s} className="w-3 h-3 fill-orange-400 text-orange-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                        </p>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <Button variant="ghost" className="text-gray-500 hover:text-gray-900">
                    View More Comments
                </Button>
            </div>
        </div>
    );
};

export default ReviewsSection;
