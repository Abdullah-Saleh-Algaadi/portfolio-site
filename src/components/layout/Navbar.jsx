import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "About", id: "about" },
    { name: "Education", id: "education" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="flex gap-6 text-sm font-medium items-center">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="text-slate-300 hover:text-teal-400 hover:scale-105 active:scale-95 transition-all duration-200 tracking-wide relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-teal-400 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}

