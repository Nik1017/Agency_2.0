import React from 'react';
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/data/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FadeIn } from "@/components/motion/fade-in";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

// Generate static params for SSG compilation
export async function generateStaticParams() {
  const studies = getAllCaseStudies();
  return studies.map((study) => ({
    slug: study.slug,
  }));
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const allStudies = getAllCaseStudies();
  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!caseStudy) {
    notFound();
  }

  // Determine the next case study for the footer loop
  const currentIndex = allStudies.findIndex(cs => cs.slug === params.slug);
  const nextStudy = allStudies[(currentIndex + 1) % allStudies.length];

  return (
    <main className="w-full flex flex-col items-center bg-brand-dark min-h-screen text-white pt-24 md:pt-32 selection:bg-brand-cyan/30">
      
      {/* 1. Hero Section */}
      <section className="w-full max-w-7xl px-6 pt-24 md:pt-40 pb-16 md:pb-24 flex flex-col gap-8 md:gap-12 relative z-10">
         <FadeIn>
           <Link href="/case-studies" className="inline-flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-300 font-mono text-[10px] uppercase tracking-[0.2em] mb-4 md:mb-8 group">
              <span className="w-6 h-[1px] bg-current relative group-hover:-translate-x-2 transition-transform duration-300">
                 <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 border-t border-l border-current -rotate-45 translate-x-[1px]" />
              </span>
              Back to Archive
           </Link>
           <div className="flex gap-6 items-center">
              <span className="text-brand-cyan font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">{caseStudy.industry}</span>
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full" />
              <span className="text-white/60 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">{caseStudy.client}</span>
           </div>
         </FadeIn>
         <FadeIn delay={0.1}>
           <h1 className="text-6xl md:text-[90px] lg:text-[120px] font-serif leading-[0.95] tracking-tighter text-white max-w-[1200px]">
             {caseStudy.title}
           </h1>
         </FadeIn>
      </section>

      {/* 2. Featured Image Area */}
      <section className="w-full max-w-[1400px] px-6 mb-32 md:mb-48">
         <FadeIn delay={0.2} direction="up">
           <div className="w-full aspect-[16/9] lg:aspect-[21/9] bg-[#0A0A0A] rounded-[32px] lg:rounded-[48px] border border-white/5 flex items-center justify-center overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.2)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02),_transparent_70%)]" />
              <span className="font-mono text-white/20 text-xs tracking-[0.2em] uppercase">Featured Image Placeholder</span>
           </div>
         </FadeIn>
      </section>

      {/* 3. Overview & Metrics */}
      <section className="w-full max-w-7xl px-6 mb-32 md:mb-48 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
         {/* Left: Metrics Matrix */}
         <div className="lg:col-span-5 flex flex-col w-full bg-[#111111] border border-white/5 rounded-[32px] overflow-hidden">
             {caseStudy.metrics.map((metric, idx) => (
               <FadeIn key={idx} delay={0.1 * idx} direction="up" className="flex flex-col gap-2 p-8 lg:p-12 border-b border-white/5 last:border-b-0 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <span className="text-5xl lg:text-7xl font-serif text-white tracking-tighter">{metric.value}</span>
                 <span className="text-[10px] md:text-xs font-mono text-white/40 uppercase tracking-[0.3em]">{metric.label}</span>
               </FadeIn>
             ))}
         </div>

         {/* Right: Overview Text */}
         <div className="lg:col-span-7 flex flex-col pt-8 lg:pt-12">
            <FadeIn>
              <div className="w-12 h-[1px] bg-brand-cyan mb-8" />
              <h3 className="text-2xl md:text-3xl font-serif mb-8 text-white">Overview</h3>
              <p className="text-2xl lg:text-3xl text-white/60 leading-[1.6] font-light max-w-2xl">
                {caseStudy.overview}
              </p>
            </FadeIn>
         </div>
      </section>

      {/* 4. Editorial Narrative (Challenge, Strategy, Execution, Results) */}
      <section className="w-full max-w-7xl px-6 mb-32 md:mb-48 flex flex-col">
         {[
           { label: "01 / Challenge", title: "The Obstacle.", content: caseStudy.challenge },
           { label: "02 / Strategy", title: "The Blueprint.", content: caseStudy.strategy },
           { label: "03 / Execution", title: "The Build.", content: caseStudy.execution },
           { label: "04 / Results", title: "The Outcome.", content: caseStudy.results },
         ].map((section, idx) => (
           <FadeIn key={idx} delay={0.1} direction="up" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 border-t border-white/10 py-16 md:py-24 group hover:bg-white/[0.01] transition-colors duration-500">
              <div className="lg:col-span-4 flex flex-col gap-6">
                 <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-cyan">{section.label}</span>
                 <h3 className="text-5xl lg:text-6xl font-serif text-white tracking-tight">{section.title}</h3>
              </div>
              <div className="lg:col-span-8 flex flex-col justify-center">
                 <p className="text-xl md:text-2xl lg:text-3xl text-white/60 leading-[1.7] font-light max-w-3xl">
                   {section.content}
                 </p>
              </div>
           </FadeIn>
         ))}
      </section>

      {/* 5. Testimonial */}
      {caseStudy.testimonial && (
        <section className="w-full bg-[#111111] border-y border-white/5 py-32 md:py-48 flex flex-col items-center justify-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,163,255,0.03),_transparent_50%)]" />
           <FadeIn className="w-full max-w-6xl px-6 flex flex-col items-center text-center relative z-10">
             <div className="w-16 h-16 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mb-12">
                <span className="text-brand-cyan font-serif text-5xl leading-none pt-4">"</span>
             </div>
             <h3 className="text-4xl md:text-6xl lg:text-[80px] font-serif text-white leading-[1.05] tracking-tight mb-16 max-w-5xl">
               {caseStudy.testimonial.quote}
             </h3>
             <div className="flex flex-col items-center gap-3">
                <span className="text-white text-xl font-bold">{caseStudy.testimonial.author}</span>
                <span className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-[0.3em]">{caseStudy.testimonial.role}</span>
             </div>
           </FadeIn>
        </section>
      )}

      {/* 6. Next Case Study CTA */}
      <section className="w-full bg-[#0A0A0A] py-32 md:py-48 flex flex-col items-center justify-center text-center px-6">
         <FadeIn>
           <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-brand-cyan mb-8 block">Next Project</span>
           <h2 className="text-6xl md:text-7xl lg:text-[100px] font-serif text-white leading-[0.95] tracking-tighter mb-16 max-w-5xl hover:text-white/80 transition-colors duration-500">
              <Link href={`/case-studies/${nextStudy.slug}`}>
                {nextStudy.title}
              </Link>
           </h2>
         </FadeIn>
         <FadeIn delay={0.2}>
           <Link 
             href={`/case-studies/${nextStudy.slug}`} 
             className="px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-[0.2em] text-[10px] md:text-xs flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
           >
              View Case Study
           </Link>
         </FadeIn>
      </section>

    </main>
  );
}
