import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ReviewsSection from "@/components/product/ReviewsSection";
import SimilarItems from "@/components/product/SimilarItems";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="container mx-auto px-6 py-12 md:px-12 md:py-16">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8">
          <span className="hover:text-gray-900 cursor-pointer">Home</span>
          <span className="mx-2">&gt;</span>
          <span className="hover:text-gray-900 cursor-pointer">Our category</span>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-900 font-medium">Product Details</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Reviews */}
        <ReviewsSection />

        {/* Similar Items */}
        <SimilarItems />

      </div>

      <Footer />
    </main>
  );
}
