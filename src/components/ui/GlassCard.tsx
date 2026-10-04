import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  variant?: "dark" | "light";
  className?: string;
  bgClass?: string;
}

export default function GlassCard({ children, variant = "dark", className = "", bgClass }: GlassCardProps) {
  const baseClasses = "backdrop-blur-md border border-blush/30 rounded-[2rem] p-8 transition-colors group";
  
  // Default backgrounds if bgClass is not provided
  const defaultBg = {
    dark: "bg-terracotta/70",
    light: "bg-offwhite/70"
  };

  const textClasses = {
    dark: "text-cream",
    light: "text-espresso"
  };

  const hoverClasses = {
    dark: "hover:bg-terracotta/80",
    light: "hover:bg-offwhite/80"
  };

  const activeBg = bgClass || defaultBg[variant];

  return (
    <div className={`${baseClasses} ${activeBg} ${textClasses[variant]} ${hoverClasses[variant]} ${className}`}>
      {children}
    </div>
  );
}
