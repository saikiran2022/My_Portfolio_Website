import React from "react";

const About = () => {
  return (
    <section id="about" className="about bg-zinc-900 text-white px-8 py-8 w-full m-0 ">
      <h2 className="text-3xl font-bold mb-6">About <span className="text-blue-400">Me</span></h2>
      
      <div className="mb-8">
        <p className="mb-4 leading-relaxed text-lg">
          A passionate <span className="text-blue-400 font-medium">B.Tech graduate in Computer Science</span> with expertise in full-stack development and problem-solving. I specialize in creating efficient, scalable applications with clean code architecture and intuitive user interfaces.
        </p>
        <p className="leading-relaxed text-lg">
          With hands-on experience in both frontend and backend technologies, I bridge the gap between user needs and technical implementation. My approach combines technical precision with creative problem-solving to deliver impactful digital solutions.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">What I Bring</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">▹</span>
            <span>Full-stack development expertise from concept to deployment</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">▹</span>
            <span>Strong foundation in data structures and algorithms</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">▹</span>
            <span>Experience with both relational and NoSQL databases</span>
          </li>
          
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Technical Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Frontend</h4>
            <ul className="space-y-1">
              <li>React.js</li>
              <li>HTML5 & CSS3</li>
              <li>JavaScript (ES6+)</li>
              <li>Bootstrap/Tailwind</li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Backend</h4>
            <ul className="space-y-1">
              
              <li>Node.js/Express.js</li>
              <li>RESTful APIs</li>
              
            </ul>
          </div>
          <div>
            <h4 className="text-blue-400 font-medium mb-2">Tools & More</h4>
            <ul className="space-y-1">
              <li>Git & GitHub</li>
              <li>MySQL/MongoDB</li>
              <li>Postman</li>
              
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;