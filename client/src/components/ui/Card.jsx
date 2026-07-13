import React from "react";

export default function Card({ children, className = "", hoverEffect = true, ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-200 shadow-sm transition-all duration-300 ${hoverEffect ? "hover:-translate-y-1 hover:shadow-md hover:border-slate-300" : ""
        } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
