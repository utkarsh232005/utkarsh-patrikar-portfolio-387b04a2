
import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white mb-2">Utkarsh Patrikar</div>
            <div className="text-slate-400">DevOps Engineer & Cloud Architect</div>
          </div>
          
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <a href="https://github.com" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:utkarsh@example.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-700 pt-8 mt-8 text-center">
          <div className="flex items-center justify-center space-x-2 text-slate-400">
            <span>Built with</span>
            <Heart size={16} className="text-red-500" />
            <span>using React & Tailwind CSS</span>
          </div>
          <div className="mt-2 text-slate-500">
            © 2024 Utkarsh Patrikar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
