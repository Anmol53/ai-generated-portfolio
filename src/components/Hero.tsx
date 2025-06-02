'use client';

import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Hi, I&apos;m Anmol Agrawal 👋
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
            A passionate Software Developer crafting beautiful and functional web experiences.
            Currently focused on building responsive and scalable applications with modern technologies.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 