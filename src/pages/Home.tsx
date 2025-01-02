import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechStack from '../components/TechStack';
import FeaturedProjects from '../components/FeaturedProjects';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="tech-stack">
        <TechStack />
      </section>

      <section id="featured-projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <FeaturedProjects />
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              View All Projects
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>
    </main>
  );
};

export default Home;