"use client"
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center rounded-lg">
            <Image className='rounded-full' src="/image01.jpeg" alt="Logo" width={60} height={60} />
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Projects</Link>
            <Link href="#experience" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Experience</Link>
            <Link href="#education" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Education</Link>
            <Link href="#courses" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Courses</Link>
            <Link href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">Skills</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}