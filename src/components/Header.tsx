
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Utkarsh Patrikar
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#skills" className="text-slate-300 hover:text-white transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com" className="text-slate-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" className="text-slate-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:utkarsh@example.com" className="text-slate-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
