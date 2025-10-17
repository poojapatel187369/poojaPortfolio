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
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey and career milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 last:pb-0">
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="absolute left-4 top-4 w-0.5 h-full bg-primary/30"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-4 w-8 h-8 bg-primary rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">{index + 1}</span>
              </div>
              
              {/* Content */}
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-accent">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-lg text-primary font-medium mb-2">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium block mb-1">
                      {exp.period}
                    </span>
                    <span className="text-gray-600 text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Internship Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <div className="text-sm text-blue-700 font-semibold">Duration</div>
                    <div className="text-blue-900">{exp.duration}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <div className="text-sm text-green-700 font-semibold">Performance</div>
                    <div className="text-green-900">{exp.grade}</div>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-gray-600">
                      <span className="text-primary mt-1 flex-shrink-0">▶</span>
                      <span className="leading-relaxed">{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* PDF Certificate Section */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">Internship Certificate</h5>
                      <p className="text-sm text-gray-600">Click to view/download the certificate</p>
                    </div>
                    <div className="flex gap-3">
                      {/* View PDF Button */}
                      <button
                        onClick={() => openPdfModal(exp.certificate, exp.company)}
                        className="bg-primary hover:bg-secondary text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
                      >
                        <span>👁️</span>
                        <span>View Certificate</span>
                      </button>
                      
                      {/* Download PDF Button */}
                      <a
                        href={exp.certificate}
                        download={`${exp.company}_Certificate.pdf`}
                        className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
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
        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              I'm always open to discussing new opportunities and interesting projects.
            </p>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary hover:bg-secondary text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* PDF Modal */}
      {selectedPdf && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closePdfModal}
        >
          <div className="relative max-w-6xl max-h-full w-full bg-white rounded-lg shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-t-lg">
              <h3 className="text-lg font-semibold">
                {selectedPdf.company} - Internship Certificate
              </h3>
              <button
                onClick={closePdfModal}
                className="text-white hover:text-gray-300 text-2xl transition-colors duration-200"
              >
                ✕
              </button>
            </div>
            
            {/* PDF Viewer */}
            <div className="h-[80vh] p-4">
              <iframe
                src={selectedPdf.url}
                className="w-full h-full border-0 rounded-lg"
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
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 flex items-center space-x-2"
              >
                <span>📥</span>
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Experience;