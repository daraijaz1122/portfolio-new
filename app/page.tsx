import Navbar from "./_components/Navbar";
import Hero from "./_components/Hero";
import Projects from "./_components/Projects";
import Experience from "./_components/Experience";
import Qualifications from "./_components/Qualifications";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import "./globals.css";
import Courses from "./_components/Courses";
import Contact from "./_components/Contact";
export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Qualifications />
      <Courses />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
