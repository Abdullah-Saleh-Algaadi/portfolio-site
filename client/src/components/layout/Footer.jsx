import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Footer() {
  const navLinks = [
    { name: "Home", path: "#about" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const socialLink = [
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaTwitter, link: "https://twitter.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaLinkedinIn, link: "https://linkedin.com" },
    { icon: FaGithub, link: "https://github.com" },
    { icon: FaWhatsapp, link: "https://wa.me/967730541213" },
  ];

  const contacts = [
    { icon: FaEnvelope, text: "abdullahsalehali46@gmail.com" },
    { icon: FaWhatsapp, text: "+967730541213" },
    { icon: FaPhone, text: "+967730541213" },
  ];

  return (
    <footer className="relative bg-slate-50 text-slate-600 py-16 border-t border-slate-200 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Personal Message */}
        <div className="text-center md:text-left space-y-4">
          <span className="text-xl font-bold tracking-tight text-slate-900">
            Abdullah.
          </span>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto md:mx-0">
            Designing and developing fast, responsive, and aesthetically outstanding modern web solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-slate-900 uppercase mb-4">Navigation</h2>
          <ul className="space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-sm hover:text-teal-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-sm font-semibold tracking-wider text-slate-900 uppercase mb-4">Direct Contact</h2>
          <div className="space-y-3 flex flex-col items-center md:items-start">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-slate-500 hover:text-teal-600 transition-colors duration-200 group"
              >
                <div className="text-teal-500 text-lg group-hover:scale-110 transition-transform duration-200">
                  <contact.icon />
                </div>
                <p className="text-sm">{contact.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
        {/* Copyright */}
        <p className="text-xs text-slate-500 order-2 sm:order-1">
          © {new Date().getFullYear()} Abdullah. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 order-1 sm:order-2">
          {socialLink.map((link, idx) => (
            <a
              key={idx}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-600 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-transparent hover:scale-110 transition-all duration-300 shadow-sm"
            >
              <link.icon className="text-base" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
