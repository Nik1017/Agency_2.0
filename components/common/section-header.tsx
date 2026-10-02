"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className = '' }: SectionHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col items-start text-left w-full z-10 relative ${className}`}
    >
      {/* Eyebrow */}
      <motion.div variants={itemVariants} className="mb-4">
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-mono font-bold opacity-60 max-w-full">
          {eyebrow}
        </span>
      </motion.div>

      {/* Main Heading */}
      <motion.h2 
        variants={itemVariants} 
        className="mb-5 font-serif text-5xl md:text-7xl lg:text-[80px] leading-[1.05] tracking-[-0.02em] max-w-[800px]"
      >
        {title}
      </motion.h2>

      {/* Supporting Text */}
      {description && (
        <motion.p 
          variants={itemVariants} 
          className="text-base md:text-lg font-sans font-light leading-relaxed opacity-60 max-w-[600px]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
