
import React from 'react';

const Skills = () => {
  const techStack = [
    { name: 'AWS', category: 'Cloud' },
    { name: 'Google Cloud', category: 'Cloud' },
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'JavaScript', category: 'Language' },
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'Nginx', category: 'Infrastructure' },
    { name: 'PM2', category: 'DevOps' },
    { name: 'Linux', category: 'System Admin' },
  ];

  const categories = [...new Set(techStack.map(tech => tech.category))];

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build and maintain scalable infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-slate-700/50 rounded-xl p-6 hover:bg-slate-700/70 transition-colors">
              <h3 className="text-xl font-semibold text-blue-300 mb-4">{category}</h3>
              <div className="space-y-3">
                {techStack
                  .filter(tech => tech.category === category)
                  .map((tech) => (
                    <div key={tech.name} className="flex items-center space-x-3">
                      {/* Logo Placeholder */}
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                        {tech.name.charAt(0)}
                      </div>
                      <span className="text-slate-200">{tech.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
