"use client"
import { motion } from 'framer-motion';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Tech Corp',
    period: '2023 - Present',
    description: 'Developed user interfaces using React and TypeScript.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2021 - 2023',
    description: 'Assisted in building web applications and fixing bugs.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Work Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
              <p className="text-gray-500 dark:text-gray-400 mt-2">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}