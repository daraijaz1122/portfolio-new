"use client"
import { motion } from 'framer-motion';
import data from '@/app/data/data.json';


export default function Skills() {
  const skills = data.skills;
  return (
    <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-600 text-white px-4 py-2 rounded-full"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}