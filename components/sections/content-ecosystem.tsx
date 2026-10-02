"use client";

import React from 'react';
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/common/section-header";

export function ContentEcosystem() {
  return (
    <section className="relative w-full bg-[#111111] py-12 md:py-16 lg:py-20 flex flex-col items-center overflow-hidden">
      
      {/* --- ATMOSPHERE LAYERS --- */}
      
      {/* 1. Subtle Radial Gradients */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(0,163,255,0.08),_transparent_50%)] pointer-events-none z-0" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.03),_transparent_40%)] pointer-events-none z-0" />
      
      {/* 2. Central Faint Blue Glow (Expanded) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1000px] h-[800px] bg-brand-cyan opacity-[0.06] rounded-[100%] blur-[150px] pointer-events-none z-0" />

      {/* 3. Low Opacity Structural Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_30%,#000_10%,transparent_100%)] pointer-events-none z-0" />
      
      {/* --- END ATMOSPHERE --- */}

      <div className="relative max-w-7xl w-full px-6 flex flex-col z-10">
        
        {/* Global Section Header */}
        <div className="w-full text-white">
          <SectionHeader 
            eyebrow="OUR SYSTEM"
            title={
              <>
                Content. <span className="opacity-90">Distribution.</span> <span className="italic font-normal opacity-60">Growth.</span>
              </>
            }
            description="A complete ecosystem of content, distribution, and automation designed specifically to elevate your authority and scale your impact."
          />
        </div>

        {/* 5. Service Word System (Animated Marquee Tracks) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
          className="w-[150vw] -ml-[25vw] flex flex-col gap-0 md:gap-2 mt-6 md:mt-8 overflow-hidden select-none relative"
        >
           
           {/* Fading Edges to blend tracks into background */}
           <div className="absolute inset-y-0 left-0 w-[35vw] bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-10 pointer-events-none" />
           <div className="absolute inset-y-0 right-0 w-[35vw] bg-gradient-to-l from-[#111111] via-[#111111]/90 to-transparent z-10 pointer-events-none" />

           {/* Track 1: Ambient Right-to-Left */}
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 45, ease: "linear", repeat: Infinity }}
             className="flex w-fit will-change-transform"
           >
             <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 whitespace-nowrap">
                <span className="text-6xl md:text-[110px] font-serif text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>Social Media</span>
                <span className="text-6xl md:text-[110px] font-serif italic text-white/30">AI Automation</span>
                <span className="text-6xl md:text-[110px] font-sans font-bold text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>Content Strategy</span>
             </div>
             {/* Infinite Loop Duplication */}
             <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 whitespace-nowrap" aria-hidden="true">
                <span className="text-6xl md:text-[110px] font-serif text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>Social Media</span>
                <span className="text-6xl md:text-[110px] font-serif italic text-white/30">AI Automation</span>
                <span className="text-6xl md:text-[110px] font-sans font-bold text-transparent uppercase tracking-tighter" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.15)' }}>Content Strategy</span>
             </div>
           </motion.div>

           {/* Track 2: Ambient Left-to-Right (Reverse) */}
           <motion.div 
             animate={{ x: ["-50%", "0%"] }}
             transition={{ duration: 60, ease: "linear", repeat: Infinity }}
             className="flex w-fit -ml-[20vw] will-change-transform"
           >
             <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap">
                <span className="text-5xl md:text-8xl font-sans font-black text-white/10 uppercase tracking-tight">Video Editing</span>
                <span className="text-5xl md:text-8xl font-serif text-white/60">Lead Generation</span>
                <span className="text-5xl md:text-8xl font-serif italic text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>Content Distribution</span>
             </div>
             {/* Infinite Loop Duplication */}
             <div className="flex items-center gap-16 md:gap-24 px-8 md:px-12 whitespace-nowrap" aria-hidden="true">
                <span className="text-5xl md:text-8xl font-sans font-black text-white/10 uppercase tracking-tight">Video Editing</span>
                <span className="text-5xl md:text-8xl font-serif text-white/60">Lead Generation</span>
                <span className="text-5xl md:text-8xl font-serif italic text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.3)' }}>Content Distribution</span>
             </div>
           </motion.div>

           {/* Track 3: Ultra-Slow Right-to-Left */}
           <motion.div 
             animate={{ x: ["0%", "-50%"] }}
             transition={{ duration: 80, ease: "linear", repeat: Infinity }}
             className="flex w-fit ml-[5vw] will-change-transform"
           >
             <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 whitespace-nowrap">
                <span className="text-7xl md:text-[130px] font-serif italic text-white/10">LinkedIn Growth</span>
                <span className="text-7xl md:text-[130px] font-sans font-bold text-transparent tracking-tighter uppercase" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.08)' }}>Personal Branding</span>
                <span className="text-7xl md:text-[130px] font-serif text-white/20">Growth Systems</span>
                <span className="text-7xl md:text-[130px] font-sans font-black text-white/5 uppercase tracking-tight">Instagram Growth</span>
             </div>
             {/* Infinite Loop Duplication */}
             <div className="flex items-center gap-16 md:gap-32 px-8 md:px-16 whitespace-nowrap" aria-hidden="true">
                <span className="text-7xl md:text-[130px] font-serif italic text-white/10">LinkedIn Growth</span>
                <span className="text-7xl md:text-[130px] font-sans font-bold text-transparent tracking-tighter uppercase" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.08)' }}>Personal Branding</span>
                <span className="text-7xl md:text-[130px] font-serif text-white/20">Growth Systems</span>
                <span className="text-7xl md:text-[130px] font-sans font-black text-white/5 uppercase tracking-tight">Instagram Growth</span>
             </div>
           </motion.div>

        </motion.div>

      </div>
    </section>
  );
}
