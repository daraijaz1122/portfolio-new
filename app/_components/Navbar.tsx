"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className=" rounded-lg ">
            <Image
              className="rounded-full "
              src="/image01.jpeg"
              alt="Logo"
              width={60}
              height={60}
            />
          </div>
          <div className="flex gap-8">
            <div className=" items-center text-lg space-x-4 hidden md:flex  ">
              <Link
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#education"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors"
              >
                Education
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="#skills"
                className="text-gray-700 dark:text-gray-300 hover:text-cyan-600 transition-colors "
              >
                Skills
              </Link>
            </div>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 cursor-pointer "
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
