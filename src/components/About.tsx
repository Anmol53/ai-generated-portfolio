'use client';

import { motion } from "framer-motion";

const skills = [
  { 
    name: "Frontend", 
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"] 
  },
  { 
    name: "Backend", 
    items: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"] 
  },
  { 
    name: "Additional Skills", 
    items: ["Data Structures", "Algorithms", "Problem Solving", "Technical Writing"] 
  }
];

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="flex items-center text-gray-600 dark:text-gray-400">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Mumbai, India
            </div>
          </div>
          
          <div className="prose dark:prose-invert mb-12">
            <p className="text-lg mb-4">
              I am a Full Stack Developer with expertise in the MERN stack, passionate about creating
              efficient and scalable web applications. With a strong foundation in both frontend and
              backend development, I specialize in building responsive and user-friendly interfaces
              while ensuring robust server-side implementations.
            </p>
            <p className="text-lg mb-4">
              My journey in technology is complemented by my commitment to sharing knowledge through
              technical writing. I maintain a collection of comprehensive guides on React, JavaScript,
              HTML, and CSS concepts, helping other developers learn and grow.
            </p>
            <p className="text-lg">
              I am also dedicated to continuous learning and problem-solving, actively participating
              in coding challenges on platforms like LeetCode, HackerRank, and InterviewBit to
              enhance my algorithmic thinking and coding skills.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((category) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg"
                >
                  <h4 className="text-lg font-semibold mb-4">{category.name}</h4>
                  <ul className="space-y-2">
                    {category.items.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center text-gray-700 dark:text-gray-300"
                      >
                        <svg
                          className="w-5 h-5 mr-2 text-blue-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg"
          >
            <h3 className="text-xl font-bold mb-4">Technical Writing & Resources</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I maintain a collection of in-depth technical guides and conceptual questions covering:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["React.js", "JavaScript", "HTML", "CSS"].map((topic) => (
                <div
                  key={topic}
                  className="bg-white dark:bg-gray-800 p-3 rounded text-center text-sm font-medium"
                >
                  {topic}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 