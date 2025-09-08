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
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
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
    <footer className="bg-gray-900 text-gray-300 py-10 ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Personal Message */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold mb-4">
            Built with ❤️ using React & Tailwind by Abdullah
          </h2>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-teal-400 transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold mb-4">Direct Contact</h2>
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-gray-300 hover:text-teal-400 transition duration-200"
            >
              <div className="text-teal-400 text-xl">
                <contact.icon />
              </div>
              <p className="text-sm">{contact.text}</p>
            </div>
          ))}
        </div>

     
      </div>

      {/* Social Icons */}
      <div className="mt-10 flex justify-center gap-6 text-teal-400 text-xl">
        {socialLink.map((link) => (
          <a
            key={link.link}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <link.icon />
          </a>
        ))}
      </div>
      <div>
        <p className="text-sm  flex justify-center mt-10 text-gray-400">
          © 2025 Abdullah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
