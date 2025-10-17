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
      <div className="lg:w-48 lg:h-32 flex-shrink-0">
        <div 
          className={`${style.container} rounded-lg overflow-hidden shadow-lg h-full cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 ${style.border} relative`}
          onClick={onClick}
        >
          {/* Document Preview */}
          <div className="h-full flex flex-col items-center justify-center p-4 relative">
            {/* Document Icon */}
            <div className="text-3xl mb-2 drop-shadow-lg">{style.icon}</div>
            
            {/* Document Label */}
            <div className={`text-center ${style.text}`}>
              <div className="font-semibold text-sm drop-shadow-md">{style.label}</div>
              <div className="text-xs opacity-90 mt-1">Click to view</div>
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
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey and qualifications
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.education.map((edu, index) => {
            const educationType = getEducationType(edu.degree);
            
            return (
              <div key={index} className="relative pl-8 pb-12 last:pb-0">
                {/* Timeline line */}
                {index !== portfolioData.education.length - 1 && (
                  <div className="absolute left-4 top-4 w-0.5 h-full bg-primary/30"></div>
                )}
                
                {/* Timeline dot */}
                <div className="absolute left-0 top-4 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                
                {/* Content */}
                <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-primary">
                  <div className="flex flex-col lg:flex-row gap-6">
                    {/* Text Content */}
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {edu.degree}
                        </h3>
                        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-2 md:mb-0">
                          {edu.year}
                        </span>
                      </div>
                      <h4 className="text-lg text-secondary font-medium mb-3">
                        {edu.institution}
                      </h4>
                      <div className="flex items-center space-x-4 mb-3">
                        <span className=" font-medium bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                          {edu.score}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">{edu.details}</p>
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
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300 transition-colors duration-200 z-10 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
            >
              ✕
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-70 text-white p-3 rounded-lg backdrop-blur-sm">
              <p className="text-center text-sm font-medium">{selectedImage.alt}</p>
            </div>

            {/* Download Button */}
            <a
              href={selectedImage.src}
              download
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition-all duration-200 flex items-center space-x-2 shadow-lg font-medium"
              onClick={(e) => e.stopPropagation()}
            >
              <span>📥</span>
              <span>Download</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Education;