import React from 'react';
import { education, certifications } from '../data/education';
import { Award, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Education & Certifications</h2>
        
        <div className="max-w-3xl mx-auto grid gap-12">
          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Academic Education</h3>
            <div className="space-y-6">
              {education.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">{item.degree}</h4>
                  <p className="text-gray-700 dark:text-gray-300 mt-2">{item.institution}</p>
                  <p className="text-blue-600 dark:text-blue-400 mt-1">{item.year}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map(cert => (
                <div 
                  key={cert.id} 
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start">
                    <Award className="text-blue-500 dark:text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{cert.issuer} • {cert.year}</p>
                      
                      {cert.url && (
                        <a 
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center mt-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                        >
                          View Certificate <ExternalLink size={14} className="ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;