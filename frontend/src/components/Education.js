import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Education = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc, altText) => {
    setSelectedImage({ src: imageSrc, alt: altText });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Document preview components for each education level
  const DocumentPreview = ({ type, photo, degree, onClick }) => {
    const getDocumentStyle = () => {
      switch(type) {
        case 'college':
          return {
            container: "bg-gradient-to-br from-blue-500 to-blue-600",
            text: "text-white",
            icon: "🏛️",
            label: "College ID",
            border: "border-blue-300"
          };
        case 'class12':
          return {
            container: "bg-gradient-to-br from-green-500 to-green-600",
            text: "text-white", 
            icon: "📚",
            label: "Class 12 Marksheet",
            border: "border-green-300"
          };
        case 'class10':
          return {
            container: "bg-gradient-to-br from-purple-500 to-purple-600",
            text: "text-white",
            icon: "🎓",
            label: "Class 10 Marksheet",
            border: "border-purple-300"
          };
        default:
          return {
            container: "bg-gray-200",
            text: "text-gray-600",
            icon: "📄",
            label: "Document",
            border: "border-gray-300"
          };
      }
    };

    const style = getDocumentStyle();

    return (
      <div className="lg:w-48 lg:h-32 flex-shrink-0 animate-pop-in">
        <div 
          className={`${style.container} rounded-lg overflow-hidden shadow-lg h-full cursor-pointer transform hover:scale-110 transition-all duration-300 border-2 ${style.border} relative animate-float`}
          onClick={onClick}
        >
          {/* Document Preview */}
          <div className="h-full flex flex-col items-center justify-center p-4 relative">
            {/* Document Icon */}
            <div className="text-3xl mb-2 drop-shadow-lg animate-bounce-slow">{style.icon}</div>
            
            {/* Document Label */}
            <div className={`text-center ${style.text}`}>
              <div className="font-semibold text-sm drop-shadow-md">{style.label}</div>
              <div className="text-xs opacity-90 mt-1 animate-pulse">Click to view</div>
            </div>

            {/* Corner Fold Effect */}
            <div className="absolute top-0 right-0 w-6 h-6 bg-black bg-opacity-20 transform rotate-45 translate-x-3 -translate-y-3"></div>
          </div>

          {/* Shine Effect on Hover */}
          <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
        </div>
        
        {/* Document Type Label */}
        <p className="text-xs text-gray-600 text-center mt-2 font-medium">
          {style.label}
        </p>
      </div>
    );
  };

  const getEducationType = (degree) => {
    if (degree.includes('Computer Science')) return 'college';
    if (degree.includes('Class 12')) return 'class12';
    if (degree.includes('Class 10')) return 'class10';
    return 'default';
  };

  return (
    <section id="education" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Education</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.education.map((edu, index) => {
            const educationType = getEducationType(edu.degree);
            
            return (
              <div key={index} className="relative pl-8 pb-8 last:pb-0 animate-education-card" 
                   style={{ animationDelay: `${index * 200}ms` }}>
                {/* Timeline line */}
                {index !== portfolioData.education.length - 1 && (
                  <div className="absolute left-4 top-4 w-0.5 h-full bg-primary/30 animate-pulse"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce-in">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-primary transform hover:scale-105 animate-slide-in-right">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2 animate-text-glow">
                          {edu.degree}
                        </h3>
                        <span className="bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-2 md:mb-0 transform hover:scale-110 transition-all duration-300 animate-pulse-slow">
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-lg text-secondary font-medium mb-3 animate-fade-in-up">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm transform hover:scale-105 transition-all duration-300 animate-bounce-slow">
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4 animate-fade-in-up-delay">{edu.details}</p>
                    </div>

                    {/* Document Preview */}
                    <DocumentPreview
                      type={educationType}
                      photo={edu.photo}
                      degree={edu.degree}
                      onClick={() => openModal(edu.photo, `${edu.degree} - ${edu.institution}`)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal for Full Screen Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-modal-backdrop"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full animate-modal-slide">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-all duration-200 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center transform hover:scale-110 hover:rotate-90"
            >
              ✕
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-lg backdrop-blur-sm animate-fade-in-up">
              <p className="text-center text-sm font-medium">{selectedImage.alt}</p>
            </div>

            {/* Download Button */}
            <a
              href={selectedImage.src}
              download
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2 shadow-lg font-medium transform hover:scale-110 animate-bounce-slow"
              onClick={(e) => e.stopPropagation()}
            >
              <span>📥</span>
              <span>Download</span>
            </a>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          from { width: 0; }
          to { width: 6rem; }
        }
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes education-card {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes bounce-in {
          0% { transform: scale(0.3); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(59, 130, 246, 0.3); }
          50% { text-shadow: 0 0 15px rgba(59, 130, 246, 0.6); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes modal-backdrop {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modal-slide {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in { animation: slide-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
        .animate-pop-in { animation: pop-in 0.6s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-education-card { animation: education-card 0.8s ease-out both; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-fade-in-up-delay { animation: fade-in-up 0.6s ease-out 0.2s both; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-modal-backdrop { animation: modal-backdrop 0.3s ease-out; }
        .animate-modal-slide { animation: modal-slide 0.5s ease-out; }
      `}</style>
    </section>
  );
};

export default Education;