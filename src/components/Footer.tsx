
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">Utkarsh Patrikar</div>
            <div className="text-gray-400">DevOps Engineer & Cloud Architect</div>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="https://github.com/utkarsh232005" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/utkarsh-patrikar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:utkarshpatrikar@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          <div className="mt-2 text-gray-500">
            © 2024 Utkarsh Patrikar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
