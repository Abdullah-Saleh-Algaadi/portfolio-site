import React from "react";

export default function TechnicalSkills() {
  const technicalSkills = {
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5/CSS3", level: 95 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Redux & Context API", level: 80 },
    ],
    backend: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "APIs", level: 85 },
      { name: "MongoDB", level: 85 },
    ],
  };

  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">
              Frontend Development
            </h3>
            <div className="space-y-5">
              {technicalSkills.frontend.map((skill, index) => (
                <div key={index}>
                  {/* Skill Name & Level */}
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-teal-300 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-teal-400">
              Backend & Databases
            </h3>
            <div className="space-y-5">
              {technicalSkills.backend.map((skill, index) => (
                <div key={index}>
                  {/* Skill Name & Level */}
                  <div className="flex justify-between mb-2 text-sm">
                    <span className="text-gray-200">{skill.name}</span>
                    <span className="text-teal-300 font-medium">
                      {skill.level}%
                    </span>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
