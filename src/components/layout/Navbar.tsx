"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";
import { Home, FlaskConical, BookOpen, Lightbulb, User, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isLightBg, setIsLightBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Find elements behind the navbar
      const elements = document.elementsFromPoint(window.innerWidth / 2, 40);
      
      for (const el of elements) {
        // Skip the navbar itself
        if (el.closest('.z-\\[100\\]')) continue;

        const bg = window.getComputedStyle(el).backgroundColor;
        // Skip elements with transparent backgrounds
        if (bg === 'transparent' || bg === 'rgba(0, 0, 0, 0)') continue;

        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const r = parseInt(match[1], 10);
          const g = parseInt(match[2], 10);
          const b = parseInt(match[3], 10);
          const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
          // If luma is high, background is light
          setIsLightBg(luma > 150);
          break; // Stop searching once we find the solid background
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "/", label: "Home", icon: Home, filledOnActive: true },
    { href: "/research", label: "Research", icon: FlaskConical },
    { href: "/publications", label: "Publications", icon: BookOpen },
    { href: "/technologies", label: "Technologies", icon: Lightbulb },
    { href: "/about", label: "About", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  const textColor = isLightBg ? "text-espresso" : "text-cream";
  const textColorMuted = isLightBg ? "text-espresso/70 hover:text-espresso" : "text-cream/70 hover:text-cream";
  const strokeColor = isLightBg ? "stroke-espresso" : "stroke-cream";
  const indicatorColor = isLightBg ? "bg-espresso" : "bg-cream";

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100]">
      <div className={`backdrop-blur-xl rounded-full px-4 py-2 flex items-center gap-2 border transition-all duration-300 shadow-[0_8px_30px_color-mix(in_srgb,black_15%,transparent)] ${
        scrolled 
          ? "bg-white/10 border-white/20" 
          : "bg-white/5 border-white/10"
      }`}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative flex items-center gap-2.5 px-3 md:px-4 py-2 rounded-full font-semibold text-[14px] transition-colors ${
                isActive ? textColor : textColorMuted
              }`}
            >
              <Icon 
                size={18} 
                strokeWidth={isActive && link.filledOnActive ? 0 : 2} 
                fill={isActive && link.filledOnActive ? "currentColor" : "none"}
                className={isActive && !link.filledOnActive ? strokeColor : ""}
              />
              <span className="hidden md:block">{link.label}</span>
              {isActive && (
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full ${indicatorColor}`}></div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
