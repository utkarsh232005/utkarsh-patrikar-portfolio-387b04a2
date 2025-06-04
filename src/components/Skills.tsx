
import React from 'react';

const Skills = () => {
  const techStack = [
    { 
      name: 'AWS', 
      category: 'Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg'
    },
    { 
      name: 'Google Cloud', 
      category: 'Cloud',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg'
    },
    { 
      name: 'React', 
      category: 'Frontend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    { 
      name: 'Next.js', 
      category: 'Frontend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg'
    },
    { 
      name: 'Node.js', 
      category: 'Backend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg'
    },
    { 
      name: 'JavaScript', 
      category: 'Language',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
    },
    { 
      name: 'HTML', 
      category: 'Frontend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
    },
    { 
      name: 'CSS', 
      category: 'Frontend',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
    },
    { 
      name: 'Nginx', 
      category: 'Infrastructure',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Nginx_logo.svg'
    },
    { 
      name: 'PM2', 
      category: 'DevOps',
      logo: 'https://raw.githubusercontent.com/Unitech/pm2/master/pres/pm2-v4.png'
    },
    { 
      name: 'Linux', 
      category: 'System Admin',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg'
    },
  ];

  const categories = [...new Set(techStack.map(tech => tech.category))];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build and maintain scalable infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-gray-900/80 rounded-xl p-6 hover:bg-gray-800/80 transition-colors border border-gray-800">
              <h3 className="text-xl font-semibold text-blue-300 mb-6">{category}</h3>
              <div className="space-y-4">
                {techStack
                  .filter(tech => tech.category === category)
                  .map((tech) => (
                    <div key={tech.name} className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg p-2">
                        <img 
                          src={tech.logo} 
                          alt={`${tech.name} logo`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.currentTarget as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = target.nextElementSibling as HTMLElement;
                            if (fallback) {
                              fallback.style.display = 'flex';
                            }
                          }}
                        />
                        <div 
                          className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded flex items-center justify-center text-white text-sm font-bold hidden"
                        >
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                      <span className="text-gray-200 font-medium">{tech.name}</span>
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
