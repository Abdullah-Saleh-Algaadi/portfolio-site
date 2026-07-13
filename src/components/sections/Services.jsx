import Card from "../ui/Card";
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
      color: "text-teal-600",
      bg: "bg-teal-50",
    },
    {
      name: "Professional UI/UX Design",
      description:
        "I design responsive dashboards and websites that combine aesthetics with functionality, following modern design principles.",
      Icon: FaPalette,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
    },
    {
      name: "Full-Stack Web Applications",
      description:
        "I integrate frontend and backend technologies like Node.js and MySQL to build scalable and powerful web applications.",
      Icon: FaTools,
      color: "text-violet-600",
      bg: "bg-violet-50",
    },
    {
      name: "Performance & Responsiveness",
      description:
        "I optimize website speed and user experience across devices, ensuring modern performance standards are met.",
      Icon: FaBolt,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      name: "Bilingual Support (AR / EN)",
      description:
        "I build websites and applications that support both Arabic and English, with proper RTL/LTR layout.",
      Icon: FaGlobe,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
            Services I Offer
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group flex flex-col items-center text-center p-8 space-y-6 hover:shadow-lg transition-all duration-300"
              hoverEffect={true}
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl ${service.bg} border border-slate-100 flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                <service.Icon className={service.color} />
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
