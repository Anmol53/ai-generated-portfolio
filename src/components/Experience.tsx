'use client';

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer III",
    company: "People Interactive (Shaadi.com)",
    duration: "Feb 2022 - Present",
    location: "Mumbai, IN",
    description: [
      "Full Stack Developer contributing to the development and enhancement of an in-house Marketing Automation Platform",
      "Designed features facilitating easy association and streamlined management of modules (campaigns, segments, templates)",
      "Improved user workflow and promoted a clutter-free environment through efficient module management",
      "Working with modern tech stack including React JS, Node JS, PHP, and AWS services"
    ],
    tags: ["React.js", "Node.js", "PHP", "AWS Kinesis", "AWS Lambda"]
  },
  {
    title: "Digital Specialist Engineer",
    company: "Infosys",
    duration: "Jan 2021 - Jan 2022",
    location: "Pune, IN",
    description: [
      "Worked as an ETL Developer focusing on data transformation and pipeline development",
      "Developed Azure pipelines and migrated data transformation logic from SSIS into DBT",
      "Implemented efficient data processing workflows using Azure services",
      "Collaborated with teams to ensure smooth data migration and transformation processes"
    ],
    tags: ["Azure Data Factory", "Azure Synapse", "DBT", "ETL", "Data Engineering"]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 ml-[7.5rem]" />
                
                <div className="md:grid md:grid-cols-[150px_1fr] gap-8">
                  {/* Date */}
                  <div className="text-gray-600 dark:text-gray-400 mb-2 md:mb-0 font-medium">
                    {experience.duration}
                  </div>

                  {/* Content */}
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="hidden md:block absolute -left-[2.18rem] top-3 w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-900" />
                    
                    <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-semibold mb-1">
                        {experience.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                        <div className="text-blue-600 dark:text-blue-400 font-medium">
                          {experience.company}
                        </div>
                        <div className="hidden sm:block text-gray-400">•</div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {experience.location}
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                        {experience.description.map((point, i) => (
                          <li key={i} className="pl-2">{point}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {experience.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
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