const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux'],
      progress: 90
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs','Django'],
      progress: 85
    },
    {
      category: 'DevOps & Tools',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Linux'],
      progress: 80
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Technical Skills
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-lg p-6 hover:transform hover:scale-105 transition-all"
          >
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
            
            <div className="mb-4">
              <div className="h-2 bg-gray-700 rounded-full">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
            </div>
            
            <ul className="space-y-2">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-gray-400">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;