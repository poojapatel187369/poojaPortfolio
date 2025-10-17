import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const projects = portfolioData.projects;

  const handleImageClick = (liveDemoUrl) => {
    if (liveDemoUrl) {
      window.open(liveDemoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDemoClick = (e, liveDemoUrl) => {
    e.preventDefault();
    if (liveDemoUrl) {
      window.open(liveDemoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCodeClick = (e, githubLink) => {
    e.preventDefault();
    if (githubLink) {
      window.open(githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work showcasing full-stack development capabilities with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Clickable Image Section */}
              <div 
                className="h-48 bg-gray-100 overflow-hidden relative cursor-pointer"
                onClick={() => handleImageClick(project.liveDemo)}
                title="Click to view live demo"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">💻</div>
                    <p className="font-semibold">{project.title}</p>
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full w-12 h-12 flex items-center justify-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <span className="text-lg">🌐</span>
                  </div>
                </div>
                
                {/* Click Hint */}
                <div className="absolute bottom-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to View Demo
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-xs font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4 border-t border-gray-100">
                  <button
                    onClick={(e) => handleCodeClick(e, project.githubLink)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm group"
                    title="View Source Code"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">📂</span>
                    <span className="group-hover:underline">Code</span>
                  </button>
                  <button
                    onClick={(e) => handleDemoClick(e, project.liveDemo)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-all duration-300 font-medium text-sm group"
                    title="View Live Demo"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">🌐</span>
                    <span className="group-hover:underline">Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Explore more projects and code on GitHub
          </p>
          <button
            onClick={(e) => handleCodeClick(e, portfolioData.socialLinks.github)}
            className="inline-flex items-center space-x-3 bg-gray-900 hover:bg-black text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 group"
          >
            <span>View GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;