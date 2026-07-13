import { useState, useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!isMenuOpen) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowHeader(false);
        } else {
          setShowHeader(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl rounded-2xl backdrop-blur-md bg-white/70 text-slate-900 shadow-sm border border-slate-200/60 z-50 transition-all duration-300 ${showHeader ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0"
          }`}
      >
        <div className="mx-auto px-6 py-3 flex justify-between items-center">
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-slate-200 shadow-sm transition-transform duration-300 hover:scale-105"
            />
            <span className="text-xl font-bold tracking-tight text-slate-800">
              Abdullah.
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-slate-600 hover:text-slate-900 hover:scale-105 active:scale-95 transition-all duration-200 tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-600 hover:text-slate-900 transition-colors duration-200 p-2 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <div
        className={`fixed inset-0 z-40 bg-white/90 backdrop-blur-md transition-all duration-300 md:hidden ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4 text-center shadow-xl transition-all duration-300 transform ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-slate-600 hover:text-slate-900 active:scale-95 transition-all duration-200 py-2.5 text-base font-semibold border-b border-slate-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
