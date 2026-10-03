"use client";

import React, { useState } from 'react';
import { SectionHeader } from '@/components/common/section-header';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn } from '@/components/motion/fade-in';

const FAQS = [
  {
    question: "What services do you offer?",
    answer: "We build growth systems. This includes automated lead generation, content ecosystems, and AI-driven workflows designed to scale your revenue without scaling headcount."
  },
  {
    question: "How long before we see results?",
    answer: "Initial systems are deployed within 30 days. Compounding revenue growth and market positioning typically mature between months three and six."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes. We operate asynchronously and build systems for clients globally across North America, Europe, and the Middle East."
  },
  {
    question: "Can you handle content creation?",
    answer: "Yes. We use a 'One-to-Many' framework. You record one 60-minute strategy call per month, and our team engineers it into 30 days of omnipresent, platform-native content."
  },
  {
    question: "Do you offer AI automation services?",
    answer: "Yes. We engineer custom LLM-powered scraping, outbound sequencing, and CRM routing to eliminate manual data entry and lower your acquisition costs."
  },
  {
    question: "How does pricing work?",
    answer: "We don't charge hourly or use standard retainers. We price based on the scale and value of the system we build. Custom engagements start in the low five figures."
  },
  {
    question: "What industries do you work with?",
    answer: "We partner primarily with B2B companies, venture capital firms, and high-ticket SaaS platforms where scaling authority directly drives deal flow."
  },
  {
    question: "How do we get started?",
    answer: "Book a strategy call. We’ll audit your current infrastructure and map out the exact system required to scale your operation."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-brand-dark mt-16 lg:mt-24 py-24 md:py-32 flex justify-center border-t border-white/5 relative z-20">
      <div className="w-full max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left: Section Header */}
        <div className="lg:col-span-5 flex flex-col sticky top-32">
          <SectionHeader 
            eyebrow="FAQ"
            title="Common Questions."
            description="Clarity on our process, pricing, and expectations before we partner."
          />
        </div>

        {/* Right: Accordion Structure */}
        <div className="lg:col-span-7 flex flex-col mt-4 lg:mt-0">
           {FAQS.map((faq, idx) => {
             const isOpen = openIndex === idx;
             
             return (
               <FadeIn key={idx} delay={idx * 0.05} direction="up">
                 <div className="border-t border-white/10 flex flex-col group">
                    {/* Huge Clickable Row Header */}
                    <div 
                      onClick={() => toggleFAQ(idx)}
                      className="flex items-center justify-between w-full py-8 md:py-10 cursor-pointer"
                    >
                      <h3 className={`text-2xl md:text-4xl font-serif transition-colors duration-500 ease-out pr-8 ${isOpen ? 'text-brand-cyan' : 'text-white group-hover:text-brand-cyan/80'}`}>
                        {faq.question}
                      </h3>
                      
                      {/* Custom Animated Icon */}
                      <div className="w-10 h-10 shrink-0 flex items-center justify-center relative rounded-full border border-white/10 group-hover:border-white/30 transition-colors duration-500">
                         <motion.div 
                           animate={{ rotate: isOpen ? 45 : 0 }} 
                           transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                           className={`w-4 h-4 flex items-center justify-center relative transition-colors duration-500 ${isOpen ? 'text-brand-cyan' : 'text-white'}`}
                         >
                            <span className="absolute w-full h-[1px] bg-current" />
                            <span className="absolute w-[1px] h-full bg-current" />
                         </motion.div>
                      </div>
                    </div>
                    
                    {/* Smooth Framer Motion Answer Reveal */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="w-full pr-8 md:pr-16 pb-10">
                            <p className="text-white/60 font-light text-xl md:text-2xl leading-[1.6]">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               </FadeIn>
             );
           })}
           <div className="border-t border-white/10 w-full" />
        </div>

      </div>
    </section>
  );
}
