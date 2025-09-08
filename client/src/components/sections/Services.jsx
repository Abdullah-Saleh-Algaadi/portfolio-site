import {
  FaLaptopCode,
  FaPalette,
  FaTools,
  FaBolt,
  FaGlobe,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      name: "Frontend Development",
      description:
        "I use React to build dynamic and fast user interfaces, with a strong focus on user experience and seamless interaction.",
      Icon: FaLaptopCode,
    },
    {
      name: "Professional UI/UX Design",
      description:
        "I design responsive dashboards and websites that combine aesthetics with functionality, following modern design principles.",
      Icon: FaPalette,
    },
    {
      name: "Full-Stack Web Applications",
      description:
        "I integrate frontend and backend technologies like Node.js and MySQL to build scalable and powerful web applications.",
      Icon: FaTools,
    },
    {
      name: "Performance & Responsiveness",
      description:
        "I optimize website speed and user experience across devices, ensuring modern performance standards are met.",
      Icon: FaBolt,
    },
    {
      name: "Bilingual Support (Arabic / English)",
      description:
        "I build websites and applications that support both Arabic and English, with proper RTL/LTR layout and intuitive usability.",
      Icon: FaGlobe,
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-teal-500 text-white p-4 rounded-full text-3xl">
                  <service.Icon />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">
                {service.name}
              </h3>
              <p className="text-gray-300 text-sm text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
