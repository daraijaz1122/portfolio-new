import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>© 2025 Aijaz. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/daraijaz1122" className="hover:text-blue-400">
            <Github size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/aijaz-ahmadd" className="hover:text-blue-400">
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}