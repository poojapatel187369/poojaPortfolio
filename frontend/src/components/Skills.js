import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { technical, soft } = portfolioData.skills;

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-3"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technical capabilities and professional strengths
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {technical.map((skill) => (
                <div 
                  key={skill.name} 
                  className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow transition-all duration-200"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl text-primary">{skill.icon}</span>
                    <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {soft.map((skill) => (
                <div
                  key={skill}
                  className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:shadow transition-all duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">✓</span>
                    </div>
                    <span className="font-medium text-gray-700 text-sm">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies Summary */}
            <div className="mt-6 bg-white rounded-lg p-4 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3 text-sm">Core Technologies</h4>
              <div className="flex flex-wrap gap-1.5">
                {["MERN Stack", "JavaScript", "Python", "Java", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git & GitHub"].map((tech) => (
                  <span key={tech} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;