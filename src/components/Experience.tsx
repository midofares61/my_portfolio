import React from 'react';
import { experiences } from '../data/experiences';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Professional Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4">
            {experiences.map((experience, index) => (
              <div 
                key={experience.id} 
                className={`mb-12 ${index === experiences.length - 1 ? '' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-blue-400 rounded-full -left-[9px] mt-1"></div>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.position} at {experience.company}
                    </h3>
                    <span className="text-blue-600 dark:text-blue-400 font-medium mt-1 md:mt-0">
                      {experience.period}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Responsibilities</h4>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        {experience.responsibilities.map((responsibility, i) => (
                          <li key={i}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Key Achievements</h4>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        {experience.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-1">Team Composition</h4>
                    <p className="text-gray-700 dark:text-gray-300">{experience.teamSize}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;