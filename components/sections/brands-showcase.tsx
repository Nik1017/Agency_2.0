"use client";

import React from 'react';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { SectionHeader } from "@/components/common/section-header";

export function BrandsShowcase() {
  
  // Luxury staggered reveal for logos
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="relative w-full bg-[#F5F4F0] py-24 md:py-32 px-6 flex flex-col items-center overflow-hidden">
      
      {/* Decorative Accents - Subtle Motion */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full border border-black/[0.03] pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-150px] right-[-50px] w-[700px] h-[700px] rounded-full border border-black/[0.03] pointer-events-none z-0" 
      />
      
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 left-[8%] w-1.5 h-1.5 bg-brand-cyan rounded-full pointer-events-none z-0" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-[30%] right-[10%] w-2 h-2 bg-brand-cyan rounded-full pointer-events-none z-0 opacity-60" 
      />
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-32 left-[40%] w-1.5 h-1.5 bg-brand-cyan rounded-full pointer-events-none z-0 opacity-80" 
      />

      {/* 1. Large section container */}
      <div className="relative max-w-7xl w-full flex flex-col gap-16 md:gap-24 z-10 text-black">
        
        {/* Global Section Header */}
        <SectionHeader 
          eyebrow="+ Partnerships"
          title={
            <>
              Brands We've <br className="hidden md:block" />
              <span className="italic font-normal opacity-70">Helped Grow</span>
            </>
          }
        />

        {/* 3. Showcase area */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center bg-white rounded-[40px] md:rounded-[64px] p-8 md:p-16 lg:p-24 shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-black/[0.02]">
           
           {/* 4. Logo area */}
           <div className="flex flex-col justify-center gap-12 md:gap-16 order-2 lg:order-1">
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-[11px] md:text-xs font-mono font-bold tracking-[0.2em] text-black/30 uppercase"
              >
                 Trusted by modern founders
              </motion.p>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-50px" }}
                className="flex flex-wrap items-center gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12"
              >
                 {/* Brand 1 */}
                 <motion.div variants={itemVariants} className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <span className="text-2xl md:text-4xl font-serif italic font-bold text-black tracking-tight">Olio.</span>
                 </motion.div>
                 
                 {/* Brand 2 */}
                 <motion.div variants={itemVariants} className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <span className="text-lg md:text-2xl font-sans font-black text-black tracking-tighter uppercase">Vanguard</span>
                 </motion.div>

                 {/* Brand 3 */}
                 <motion.div variants={itemVariants} className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer flex items-center gap-2 md:gap-3">
                    <div className="w-4 h-4 md:w-5 md:h-5 bg-black rounded-full" />
                    <span className="text-xl md:text-3xl font-sans font-bold text-black tracking-tight">Nexus</span>
                 </motion.div>

                 {/* Brand 4 */}
                 <motion.div variants={itemVariants} className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <span className="text-xl md:text-3xl font-serif font-medium text-black tracking-[0.2em] uppercase">Aura</span>
                 </motion.div>

                 {/* Brand 5 */}
                 <motion.div variants={itemVariants} className="grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer flex items-center gap-2 md:gap-3">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-black border-b-[7px] border-b-transparent md:border-t-[8px] md:border-l-[14px] md:border-b-[8px]" />
                    <span className="text-lg md:text-2xl font-sans font-bold text-black tracking-tight">Velocity</span>
                 </motion.div>
                 
              </motion.div>
           </div>

           {/* 5. Premium Media Showcase Container */}
           <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
             className="w-full aspect-square md:aspect-[4/3] lg:aspect-[4/5] bg-[#FAFAFA] rounded-[32px] md:rounded-[40px] border border-black/[0.04] shadow-[0_20px_80px_rgba(0,0,0,0.06),_inset_0_2px_20px_rgba(255,255,255,1)] order-1 lg:order-2 relative overflow-hidden flex flex-col items-center justify-center"
           >
              
              {/* Top Left Badge: Featured Work */}
              <div className="absolute top-6 left-6 md:top-8 md:left-8 px-5 py-2.5 rounded-full bg-[#111111] shadow-[0_10px_20px_rgba(0,0,0,0.2)] flex items-center justify-center">
                 <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.2em] text-white uppercase mt-[1px]">
                    Featured Work
                 </span>
              </div>
              
              {/* Center Text (for wireframe reference) */}
              <span className="text-black/30 font-medium font-sans tracking-wide z-10">
                 Premium Media Container
              </span>
              
              {/* Bottom Right: Sound Toggle Placeholder */}
              <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex items-center gap-3 px-5 py-3 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] cursor-pointer hover:scale-105 transition-transform duration-300">
                 <div className="w-2 h-2 rounded-full bg-[#FF3B30] shadow-[0_0_8px_rgba(255,59,48,0.5)] animate-pulse" />
                 <span className="text-[10px] md:text-[11px] font-mono font-bold tracking-[0.1em] text-black uppercase pt-[1px]">
                    Sound Off
                 </span>
              </div>
              
           </motion.div>
           
        </div>
      </div>
    </section>
  );
}
