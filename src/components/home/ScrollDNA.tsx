"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollDNA() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [dimensions, setDimensions] = useState({ w: 0, h: 0, vh: 0 });

  useEffect(() => {
    const update = () => {
      setDimensions({
        w: document.documentElement.clientWidth,
        h: document.documentElement.scrollHeight,
        vh: window.innerHeight
      });
    };
    update();
    window.addEventListener("resize", update);
    const observer = new ResizeObserver(update);
    observer.observe(document.body);
    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, []);

  // Map scroll progress to ensure the line is drawn down to the bottom of the viewport
  const initialProgress = dimensions.h > 0 ? Math.min(1, dimensions.vh / dimensions.h) : 0;
  const drawProgress = useTransform(smoothProgress, [0, 1], [initialProgress, 1]);

  if (dimensions.w === 0) return null;

  const w = dimensions.w;
  const h = dimensions.h;
  const vh = dimensions.vh; // Height of hero section
  const step = 20;
  
  let pathA = "";
  let pathB = "";
  let rungs = "";

  const macroAmplitude = w * 0.35; 
  const centerX = w / 2;
  const macroWavelength = 3000; 
  
  const dnaAmplitude = 25; 
  const dnaWavelength = 150; 

  for (let y = 0; y <= h + 100; y += step) {
    const macroX = centerX + macroAmplitude * Math.sin((y / macroWavelength) * Math.PI * 2);
    const offset = dnaAmplitude * Math.sin((y / dnaWavelength) * Math.PI * 2);
    
    const xA = macroX + offset;
    const xB = macroX - offset;

    if (y === 0) {
      pathA += `M ${xA} ${y} `;
      pathB += `M ${xB} ${y} `;
    } else {
      pathA += `L ${xA} ${y} `;
      pathB += `L ${xB} ${y} `;
    }
  }

  for (let y = 0; y <= h + 100; y += 75) {
    const macroX = centerX + macroAmplitude * Math.sin((y / macroWavelength) * Math.PI * 2);
    const offset = dnaAmplitude * Math.sin((y / dnaWavelength) * Math.PI * 2);
    const xA = macroX + offset;
    const xB = macroX - offset;
    rungs += `M ${xA} ${y} L ${xB} ${y} `;
  }

  return (
    <div 
      className="absolute inset-0 pointer-events-none z-[5] overflow-hidden opacity-10"
      style={{
        maskImage: 'linear-gradient(to bottom, transparent 0%, transparent calc(100vh - 150px), black calc(100vh + 150px))',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent calc(100vh - 150px), black calc(100vh + 150px))'
      }}
    >
      <svg 
        viewBox={`0 0 ${w} ${h}`} 
        width={w} 
        height={h} 
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--color-cream) 20%, transparent))" }}
      >
        <defs>
          <linearGradient id="dnaGradient" x1="0" y1="0" x2="0" y2={h} gradientUnits="userSpaceOnUse">
            {/* Hero (Dark) */}
            <stop offset={0} stopColor="var(--color-blush)" />
            <stop offset={vh} stopColor="var(--color-blush)" />
            
            {/* Glance (Light) */}
            <stop offset={vh} stopColor="var(--color-terracotta)" />
            <stop offset={vh * 1.5} stopColor="var(--color-terracotta)" />
            
            {/* Focus & Featured (Dark) */}
            <stop offset={vh * 1.5} stopColor="var(--color-blush)" />
            <stop offset={vh * 3.5} stopColor="var(--color-blush)" />
            
            {/* Current, Pubs, About (Light) */}
            <stop offset={vh * 3.5} stopColor="var(--color-terracotta)" />
            <stop offset={vh * 6.5} stopColor="var(--color-terracotta)" />
            
            {/* Contact (Dark) */}
            <stop offset={vh * 6.5} stopColor="var(--color-blush)" />
            <stop offset={h} stopColor="var(--color-blush)" />
          </linearGradient>
        </defs>

        {/* Faint background DNA */}
        <path d={pathA} fill="none" stroke="var(--color-cream)" strokeWidth="1" opacity="0.1" />
        <path d={pathB} fill="none" stroke="var(--color-cream)" strokeWidth="1" opacity="0.1" />
        <path d={rungs} fill="none" stroke="var(--color-cream)" strokeWidth="1" opacity="0.05" />
        
        {/* Animated Drawing DNA */}
        <motion.path 
          d={pathA} 
          fill="none" 
          stroke="url(#dnaGradient)" 
          strokeWidth="3" 
          style={{ pathLength: drawProgress }} 
        />
        <motion.path 
          d={pathB} 
          fill="none" 
          stroke="url(#dnaGradient)" 
          strokeWidth="3" 
          style={{ pathLength: drawProgress }} 
        />
        <motion.path 
          d={rungs} 
          fill="none" 
          stroke="url(#dnaGradient)" 
          strokeWidth="2" 
          style={{ pathLength: drawProgress }} 
          opacity={0.6}
        />
      </svg>
    </div>
  );
}
