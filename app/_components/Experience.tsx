"use client"
import { motion } from 'framer-motion';
import data from "../data/data.json";


export default function Experience() {
 
  const { experience } = data;
  const finalExpData = experience[0];
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
          
            <motion.div
              
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5,  }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-600 dark:text-gray-300">{finalExpData.role}</h3>
              <p className="text-gray-600 text-xl font-semibold dark:text-gray-300">{finalExpData.company} | {finalExpData.duration}</p>
           
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
              {finalExpData.description.split('\n').map((line, i) => (
                line.startsWith('1.') || line.startsWith('2.') ? (<p key={i} className='text-lg  text-gray-600 dark:text-gray-300 font-semibold'>{ line}</p>):
                <li className='text-lg' key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
         
        </div>
      </div>
    </section>
  );
}