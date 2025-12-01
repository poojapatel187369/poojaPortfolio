import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Projects = () => {
  const projects = portfolioData.projects;
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleCardClick = (liveDemoUrl) => {
    if (liveDemoUrl) {
      window.open(liveDemoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCodeClick = (e, githubLink) => {
    e.stopPropagation();
    if (githubLink) {
      window.open(githubLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleVideoClick = (e, videoUrl, projectTitle, project) => {
    e.stopPropagation();
    setSelectedVideo({ 
      url: videoUrl, 
      title: projectTitle,
      liveDemo: project.liveDemo,
      githubLink: project.githubLink
    });
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  // Convert YouTube URL to embed format for clean video
  const getEmbedUrl = (url) => {
    let videoId = '';
    
    // Extract video ID from different YouTube URL formats
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    }
    
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
    }
    
    return url;
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 md:mb-12">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">My Projects</h2>
  <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
  <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-delay px-4">
    Hover for videos • Click for demo • Code on GitHub
  </p>
</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer animate-card-enter flex flex-col"
              style={{ 
                animationDelay: `${index * 150}ms`,
                height: '520px'
              }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleCardClick(project.liveDemo)}
            >
              {/* Image/Video Section - Fixed Height */}
              <div className="h-64 overflow-hidden relative flex-shrink-0">
                {/* Static Image - Hidden on Hover */}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                    hoveredProject === project.title && project.videoDemo 
                      ? 'opacity-0 scale-110' 
                      : 'opacity-100 group-hover:scale-105'
                  }`}
                />
                
                {/* Video - Shows on Hover */}
                {project.videoDemo && (
                  <div className={`absolute inset-0 w-full h-full transition-all duration-500 ${
                    hoveredProject === project.title ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <iframe
                      src={hoveredProject === project.title ? getEmbedUrl(project.videoDemo) : ''}
                      className="w-full h-full object-cover"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={`${project.title} Demo`}
                    />
                  </div>
                )}

                {/* Clean Overlay - No Text, Just Visual */}
                <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredProject === project.title ? 'opacity-20' : 'opacity-0'
                }`}></div>

                {/* Simple Click Indicator - Only shows when not hovering video */}
                {!(hoveredProject === project.title && project.videoDemo) && (
                  <div className="absolute bottom-4 right-4 bg-primary text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to View Demo
                  </div>
                )}
              </div>
              
              {/* Content Section - Flexible with Fixed Bottom */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>
                
                {/* Tech Stack - Fixed at Bottom */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1 rounded-lg text-xs font-semibold border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons - Fixed at Bottom */}
                <div className="flex space-x-4 pt-4 border-t border-gray-100 mt-auto">
                  {/* Watch Video Button */}
                  {project.videoDemo && (
                    <button
                      onClick={(e) => handleVideoClick(e, project.videoDemo, project.title, project)}
                      className="flex items-center space-x-2 text-red-600 hover:text-red-700 transition-all duration-300 font-medium text-sm group/video"
                      title="Watch Video Demo"
                    >
                      <span className="text-lg group-hover/video:scale-110 transition-transform duration-200">🎥</span>
                      <span className="group-hover/video:underline">Watch Video</span>
                    </button>
                  )}
                  
                  {/* Code Button */}
                  <button
                    onClick={(e) => handleCodeClick(e, project.githubLink)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium text-sm group/code"
                    title="View Source Code"
                  >
                    <span className="text-lg group-hover/code:scale-110 transition-transform duration-200">💻</span>
                    <span className="group-hover/code:underline">Code</span>
                  </button>
                  
                  {/* Demo Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(project.liveDemo);
                    }}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-all duration-300 font-medium text-sm group/demo ml-auto"
                    title="View Live Demo"
                  >
                    <span className="text-lg group-hover/demo:scale-110 transition-transform duration-200">🌐</span>
                    <span className="group-hover/demo:underline">Demo</span>
                  </button>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <p className="text-gray-600 mb-6 text-lg">
            Explore more projects on GitHub
          </p>
          <button
            onClick={(e) => handleCodeClick(e, portfolioData.socialLinks.github)}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-gray-900 to-black hover:from-black hover:to-gray-900 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 group/cta"
          >
            <span>View GitHub</span>
            <span className="group-hover/cta:translate-x-1 transition-transform duration-300">→</span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h3 className="text-2xl font-bold text-gray-900">{selectedVideo.title} - Demo</h3>
              <button
                onClick={closeVideoModal}
                className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                title="Close Video"
              >
                <span className="text-3xl font-light">×</span>
              </button>
            </div>
            
            {/* Video Player */}
            <div className="p-6">
              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                <iframe
                  src={getEmbedUrl(selectedVideo.url)}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`${selectedVideo.title} Demo`}
                />
              </div>
            </div>

            {/* Quick Links - Demo & Code Buttons */}
            <div className="px-6 pb-6">
              <div className="flex space-x-4 justify-center">
                {/* Demo Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleCardClick(selectedVideo.liveDemo);
                  }}
                  className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 group/demo"
                  title="View Live Demo"
                >
                  <span className="text-lg">🌐</span>
                  <span>View Live Demo</span>
                </button>

                {/* Code Button */}
                <button
                  onClick={(e) => handleCodeClick(e, selectedVideo.githubLink)}
                  className="flex items-center space-x-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 group/code"
                  title="View Source Code"
                >
                  <span className="text-lg">💻</span>
                  <span>View Code</span>
                </button>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <button
                onClick={closeVideoModal}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Close Video
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-down {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes expand-width {
          from { width: 0; opacity: 0; }
          to { width: 8rem; opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes card-enter {
          0% { opacity: 0; transform: translateY(50px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-expand-width { animation: expand-width 1.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-card-enter { animation: card-enter 0.8s ease-out both; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Projects;
