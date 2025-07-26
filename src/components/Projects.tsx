import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center mb-12">
          A selection of my most impactful Flutter projects across mobile and desktop platforms.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;