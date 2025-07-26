import React from 'react';
import { skills } from '../data/skills';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillCategory, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-4px]"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-4">
                {skillCategory.category}
              </h3>
              
              <ul className="space-y-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;