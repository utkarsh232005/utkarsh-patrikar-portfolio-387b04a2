
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Cloud Infrastructure Automation",
      description: "Automated AWS infrastructure deployment using Terraform and GitHub Actions, reducing deployment time by 80%.",
      tech: ["AWS", "Terraform", "GitHub Actions", "Docker"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "Microservices Monitoring Platform",
      description: "Built comprehensive monitoring solution with Prometheus, Grafana, and ELK stack for microservices architecture.",
      tech: ["Kubernetes", "Prometheus", "Grafana", "ELK Stack"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
    {
      title: "CI/CD Pipeline Optimization",
      description: "Streamlined deployment process reducing build times from 45 minutes to 8 minutes using advanced caching strategies.",
      tech: ["Jenkins", "Docker", "Kubernetes", "Redis"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop&crop=entropy&auto=format",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my expertise in DevOps and cloud infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                  <a href="#" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
