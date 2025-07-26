import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Professional Summary</h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate Flutter developer with 3 years of experience crafting beautiful, high-performance cross-platform applications for mobile and desktop platforms. Specializing in creating intuitive user interfaces and implementing complex functionalities, I've delivered solutions across various industries including healthcare, e-commerce, and productivity.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              My approach combines technical expertise with a strong focus on user experience. I excel at translating design mockups into responsive, animated interfaces that delight users. Throughout my career, I've mastered various state management solutions including Provider, Riverpod, and BLoC, allowing me to build scalable and maintainable applications.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Key achievements include developing a health tracking application that reached 200,000+ users, implementing a cross-platform e-commerce solution that reduced development time by 40%, and creating a desktop productivity tool that streamlined workflow for teams across multiple operating systems. I'm committed to writing clean, efficient code and constantly expanding my knowledge of the Flutter ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;