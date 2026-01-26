import React from "react";
import {
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaGitAlt, FaGithub, FaDatabase, FaCloud, FaAws
} from "react-icons/fa";
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiPython, SiTypescript, SiSpringboot
} from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* About User Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed space-y-4">
            <p>
              <span className="text-blue-400 font-semibold">Software Engineer</span> with hands-on experience in building industrial and SaaS systems.
              B.Tech in Computer Science with expertise in <span className="text-purple-400">full-stack development</span>.
            </p>
            <p>
              Experienced in <span className="text-purple-400">end-to-end feature ownership</span>, from UI design to database architecture.
              Specialized in creating scalable web applications using the MERN stack.
            </p>
          </div>
        </div>

        {/* What I Bring Cards (Reference Style) */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">What I Bring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#1c1a2e] p-6 rounded-lg border border-white/5 flex items-start text-left hover:border-purple-500/50 transition-colors">
              <span className="text-blue-500 mr-2">▹</span>
              <p className="text-gray-300">End-to-end feature development: UI design, database design, and sprint delivery</p>
            </div>
            <div className="bg-[#1c1a2e] p-6 rounded-lg border border-white/5 flex items-start text-left hover:border-purple-500/50 transition-colors">
              <span className="text-blue-500 mr-2">▹</span>
              <p className="text-gray-300">Building scalable web applications with cleaner architecture and best practices.</p>
            </div>
          </div>
        </div>

        {/* Skills Section (Title) */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white">Technical Skills</h3>
        </div>

        {/* Categorized Skills Cards (Reference Style) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Frontend Card */}
          <div className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-blue-400 text-2xl"><FaReact /></div>
              <h4 className="text-xl font-semibold text-blue-400">Frontend</h4>
            </div>
            <ul className="space-y-2 text-gray-400 ml-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> React.js</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> HTML5 & CSS3</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> JavaScript (ES6+)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Tailwind CSS</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div> Bootstrap</li>
            </ul>
          </div>

          {/* Backend Card */}
          <div className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-purple-400 text-2xl"><FaNodeJs /></div>
              <h4 className="text-xl font-semibold text-purple-400">Backend</h4>
            </div>
            <ul className="space-y-2 text-gray-400 ml-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Node.js</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Express.js</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> RESTful APIs</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div> Python (Basics)</li>
            </ul>
          </div>

          {/* Databases Card */}
          <div className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-green-400 text-2xl"><FaDatabase /></div>
              <h4 className="text-xl font-semibold text-green-400">Databases</h4>
            </div>
            <ul className="space-y-2 text-gray-400 ml-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> MongoDB</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div> MySQL</li>
            </ul>
          </div>

          {/* Tools Card */}
          <div className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-cyan-400 text-2xl"><SiPostman /></div>
              <h4 className="text-xl font-semibold text-cyan-400">Tools</h4>
            </div>
            <ul className="space-y-2 text-gray-400 ml-2">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Git & GitHub</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> VS Code</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Postman</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div> Vercel/Netlify</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;