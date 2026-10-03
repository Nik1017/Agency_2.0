"use client";

import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SectionHeader } from "@/components/common/section-header";

// Register ScrollTrigger
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const servicesData = [
  {
    num: "01 / 04",
    title: "Social Media Management",
    desc: "End-to-end social media systems designed to grow audience, engagement, and brand authority across platforms.",
    media: (
      <div className="relative w-[180px] md:w-[220px] aspect-[9/16] bg-black/40 border border-white/10 rounded-[32px] overflow-hidden shadow-2xl flex flex-col z-10 group-hover:-translate-y-4 group-hover:rotate-2 transition-transform duration-1000">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl" />
        <div className="flex items-center gap-2 p-4 mt-2">
           <div className="w-6 h-6 rounded-full bg-white/20" />
           <div className="w-16 h-2 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 bg-white/5 m-2 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
           <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-white/60 border-b-[5px] border-b-transparent ml-1" />
           </div>
        </div>
        <div className="flex flex-col gap-2 p-4 mb-2">
           <div className="w-3/4 h-2 rounded-full bg-white/20" />
           <div className="w-1/2 h-2 rounded-full bg-white/10" />
        </div>
      </div>
    )
  },
  {
    num: "02 / 04",
    title: "Content Creation",
    desc: "Short-form and long-form content engineered to capture attention and convert viewers into customers.",
    media: (
      <div className="relative w-[85%] max-w-[400px] h-[200px] bg-black/40 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-10 group-hover:scale-105 group-hover:rotate-1 transition-transform duration-1000">
        <div className="w-full h-8 border-b border-white/10 flex items-center px-4 gap-2 bg-white/5">
           <div className="w-2.5 h-2.5 rounded-full bg-[#FF3B30]/50" />
           <div className="w-2.5 h-2.5 rounded-full bg-[#FF9500]/50" />
           <div className="w-2.5 h-2.5 rounded-full bg-[#28CD41]/50" />
        </div>
        <div className="flex-1 p-4 flex flex-col gap-3 relative justify-center">
           <div className="absolute top-0 bottom-0 left-[35%] w-[1px] bg-brand-cyan/50 z-20 shadow-[0_0_8px_rgba(0,163,255,0.5)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-brand-cyan" />
           </div>
           <div className="flex gap-2 w-full h-8">
              <div className="w-[30%] h-full bg-white/10 rounded-md" />
              <div className="w-[50%] h-full bg-brand-cyan/20 border border-brand-cyan/30 rounded-md" />
           </div>
           <div className="flex gap-2 w-full h-6">
              <div className="w-[20%] h-full bg-white/5 rounded-md" />
              <div className="w-[60%] h-full bg-white/15 rounded-md" />
           </div>
           <div className="flex gap-2 w-full h-6">
              <div className="w-[45%] h-full bg-white/10 rounded-md ml-[10%]" />
           </div>
        </div>
      </div>
    )
  },
  {
    num: "03 / 04",
    title: "AI Automation",
    desc: "Custom automations that eliminate repetitive work, streamline operations, and increase efficiency.",
    media: (
      <div className="relative w-full h-full flex items-center justify-center z-10 overflow-hidden md:overflow-visible">
        <div className="relative w-[300px] h-[200px] flex items-center justify-center group-hover:scale-110 transition-transform duration-1000 scale-[0.8] sm:scale-100">
           <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 100 C 100 100, 100 40, 150 40" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="group-hover:stroke-brand-cyan/40 transition-colors duration-1000" />
              <path d="M 50 100 C 100 100, 100 160, 150 160" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="group-hover:stroke-brand-cyan/40 transition-colors duration-1000" />
              <path d="M 150 40 C 200 40, 200 100, 250 100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="group-hover:stroke-brand-cyan/40 transition-colors duration-1000" />
              <path d="M 150 160 C 200 160, 200 100, 250 100" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" strokeDasharray="4 4" className="group-hover:stroke-brand-cyan/40 transition-colors duration-1000" />
           </svg>
           <div className="absolute left-[20px] top-[75px] w-[60px] h-[50px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm z-10">
              <div className="w-4 h-4 rounded bg-white/20" />
           </div>
           <div className="absolute left-[120px] top-[15px] w-[60px] h-[50px] bg-brand-cyan/10 border border-brand-cyan/20 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(0,163,255,0.15)] backdrop-blur-sm z-10 group-hover:shadow-[0_0_30px_rgba(0,163,255,0.3)] transition-shadow duration-1000">
              <div className="w-4 h-4 rounded-full bg-brand-cyan/50" />
           </div>
           <div className="absolute left-[120px] top-[135px] w-[60px] h-[50px] bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm z-10">
              <div className="w-4 h-4 rounded bg-white/20" />
           </div>
           <div className="absolute right-[20px] top-[75px] w-[60px] h-[50px] bg-white/10 border border-white/20 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm z-10">
              <div className="w-6 h-2 rounded bg-white/40" />
           </div>
        </div>
      </div>
    )
  },
  {
    num: "04 / 04",
    title: "Growth Partner",
    desc: "A strategic partnership focused on scaling content, systems, and revenue together.",
    media: (
      <div className="relative w-[85%] max-w-[400px] h-[220px] bg-black/40 border border-white/10 rounded-2xl shadow-2xl flex flex-col p-4 gap-4 z-10 group-hover:-translate-y-2 group-hover:rotate-1 transition-transform duration-1000">
        <div className="flex gap-4 w-full h-[60px]">
           <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
              <div className="w-8 h-1.5 rounded-full bg-white/20" />
              <div className="w-16 h-2.5 rounded-full bg-white/60" />
           </div>
           <div className="flex-1 bg-white/5 rounded-xl border border-white/5 p-3 flex flex-col justify-between">
              <div className="w-10 h-1.5 rounded-full bg-white/20" />
              <div className="w-20 h-2.5 rounded-full bg-brand-cyan/80" />
           </div>
        </div>
        <div className="flex-1 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden flex items-end pt-4">
           <svg className="absolute bottom-0 left-0 w-full h-[80%]" preserveAspectRatio="none" viewBox="0 0 100 100">
              <path d="M 0 100 L 0 80 Q 25 50 50 65 T 100 10 L 100 100 Z" fill="rgba(0,163,255,0.1)" className="group-hover:fill-[rgba(0,163,255,0.15)] transition-colors duration-1000" />
              <path d="M 0 80 Q 25 50 50 65 T 100 10" stroke="rgba(0,163,255,0.8)" strokeWidth="3" fill="none" className="drop-shadow-[0_0_8px_rgba(0,163,255,0.5)]" />
           </svg>
        </div>
      </div>
    )
  }
];

export function ServicesShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (cards.length === 0) return;

      // 1. Initial State: Card 0 active, Cards 1-3 hidden below the viewport
      gsap.set(cards, { y: () => window.innerHeight, transformOrigin: "top center" });
      gsap.set(cards[0], { y: 0 });

      // 2. Timeline Definition
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Exactly 300% for the 3 animating cards (no extra scroll buffer)
          pin: true,
          scrub: 1, 
          anticipatePin: 1,
          invalidateOnRefresh: true,
        }
      });

      // 3. Card Animations
      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCards = cards.slice(0, index);
        
        tl.addLabel(`card${index}In`);
        
        // Bring new card in
        tl.to(card, {
          y: 0,
          ease: "none",
        }, `card${index}In`);

        // Push previous cards back (Scale down, fade, push up) for 3D depth
        tl.to(previousCards, {
          scale: (i) => 1 - ((index - i) * 0.04), 
          yPercent: (i) => -((index - i) * 3), 
          opacity: (i) => 1 - ((index - i) * 0.25), 
          ease: "none",
        }, `card${index}In`);
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#FAFAFA] text-black h-screen overflow-hidden flex items-center justify-center relative z-10"
    >
      <div className="w-full max-w-[1400px] px-6 lg:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 items-center justify-between">
        
        {/* Left Column - 35% */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:gap-8 items-start justify-center">
          <SectionHeader 
            eyebrow="CAPABILITIES"
            title={
              <>
                Four ways we <br />
                <span className="italic font-normal opacity-70">grow brands.</span>
              </>
            }
          />
          <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-md">
            We architect high-leverage growth ecosystems. From intelligent content creation to autonomous AI workflows, we deploy systems that scale revenue efficiently.
          </p>
          <div className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-cyan transition-colors duration-300 group cursor-pointer mt-4">
             <span className="text-black group-hover:text-brand-cyan transition-colors duration-300">Explore All Services</span>
             <span className="w-8 h-[1px] bg-black group-hover:bg-brand-cyan relative group-hover:w-12 transition-all duration-300">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 translate-x-[1px]"></span>
             </span>
          </div>
        </div>

        {/* Right Column - 65% (Cards Stack) */}
        <div className="w-full lg:w-[65%] relative h-[50vh] min-h-[400px] lg:h-[65vh] lg:min-h-[500px] max-h-[550px] perspective-[1000px] flex items-center justify-center">
          {servicesData.map((data, index) => (
             <div 
               key={index}
               ref={(el) => { cardsRef.current[index] = el; }}
               className="absolute top-0 left-0 w-full h-full bg-[#111111] text-white rounded-[24px] lg:rounded-[32px] p-6 lg:p-8 border border-white/5 shadow-[0_40px_100px_rgba(0,0,0,0.2)] flex flex-col gap-6 overflow-hidden will-change-transform"
               style={{ zIndex: index + 1 }}
             >
               {/* Card Interior */}
               <div className="w-full h-full flex flex-col justify-between relative z-10">
                 
                 {/* Top: Meta */}
                 <div className="flex items-center justify-between w-full">
                   <span className="font-mono text-[10px] md:text-xs text-white/30 tracking-[0.3em] uppercase">{data.num}</span>
                   <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md bg-white/5 shadow-lg group-hover:border-brand-cyan transition-colors duration-500 cursor-pointer">
                     <span className="text-white text-base md:text-lg leading-none -mt-0.5">↗</span>
                   </div>
                 </div>

                 {/* Middle: Custom Media */}
                 <div className="flex-1 w-full flex items-center justify-center my-4 md:my-6 relative overflow-hidden group">
                   {data.media}
                 </div>

                 {/* Bottom: Text */}
                 <div className="flex flex-col gap-2 md:gap-3">
                   <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif tracking-tight">{data.title}</h3>
                   <p className="text-white/50 text-xs md:text-sm lg:text-base font-light leading-relaxed max-w-sm md:max-w-md">
                     {data.desc}
                   </p>
                 </div>

               </div>
               
               {/* Background glow */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(0,163,255,0.05),_transparent_60%)] pointer-events-none" />
             </div>
          ))}
        </div>

      </div>
    </section>
  );
}
