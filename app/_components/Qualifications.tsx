"use client"
import { motion } from 'framer-motion';

const qualifications = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Example',
    year: '2017 - 2021',
  },
  {
    degree: 'Web Development Bootcamp',
    institution: 'Tech Academy',
    year: '2020',
  },
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Qualifications
        </motion.h2>
        <div className="space-y-8">
          {qualifications.map((qual, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-xl font-semibold">{qual.degree}</h3>
              <p className="text-gray-600 dark:text-gray-300">{qual.institution} | {qual.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}