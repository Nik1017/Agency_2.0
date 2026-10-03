import Link from "next/link";
import React from "react";

const AnimatedLink = ({ href, children, isExternal = false, className = "" }: { href: string, children: React.ReactNode, isExternal?: boolean, className?: string }) => {
  const baseClasses = "group relative inline-flex w-fit font-light text-white/60 hover:text-white transition-colors duration-300";
  const finalClasses = `${baseClasses} ${className}`;
  
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="absolute left-0 -bottom-1 w-full h-[1px] bg-white/40 scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </>
  );

  if (isExternal) {
    return <a href={href} className={finalClasses}>{content}</a>;
  }
  return <Link href={href} className={finalClasses}>{content}</Link>;
};

export function Footer() {
  return (
    <footer className="bg-brand-dark pt-20 md:pt-32 pb-6 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 lg:gap-12">
          
          {/* Brand Area */}
          <div className="flex flex-col md:col-span-4 lg:col-span-5 pr-4 md:pr-12">
            <Link href="/" className="inline-block mb-4 group w-fit">
              <span className="font-serif text-3xl md:text-4xl tracking-tight text-white group-hover:opacity-80 transition-opacity duration-300">
                RevyroMeia
              </span>
            </Link>
            <p className="text-[14px] md:text-[15px] font-light leading-relaxed text-white/60 max-w-[280px]">
              Building digital authority through content, systems and automation.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="h-[1px] w-8 bg-white/10"></div>
              <span className="text-xs font-serif italic text-white/40">
                — An independent founder agency.
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-2 md:pl-4">
            <h3 className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/40">
              Navigation
            </h3>
            <ul className="flex flex-col gap-4">
              <li><AnimatedLink href="/" className="text-[13px] md:text-sm">Home</AnimatedLink></li>
              <li><AnimatedLink href="/case-studies" className="text-[13px] md:text-sm">Case Studies</AnimatedLink></li>
              <li><AnimatedLink href="/services" className="text-[13px] md:text-sm">Services</AnimatedLink></li>
              <li><AnimatedLink href="/book-a-call" className="text-[13px] md:text-sm">Book a Call</AnimatedLink></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-6 md:col-span-4 lg:col-span-3">
            <h3 className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/40">
              Services
            </h3>
            <ul className="flex flex-col gap-4">
              <li><AnimatedLink href="/services" className="text-[13px] md:text-sm">Social Media Management</AnimatedLink></li>
              <li><AnimatedLink href="/services" className="text-[13px] md:text-sm">Content Creation</AnimatedLink></li>
              <li><AnimatedLink href="/services" className="text-[13px] md:text-sm">AI Automation</AnimatedLink></li>
              <li><AnimatedLink href="/services" className="text-[13px] md:text-sm">Growth Partner</AnimatedLink></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-6 md:col-span-2 lg:col-span-2">
            <h3 className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/40">
              Social
            </h3>
            <ul className="flex flex-col gap-4">
              <li><AnimatedLink href="#" isExternal className="text-[13px] md:text-sm">Instagram</AnimatedLink></li>
              <li><AnimatedLink href="#" isExternal className="text-[13px] md:text-sm">LinkedIn</AnimatedLink></li>
              <li><AnimatedLink href="#" isExternal className="text-[13px] md:text-sm">YouTube</AnimatedLink></li>
              <li><AnimatedLink href="mailto:hello@revyromeia.com" isExternal className="text-[13px] md:text-sm">Email</AnimatedLink></li>
            </ul>
          </div>
        </div>

        {/* Large Wordmark */}
        <div className="mt-24 md:mt-32 w-full flex items-center justify-center overflow-hidden pointer-events-none select-none">
          <span className="font-serif text-[16.5vw] md:text-[14.8vw] leading-[0.72] tracking-tighter text-white/[0.03]">
            REVYROMEIA
          </span>
        </div>

        {/* Copyright Area */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] md:text-[13px] font-light text-white/40">
            &copy; {new Date().getFullYear()} RevyroMeia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <AnimatedLink href="/privacy-policy" className="text-[12px] md:text-[13px]">Privacy Policy</AnimatedLink>
            <AnimatedLink href="/terms-of-service" className="text-[12px] md:text-[13px]">Terms of Service</AnimatedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
