import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaDownload, FaEnvelope, FaTimes, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [showResumeModal, setShowResumeModal] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewResume = () => {
    setShowResumeModal(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume/poojaresume.pdf';
    link.download = 'Pooja_Patel_Resume.pdf';
    link.click();
    setShowResumeModal(false);
  };

  const handleCloseModal = () => {
    setShowResumeModal(false);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  Hi, I'm <span className="text-primary">{personalInfo.name}</span>
                </h1>
                <h2 className="text-xl lg:text-2xl text-gray-600 mb-6 font-semibold">
                  {personalInfo.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                  4th Year CSE Student | MERN Stack Developer | Passionate about creating innovative web solutions
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleViewResume}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <FaDownload />
                  <span>View Resume</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <FaEnvelope />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-6">
                <a
                  href="https://www.linkedin.com/in/pooja-patel-154a842b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href="https://github.com/poojapatel187369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  title="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href="mailto:poojapatel187369@gmail.com"
                  className="w-12 h-12 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                  title="Email"
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>

              {/* Quick Stats */}
              <div className="flex justify-center lg:justify-start space-x-6 mt-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary">4th Year</div>
                  <div className="text-sm text-gray-600">CSE Student</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-600">A+</div>
                  <div className="text-sm text-gray-600">Intern Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-purple-600">MERN</div>
                  <div className="text-sm text-gray-600">Stack Dev</div>
                </div>
              </div>
            </div>

            {/* Right Column - Simple Circumference Border */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Simple Circular Image Container */}
                <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full p-3 bg-gradient-to-r from-blue-400 to-purple-500 transform group-hover:scale-105 transition-all duration-500">
                  
                  {/* Main Image with White Border */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="/about/college-photo.jpg"
                      alt="Pooja Patel - CSE Student"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div className="hidden w-full h-full items-center justify-center flex-col bg-gradient-to-br from-blue-100 to-purple-100 text-gray-600">
                      <div className="text-5xl mb-2">👩‍💻</div>
                      <p className="font-semibold text-lg">Pooja Patel</p>
                      <p className="text-md">CSE Student</p>
                    </div>
                  </div>
                  
                </div>

                {/* Simple Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Improved Resume View Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Resume Preview</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors duration-300"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Resume Preview - Optimized for Viewing */}
            <div className="flex-1 p-4 overflow-auto">
              <div className="bg-gray-50 rounded-lg p-2 border-2 border-gray-200">
                <iframe
                  src="/resume/poojaresume.pdf#view=FitH"
                  className="w-full min-h-[500px] rounded"
                  title="Pooja Patel Resume Preview"
                  style={{ height: '70vh' }}
                />
              </div>
            </div>
            
            {/* Download Option */}
            <div className="border-t p-4 bg-gray-50 flex-shrink-0">
              <div className="text-center">
                <button
                  onClick={handleDownloadResume}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center space-x-2 hover:scale-105 mx-auto"
                >
                  <FaDownload />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;