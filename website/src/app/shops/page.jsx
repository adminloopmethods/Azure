"use client";

import { ProductCard } from "@/components/_homeComponent/ProductCard";
import { useState } from "react";
import SearvicesHeader from "../shops/common/ShoppingHeader";
import EnquireNow from "@/components/_homeComponent/EnquireNow"; // 👈 import modal
import { images } from "@/assets";

export default function ShopPage() {
  const [selectedKey, setSelectedKey] = useState("Apple");
  const [showEnquire, setShowEnquire] = useState(false); // 👈 modal state
  const [selectedProduct, setSelectedProduct] = useState(null); // 👈 which product

  const keys = ["Apple", "MS Surface", "Jamf"];

  const firstRowProducts = [
    {
      imageSrc:`${images.iphone17pro.src}`,
      title: "Apple iPhone 17 Pro Max",
      buttonText: "Enquire Now",
      category: "Apple",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbfb269aae7dd4b5345c135244b1a8a51cb951fc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "MS Surface Pro 9 Laptop",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[196px]",
      category: "MS Surface",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/80942dfd20eaee592e187ceb034f46e21e055aa6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Jamf Device Management Software",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[211px]",
      category: "Jamf",
    },
    {
      imageSrc:`${images.airmaxhero.src}`,
      title: "Apple AirPods Max Silver",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "Apple",
    },
    {
      imageSrc:`${images.iphone17pro.src}`,
      title: "iPhone 17 Pro",
      buttonText: "Enquire Now",
      category: "Apple",
    },
    {
      imageSrc:`${images.iphone17.src}`,
      title: "iPhone 17",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[196px]",
      category: "Apple",
    },
    {
      imageSrc:`${images.iphoneAir.src}`,
      title: "iPhone Air",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[211px]",
      category: "Apple",
    },
    {
      imageSrc:`${images.appWatch.src}`,
      title: "Apple Watch Series 11",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "Apple",
    },
    {
      imageSrc:`${images.appleWatchSE3.src}`,
      title: "Apple Watch SE 3",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "Apple",
    },
     {
      imageSrc:`${images.appleWatchUltra3.src}`,
      title: "Apple Watch Ultra 3",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "Apple",
    },
    {
      imageSrc:`${images.airPodsPro3.src}`,
      title: "AirPods Pro 3",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "Apple",
    },
  ];

  const secondRowProducts = firstRowProducts.map((product, index) => ({
    ...product,
    buttonText: "Enquire Now",
    showPrice: true,
    category: ["MS Surface", "Apple", "Jamf", "Apple"][index],
  }));

  const allProducts = [...firstRowProducts, ...secondRowProducts];
  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedKey
  );

  return (
    <div className="flex overflow-hidden flex-col items-center bg-white pb-28">
      <SearvicesHeader>Shops</SearvicesHeader>
      <section className="bg-white w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-14 sm:mt-20">
          {/* Tabs */}
          <div className="flex flex-wrap gap-4 sm:gap-6 text-base sm:text-lg font-light text-zinc-500 w-full sm:w-auto">
            {keys.map((key) => (
              <span
                key={key}
                onClick={() => setSelectedKey(key)}
                className={`cursor-pointer pb-1 border-b-2 transition-all ${
                  selectedKey === key
                    ? "text-black font-medium border-black"
                    : "border-transparent"
                }`}
              >
                {key}
              </span>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-5">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={index}
              {...product}
              showPrice={true}
              onEnquire={() => {
                setSelectedProduct(product.title); // 👈 track which product
                setShowEnquire(true);
              }}
            />
          ))}
        </div>
      </section>

      {/* EnquireNow Popup */}
      {showEnquire && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
          <EnquireNow
            onClose={() => setShowEnquire(false)}
            productName={selectedProduct} // 👈 pass product to form
          />
        </div>
      )}
    </div>
  );
}
