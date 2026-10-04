import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "solid" | "glass";
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = "primary", className = "", onClick }: ButtonProps) {
  const baseClasses = "flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:scale-105 cursor-pointer";
  
  const variantClasses = {
    primary: "bg-cream text-terracotta hover:bg-blush",
    secondary: "bg-terracotta/70 backdrop-blur-md border border-blush/30 text-cream hover:bg-terracotta/90",
    accent: "bg-gold text-espresso hover:bg-gold/80",
    solid: "bg-terracotta text-cream hover:bg-oxblood",
    glass: "bg-white/5 backdrop-blur-md border border-blush/30 text-cream hover:bg-white/10"
  };

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </button>
  );
}
