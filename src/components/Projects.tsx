'use client';

import { motion } from "framer-motion";

const projects = [
  {
    title: "Leafy Cafe",
    description: "A modern web application for a cafe, featuring an interactive menu, online ordering system, and responsive design.",
    tags: ["React.js", "Node.js", "MongoDB", "Express.js"],
    link: "/leafy-cafe"
  },
  {
    title: "BMI Tracker",
    description: "A health monitoring application that helps users track their Body Mass Index (BMI) over time with visualizations.",
    tags: ["React.js", "Chart.js", "CSS3"],
    link: "/bmi-tracker"
  },
  {
    title: "Gradient Generator",
    description: "An interactive tool for creating and exploring beautiful color gradients with real-time preview and CSS code generation.",
    tags: ["JavaScript", "HTML5", "CSS3"],
    link: "/gradient-generator"
  },
  {
    title: "Interactive Animations",
    description: "A collection of creative web animations including Bubbles and Smoke effects, showcasing advanced CSS and JavaScript techniques.",
    tags: ["JavaScript", "CSS Animations", "Canvas API"],
    link: "/bubble"
  },
  {
    title: "CUBG",
    description: "Coder Unknowns Battle Grounds - An interactive coding challenge platform with gamification elements.",
    tags: ["React.js", "Node.js", "WebSocket"],
    link: "/cubg"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <a href={project.link} className="block p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {project.description}
                      </p>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 