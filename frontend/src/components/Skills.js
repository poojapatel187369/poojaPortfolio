import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
  const { technical, soft } = portfolioData.skills;

  return (
    <section id="skills" className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in"> Skills & Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
        </div>
       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Technical Skills - All Included */}
          <div className="animate-slide-in-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">💻 Technical Skills</h3>
            <div className="grid grid-cols-2 gap-2">
              {technical.map((skill, index) => (
                <div 
                  key={skill.name} 
                  className="bg-white rounded-lg p-3 shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-pop-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-gray-800 text-sm">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills & Technologies */}
          <div className="animate-slide-in-right">
            {/* Soft Skills */}
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">👥 Professional Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                {soft.map((skill, index) => (
                  <div
                    key={skill}
                    className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-300 animate-pop-in"
                    style={{ animationDelay: `${index * 50 + 300}ms` }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="font-medium text-gray-700 text-sm">
                        {skill}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200 animate-fade-in-up">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">🛠️ Core Technologies</h3>
              <div className="flex flex-wrap gap-1.5 justify-center">
                {["MERN Stack", "JavaScript", "Python", "Java", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Git & GitHub"].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium transform hover:scale-110 transition-all duration-300 animate-bounce-in"
                    style={{ animationDelay: `${index * 30 + 500}ms` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in {
          from { width: 0; }
          to { width: 4rem; }
        }
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.05); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in { animation: slide-in 1s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-pop-in { animation: pop-in 0.6s ease-out both; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s both; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out both; }
      `}</style>
    </section>
  );
};

export default Skills;