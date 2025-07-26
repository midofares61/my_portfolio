import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="h-56 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-blue-600 dark:text-blue-400 font-medium mb-4 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {expanded ? 'Show less' : 'Read more'} 
          <ArrowRight size={16} className={`ml-1 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
        </button>
        
        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-in">
            <div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Technical Challenges</h4>
              <p className="text-gray-700 dark:text-gray-300">{project.challenges}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Role</h4>
              <p className="text-gray-700 dark:text-gray-300">{project.role}</p>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Key Contributions</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                {project.contributions.map((contribution, index) => (
                  <li key={index}>{contribution}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.live && (
            <a 
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition-colors"
            >
              <ExternalLink size={16} className="mr-1" /> View Live
            </a>
          )}
          
          {project.links.github && (
            <a 
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-md transition-colors"
            >
              <Github size={16} className="mr-1" /> GitHub
            </a>
          )}
          
          {project.links.appStore && (
            <a 
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium rounded-md transition-colors"
            >
              App Store
            </a>
          )}
          
          {project.links.playStore && (
            <a 
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white text-sm font-medium rounded-md transition-colors"
            >
              Play Store
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;