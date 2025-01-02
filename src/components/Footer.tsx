import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Patrick Mwangi. All rights reserved</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="https://github.com/frashid17" className="hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/patrick-mwangi-d786" className="hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:frashid274@gmail.com" className="hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;