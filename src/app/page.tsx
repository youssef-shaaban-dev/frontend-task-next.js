import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ReviewsSection from "@/components/product/ReviewsSection";
import SimilarItems from "@/components/product/SimilarItems";
import Link from "next/link";

const Breadcrumb = () => {
  return (
    <div className="text-sm text-gray-500 mb-8 bg-[#ECECEC66] p-4 rounded-2xl">
      <Link
        href="/"
        className="text-gray-900 cursor-pointer"
      >Home</Link>
      <span className="mx-2">&gt;</span>
      <Link
        href="/our-category"
        className="text-gray-900 cursor-pointer"
      >Our category</Link>
      <span className="mx-2">&gt;</span>
      <Link
        href="/"
        className="font-medium"
      >Product Details</Link>
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      <div className="h-32 md:h-[200px] bg-[#ECECEC66] w-full flex items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-black ">Product Details</h1>
      </div>

      <div className="section-padding">
        {/* Breadcrumb */}
        <Breadcrumb />

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <ProductGallery />
          <ProductInfo />
        </div>

        {/* Reviews */}
        <ReviewsSection />

        {/* Similar Items */}
        <SimilarItems />

      </div>

    </main>
  );
}
