import React from 'react';

type ButtonVariant = 'primary' | 'outline' | 'white' | 'dark';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

const base = "inline-flex items-center justify-center rounded-full px-8 py-3 font-medium transition-all duration-300 text-sm";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#F3E287] text-[#2D2926] hover:bg-[#E5D474]",
  outline: "border border-[#2D2926] text-[#2D2926] hover:bg-[#2D2926] hover:text-[#F9F7F2]",
  white: "bg-white text-[#2D2926] hover:bg-[#F9F7F2]",
  dark: "bg-[#8F9A80] text-white hover:bg-[#7a856a]",
};

export default function Button({ children, className = '', variant = 'primary' }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}
