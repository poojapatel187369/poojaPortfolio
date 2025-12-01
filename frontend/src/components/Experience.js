import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

const Experience = () => {
  const [selectedPdf, setSelectedPdf] = useState(null);

  const openPdfModal = (pdfUrl, companyName) => {
    setSelectedPdf({ url: pdfUrl, company: companyName });
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  return (
    <section id="experience" className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in">Work Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-delay">
            My professional journey and career milestones
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-8 last:pb-0 animate-experience-card" 
                 style={{ animationDelay: `${index * 200}ms` }}>
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-4 top-4 w-0.5 h-full bg-primary/30 animate-pulse"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center animate-bounce-in">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-accent transform hover:scale-105 animate-slide-in-right">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1 animate-text-glow">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-primary font-medium mb-2 animate-fade-in-up">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="bg-gradient-to-r from-primary to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium block mb-1 transform hover:scale-110 transition-all duration-300 animate-pulse-slow">
                      {exp.period}
                    </span>
                    <span className="text-gray-600 text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Internship Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 animate-pop-in">
                    <div className="text-sm text-blue-700 font-semibold">Duration</div>
                    <div className="text-blue-900 font-medium">{exp.duration}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3 transform hover:scale-105 transition-all duration-300 animate-pop-in" style={{animationDelay: '100ms'}}>
                    <div className="text-sm text-green-700 font-semibold">Performance</div>
                    <div className="text-green-900 font-medium">{exp.grade}</div>
                  </div>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-600 animate-fade-in-up" 
                        style={{animationDelay: `${idx * 50 + 200}ms`}}>
                      <span className="text-primary mt-1 flex-shrink-0 animate-bounce-slow">▶</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* PDF Certificate Section */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="animate-fade-in-up">
                      <h5 className="font-semibold text-gray-900 mb-1">Internship Certificate</h5>
                      <p className="text-sm text-gray-600">Click to view/download the certificate</p>
                    </div>
                    <div className="flex gap-2">
                      {/* View PDF Button */}
                      <button
                        onClick={() => openPdfModal(exp.certificate, exp.company)}
                        className="bg-primary hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 animate-bounce-slow"
                      >
                        <span>👁️</span>
                        <span>View</span>
                      </button>
                      
                      {/* Download PDF Button */}
                      <a
                        href={exp.certificate}
                        download={`${exp.company}_Certificate.pdf`}
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-110 flex items-center space-x-2 animate-bounce-slow"
                        style={{animationDelay: '100ms'}}
                      >
                        <span>📥</span>
                        <span>Download</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 animate-fade-in-up">
          <div className="bg-white rounded-xl p-6 shadow-lg max-w-2xl mx-auto transform hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-4">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 animate-modal-backdrop"
          onClick={closePdfModal}
        >
          <div className="relative max-w-4xl max-h-full w-full bg-white rounded-lg shadow-2xl animate-modal-slide">
            {/* Header */}
            <div className="flex justify-between items-center bg-gradient-to-r from-primary to-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">
                {selectedPdf.company} - Internship Certificate
              </h3>
              <button
                onClick={closePdfModal}
                className="text-white hover:text-gray-300 text-2xl transition-all duration-200 transform hover:scale-110 hover:rotate-90"
              >
                ✕
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-[70vh] p-4">
              <iframe
                src={selectedPdf.url}
                className="w-full h-full border-0 rounded-lg transform hover:scale-105 transition-transform duration-300"
                title={`${selectedPdf.company} Certificate`}
              >
                <p className="text-center p-8">
                  Your browser doesn't support PDF viewing. 
                  <a 
                    href={selectedPdf.url} 
                    download 
                    className="text-blue-600 underline ml-2"
                  >
                    Download the certificate instead
                  </a>
                </p>
              </iframe>
            </div>

            {/* Footer Actions */}
            <div className="flex justify-between items-center bg-gray-100 p-4 rounded-b-lg">
              <span className="text-gray-600 text-sm">
                Scroll to view the complete certificate
              </span>
              <a
                href={selectedPdf.url}
                download={`${selectedPdf.company}_Certificate.pdf`}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 flex items-center space-x-2 transform hover:scale-105"
              >
                <span>📥</span>
                <span>Download PDF</span>
              </a>
            </div>
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
          to { width: 5rem; }
        }
        @keyframes experience-card {
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
        @keyframes pop-in {
          0% { opacity: 0; transform: scale(0.8); }
          70% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
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
        .animate-experience-card { animation: experience-card 0.8s ease-out both; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-text-glow { animation: text-glow 2s ease-in-out infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out both; }
        .animate-pop-in { animation: pop-in 0.6s ease-out both; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-pulse { animation: pulse 2s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 2s ease-in-out infinite; }
        .animate-modal-backdrop { animation: modal-backdrop 0.3s ease-out; }
        .animate-modal-slide { animation: modal-slide 0.5s ease-out; }
      `}</style>
    </section>
  );
};

export default Experience;