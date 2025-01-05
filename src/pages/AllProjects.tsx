import ProjectCard from '../components/ProjectCard';
import Exhibitions from '../components/Exhibitions';
import { projects } from '../data/projects';

const AllProjects = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            All Projects
          </span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <Exhibitions />
      </div>
    </div>
  );
};

export default AllProjects;