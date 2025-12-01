import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Achievements & Certificates</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Recognition and certifications that showcase my dedication to continuous learning
          </p>
        </div>

        {/* 4 Certificates in One Line */}
        <div className="mb-20">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Professional Certifications
              </span>
            </h3>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full animate-pulse">
              {portfolioData.certificates.length} Certificates
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.certificates.map((certificate, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(certificate)}
                onMouseEnter={() => setHoveredCard(`cert-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group animate-card-enter bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-blue-300 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Certificate Header with Floating Animation */}
                <div className="relative h-56 bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-6 overflow-hidden">
                  {/* Floating Elements */}
                  <div className={`absolute w-24 h-24 bg-blue-200 rounded-full -top-8 -left-8 opacity-30 group-hover:scale-150 transition-transform duration-1000 ${hoveredCard === `cert-${index}` ? 'animate-float' : ''}`}></div>
                  <div className={`absolute w-20 h-20 bg-purple-200 rounded-full -bottom-6 -right-6 opacity-40 group-hover:scale-125 transition-transform duration-700 ${hoveredCard === `cert-${index}` ? 'animate-float-delay' : ''}`}></div>
                  
                  <div className="relative z-10 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {/* Animated Icon */}
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-all duration-500 shadow-lg animate-icon-bounce">
                      <span className="text-3xl text-white">📜</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                      {certificate.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1 line-clamp-1">{certificate.organization}</p>
                    <p className="text-xs text-purple-600 font-semibold">{certificate.duration}</p>
                  </div>
                </div>
                
                {/* Certificate Details */}
                <div className="relative p-6 bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full">
                      {certificate.date}
                    </span>
                    {certificate.grade && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        {certificate.grade}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-700 text-sm leading-relaxed line-clamp-2 mb-4">
                    {certificate.description}
                  </p>
                  
                  {/* Skills Tags */}
                  {certificate.skills && (
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Achievement Photos in One Line */}
        <div className="mt-20">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Achievement Gallery
              </span>
            </h3>
            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full animate-pulse">
              {portfolioData.achievements.length} Moments
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioData.achievements.map((achievement, index) => (
              <div
                key={index}
                onClick={() => handleItemClick(achievement)}
                onMouseEnter={() => setHoveredCard(`achievement-${index}`)}
                onMouseLeave={() => setHoveredCard(null)}
                className="relative group animate-card-enter bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 hover:border-purple-300 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Image Container with Parallax Effect */}
                <div className="h-64 relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Trophy Badge */}
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-yellow-400 to-orange-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-trophy">
                    <span className="text-xl">🏆</span>
                  </div>
                </div>
                
                {/* Achievement Details */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300 line-clamp-1">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {achievement.description}
                  </p>
                  
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{achievement.date}</span>
                    <span className="text-xs text-purple-600 font-medium">Explore →</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-purple-200 transition-all duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
              <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
                  {selectedItem.organization && (
                    <p className="text-gray-600 mt-1">{selectedItem.organization}</p>
                  )}
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                  title="Close"
                >
                  <span className="text-3xl font-light">×</span>
                </button>
              </div>
              
              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {selectedItem.type === 'pdf' ? (
                  <iframe
                    src={selectedItem.pdfUrl}
                    className="w-full h-96 rounded-lg"
                    title={selectedItem.title}
                  />
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-auto max-h-96 object-contain rounded-lg shadow-lg"
                  />
                )}
                
                <div className="mt-6 text-center">
                  {selectedItem.description && (
                    <p className="text-gray-700 leading-relaxed">{selectedItem.description}</p>
                  )}
                  
                  {selectedItem.date && (
                    <div className="mt-4 inline-flex items-center space-x-4 text-sm text-gray-500">
                      <span>📅 {selectedItem.date}</span>
                      {selectedItem.duration && <span>⏱️ {selectedItem.duration}</span>}
                      {selectedItem.grade && <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">{selectedItem.grade}</span>}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Modal Footer - Clean & Professional */}
              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <div className="text-center text-xs text-gray-500">
                  Click the × button above to close
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

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
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes icon-bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes trophy {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
          100% { transform: rotate(0deg); }
        }

        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-expand-width { animation: expand-width 1.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-card-enter { animation: card-enter 0.8s ease-out both; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-scale-in { animation: scale-in 0.3s ease-out; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delay { animation: float-delay 3s ease-in-out infinite 0.5s; }
        .animate-icon-bounce { animation: icon-bounce 2s ease-in-out infinite; }
        .animate-trophy { animation: trophy 2s ease-in-out infinite; }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
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

export default Achievements;