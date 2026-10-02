import React from 'react';
import { getAllCaseStudies } from '@/lib/data/case-studies';
import Link from 'next/link';
import { SectionHeader } from "@/components/common/section-header";
import { FadeIn } from "@/components/motion/fade-in";

export default function CaseStudiesIndexPage() {
  const caseStudies = getAllCaseStudies();
  const featuredStudy = caseStudies[0];
  const gridStudies = caseStudies.slice(1);

  return (
    <main className="w-full flex flex-col items-center bg-brand-dark min-h-screen text-white pt-32 md:pt-48 pb-24">
      
      {/* 1. Page Hero */}
      <section className="w-full max-w-7xl px-6 mb-24 lg:mb-32">
        <SectionHeader 
          eyebrow="OUR WORK"
          title="Results built through content, systems and execution."
          description="A collection of growth systems, content strategies and automation projects."
        />
      </section>

      {/* 2. Featured Case Study */}
      <section className="w-full max-w-7xl px-6 mb-32 flex flex-col gap-12">
        <SectionHeader 
          eyebrow="FEATURED PROJECT"
          title={
            <>
              {featuredStudy.title}
            </>
          }
        />
        
        {/* Premium Featured Case Study */}
        <FadeIn delay={0.2}>
          <Link href={`/case-studies/${featuredStudy.slug}`} className="group relative w-full bg-[#111111] border border-white/5 rounded-[32px] lg:rounded-[48px] p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-between hover:border-white/10 hover:bg-[#141414] transition-colors duration-500 overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] hover:shadow-[0_40px_120px_rgba(0,163,255,0.05)]">
            
            {/* Left: Content Area */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center z-10">
              {/* Industry Label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-brand-cyan opacity-80" />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/60">
                  {featuredStudy.industry}
                </span>
              </div>

              {/* Client Title */}
              <h3 className="text-4xl md:text-5xl lg:text-[64px] font-serif leading-[1.05] tracking-tight text-white mb-6">
                {featuredStudy.client}
              </h3>

              {/* Overview */}
              <p className="text-base md:text-lg text-white/50 leading-relaxed mb-10 max-w-lg font-light">
                {featuredStudy.overview}
              </p>
              
              {/* Results / Metrics Block */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 border-t border-white/5 pt-8">
                 {featuredStudy.metrics.map((metric, idx) => (
                   <div key={idx} className="flex flex-col gap-2">
                     <span className="text-3xl lg:text-4xl font-serif text-white">{metric.value}</span>
                     <span className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-widest">{metric.label}</span>
                   </div>
                 ))}
              </div>

              {/* CTA */}
              <div className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-brand-cyan transition-colors duration-300">
                 <span>Read Case Study</span>
                 <span className="w-8 h-[1px] bg-current relative">
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t border-r border-current rotate-45 translate-x-[1px]"></span>
                 </span>
              </div>
            </div>
            
            {/* Right: Large Media Area */}
            <div className="w-full lg:w-[55%] h-full min-h-[400px] lg:min-h-[600px] bg-[#0A0A0A] rounded-[24px] lg:rounded-[32px] border border-white/5 flex items-center justify-center relative overflow-hidden z-10 group-hover:scale-[1.02] transition-transform duration-1000 ease-[0.16,1,0.3,1]">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_70%)]" />
               <span className="font-mono text-white/30 text-xs tracking-[0.2em] uppercase">Media Showcase</span>
            </div>
          </Link>
        </FadeIn>
      </section>

      {/* 3. Case Study Grid */}
      <section className="w-full max-w-7xl px-6 mb-32 flex flex-col gap-12">
        <SectionHeader 
          eyebrow="ALL PROJECTS"
          title={
            <>
              Selected <span className="italic font-normal opacity-70">Archive.</span>
            </>
          }
        />

        {/* Grid Structural Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {gridStudies.map((study, index) => (
            <FadeIn key={study.slug} delay={index * 0.1}>
              <Link 
                href={`/case-studies/${study.slug}`} 
                className="group relative flex flex-col h-full bg-[#111111] border border-white/5 rounded-[32px] p-4 md:p-6 lg:p-8 hover:bg-[#141414] hover:border-white/10 transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] hover:-translate-y-2"
              >
                {/* Floating Thumbnail */}
                <div className="w-full aspect-[4/3] bg-[#0A0A0A] rounded-[24px] border border-white/5 flex items-center justify-center relative overflow-hidden mb-8 group-hover:scale-[1.02] transition-transform duration-700 ease-[0.16,1,0.3,1]">
                   <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.03),_transparent_70%)]" />
                   <span className="font-mono text-white/20 text-[10px] tracking-[0.2em] uppercase">Thumbnail</span>
                </div>
                
                {/* Card Body */}
                <div className="flex flex-col flex-1 px-4 lg:px-6 pb-2">
                   {/* Industry Label */}
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan opacity-80" />
                     <span className="text-white/60 font-mono text-[10px] uppercase tracking-[0.2em]">
                       {study.industry}
                     </span>
                   </div>
                   
                   {/* Title */}
                   <h4 className="text-3xl lg:text-4xl font-serif leading-[1.05] tracking-tight mb-10 text-white">
                     {study.title}
                   </h4>
                   
                   {/* Results Block */}
                   <div className="mt-auto pt-8 border-t border-white/5 grid grid-cols-2 gap-6 relative">
                      {/* Primary Result */}
                      <div className="flex flex-col gap-2">
                        <span className="text-3xl lg:text-4xl font-serif text-white">{study.metrics[0].value}</span>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">{study.metrics[0].label}</span>
                      </div>
                      {/* Secondary Result */}
                      <div className="flex flex-col gap-2 border-l border-white/5 pl-6">
                        <span className="text-3xl lg:text-4xl font-serif text-white">{study.metrics[1].value}</span>
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">{study.metrics[1].label}</span>
                      </div>
                      
                      {/* Micro CTA arrow */}
                      <div className="absolute right-0 top-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-[0.16,1,0.3,1]">
                         <span className="w-2.5 h-2.5 border-t border-r border-white rotate-45 -translate-x-[2px]" />
                      </div>
                   </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. CTA Area */}
      <section className="w-full max-w-7xl px-6 flex flex-col items-center justify-center py-32 border-t border-white/10">
         <FadeIn direction="up">
           <h2 className="text-5xl md:text-7xl font-serif mb-12 text-center">Ready to scale?</h2>
         </FadeIn>
         <FadeIn delay={0.1}>
           <Link href="/contact" className="px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300">
              Book a Call
           </Link>
         </FadeIn>
      </section>

    </main>
  );
}
