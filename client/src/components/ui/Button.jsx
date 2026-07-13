import React from "react";

export default function Button({ children, className = "", variant = "primary", ...props }) {
  const baseStyles = "px-6 py-2.5 rounded-lg font-medium transition-all duration-300 transform active:scale-95 cursor-pointer text-sm md:text-base flex items-center justify-center gap-2";

  const variants = {
    primary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-900/10 hover:shadow-lg hover:-translate-y-0.5",
    secondary: "bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-sm hover:border-slate-300 hover:-translate-y-0.5",
    ghost: "text-slate-600 hover:text-slate-900 px-4 py-2 hover:bg-slate-100",
  };

  return (
    <button className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} {...props}>
      {children}
    </button>
  );
}
