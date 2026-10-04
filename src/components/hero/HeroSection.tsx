"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Microscope, FileText, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] bg-terracotta overflow-hidden flex flex-col font-sans text-cream" >
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Faint Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-oxblood)_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.04]"></div>
        
        {/* Large Heart / Molecular abstract placeholders */}
        <div className="absolute top-[10%] right-[30%] w-[600px] h-[600px] bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-cream)_3%,transparent)_0%,transparent_70%)] rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-cream)_2%,transparent)_0%,transparent_70%)] rounded-full blur-2xl"></div>

        {/* Prominent ECG Line */}
        <svg className="absolute top-1/2 left-0 w-full h-[300px] -translate-y-1/2 opacity-40" preserveAspectRatio="none" viewBox="0 0 1440 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 150 H 350 L 365 120 L 380 180 L 400 60 L 420 220 L 440 130 L 450 150 H 950 L 965 120 L 980 180 L 1000 60 L 1020 220 L 1040 130 L 1050 150 H 1440" stroke="var(--color-cream)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Top Header Row (Logo) */}
      <div className="relative z-30 flex justify-between items-start w-full max-w-[1440px] mx-auto px-12 xl:px-16 pt-8 xl:pt-10 shrink-0">
        <div className="flex flex-col items-start">
          <h1 className="text-[18px] xl:text-[22px] font-bold text-cream tracking-wide mb-1">DR. PRIYANKA NP</h1>
          <p className="text-body-cream text-[11px] xl:text-[12px] font-medium mb-2 xl:mb-3">Lead Research Scientist</p>
          <div className="w-12 h-[2px] bg-cream"></div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 flex-1 flex flex-col md:flex-row w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 min-h-0">
        
        {/* Left Column (Text & Stats) */}
        <div className="flex flex-col w-full md:w-[45%] h-full pb-16 xl:pb-24 pt-6 xl:pt-10 relative z-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col mt-10 md:mt-0"
          >
            <div className="flex items-center gap-3 mb-4 xl:mb-6">
              <p className="text-cream text-[9px] xl:text-[10px] font-bold tracking-[0.15em]">CARDIOVASCULAR RESEARCH</p>
              <div className="w-1 h-1 rounded-full bg-cream hidden sm:block"></div>
              <p className="text-cream text-[9px] xl:text-[10px] font-bold tracking-[0.15em] hidden sm:block">BIOMEDICAL INNOVATION</p>
            </div>
            
            <h2 className="text-[2.5rem] sm:text-[3.2rem] xl:text-[4rem] 2xl:text-[4.5rem] leading-[1.05] font-bold text-cream mb-2 tracking-tight z-30">
              Advancing<br />Cardiovascular<br />Research
            </h2>
            <h3 className="text-[1.4rem] sm:text-[1.8rem] xl:text-[2.2rem] font-bold text-blush mb-4 xl:mb-6 tracking-tight z-30">
              Through Science & Innovation
            </h3>
            <p className="text-body-cream text-[13px] xl:text-[14px] leading-[1.7] max-w-[420px] mb-6 xl:mb-8 font-medium z-30">
              Researcher specializing in cardiovascular, renal and<br className="hidden xl:block"/>metabolic diseases, biomedical device development,<br className="hidden xl:block"/>and translational research.
            </p>
            
            <Button variant="primary" className="w-max px-6 py-3 xl:px-7 xl:py-3.5 text-[13px] xl:text-[14px] z-30">
              Explore My Research 
              <span className="text-lg font-light leading-none group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
            </Button>
          </motion.div>


        </div>

        {/* Center Portrait Image */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[700px] xl:w-[850px] h-[75%] md:h-[90%] pointer-events-none z-10"
        >
          <Image
            src="/scientist-portrait final.png"
            alt="Dr. Priyanka Portrait"
            fill
            className="object-contain object-bottom"
            priority
          />
        </motion.div>

        {/* Right Column (Focus Areas & Current Research) */}
        <div className="hidden md:flex flex-col items-end w-[45%] h-full ml-auto pt-8 xl:pt-16 pb-16 xl:pb-24 relative z-20">
          
          {/* Research Areas List */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 xl:gap-6 w-[240px] xl:w-[280px]"
          >
            {[
              "CARDIOVASCULAR\nRESEARCH",
              "MITOCHONDRIAL\nBIOLOGY",
              "BIOMEDICAL\nDEVICES",
              "TRANSLATIONAL\nRESEARCH"
            ].map((area, idx) => (
              <div key={idx} className="border-b border-blush/30 pb-3 xl:pb-4 relative group flex flex-col">
                <span className="text-cream font-bold text-[12px] xl:text-[13px] mb-1">0{idx + 1}</span>
                <p className="text-[10px] xl:text-[11px] font-bold text-blush tracking-widest leading-[1.6] whitespace-pre-line">{area}</p>
                {/* Decorative right dot aligned with border */}
                <div className="absolute right-0 bottom-[-2.5px] w-1 h-1 rounded-full bg-cream opacity-80"></div>
              </div>
            ))}
          </motion.div>


        </div>
      </div>
    </section>
  );
}
