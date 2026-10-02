"use client";

import React from 'react';
import { SectionHeader } from '@/components/common/section-header';

const TESTIMONIALS = [
  {
    quote: "We had a solid product but zero distribution. They didn't just run ads; they completely restructured our acquisition engine. We went from scraping for leads to having a waitlist.",
    author: "Marcus Chen",
    role: "Founder, FlowState",
    result: "+310% MRR",
  },
  {
    quote: "I was spending 40 hours a week editing and posting. They built an autonomous content ecosystem that repurposed my videos across every platform. I got my life back.",
    author: "Elena Rostova",
    role: "Creator, @ElenaInvests",
    result: "1.2M audience",
  },
  {
    quote: "Most agencies don't understand deeply technical products. This team actually got into the weeds with our API and positioned us perfectly to enterprise buyers.",
    author: "Julian Hayes",
    role: "Co-Founder, Synapse AI",
    result: "$2.4M Seed",
  },
  {
    quote: "We were relying entirely on referrals. They came in and automated our entire outbound infrastructure using AI. Now we have predictable deal flow every single week.",
    author: "David Thorne",
    role: "Director, Thorne Creative",
    result: "14 new retainers",
  },
  {
    quote: "CAC was eating our margins alive. They deployed a hybrid organic-paid system that slashed our acquisition costs while scaling volume. Absolute masterclass.",
    author: "Sarah Jenkins",
    role: "Founder, Lura Skincare",
    result: "64% CAC drop",
  },
  {
    quote: "I needed to scale my authority without being on social media all day. Their ghostwriting system positioned me as the definitive voice in my space.",
    author: "Dr. Amina Diallo",
    role: "Principal, Diallo Strategy",
    result: "$150k pipeline",
  },
  {
    quote: "Their team doesn't just execute; they act as a true strategic partner. Our organic traffic grew by 400% in a single quarter.",
    author: "Mark Evans",
    role: "CEO, RetailEdge",
    result: "400% growth",
  },
  {
    quote: "The onboarding was seamless, and the quality of their creative work is unmatched. We saw ROI within the first month.",
    author: "Sophie Lauren",
    role: "CMO, Bloom",
    result: "Positive ROI",
  },
  {
    quote: "We were struggling to articulate our value prop. They came in, refined our messaging, and scaled it perfectly across all channels.",
    author: "James Chen",
    role: "Founder, DataSync",
    result: "2x conversion",
  }
];

// Split logic for responsive SSR DOM
const mobileCol = TESTIMONIALS;
const tabletCol1 = TESTIMONIALS.slice(0, 5);
const tabletCol2 = TESTIMONIALS.slice(5, 9);
const desktopCol1 = TESTIMONIALS.slice(0, 3);
const desktopCol2 = TESTIMONIALS.slice(3, 6);
const desktopCol3 = TESTIMONIALS.slice(6, 9);

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white border border-black/5 rounded-2xl p-6 lg:p-8 flex flex-col gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)] transition-all duration-500 w-full shrink-0">
      <div className="flex flex-col gap-4">
        <p className="text-black/80 text-sm lg:text-base font-sans leading-relaxed">
          "{testimonial.quote}"
        </p>
        <div className="inline-flex w-fit items-center px-2.5 py-1 bg-[#FAFAFA] text-black/60 border border-black/5 text-[10px] font-mono font-bold tracking-widest uppercase rounded-md">
          {testimonial.result}
        </div>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-black/5 mt-2">
        <div className="w-10 h-10 rounded-full bg-black/5 shrink-0 border border-black/10" />
        <div className="flex flex-col">
          <span className="text-black font-semibold text-sm tracking-tight">{testimonial.author}</span>
          <span className="text-black/50 text-xs font-mono tracking-tight">{testimonial.role}</span>
        </div>
      </div>
    </div>
  );
}

function MarqueeColumn({ items, direction = "up", speed = "normal" }: { items: typeof TESTIMONIALS, direction?: "up" | "down", speed?: "normal" | "slow" }) {
  // Duplicate array to create the seamless infinite loop
  const duplicatedItems = [...items, ...items];
  
  // Base classes for the column wrapper
  const animationClass = direction === "up" ? "animate-marquee-up" : "animate-marquee-down";
  const durationClass = speed === "slow" ? "duration-[80s]" : "duration-[60s]";

  return (
    <div className="flex-1 flex flex-col overflow-hidden relative group w-full">
      <div className={`flex flex-col gap-6 lg:gap-8 w-full hover:[animation-play-state:paused] ${animationClass}`} style={{ animationDuration: speed === 'slow' ? '80s' : '60s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}>
        {duplicatedItems.map((item, idx) => (
          <TestimonialCard key={idx} testimonial={item} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full bg-[#FAFAFA] text-black pt-24 md:pt-40 pb-12 md:pb-20 flex justify-center relative z-10 overflow-hidden">
      {/* Inline Styles for Marquee Physics */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-50% - 1rem)); } /* 1rem is half of gap-8 */
        }
        @keyframes scroll-down {
          0% { transform: translateY(calc(-50% - 1rem)); }
          100% { transform: translateY(0); }
        }
        .animate-marquee-up {
          animation-name: scroll-up;
        }
        .animate-marquee-down {
          animation-name: scroll-down;
        }
      `}} />

      <div className="w-full max-w-[1400px] px-6 lg:px-12 flex flex-col gap-16 lg:gap-24 items-center">
        
        <SectionHeader 
          eyebrow="TESTIMONIALS"
          title="What clients say when the numbers land."
          description="Real experiences from businesses, creators and founders we've partnered with."
          className="items-center text-center max-w-3xl mx-auto"
        />

        {/* Global Masking Container for seamless fade in/out at top and bottom */}
        <div 
          className="w-full h-[600px] md:h-[700px] lg:h-[800px] flex gap-6 lg:gap-8 relative"
          style={{ maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)' }}
        >
          {/* Mobile Layout (1 Col) */}
          <div className="flex md:hidden w-full h-full">
            <MarqueeColumn items={mobileCol} direction="up" speed="slow" />
          </div>

          {/* Tablet Layout (2 Cols) */}
          <div className="hidden md:flex lg:hidden w-full h-full gap-6">
            <MarqueeColumn items={tabletCol1} direction="up" />
            <MarqueeColumn items={tabletCol2} direction="down" />
          </div>

          {/* Desktop Layout (3 Cols) */}
          <div className="hidden lg:flex w-full h-full gap-8">
            <MarqueeColumn items={desktopCol1} direction="up" speed="slow" />
            <MarqueeColumn items={desktopCol2} direction="down" />
            <MarqueeColumn items={desktopCol3} direction="up" speed="slow" />
          </div>
        </div>

      </div>
    </section>
  );
}
