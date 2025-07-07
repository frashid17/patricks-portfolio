import { ArrowRight, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative flex items-center justify-center min-h-screen text-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-32 md:py-40">
        <div className="relative z-10 flex flex-col items-center">
          <img
            src="/avatar.jpg"
            alt="Patrick"
            className="w-32 h-32 rounded-full mb-8 border-4 border-blue-500 shadow-xl"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block">Hi, I'm Patrick</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Software Engineer & UI/UX Enthusiast
            </span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl">
            Crafting intuitive digital experiences through clean code and thoughtful design.
          </p>
          
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Link>
            
            <Link
              to="/resume"
              className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all"
            >
              <FileText className="mr-2" size={20} />
              View My CV
            </Link>
            
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 rounded-lg transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;