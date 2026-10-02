"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-editorial",
      scrolled 
        ? "bg-brand-dark/80 backdrop-blur-md py-4 shadow-sm border-b border-white/5" 
        : "bg-transparent py-6"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left: Logo */}
        <Link 
          href="/" 
          className="font-serif font-bold text-2xl tracking-tighter text-white hover:opacity-80 transition-opacity"
        >
          RevyroMeia
        </Link>

        {/* Right: Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 text-sm font-medium text-white/90">
            <Link href="/services" className="hover:text-brand-cyan transition-colors">
              Services
            </Link>
            <Link href="/case-studies" className="hover:text-brand-cyan transition-colors">
              Case Studies
            </Link>
          </div>
          
          <Link 
            href="/book-a-call" 
            className="bg-white text-brand-dark px-6 py-2.5 rounded-pill text-sm font-semibold hover:scale-105 transition-transform duration-300 ease-editorial"
          >
            Book a Call
          </Link>
        </nav>

        {/* Right: Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-[100vh] bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 md:hidden flex flex-col px-6 py-8 gap-6 transition-all">
          <Link 
            href="/services" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-brand-cyan transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/case-studies" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-brand-cyan transition-colors"
          >
            Case Studies
          </Link>
          <Link 
            href="/book-a-call" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-white text-brand-dark px-8 py-4 rounded-pill text-center font-semibold mt-4 text-lg"
          >
            Book a Call
          </Link>
        </div>
      )}
    </header>
  );
}
