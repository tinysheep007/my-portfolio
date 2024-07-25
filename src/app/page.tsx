import Image from 'next/image';
import projectData from './projectData';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Contact from './components/Contact';
import Experience from './components/Experience';

export default function Home() {
  return (
    <main id="top" className="flex flex-col items-center justify-center bg-gray-100">
      <header className="w-full bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-md sticky top-0 z-50">
        <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="text-xl font-bold">
            <a href='#top'>
              <span className="hidden sm:block">Zihe(Peter) Zhang</span>
              <span className="block sm:hidden">Peter Zhang</span>
            </a>
          </div>
          <ul className="flex space-x-4 justify-center">
            <li><a href="#about" className="text-gray-700 hover:text-blue-500">About</a></li>
            <li><a href="#skills" className="text-gray-700 hover:text-blue-500">Skills</a></li>
            <li><a href="#projects" className="text-gray-700 hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="w-full h-screen flex flex-col justify-center items-center text-center">
        <div className="flex justify-center">
          <Image src="/images/a.png" alt="Profile Picture Zihe Peter Zhang" width={150} height={150} className="rounded-full mb-4 transform transition duration-300 hover:scale-110" />
        </div>
        <div className="text-4xl font-bold mb-4">Hi! This is Zihe (Peter) Zhang</div>
        <div className="text-lg text-gray-600 mb-4">Software Engineer / Data Scientist</div>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
            <Image src="/images/github.png" alt="GitHub Zihe Peter Zhang" width={32} height={32} />
          </a>
          <a href="https://www.linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
            <Image src="/images/linkedin.jpg" alt="LinkedIn Zihe Peter Zhang" width={32} height={32} />
          </a>
        </div>
      </section>

      <About />
      <Skills />
      <Projects projects={projectData} />
      <Experience />
      <Contact />
      
    </main>
  );
}
