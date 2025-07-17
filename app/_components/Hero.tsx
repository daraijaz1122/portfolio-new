"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm Aijaz Ahmad Dar
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          A passionate Full Stack Developer creating innovative web solutions
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <Link href="https://github.com/username" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <Github className="mr-2" size={20} /> GitHub
          </Link>
          <Link href="https://linkedin.com/in/username" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <Linkedin className="mr-2" size={20} /> LinkedIn
          </Link>
          <Link href="/resume.pdf" className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            <FileText className="mr-2" size={20} /> Resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}