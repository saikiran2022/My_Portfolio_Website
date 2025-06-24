import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects bg-zinc-900 text-white px-8 py-8 w-full m-0 ">
      <h2 className="text-3xl font-bold mb-6">
        My <span className="text-blue-400">Projects</span>
      </h2>

      <div className="mb-8">
        <p className="mb-6 leading-relaxed text-lg">
          A collection of projects showcasing my expertise in{" "}
          <span className="text-blue-400 font-medium">
            full-stack development
          </span>
          , from desktop applications to modern web solutions. Each project
          demonstrates different aspects of software development and
          problem-solving capabilities.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* ATM Simulator */}
        <div className="border-l-4 border-blue-400 pl-6 hover:bg-zinc-800 transition-colors duration-300 p-4 rounded-r-lg">
          <div className="mb-4">
            <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <img
                src="/shopyeasy.jpg"
                alt="shop easy website"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            E-Commerce Website
          </h3>
          …
        </div>

        {/* Weather Application */}
        <div className="border-l-4 border-blue-400 pl-6 hover:bg-zinc-800 transition-colors duration-300 p-4 rounded-r-lg">
          <div className="mb-4">
            <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <img
                src="/weather_Image.jpg"
                alt="Weather Dashboard"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            Weather Application
          </h3>
          …
        </div>

        {/* Portfolio Website */}
        <div className="border-l-4 border-blue-400 pl-6 hover:bg-zinc-800 transition-colors duration-300 p-4 rounded-r-lg">
          <div className="mb-4">
            <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <img
                src="/portfolio_photo.png"
                alt="Portfolio Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            Portfolio Website
          </h3>
          …
        </div>

        {/* Library Management System */}
        <div className="border-l-4 border-blue-400 pl-6 hover:bg-zinc-800 transition-colors duration-300 p-4 rounded-r-lg">
          <div className="mb-4">
            <div className="w-full h-48 bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
              <img
                src="/image_search_engine.png"
                alt="Image Search Engine"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-3 text-blue-400">
            Image Search Engine
          </h3>
          …
        </div>

      </div>

      <div className="mt-8 pt-6 border-t border-zinc-700">
        <p className="text-center text-gray-400">
          Each project reflects my commitment to{" "}
          <span className="text-blue-400">clean code</span>, user experience, and
          practical problem-solving
        </p>
      </div>
    </section>
  );
};

export default Projects;
