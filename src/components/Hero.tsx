import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative flex items-center px-8 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Flutter Developer
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-blue-600 dark:text-blue-400 mb-8 animate-fade-in-delay">
            Creating Beautiful Cross-Platform Experiences
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-10 animate-fade-in-delay-2">
            With 3 years of experience building mobile and desktop applications
            using Flutter and Dart
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-3">
            <button 
              onClick={scrollToAbout}
              className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-colors"
            >
              Explore My Work
            </button>
            <a 
              href="#contact" 
              className="px-8 py-3 bg-transparent border border-blue-500 text-blue-500 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Mockup Display */}
        <div className="relative hidden lg:block animate-fade-in-delay-2">
          <img
              src="src/data/files/hero.png"
              alt="Desktop Application"
              className="w-full h-full object-cover"
            />
        
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>
      
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-blue-400/10 dark:bg-blue-400/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-400/10 dark:bg-purple-400/5 rounded-full filter blur-3xl"></div>
    </div>
  );
};

export default Hero;