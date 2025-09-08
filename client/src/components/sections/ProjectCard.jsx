import { Link } from "react-router-dom";

export default function ProjectCard({ projects }) {
  return (
    <section className="bg-gray-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12">
          Featured Projects
          </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <p className="text-gray-400 text-xs mb-6">
                  <span className="bg-purple-600/30 text-purple-300 px-3 py-1 rounded-full text-xs">
                    Tech:
                  </span>{" "}
                  {project.tech}
                </p>

                {/* Button */}
                <div className="p-6 flex flex-col justify-between h-full">
                  {/* ... */}
                  <Link to={project.gitHubLike}>
                    <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium px-4 py-2 rounded-md transition duration-200 w-full">
                      View
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
