import Card from "../ui/Card";

export default function TechnicalSkills() {
  const skills = {
    Frontend: [
      { name: "React JS", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML & CSS", level: 95 },
    ],
    Backend: [
      { name: "Node.js & Express", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "MongoDB", level: 70 },
    ],
  };

  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
            Technical Arsenal
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Column */}
          <Card className="space-y-8 p-8" hoverEffect={false}>
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                F
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Frontend</h3>
            </div>

            <div className="space-y-6">
              {skills.Frontend.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between items-center text-sm font-semibold tracking-wide">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-teal-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 border border-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-teal-500 to-emerald-400 h-2.5 rounded-full transform origin-left group-hover:scale-x-105 transition-transform duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Backend Column */}
          <Card className="space-y-8 p-8" hoverEffect={false}>
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                B
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Backend</h3>
            </div>

            <div className="space-y-6">
              {skills.Backend.map((skill, index) => (
                <div key={index} className="space-y-2 group">
                  <div className="flex justify-between items-center text-sm font-semibold tracking-wide">
                    <span className="text-slate-700">{skill.name}</span>
                    <span className="text-indigo-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-100 border border-slate-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-indigo-500 to-blue-400 h-2.5 rounded-full transform origin-left group-hover:scale-x-105 transition-transform duration-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
