const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Developer workspace"
            className="rounded-lg shadow-2xl"
          />
        </div>
        
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          
          <p className="text-gray-300 mb-6">
            As a Software Engineer with a passion for UI/UX design, I blend technical expertise with creative design thinking
            to build exceptional digital experiences. I focus on creating intuitive, user-centered solutions that solve real-world
            problems while maintaining clean, efficient code.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Development</h3>
              <ul className="space-y-2 text-gray-400">
                <li>React.js</li>
                <li>Node.js</li>
                <li>TypeScript</li>
                <li>Python</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Design</h3>
              <ul className="space-y-2 text-gray-400">
                <li>UI/UX Design</li>
                <li>Responsive Design</li>
                <li>User Research</li>
                <li>Prototyping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;