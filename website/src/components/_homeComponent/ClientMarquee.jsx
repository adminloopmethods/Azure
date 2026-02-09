"use client";
import React, { useRef, useEffect, useState } from "react";
import { clientsData } from "@/assets";

const clients = [
  { name: "Somany", logo: clientsData.somany },
  { name: "AIIMS", logo: clientsData.aiims },
  { name: "Dantsu", logo: clientsData.dentsu },
  { name: "EXL", logo: clientsData.exl },
  { name: "Haku Hodo", logo: clientsData.hakuhodo },
  { name: "Jindal Steel", logo: clientsData.jindalSteel },
  { name: "Oriflame", logo: clientsData.oriflame },
  { name: "Outlook", logo: clientsData.outlook, showText: true },
  { name: "Religare", logo: clientsData.religare },
  { name: "Amity University", logo: clientsData.amity },
  { name: "OP Jindal Global University", logo: clientsData.opJindal },
  { name: "Havas" },
];

export const ClientMarquee = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const requestRef = useRef();
  const lastTimeRef = useRef();
  const lastXRef = useRef(0);

  const autoScrollSpeed = 1; // Pixels per frame

  const animate = (time) => {
    if (lastTimeRef.current !== undefined && !isDragging) {
      if (containerRef.current) {
        // Adjust scroll position
        let newScrollPos = containerRef.current.scrollLeft + autoScrollSpeed;

        // Handle velocity decay if dragging just ended (optional enhancement)
        if (Math.abs(velocity) > 0.1) {
          newScrollPos -= velocity;
          setVelocity((v) => v * 0.95); // Friction
        }

        // Infinite loop logic
        const maxScroll = containerRef.current.scrollWidth / 2;
        if (newScrollPos >= maxScroll) {
          newScrollPos = 0;
        } else if (newScrollPos < 0) {
          newScrollPos = maxScroll;
        }

        containerRef.current.scrollLeft = newScrollPos;
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isDragging, velocity]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    lastXRef.current = e.pageX;
    setVelocity(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    containerRef.current.scrollLeft = scrollLeft - walk;

    // Calculate velocity for "fast/slow" effect based on cursor speed
    const currentVelocity = e.pageX - lastXRef.current;
    setVelocity(currentVelocity);
    lastXRef.current = e.pageX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    lastXRef.current = e.touches[0].pageX;
    setVelocity(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    containerRef.current.scrollLeft = scrollLeft - walk;

    const currentVelocity = e.touches[0].pageX - lastXRef.current;
    setVelocity(currentVelocity);
    lastXRef.current = e.touches[0].pageX;
  };

  return (
    <section className="w-full py-10 bg-white overflow-hidden select-none">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-sm font-medium tracking-[0.3em] text-gray-400 uppercase">
          Trusted by Industry Leaders
        </h2>
      </div>
      <div
        className="marquee-container relative cursor-grab active:cursor-grabbing overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
          maskImage:
            "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
        }}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <div
          className="marquee-content py-4 whitespace-nowrap flex"
          ref={contentRef}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="bg-white px-8 py-4 rounded-2xl border-2 border-zinc-200 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center min-w-[250px] h-[120px] hover:border-black transition-all duration-300 transform md:hover:-translate-y-2 group shrink-0 mr-10 md:mr-12"
            >
              <div className="flex items-center gap-4">
                {client.logo && (
                  <img
                    src={client.logo.src}
                    alt={client.name}
                    className="max-w-[180px] max-h-[80px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                )}
                {(!client.logo || client.showText) && (
                  <span className="text-2xl md:text-3xl font-bold text-zinc-700 group-hover:text-black font-poppins tracking-tight text-center">
                    {client.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
