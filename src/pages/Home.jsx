import React from "react";
import { FiMail, FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 font-medium text-lg mb-2"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-4"
          >
            <span className="text-gradient">Muyyala Sai Kiran</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-semibold text-white mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Passionate about building scalable digital solutions. Specialized in React.js, Node.js, and modern web architecture.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center md:justify-start gap-4"
          >
            <a
              href="#contact"
              className="bg-gradient-primary text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all flex items-center gap-2"
            >
              Contact Me <FiMail />
            </a>
            <a
              href="/Muyyala_Saikiran_Resume.pdf"
              download
              className="border border-purple-500 text-purple-400 font-bold py-3 px-8 rounded-lg hover:bg-purple-500/10 transition-all flex items-center gap-2"
            >
              Download CV <FiDownload />
            </a>
          </motion.div>

          {/* Social Icons Placeholder in Reference Style */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            {/* Icons would go here */}
          </div>
        </div>

        {/* Profile Image with Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-r from-purple-500 to-blue-500 profile-glow">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0f0c29]">
              <img
                src="/Profile_Image.jpg"
                alt="Sai Kiran"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
