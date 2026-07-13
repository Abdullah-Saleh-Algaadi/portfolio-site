import React from "react";
import Card from "../ui/Card";

export default function EducationSection() {
  const education = [
    {
      id: 1,
      institution: "Sana'a University",
      degree: "Bachelor’s in Information Technology",
      period: "2021 – 2025",
      focus: "Web Development & Networking",
      honors: "Graduated with Honors – GPA: 3.8/4.0",
    },
    {
      id: 2,
      institution: "Udemy",
      degree: "Full-Stack Web Development Certificate",
      period: "2025",
      focus: "React, Node.js, MongoDB",
    },
  ];

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-slate-200">
      <div className="max-w-4xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
            Education Timeline
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-slate-300 ml-4 md:ml-32 space-y-12">
          {education.map((edu) => (
            <div key={edu.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline marker */}
              <div className="absolute -left-[9px] top-1.5 w-4.5 h-4.5 rounded-full bg-white border-2 border-teal-500 flex items-center justify-center group-hover:border-indigo-500 transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 group-hover:bg-indigo-500 transition-colors duration-300" />
              </div>

              {/* Date badge on left for desktop */}
              <div className="hidden md:block absolute -left-36 top-1 w-24 text-right">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 shadow-sm px-2.5 py-1 rounded-md">
                  {edu.period}
                </span>
              </div>

              {/* Content card */}
              <Card className="p-6 space-y-3 relative overflow-hidden" hoverEffect={true}>
                {/* Glow bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-teal-400 to-indigo-500" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                  <div>
                    <span className="md:hidden inline-block text-xs font-semibold uppercase tracking-wider text-teal-600 mb-2">
                      {edu.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium mt-1">{edu.institution}</p>
                  </div>
                </div>

                <p className="text-slate-500 text-sm leading-relaxed">{edu.focus}</p>

                {edu.honors && (
                  <div className="text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 px-3 py-2 rounded-lg mt-2 inline-block">
                    {edu.honors}
                  </div>
                )}
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
