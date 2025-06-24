import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-zinc-900/90 z-50 backdrop-blur-md shadow-lg">
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo or Name */}
        <div className="text-white text-xl font-bold">
          Sai Kiran <span className="text-blue-400">Muyyala</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-white">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="relative cursor-pointer text-gray-300 hover:text-blue-400
                           before:absolute before:-bottom-1 before:left-0 
                           before:w-0 before:h-[2px] before:bg-blue-400 
                           before:transition-[width] before:duration-300 
                           hover:before:w-full transition-colors duration-200"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;