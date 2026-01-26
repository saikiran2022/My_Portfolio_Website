import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="bg-black py-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

                    {/* Left: Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-gradient">Muyyala Saikiran</h3>
                        <p className="text-gray-400 text-sm mt-1">Full Stack Developer</p>
                    </div>

                    {/* Center: Links */}
                    <ul className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
                        <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                        <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                        <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
                        <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>

                    {/* Right: Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/saikiran2022"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 bg-[#1c1a2e] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-primary transition-all"
                        >
                            <FiGithub size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muyyala-saikiran"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 bg-[#1c1a2e] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-primary transition-all"
                        >
                            <FiLinkedin size={18} />
                        </a>
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=msaikiran1722@gmail.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-10 h-10 bg-[#1c1a2e] rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-primary transition-all"
                        >
                            <FiMail size={18} />
                        </a>
                    </div>
                </div>

                {/* Bottom: Copyright */}
                <div className="text-center pt-8 border-t border-white/5 text-gray-500 text-sm">
                    <p>
                        &copy; {new Date().getFullYear()} Muyyala Saikiran. Made with <span className="text-red-500">❤</span> using React & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
