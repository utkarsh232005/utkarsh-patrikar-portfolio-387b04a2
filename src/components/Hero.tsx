import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5QzkyQUMiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-2xl border-4 border-blue-500">
            <img 
              src="/lovable-uploads/db1e16ae-fbf9-4cbd-9624-bee8abe61647.png" 
              alt="Utkarsh Patrikar"
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Utkarsh Patrikar
          </h1>
          
          <div className="text-xl md:text-2xl text-blue-300 mb-8 animate-fade-in">
            DevOps Engineer & Cloud Architect
          </div>
          
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Passionate about building scalable infrastructure, automating deployments, and creating 
            robust cloud solutions. Experienced in AWS, Google Cloud, and modern DevOps practices.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a 
              href="#skills" 
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              View My Skills
            </a>
            <a 
              href="mailto:utkarshpatrikar@gmail.com" 
              className="px-8 py-3 border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-lg font-semibold transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
