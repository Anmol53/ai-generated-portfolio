'use client';

import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer III",
    company: "People Interactive (Shaadi.com)",
    duration: "Feb 2022 - Present",
    location: "Mumbai, IN",
    description: [
      "Developing and enhancing an in-house Marketing Automation Platform that segments users and delivers targeted communications across multiple channels (Email, SMS, Push Notifications).",
      "Implemented user segmentation using Elastic Search to efficiently query and filter user profiles based on various attributes.",
      "Built scalable data pipelines using AWS services (Lambda, Kinesis, EC2, ECS) to process and sync user data.",
      "Designed and optimized campaign management system for creating, scheduling, and tracking multi-channel communications.",
      "Utilized Redis for caching and MongoDB for storing campaign data, improving system performance and response times.",
      "Implemented comprehensive monitoring using ELK Stack for tracking campaign deliveries and user engagement metrics."
    ],
    tags: [
      "React.js",
      "Node.js",
      "Python",
      "AWS Lambda",
      "AWS Kinesis",
      "Elastic Search",
      "Redis",
      "MongoDB"
    ]
  },
  {
    title: "Digital Specialist Engineer",
    company: "Infosys",
    duration: "Jan 2021 - Jan 2022",
    location: "Pune, IN",
    description: [
      "Worked as an ETL Developer focusing on data transformation and pipeline development.",
      "Developed Azure pipelines and migrated data transformation logic from SSIS into DBT.",
      "Implemented efficient data processing workflows using Azure services.",
      "Collaborated with teams to ensure smooth data migration and transformation processes."
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
          
          <div className="relative">
            {/* Main timeline line - only visible on desktop */}
            <div className="absolute hidden md:block w-0.5 bg-gray-200 dark:bg-gray-800 h-full left-8 top-3" />
            
            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={`${experience.company}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex flex-col md:flex-row gap-4 md:gap-8 md:ml-0"
                >
                  {/* Timeline dot and date - only visible on desktop */}
                  <div className="hidden md:flex md:w-48 items-start">
                    <div className="relative flex items-center">
                      <div className="w-4 h-4 rounded-full border-2 border-blue-600 bg-white dark:bg-gray-900" />
                      <div className="w-8 h-[2px] bg-gray-200 dark:bg-gray-800 ml-2" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-medium">
                      {experience.duration}
                    </div>
                  </div>

                  {/* Mobile date */}
                  <div className="md:hidden text-gray-600 dark:text-gray-400 font-medium mb-2">
                    {experience.duration}
                  </div>

                  {/* Content card */}
                  <div className="flex-1">
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
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 