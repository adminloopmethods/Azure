"use client";
import React, { useRef, useEffect, useState } from "react";

const clients = [
  "Somany",
  "AIIMS",
  "Dantsu",
  "EXL",
  "Haku Hodo",
  "Jindal Steel",
  "Oriflame",
  "Outlook",
  "Religare",
  "Amity University",
  "OP Jindal Global University",
  "Havas",
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
              className="bg-white px-4 py-4 rounded-2xl border-2 border-zinc-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] flex items-center justify-center min-w-[250px] h-[100px] hover:border-black transition-all duration-300 transform md:hover:-translate-y-2 group shrink-0 mr-10 md:mr-12 pointer-events-none"
            >
              <span className="text-2xl md:text-3xl font-bold text-zinc-800 group-hover:text-black font-poppins tracking-tight text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
        {/* Reinforced fading edges */}
        <div className="absolute inset-y-0 left-0 w-40 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-40 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
      </div>
    </section>
  );
};
