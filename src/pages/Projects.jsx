import React from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "Full-Stack Restaurant Management Dashboard",
      category: "Full Stack",
      image: "/restaurant_admin_dashboard_v2.png",
      description: "A high-performance full-stack dashboard designed to streamline operations with real-time analytics, secure authentication, and a premium dynamic UI for actionable insights.",
      tech: ["React 19", "Tailwind CSS v4", "Framer Motion", "Recharts", "Node.js", "Express.js", "MongoDB"],
      links: { demo: "#", code: "#" }
    },
    {
      title: "Personal Portfolio",
      category: "Web Design",
      image: "/portfolio_photo.png",
      description: "A professional portfolio website featuring a dark theme, gradient typography, and smooth animations.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      links: { demo: "#", code: "#" }
    },
    {
      title: "Weather App",
      category: "Application",
      image: "/weather_Image.jpg",
      description: "Real-time weather dashboard fetching data from open APIs to display forecasts and climate conditions.",
      tech: ["React.js", "OpenWeather API", "CSS3"],
      links: { demo: "#", code: "#" }
    },

    {
      title: "E-Commerce Platform",
      category: "Full Stack",
      image: "/shopyeasy.jpg",
      description: "Product-oriented platform with cart functionality, user profiles, and secure checkout simulation.",
      tech: ["MERN Stack", "Redux", "Stripe API"],
      links: { demo: "#", code: "#" }
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Personal & Academic <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400">
            Independent projects built to learn and explore different technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1c1a2e] rounded-xl overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all group">
              {/* Image Section */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-all z-10"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-white/5 text-gray-300 text-xs rounded border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a href={project.links.code} className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
                    <FiGithub /> Code
                  </a>
                  <a href={project.links.demo} className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
