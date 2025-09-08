import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowHeader(false); // Scroll down → hide
      } else {
        setShowHeader(true); // Scroll up → show
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="h-14 w-14 rounded-full object-cover ring-2 ring-teal-500 shadow-md"
          />
          <span className="text-2xl font-extrabold tracking-tight">
            Abdullah.
          </span>
        </div>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
