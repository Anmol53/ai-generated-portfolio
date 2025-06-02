"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiHashnode } from 'react-icons/si';

export function Hero() {
  const calculateExperience = () => {
    const startDate = new Date('2021-01-01');
    const today = new Date();
    const yearsDiff = today.getFullYear() - startDate.getFullYear();
    const monthsDiff = today.getMonth() - startDate.getMonth();
    let years = yearsDiff;
    
    if (monthsDiff < 0) {
      years--;
    }
    
    return years;
  };

  return (
    <section className="min-h-screen py-20 flex items-center bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-28 h-28 rounded-full overflow-hidden mb-8 mx-auto group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-100 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full" />
            <img
              src="https://avatars.githubusercontent.com/u/26030484?v=4"
              alt="Anmol Agrawal"
              className="w-full h-full object-cover rounded-full ring-2 ring-gray-700 group-hover:ring-gray-500 transition-all duration-300"
            />
          </motion.div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300 leading-normal py-2">
            Hi, I&apos;m Anmol Agrawal 👋
          </h1>

          <div className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-8 text-center h-[48px] sm:h-[56px] lg:h-[72px] flex items-center justify-center">
            <TypeAnimation
              sequence={[
                "Software Engineer III at Shaadi.com",
                2000,
                "Full Stack Developer",
                2000,
                "Building scalable web applications",
                2000,
                "Problem Solver",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="prose dark:prose-invert max-w-none mb-12">
            <p className="text-base sm:text-lg text-gray-400 text-center leading-relaxed max-w-3xl mx-auto">
              A passionate Software Developer with over {calculateExperience()} years of experience in
              building web applications. Currently working at People Interactive
              (Shaadi.com) where I contribute to developing and enhancing the
              Marketing Automation Platform. I specialize in full-stack
              development using modern technologies like React, Node.js, and
              cloud services.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-white hover:from-white hover:to-gray-100 text-gray-900 rounded-xl shadow-lg shadow-white/10 hover:shadow-white/20 transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base"
            >
              Get in Touch
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-xl hover:text-white ring-1 ring-gray-700 hover:ring-gray-600 shadow-lg shadow-black/20 hover:shadow-black/40 transform hover:scale-[1.02] transition-all duration-200 text-sm sm:text-base"
            >
              Download Resume
            </a>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6">
            <motion.a
              href="https://github.com/Anmol53"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-100 dark:text-gray-400 dark:hover:text-white transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
              aria-label="GitHub"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/anmol-53/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#0A66C2] dark:text-gray-400 dark:hover:text-[#0A66C2] transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="https://hashnode.com/@anmol53"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#2962FF] dark:text-gray-400 dark:hover:text-[#2962FF] transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
              aria-label="Hashnode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <SiHashnode className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:anmol.agrawal53@gmail.com"
              className="text-gray-600 hover:text-[#EA4335] dark:text-gray-400 dark:hover:text-[#EA4335] transition-colors p-2 hover:bg-gray-800/50 rounded-lg"
              aria-label="Email"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
