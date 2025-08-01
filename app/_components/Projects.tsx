"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import data from "../data/data.json";
import { Github } from "lucide-react";

export default function Projects() {
  const projects = data.projects;
  return (
    <section id="projects" className="py-20 bg-gray-200 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Personal Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={
                  project.title === "ExpensePro"
                    ? "/expensepro.png"
                    : project.title === "Netflix-GPT"
                    ? "/netflix.png"
                    : project.title === "Study-Hub-Library"
                    ? "/studyhub.png"
                    : "/medium.png"
                }
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Tech: {project.skills}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.live_demo}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Demo
                  </Link>
                  <Link
                    href={project.github_link}
                    className="text-blue-600  dark:text-blue-400 hover:underline flex items-center"
                  >
                    <Github /> Github
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
