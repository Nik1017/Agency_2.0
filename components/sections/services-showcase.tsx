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
    reverse: false,
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
    reverse: true,
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
    reverse: false,
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
    reverse: true,
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

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    let ctx: gsap.Context;
    
    const timeout = setTimeout(() => {
      ctx = gsap.context(() => {
        const cards = gsap.utils.toArray('.service-card') as HTMLElement[];
        if (cards.length === 0) return;
        
        // Initial setup: Card 1 is visible (0%), all others are below the screen (100%)
        gsap.set(cards, { yPercent: 100 });
        gsap.set(cards[0], { yPercent: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            // Create exactly one scroll segment per animating card (3 cards animating = 300%)
            end: "+=300%",
            pin: true,
            scrub: 1, 
            markers: true, // TEMPORARY DEBUGGING
            anticipatePin: 1,
            invalidateOnRefresh: true,
          }
        });

        // Sequence them one by one. DO NOT animate simultaneously.
        cards.forEach((card, index) => {
          if (index === 0) return;

          tl.to(card, {
            yPercent: 0,
            ease: "none",
          });
        });

        ScrollTrigger.refresh();

      }, containerRef);
    }, 100);

    return () => {
      clearTimeout(timeout);
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <section 
      ref={containerRef} 
      className="w-full bg-[#FAFAFA] text-black h-screen overflow-hidden flex flex-col items-center"
    >
      {/* Pinned Header */}
      <div className="w-full max-w-7xl px-6 pt-24 md:pt-32 pb-8 shrink-0 flex flex-col">
        <SectionHeader 
          eyebrow="CAPABILITIES"
          title={
            <>
              Four ways we <br className="hidden md:block" />
              <span className="italic font-normal opacity-70">grow brands.</span>
            </>
          }
        />
      </div>

      {/* 3D Stack Container */}
      <div className="relative w-full max-w-7xl px-6 flex-1 mb-8 perspective-[1000px] flex items-center justify-center">
        
        {servicesData.map((data, index) => (
          <div 
            key={index}
            className="service-card absolute top-0 w-[calc(100%-3rem)] h-full max-h-[700px] bg-[#111111] rounded-[32px] lg:rounded-[48px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-8 lg:gap-20 items-center border border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.15)] group overflow-hidden"
            style={{ 
              zIndex: index + 1, // Card 1 = 1, Card 2 = 2, etc.
              transformOrigin: "top center", 
            }}
          >
            {/* Conditional reversing applied via manual flex classes since we abstracted the component */}
            <div className={`w-full h-full flex flex-col ${data.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-24 items-center justify-between`}>
              
              {/* Content Half */}
              <div className={`w-full lg:w-[45%] flex flex-col items-start justify-center gap-6 lg:gap-8 ${data.reverse ? 'lg:pl-8' : ''}`}>
                 <span className="text-xs md:text-sm font-mono text-white/30 font-bold tracking-[0.3em] uppercase">{data.num}</span>
                 <div className="flex flex-col gap-4">
                    <h3 className={`text-4xl md:text-5xl lg:text-[64px] font-serif text-white leading-[1.05] tracking-tight transition-colors duration-700 ${data.colorClass}`}>
                      {data.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/50 max-w-[400px] leading-relaxed font-light mt-2">
                      {data.desc}
                    </p>
                 </div>
                 <div className="px-6 md:px-8 py-3 md:py-4 border border-white/10 bg-white/[0.02] rounded-full flex items-center justify-center gap-3 cursor-pointer hover:bg-white hover:text-black hover:border-white transition-all duration-500 backdrop-blur-md text-white group/cta mt-4">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-inherit">Explore Service</span>
                    <span className="text-inherit transition-transform duration-500 group-hover/cta:translate-x-1">→</span>
                 </div>
              </div>
              
              {/* Media Showcase Half */}
              <div className="w-full lg:w-[55%] h-full min-h-[250px] bg-[#161616] rounded-[24px] md:rounded-[32px] flex items-center justify-center border border-white/[0.03] relative overflow-hidden group-hover:scale-[1.02] transition-transform duration-1000 ease-[0.16,1,0.3,1]">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                 {data.media}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
