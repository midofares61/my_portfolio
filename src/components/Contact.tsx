import React from 'react';
import { Mail, Linkedin, Github, Globe, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out if you'd like to discuss a project or just want to connect.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a 
              href="mailto:mhmedfares61@gmail.com"
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Mail className="text-blue-500 dark:text-blue-400 mr-3" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                <p className="text-gray-900 dark:text-white font-medium">mhmedfares61@gmail.com</p>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/mohamed-fares-a98179218?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Linkedin className="text-blue-500 dark:text-blue-400 mr-3" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">LinkedIn</p>
                <p className="text-gray-900 dark:text-white font-medium">linkedin.com/in/mohamed-fares-a98179218</p>
              </div>
            </a>
            
            <a 
              href="https://github.com/midofares61"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <Github className="text-blue-500 dark:text-blue-400 mr-3" size={24} />
              <div className="text-left">
                <p className="text-sm text-gray-600 dark:text-gray-400">GitHub</p>
                <p className="text-gray-900 dark:text-white font-medium">github.com/midofares61</p>
              </div>
            </a>
            
<a 
  href="tel:+201127502002"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center  p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow"
>
  <Phone className="text-blue-500 dark:text-blue-400 mr-3" size={24} />
  <div className="text-left">
    <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
    <p className="text-gray-900 dark:text-white font-medium">+20 112 750 2002</p>
  </div>
</a>

          </div>
          
          <div className="mt-12">
            <a 
              href="/Mohamed-Fares-Samir-FlowCV-Resume-20241102.pdf"
              className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;