import { ArrowDown } from "lucide-react";
import Avatar from "./Avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-32">
        <div className="max-w-3xl mx-auto text-center">
          
          <Avatar 
            imageUrl="https://i.imgur.com/T82r4UG.png" 
            alt="Your Avatar"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Patrick Mwangi</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 animate-fade-in-delay">
            Software Engineer & UI/UX Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-2">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
