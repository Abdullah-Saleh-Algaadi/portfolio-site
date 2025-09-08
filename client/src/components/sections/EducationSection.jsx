import React from "react";

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
    <section className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-teal-400 text-center mb-16">
          Education
        </h1>

        <div className="space-y-6">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Degree & Period */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h2 className="text-xl font-semibold text-white">
                  {edu.degree}
                </h2>
                <span className="text-sm text-teal-400 font-medium mt-1 md:mt-0">
                  {edu.period}
                </span>
              </div>

              {/* Institution */}
              <h3 className="text-lg text-teal-300 font-medium mb-2">
                {edu.institution}
              </h3>

              {/* Focus */}
              <p className="text-gray-300 text-sm mb-3">{edu.focus}</p>

              {/* Honors (if exists) */}
              {edu.honors && (
                <p className="text-sm italic text-gray-400 border-l-4 border-teal-500 pl-3">
                  {edu.honors}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
