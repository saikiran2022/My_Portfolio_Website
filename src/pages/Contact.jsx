import React, { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiCopy, FiCheck } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";

const Contact = () => {
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#0f0c29]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">

          {/* Email Card */}
          <div className="relative group">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=msaikiran1722@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-4 cursor-pointer block"
            >
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <FiMail size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-blue-400 mb-1">Email</h3>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">msaikiran1722@gmail.com</p>
              </div>
            </a>

            {/* Copy Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleCopy("msaikiran1722@gmail.com", "email"); }}
              className="absolute top-8 right-8 text-gray-500 hover:text-blue-400 transition-colors p-2 z-10"
              title="Copy Email"
            >
              {copied === "email" ? <FiCheck /> : <FiCopy />}
            </button>

            <AnimatePresence>
              {copied === "email" && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-16 text-xs text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded pointer-events-none"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* Phone Card */}
          <div className="relative group">
            <a
              href="tel:+917331136071"
              className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-4 cursor-pointer block"
            >
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <FiPhone size={24} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-purple-400 mb-1">Phone</h3>
                <p className="text-gray-400 text-sm group-hover:text-white transition-colors">+91 7331136071</p>
              </div>
            </a>

            {/* Copy Button */}
            <button
              onClick={(e) => { e.stopPropagation(); handleCopy("+917331136071", "phone"); }}
              className="absolute top-8 right-8 text-gray-500 hover:text-purple-400 transition-colors p-2 z-10"
              title="Copy Phone Number"
            >
              {copied === "phone" ? <FiCheck /> : <FiCopy />}
            </button>

            <AnimatePresence>
              {copied === "phone" && (
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-4 right-16 text-xs text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded pointer-events-none"
                >
                  Copied!
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          {/* LinkedIn Card */}
          <a
            href="https://linkedin.com/in/muyyala-saikiran"
            target="_blank"
            rel="noreferrer"
            className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-4 group"
          >
            <div className="p-3 bg-cyan-500/10 rounded-lg text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
              <FiLinkedin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-1">LinkedIn</h3>
              <p className="text-gray-400 text-sm group-hover:text-white transition-colors">Connect with me</p>
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/saikiran2022"
            target="_blank"
            rel="noreferrer"
            className="bg-[#1c1a2e] p-8 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all flex items-start gap-4 group"
          >
            <div className="p-3 bg-pink-500/10 rounded-lg text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-colors">
              <FiGithub size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-pink-400 mb-1">GitHub</h3>
              <p className="text-gray-400 text-sm group-hover:text-white transition-colors">Explore my code</p>
            </div>
          </a>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-6">Let's build something amazing together!</p>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=msaikiran1722@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-12 rounded-lg shadow-lg hover:shadow-purple-500/30 hover:-translate-y-1 transition-all"
          >
            Send Me an Email
          </a>
        </div>

      </div>
    </section>
  );
};

export default Contact;