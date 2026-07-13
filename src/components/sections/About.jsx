import Card from "../ui/Card";
import { FaGraduationCap, FaCode, FaAward } from "react-icons/fa";

export default function AboutSection() {
  const stats = [
    { icon: FaCode, title: "Specialization", value: "Full Stack" },
    { icon: FaGraduationCap, title: "Education", value: "IT Bachelor" },
    { icon: FaAward, title: "Focus", value: "Clean & Fast Code" },
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-200">
      <div className="max-w-5xl mx-auto relative z-10 space-y-12">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
            About Me
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <Card key={idx} className="flex flex-col items-center text-center p-6 space-y-3" hoverEffect={true}>
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 text-teal-600 flex items-center justify-center text-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                <stat.icon />
              </div>
              <h3 className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.title}</h3>
              <p className="text-base text-slate-900 font-bold">{stat.value}</p>
            </Card>
          ))}
        </div>

        <Card className="p-8 md:p-10 space-y-6" hoverEffect={false}>
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Who Am I?
            </h3>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Hi, I'm <span className="text-teal-600 font-semibold">Abdullah Al-Gaadi</span>, a passionate full-stack developer based in Yemen. I love turning complex problems and creative ideas into smooth, beautiful, and highly functional digital experiences.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              I specialize in creating custom responsive dashboards and scalable APIs using <span className="text-indigo-600 font-semibold">React, Node.js, and SQL/NoSQL databases</span>. I focus heavily on writing clean, modular code, maximizing front-end performance, and creating intuitive UX layouts.
            </p>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              When I'm not coding, I'm typically expanding my technical knowledge, contributing to developer communities, or seeking new problems to solve.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex gap-8">
              <div>
                <span className="block text-2xl font-extrabold text-teal-600">4+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Years Studying</span>
              </div>
              <div>
                <span className="block text-2xl font-extrabold text-indigo-600">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Projects Built</span>
              </div>
            </div>

            <blockquote className="text-sm italic text-slate-500 border-l-2 border-teal-500 pl-4 py-1">
              "Great designs are built with logic and details."
            </blockquote>
          </div>
        </Card>
      </div>
    </section>
  );
}
