import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo, education } = portfolioData;
  const currentCGPA = education[0]?.cgpa || "8.7";
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/about/college-photoo.jpg",
    "/about/college-activity.jpg",
    "/about/s1.jpg",
    "/about/s2.jpg",
    
  ];

  // Auto slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    setIsImageZoomed(!isImageZoomed);
  };

  const handleCloseZoom = () => {
    setIsImageZoomed(false);
  };

  return (
    <>
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
            <p className="text-lg text-gray-600 animate-fade-in-delay">
              Computer Science Student | MERN Stack Developer
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image with Slideshow */}
            <div className="flex justify-center">
              <div className="relative group">
                <div 
                  className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-all duration-500 cursor-zoom-in"
                  onClick={handleImageClick}
                >
                  <img
                    src={images[currentImage]}
                    alt={`Pooja Patel - Image ${currentImage + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                
                {/* Image Indicator */}
                <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  {currentImage + 1}/{images.length}
                </div>
                
                {/* Experience Badge - Fixed Position */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg px-4 py-2 shadow-lg">
                  <div className="text-center">
                    <div className="font-bold text-sm">A+ Grade</div>
                    <div className="text-xs">Softpro</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="animate-slide-in-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Hello, I'm <span className="text-primary">{personalInfo.name}</span>
                </h3>
                
                <div className="space-y-4 text-gray-600">
                  <p className="transform hover:translate-x-2 transition-transform duration-300">
                    I'm a 4th year Computer Science student at AKTU University with {currentCGPA} CGPA.
                  </p>
                  
                  <p className="transform hover:translate-x-2 transition-transform duration-300">
                    Completed MERN Stack internship at Softpro with A+ grade.
                  </p>

                  <p className="transform hover:translate-x-2 transition-transform duration-300">
                    Passionate about building web applications and learning new technologies.
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 animate-fade-in-up">
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm transform hover:scale-105 transition-all duration-300">
                  <div className="text-lg font-bold text-primary">4th Year</div>
                  <div className="text-sm text-gray-600">CSE</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm transform hover:scale-105 transition-all duration-300">
                  <div className="text-lg font-bold text-green-600">{currentCGPA}</div>
                  <div className="text-sm text-gray-600">CGPA</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center border border-gray-200 shadow-sm transform hover:scale-105 transition-all duration-300">
                  <div className="text-lg font-bold text-purple-600">A+</div>
                  <div className="text-sm text-gray-600">Grade</div>
                </div>
              </div>

              {/* Skills */}
              <div className="animate-fade-in-up-delay">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">My Strengths</h4>
                <div className="flex flex-wrap gap-2">
                  {["Quick Learner", "Problem Solver", "Team Player"].map((skill, index) => (
                    <span 
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slide-in {
            from { width: 0; }
            to { width: 5rem; }
          }
          @keyframes slide-in-right {
            from { opacity: 0; transform: translateX(-30px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fade-in 1s ease-out; }
          .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
          .animate-slide-in { animation: slide-in 1s ease-out; }
          .animate-slide-in-right { animation: slide-in-right 1s ease-out; }
          .animate-fade-in-up { animation: fade-in-up 1s ease-out 0.5s both; }
          .animate-fade-in-up-delay { animation: fade-in-up 1s ease-out 0.7s both; }
        `}</style>
      </section>

      {/* Zoom Modal */}
      {isImageZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={handleCloseZoom}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={images[currentImage]}
              alt="Pooja Patel - Zoomed"
              className="w-full h-full object-contain rounded-lg shadow-2xl transform scale-100 transition-transform duration-500"
            />
            <button
              onClick={handleCloseZoom}
              className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors duration-300"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default About;