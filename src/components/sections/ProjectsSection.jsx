//

import ProjectCard from "./ProjectCard";
import busBooking from "../../assets/busBooking.png";
import portfolio from "../../assets/portfolio.png";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Bus Booking System",
      description:
        "The Bus Booking System is a modern, full-stack web application designed to streamline the process of reserving bus tickets online. Built with React for the frontend and Node.js/Express for the backend, this system offers a seamless, user-friendly experience for travelers while empowering administrators with powerful management and analytical tools.",
      tech: "React, Node, Express, Tailwind",
      image: busBooking,
      gitHubLike: "https://github.com/Abdullah-Saleh-Algaadi/Bus-Booking",
    },
    {
      name: "Portfolio",
      description:
        "The Bus Booking System is a modern, full-stack web application designed to streamline the process of reserving bus tickets online. Built with React for the frontend and Node.js/Express for the backend, this system offers a seamless, user-friendly experience for travelers while empowering administrators with powerful management and analytical tools.",
      tech: "React, Node, Express, Tailwind",
      image: portfolio,
      gitHubLike: "https://github.com/Abdullah-Saleh-Algaadi/portfolio-site",
    },
    {
      name: "Bus Booking System",
      description:
        "The Bus Booking System is a modern, full-stack web application designed to streamline the process of reserving bus tickets online. Built with React for the frontend and Node.js/Express for the backend, this system offers a seamless, user-friendly experience for travelers while empowering administrators with powerful management and analytical tools.",
      tech: "React, Node, Express, Tailwind",
      image: busBooking,
      gitHubLike: "https://github.com/Abdullah-Saleh-Algaadi/Bus-Booking",
    },
  ];
  return (
    <>
      <section>
        <div>
          <ProjectCard projects={projects} />
        </div>
      </section>
    </>
  );
}
