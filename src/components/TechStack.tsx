import React from 'react';
import { Code2, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const TechStack = () => {
  const technologies = [
    {
      category: 'Frontend',
      icon: <Layout className="w-8 h-8 mb-4 text-blue-400" />,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
      color: 'from-blue-400 to-cyan-400'
    },
    {
      category: 'Backend',
      icon: <Server className="w-8 h-8 mb-4 text-green-400" />,
      skills: ['Node.js', 'Python', 'Django', 'Express'],
      color: 'from-green-400 to-emerald-400'
    },
    {
      category: 'Database',
      icon: <Database className="w-8 h-8 mb-4 text-purple-400" />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
      color: 'from-purple-400 to-pink-400'
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="w-8 h-8 mb-4 text-orange-400" />,
      skills: ['React Native', 'TypeScript'],
      color: 'from-orange-400 to-red-400'
    },
    {
      category: 'DevOps',
      icon: <Terminal className="w-8 h-8 mb-4 text-yellow-400" />,
      skills: ['Git', 'Docker', 'CI/CD'],
      color: 'from-yellow-400 to-amber-400'
    },
    {
      category: 'Languages',
      icon: <Code2 className="w-8 h-8 mb-4 text-rose-400" />,
      skills: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS'],
      color: 'from-rose-400 to-red-400'
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="relative group p-6 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${tech.color}" />
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  {tech.icon}
                  <h3 className="text-xl font-semibold mb-4">{tech.category}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tech.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;