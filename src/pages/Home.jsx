import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full bg-zinc-900  text-white  flex flex-col md:flex-row items-center gap-8 px-6 py-24  m-0 mt-6"
    >
      {/* Image */}
      <div className="flex justify-center md:justify-start w-full md:w-auto">
        <img
          src="/Profile_Image.jpg"
          alt="Sai kiran"
          className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-blue-400 shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 px-4 md:px-8">
        <h3 className="text-xl text-blue-400 mb-2">Hello, I'm</h3>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Muyyala Sai Kiran</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          A <span className="text-blue-400">Full Stack Developer</span>{" "}
          passionate about building digital solutions
        </h2>

        <div className="space-y-4 text-lg">
          <p>
            Computer Science graduate specializing in{" "}
            <span className="text-blue-400 font-medium">
              React.js,MERN stack and full-stack development
            </span>
            . I transform complex problems into elegant, efficient solutions
            through clean code and innovative thinking.
          </p>
          <p>
            With experience in both{" "}
            <span className="text-blue-400 font-medium">
              frontend and backend technologies
            </span>
            , I bridge the gap between user experience and technical
            implementation. My projects demonstrate strong problem-solving
            skills and attention to detail.
          </p>
          <p>
            Currently seeking opportunities to contribute my skills to
            meaningful projects while continuing to grow as a developer in a
            collaborative environment.
          </p>
        </div>

        <div className="mt-8 flex space-x-4">
          <a
            href="#contact"
            className="bg-blue-400 hover:bg-blue-500 text-zinc-900 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Muyyala_Saikiran_Resume.pdf"
            download
            className="border-2 border-blue-400 hover:bg-blue-400 hover:text-zinc-900 text-blue-400 font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
