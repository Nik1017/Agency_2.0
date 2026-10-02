"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

interface PlatformCardProps {
  type: "youtube" | "instagram" | "linkedin" | "ai";
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  style: any;
  className?: string;
  delay?: number;
}

const PlatformCard = ({ type, mouseX, mouseY, style, className, delay = 0 }: PlatformCardProps) => {
  // Extreme 3D depth modifiers based on mouse position
  // Invert the X axis so it tilts naturally towards the cursor
  const rotateY = useTransform(mouseX, [-1, 1], [-25, 25]);
  const rotateX = useTransform(mouseY, [-1, 1], [25, -25]);

  // Platform specific configurations meticulously matching screenshots
  const config = {
    youtube: {
      bg: "bg-[#CC0000]",
      glow: "rgba(204,0,0,0.6)",
      title: "Youtube",
      icon: (
        <div className="w-16 h-14 rounded-[16px] bg-gradient-to-br from-[#FF0000] to-[#CC0000] shadow-[inset_0_2px_6px_rgba(255,255,255,0.4),_0_15px_30px_rgba(204,0,0,0.5)] flex items-center justify-center relative border border-[#FF3333]">
          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-l-[12px] border-l-white border-b-[7px] border-b-transparent ml-1 drop-shadow-md" />
        </div>
      ),
      dashboard: (
        <div className="flex flex-col h-full bg-[#F5F5F5] rounded-xl overflow-hidden border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
          <div className="h-4 bg-[#E0E0E0] flex items-center px-2 gap-1 border-b border-[#D0D0D0]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
          </div>
          <div className="p-3 flex flex-col flex-1 gap-2">
            <div className="h-14 w-full border-b border-black/10 relative overflow-hidden flex items-end">
              <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full drop-shadow-md">
                <path d="M0 40 L 10 30 L 30 35 L 50 15 L 70 25 L 90 5 L 100 10" fill="none" stroke="#CC0000" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
            <div className="flex gap-2">
              <div className="h-5 flex-1 bg-black/10 rounded-md" />
              <div className="h-5 flex-[0.8] bg-black/10 rounded-md" />
              <div className="h-5 flex-1 bg-black/10 rounded-md" />
            </div>
          </div>
        </div>
      )
    },
    instagram: {
      bg: "bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]",
      glow: "rgba(220,39,67,0.6)",
      title: "Instagram",
      icon: (
        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-bl from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-[inset_0_2px_6px_rgba(255,255,255,0.5),_0_15px_30px_rgba(220,39,67,0.5)] flex items-center justify-center relative border border-white/30">
          <div className="w-8 h-8 rounded-[10px] border-[2.5px] border-white flex items-center justify-center relative shadow-sm">
            <div className="w-3 h-3 rounded-full border-[2.5px] border-white" />
            <div className="w-1 h-1 bg-white rounded-full absolute top-1 right-1" />
          </div>
        </div>
      ),
      dashboard: (
        <div className="flex flex-col h-full bg-[#F5F5F5] rounded-xl overflow-hidden border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.4)] p-3 relative">
          <p className="text-[11px] font-bold text-black mb-1 leading-none">Account insights</p>
          <p className="text-[7.5px] text-[#0084FF] font-semibold absolute top-3 right-3 cursor-pointer">See all</p>
          <p className="text-[7.5px] text-black/60 leading-tight mb-2 pr-6">You reached 1.2M accounts in the last 30 days, compared to Dec 27 - Jan 25.</p>
          <div className="flex-1 flex items-end gap-[2px] mt-auto">
            {[20, 15, 30, 25, 45, 60, 40, 80, 50, 90, 70, 100, 85, 95, 75, 80].map((h, i) => (
              <div key={i} className="flex-1 bg-[#0084FF] rounded-t-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      )
    },
    linkedin: {
      bg: "bg-[#0A66C2]",
      glow: "rgba(10,102,194,0.6)",
      title: "Linkedin",
      icon: (
        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-b from-[#0B76E0] to-[#0A66C2] shadow-[inset_0_2px_6px_rgba(255,255,255,0.4),_0_15px_30px_rgba(10,102,194,0.5)] flex items-center justify-center relative border border-[#2B86E0]">
          <span className="text-white font-bold text-[32px] font-serif leading-none mt-[-2px] tracking-tighter">in</span>
        </div>
      ),
      dashboard: (
        <div className="flex flex-col h-full gap-2">
          <div className="flex gap-2 h-1/2">
             <div className="flex-[1.5] bg-[#F5F5F5] rounded-lg shadow-lg border border-white/80 p-2 flex flex-col justify-between">
               <p className="text-[7.5px] font-semibold text-black/80">Post Engagement</p>
               <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-5 mt-1 drop-shadow-sm">
                 <path d="M0 20 L 20 10 L 40 15 L 60 5 L 80 12 L 100 2 L 100 20 Z" fill="rgba(10,102,194,0.15)" />
                 <path d="M0 20 L 20 10 L 40 15 L 60 5 L 80 12 L 100 2" fill="none" stroke="#0A66C2" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
               </svg>
             </div>
             <div className="flex-1 bg-[#F5F5F5] rounded-lg shadow-lg border border-white/80 p-2 flex flex-col justify-center">
               <p className="text-[7px] text-black/60 font-medium">Ad Spend</p>
               <p className="text-[12px] font-bold text-black leading-tight">$562</p>
               <p className="text-[5px] text-green-600 mt-0.5">+12.3%</p>
             </div>
          </div>
          <div className="flex gap-2 h-1/2">
             <div className="flex-[1.2] bg-[#F5F5F5] rounded-lg shadow-lg border border-white/80 p-2 flex items-end gap-[3px]">
               <div className="flex-1 h-[60%] bg-[#4CAF50] rounded-[1px]" />
               <div className="flex-1 h-[80%] bg-[#FF9800] rounded-[1px]" />
               <div className="flex-1 h-[100%] bg-[#2196F3] rounded-[1px]" />
               <div className="flex-1 h-[40%] bg-[#9C27B0] rounded-[1px]" />
               <div className="flex-1 h-[70%] bg-[#E91E63] rounded-[1px]" />
             </div>
             <div className="flex-1 bg-[#F5F5F5] rounded-lg shadow-lg border border-white/80 p-2 flex flex-col justify-center">
               <p className="text-[7px] text-black/60 font-medium">Followers</p>
               <p className="text-[12px] font-bold text-black leading-tight">5,586</p>
               <p className="text-[5px] text-green-600 mt-0.5">+12.3%</p>
             </div>
          </div>
        </div>
      )
    },
    ai: {
      bg: "bg-brand-cyan",
      glow: "rgba(0,163,255,0.6)",
      title: "Automation",
      icon: (
        <div className="w-16 h-16 rounded-[18px] bg-gradient-to-br from-[#33B5FF] to-[#0091E6] shadow-[inset_0_2px_6px_rgba(255,255,255,0.5),_0_15px_30px_rgba(0,163,255,0.5)] flex items-center justify-center relative border border-[#66C7FF]">
          <div className="w-7 h-7 border-[2.5px] border-white rounded-[8px] relative flex items-center justify-center shadow-sm">
            <div className="w-2.5 h-2.5 bg-white rounded-sm" />
            <div className="absolute -left-2.5 top-2 w-2 h-2 bg-white rounded-full shadow-sm" />
            <div className="absolute -right-2.5 top-2 w-2 h-2 bg-white rounded-full shadow-sm" />
          </div>
        </div>
      ),
      dashboard: (
        <div className="flex flex-col h-full bg-[#1A1A1A] rounded-xl overflow-hidden border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.6)] p-3 relative">
          <p className="text-[11px] font-bold text-white mb-2 leading-none">Workflow Builder</p>
          <div className="flex-1 relative mt-1">
            <div className="absolute left-1 top-0 w-20 h-7 bg-brand-cyan/20 border border-brand-cyan/50 rounded-md flex items-center px-2 shadow-inner">
               <span className="text-[6.5px] text-brand-cyan font-mono font-semibold tracking-wider">Trigger_v2</span>
            </div>
            <div className="absolute left-11 top-7 w-px h-6 bg-gradient-to-b from-brand-cyan to-purple-500" />
            <div className="absolute left-6 top-13 w-24 h-7 bg-purple-500/20 border border-purple-500/50 rounded-md flex items-center px-2 shadow-inner">
               <span className="text-[6.5px] text-purple-400 font-mono font-semibold tracking-wider">AI_Agent_04</span>
            </div>
          </div>
        </div>
      )
    }
  };

  const c = config[type];

  return (
    <motion.div 
      style={{ ...style, perspective: 1200 }} 
      className={cn("absolute hidden lg:flex items-center justify-center z-20 pointer-events-none", className)}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, ease: "easeInOut", repeat: Infinity, delay: delay }}
        className="scale-[0.7] xl:scale-[0.85] origin-center"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial="initial"
          whileHover="hover"
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="relative w-[230px] h-[310px] pointer-events-auto cursor-pointer group"
        >
          {/* Layer 1: Outer Glass Frame (Furthest) */}
          <motion.div 
            variants={{ 
              initial: { z: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.15)" }, 
              hover: { z: -30, boxShadow: "0 40px 80px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.3)" } 
            }}
            className="absolute inset-0 rounded-[32px] bg-[#1A1A1A]/70 backdrop-blur-3xl border border-white/10"
          />

          {/* Layer 2: Colored Platform Panel (Base Depth) */}
          <motion.div 
            variants={{ 
              initial: { z: 10, boxShadow: `inset 0 2px 12px rgba(0,0,0,0.3), 0 10px 40px ${c.glow}` }, 
              hover: { z: 10, boxShadow: `inset 0 2px 12px rgba(0,0,0,0.3), 0 20px 60px ${c.glow}` } 
            }}
            className={cn("absolute inset-4 rounded-[24px]", c.bg)}
          />

          {/* Layer 4: Analytics Dashboard (Middle Depth) */}
          <motion.div 
            variants={{ 
              initial: { z: 40, y: 0 }, 
              hover: { z: 70, y: -5 } 
            }}
            className="absolute bottom-5 left-6 right-6 h-[135px] pointer-events-auto"
          >
            {c.dashboard}
          </motion.div>

          {/* Layer 3: Platform Icon (Closest to user) */}
          <motion.div 
            variants={{ 
              initial: { z: 60, scale: 1 }, 
              hover: { z: 110, scale: 1.1 } 
            }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none flex flex-col items-center"
          >
            <div className="mt-[-20px] pointer-events-auto">
              {c.icon}
            </div>
            <span className="text-white font-bold tracking-tight text-[22px] mt-3 drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]">
              {c.title}
            </span>
          </motion.div>

          {/* Layer 5: Specular Highlight (Always on Top) */}
          <motion.div 
            variants={{ initial: { z: 65, opacity: 0.3 }, hover: { z: 115, opacity: 1 } }}
            className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-white/0 via-white/10 to-white/0 pointer-events-none mix-blend-overlay"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Spring physics for buttery smooth parallax depth
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 25 });

  // Macro parallax shifts for the cards' physical position in space
  const px1 = useTransform(smoothX, [-1, 1], [-30, 30]);
  const py1 = useTransform(smoothY, [-1, 1], [-30, 30]);
  
  const px2 = useTransform(smoothX, [-1, 1], [40, -40]);
  const py2 = useTransform(smoothY, [-1, 1], [40, -40]);

  const px3 = useTransform(smoothX, [-1, 1], [-50, 50]);
  const py3 = useTransform(smoothY, [-1, 1], [-50, 50]);

  const px4 = useTransform(smoothX, [-1, 1], [35, -35]);
  const py4 = useTransform(smoothY, [-1, 1], [35, -35]);

  return (
    <section className="relative w-full min-h-[100svh] bg-brand-dark flex flex-col items-center justify-center px-6 pt-24 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-brand-cyan opacity-[0.15] blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#111111_100%)] pointer-events-none z-0" />
      
      {/* Main Content Container */}
      <div className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto px-4 mt-8">
        
        {/* Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 text-brand-grayTextDark uppercase tracking-[0.3em] text-[11px] md:text-xs font-mono font-bold"
        >
          WE BUILD DIGITAL AUTHORITY
        </motion.p>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 font-serif text-6xl md:text-8xl lg:text-[140px] leading-[0.85] tracking-[-0.02em] text-white flex flex-col items-center"
        >
          <span className="italic font-normal">We Engineer</span>
          <span className="bg-brand-cyan text-brand-dark px-6 md:px-10 py-1 md:py-3 mt-3 md:mt-6 inline-block font-bold uppercase tracking-[-0.04em]">
            ATTENTION
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-brand-grayTextDark text-base md:text-xl max-w-xl font-sans leading-[1.6]"
        >
          End-to-end content creation, video editing, and AI automation for founders and modern brands.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-10"
        >
          <Link 
            href="/book-a-call" 
            className="bg-white text-brand-dark px-10 py-5 rounded-pill font-sans font-bold text-sm tracking-wide hover:scale-105 hover:bg-white/90 transition-all duration-300 ease-editorial shadow-subtle hover:shadow-medium"
          >
            Book a Call
          </Link>
          <Link 
            href="/case-studies" 
            className="text-white font-sans text-sm font-semibold tracking-wide flex items-center gap-2 group hover:scale-105 transition-transform duration-300 ease-editorial"
          >
            <span className="transition-colors duration-300 group-hover:text-white/80">View Case Studies</span>
            <span className="text-brand-grayTextDark group-hover:text-white transition-all duration-300 ease-editorial group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Premium 3D Floating Platform Cards */}
      <PlatformCard 
        type="youtube"
        mouseX={smoothX}
        mouseY={smoothY}
        style={{ x: px1, y: py1, rotate: -8 }}
        className="top-[12%] left-[2%] xl:left-[6%]"
        delay={0}
      />
      
      <PlatformCard 
        type="instagram"
        mouseX={smoothX}
        mouseY={smoothY}
        style={{ x: px2, y: py2, rotate: 10 }}
        className="bottom-[8%] left-[4%] xl:left-[9%]"
        delay={1.5}
      />
      
      <PlatformCard 
        type="linkedin"
        mouseX={smoothX}
        mouseY={smoothY}
        style={{ x: px3, y: py3, rotate: 12 }}
        className="top-[18%] right-[2%] xl:right-[6%]"
        delay={0.8}
      />
      
      <PlatformCard 
        type="ai"
        mouseX={smoothX}
        mouseY={smoothY}
        style={{ x: px4, y: py4, rotate: -10 }}
        className="bottom-[10%] right-[4%] xl:right-[9%]"
        delay={2.2}
      />

    </section>
  );
}
