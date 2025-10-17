import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle item click and show in modal
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Achievements & Certificates</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recognition and certifications that showcase my dedication to continuous learning
          </p>
        </div>

        {/* Certificates Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.certificates.map((certificate, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(certificate)}
                className="bg-white rounded-xl shadow-md overflow-hidden border-2 border-primary/10 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <div className="h-48 bg-gradient-to-br from-blue-50 to-primary/10 relative overflow-hidden flex items-center justify-center group">
                  <div className="text-center p-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl">📜</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">{certificate.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{certificate.organization}</p>
                    <p className="text-xs text-primary font-medium">{certificate.duration}</p>
                  </div>
                  {/* Click indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">
                    Click to View
                  </div>
                </div>
                
                <div className="p-6 border-t border-gray-100">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-primary font-medium text-sm">{certificate.date}</span>
                    {certificate.grade && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">
                        {certificate.grade}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{certificate.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Photos Section */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Achievement Moments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.achievements.map((achievement, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(achievement)}
                className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <div className="h-64 bg-gradient-to-br from-primary to-accent relative overflow-hidden group">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-primary text-xl">🏆</span>
                  </div>
                  {/* Click indicator */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-primary text-xs px-3 py-1 rounded-full font-medium">
                    Click to View
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for viewing images/PDFs */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className={`bg-white rounded-lg ${selectedItem.type === 'pdf' ? 'w-full max-w-6xl h-[90vh]' : 'max-w-4xl max-h-full'} overflow-auto`}>
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">{selectedItem.title}</h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>
              <div className={`p-4 ${selectedItem.type === 'pdf' ? 'h-full' : ''}`}>
                {selectedItem.type === 'pdf' ? (
                  <iframe
                    src={selectedItem.pdfUrl}
                    className="w-full h-full min-h-[600px]"
                    title={selectedItem.title}
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-96 object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Achievements;