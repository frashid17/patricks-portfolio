import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const FeaturedProjects = () => {
  // Only show the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default FeaturedProjects;