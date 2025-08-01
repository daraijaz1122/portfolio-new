"use client";
import { motion } from "framer-motion";
import data from "../data/data.json";
import { CourseDescription } from "./CourseDescription";

export default function Courses() {
  const devCourses = data["courses "];

  return (
    <section id="courses" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Courses & Certifications
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devCourses.map((course, index) => (
            <motion.div
              key={`course-${index}`} // Better key
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 flex flex-col"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-300">
                {course.title}
              </h3>

              <div className="flex-grow mb-4">
                <CourseDescription
                  description={course.description}
                  courseId={course.courseId}
                  key={course.courseId} // Unique identifier
                />
              </div>

              <a
                className="text-blue-600 underline hover:text-blue-400 text-lg mt-auto"
                href={
                  course.certificate === "Fullstack"
                    ? "/fullstack.png"
                    : "/react.webp"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
