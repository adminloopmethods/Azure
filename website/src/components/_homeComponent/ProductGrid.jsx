"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ProductCard } from "./ProductCard";
import EnquireNow from "./EnquireNow";

export const ProductGrid = () => {
  const [selectedKey, setSelectedKey] = useState("New Arrival");
  const [showEnquire, setShowEnquire] = useState(false); 

  const keys = ["New Arrival", "Bestseller", "Featured Products"];

  const firstRowProducts = [
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/218588128d1aeb13ac286c34b70fbdb9fb94cc72?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "iPhone 17 Pro",
      buttonText: "Enquire Now",
      category: "New Arrival",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/fbfb269aae7dd4b5345c135244b1a8a51cb951fc?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "iPhone 17",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[196px]",
      category: "New Arrival",
    },
    // {
    //   imageSrc:
    //     "https://api.builder.io/api/v1/image/assets/TEMP/80942dfd20eaee592e187ceb034f46e21e055aa6?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
    //   title: "Apple Watch Series 9 GPS 41mm Starlight Aluminium...",
    //   buttonText: "iPhone Air",
    //   imageAspect: "aspect-square",
    //   imageWidth: "w-[211px]",
    //   category: "New Arrival",
    // },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/d73322bddd31a6451be1b0e9620b7868096dcda7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple Watch Series 11",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "New Arrival",
    },
    {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/d73322bddd31a6451be1b0e9620b7868096dcda7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple Watch SE 3",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "New Arrival",
    },
     {
      imageSrc:
        "https://api.builder.io/api/v1/image/assets/TEMP/d73322bddd31a6451be1b0e9620b7868096dcda7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "Apple Watch Ultra 3",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "New Arrival",
    },
    {
      imageSrc:
      "https://api.builder.io/api/v1/image/assets/TEMP/d73322bddd31a6451be1b0e9620b7868096dcda7?placeholderIfAbsent=true&apiKey=3332ba944108427ea5002522aefee114",
      title: "AirPods Pro 3",
      buttonText: "Enquire Now",
      imageAspect: "aspect-square",
      imageWidth: "w-[210px]",
      category: "New Arrival",
    },
  ];

  const secondRowProducts = firstRowProducts.map((product, index) => ({
    ...product,
    // price: ["₹900", "₹2543", "₹900", "₹900"][index],
    buttonText: "Enquire Now",
    showPrice: true,
    category: [
      "Bestseller",
      "Bestseller",
      "Featured Products",
      "Featured Products",
    ][index],
  }));

  // Combine all products
  const allProducts = [...firstRowProducts, ...secondRowProducts];

  // Filter products based on selectedKey; when "View All" is clicked, navigate away, so no filtering needed here
  const filteredProducts =
    selectedKey === "View All"
      ? []
      : allProducts.filter((product) => product.category === selectedKey);

  return (
    <section className="w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 mx-auto">
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

        {/* View All Button using Next.js Link */}
        <Link
          href="/shops"
          className="hidden sm:inline-block py-2 px-6 sm:px-8 text-sm sm:text-base leading-6 sm:leading-8 text-black border border-black rounded-full whitespace-nowrap transition duration-300 hover:bg-black hover:text-white cursor-pointer"
        >
          View All
        </Link>
      </div>

      {/* Product Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            showPrice={true}
            onEnquire={() => setShowEnquire(true)} 
          />
        ))}
      </div>

      {/* EnquireNow Popup */}
      {showEnquire && (
  <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
    <EnquireNow onClose={() => setShowEnquire(false)} />  {/* ✅ FIXED */}
  </div>
)}
    </section>
  );
};
