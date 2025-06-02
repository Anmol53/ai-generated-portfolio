'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Leafy Cafe",
    description: "A full-stack restaurant management system featuring an elegant UI, real-time order tracking, and comprehensive menu management. Built with modern web technologies and best practices for performance and user experience.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
    liveLink: "/leafy-cafe",
    githubLink: "https://github.com/Anmol53/leafy-cafe"
  },
  {
    title: "BMI Tracker",
    description: "A comprehensive health monitoring application that helps users track their Body Mass Index (BMI) over time. Features interactive data visualization, personalized health insights, and progress tracking with historical data analysis.",
    tags: ["React.js", "Chart.js", "CSS3", "LocalStorage"],
    liveLink: "/bmi-tracker",
    githubLink: "https://github.com/Anmol53/bmi-tracker"
  },
  {
    title: "Gradient Generator",
    description: "A sophisticated tool for creating and exploring beautiful color gradients with real-time preview. Features include CSS code generation, gradient angle control, color stop management, and a curated collection of preset gradients.",
    tags: ["JavaScript", "HTML5", "CSS3", "Color Theory"],
    liveLink: "/gradient-generator",
    githubLink: "https://github.com/Anmol53/gradient-generator"
  },
  {
    title: "Interactive Animations",
    description: "A showcase of advanced web animations including particle systems, fluid simulations, and interactive effects. Demonstrates mastery of modern web animation techniques and performance optimization.",
    tags: ["JavaScript", "CSS Animations", "Canvas API", "WebGL"],
    liveLink: "/bubble",
    githubLink: "https://github.com/Anmol53/interactive-animations"
  },
  {
    title: "CUBG",
    description: "Coder Unknowns Battle Grounds - An innovative competitive coding platform that gamifies programming challenges. Features real-time multiplayer competitions, interactive code execution, and a unique battle royale-style ranking system.",
    tags: ["React.js", "Node.js", "WebSocket", "MongoDB"],
    liveLink: "/cubg",
    githubLink: "https://github.com/Anmol53/cubg"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
            Featured Projects
          </h2>
          <div className="grid gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-900/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-800/50 backdrop-blur-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-gray-100 group-hover:to-white transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 text-sm font-medium bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-full ring-1 ring-gray-700 hover:shadow-md transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 sm:gap-6">
                    <a
                      href={project.liveLink}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-100 to-white hover:from-white hover:to-gray-100 text-gray-900 rounded-xl shadow-lg shadow-white/10 hover:shadow-white/20 transform hover:scale-[1.02] transition-all duration-200"
                    >
                      <span className="font-medium">View Live</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 rounded-xl hover:text-white ring-1 ring-gray-700 hover:ring-gray-600 shadow-lg shadow-black/20 hover:shadow-black/40 transform hover:scale-[1.02] transition-all duration-200"
                    >
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="font-medium">View Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 