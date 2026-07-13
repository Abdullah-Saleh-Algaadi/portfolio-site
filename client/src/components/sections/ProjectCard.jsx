import Card from "../ui/Card";
import Button from "../ui/Button";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ projects }) {
  return (
    <section className="relative bg-slate-50 text-slate-900 py-24 px-6 overflow-hidden border-t border-slate-200">
      <div className="max-w-6xl mx-auto relative z-10 space-y-16">
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-indigo-600">
            Featured Projects
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-teal-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group flex flex-col p-0 overflow-hidden h-full border border-slate-200 bg-white"
              hoverEffect={true}
            >
              {/* Image Container with Zoom effect */}
              <div className="h-48 overflow-hidden relative border-b border-slate-200">
                <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow justify-between space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors duration-300">
                    {project.name}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges & CTA */}
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.split(",").map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-50 border border-slate-200 text-slate-600 text-xs px-2.5 py-1 rounded-md font-medium"
                      >
                        {t.trim()}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.gitHubLike}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                      <FaGithub className="text-lg" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
