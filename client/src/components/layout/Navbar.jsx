// src/components/Navbar.jsx
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
    <nav className="flex gap-8 text-sm font-medium">
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className="text-gray-300 hover:text-teal-400 transition duration-200"
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
