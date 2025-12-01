import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaDownload, FaEnvelope, FaTimes, FaLinkedin, FaGithub, FaStar } from 'react-icons/fa';

const Hero = () => {
  const { personalInfo } = portfolioData;
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isImageZoomed, setIsImageZoomed] = useState(false);

  const roles = ["MERN Stack Developer", "CSE Student", "Problem Solver", "Web Developer"];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

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

  const handleImageClick = () => {
    setIsImageZoomed(true);
  };

  const handleCloseZoom = () => {
    setIsImageZoomed(false);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className={`text-center lg:text-left transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}>
              <div className="mb-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight animate-text-reveal">
                  Hi, I'm <span className="text-primary animate-gradient-text">{personalInfo.name}</span>
                </h1>
                
                {/* Animated Role Text */}
                <div className="h-8 mb-6 overflow-hidden">
                  <div className={`text-xl lg:text-2xl text-gray-600 font-semibold transition-all duration-500 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
                  }`}>
                    {roles[textIndex]}
                  </div>
                </div>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl animate-fade-in-up">
                  4th Year CSE Student | MERN Stack Developer | Passionate about creating innovative web solutions
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-button-group">
                <button
                  onClick={handleViewResume}
                  className="bg-primary hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 animate-pulse-slow hover:animate-none"
                >
                  <FaDownload className="animate-bounce-slow" />
                  <span>View Resume</span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 hover:animate-wiggle"
                >
                  <FaEnvelope />
                  <span>Contact Me</span>
                </button>
              </div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start space-x-4 mt-6 animate-social-icons">
                {[
                  { href: "https://www.linkedin.com/in/pooja-patel-154a842b0/", bg: "bg-blue-600", icon: <FaLinkedin />, title: "LinkedIn" },
                  { href: "https://github.com/poojapatel187369", bg: "bg-gray-800", icon: <FaGithub />, title: "GitHub" },
                  { href: "mailto:poojapatel187369@gmail.com", bg: "bg-red-500", icon: <FaEnvelope />, title: "Email" }
                ].map((social, index) => (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${social.bg} hover:scale-110 text-white rounded-full flex items-center justify-center transition-all duration-300 transform shadow-lg animate-float`}
                    style={{ animationDelay: `${index * 200}ms` }}
                    title={social.title}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="flex justify-center lg:justify-start space-x-6 mt-8 animate-stats">
                {[
                  { value: "4th Year", label: "CSE Student", color: "text-primary" },
                  { value: "A+", label: "Intern Grade", color: "text-green-600" },
                  { value: "MERN", label: "Stack Dev", color: "text-purple-600" }
                ].map((stat, index) => (
                  <div 
                    key={stat.label}
                    className="text-center transform hover:scale-110 transition-transform duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`text-xl font-bold ${stat.color} animate-pulse`}>{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Image with Click to Zoom */}
            <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}>
              <div className="relative group">
                {/* Circular Image Container */}
                <div 
                  className="w-80 h-80 lg:w-96 lg:h-96 rounded-full p-3 bg-gradient-to-r from-blue-400 to-purple-500 transform transition-all duration-500 cursor-zoom-in"
                  onClick={handleImageClick}
                >
                  
                  {/* Main Image with White Border */}
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src="/about/college-photo.jpg"
                      alt="Pooja Patel - CSE Student"
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110 animate-image-enter"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback if image doesn't load */}
                    <div className="hidden w-full h-full items-center justify-center flex-col bg-gradient-to-br from-blue-100 to-purple-100 text-gray-600">
                      <div className="text-5xl mb-2 animate-bounce">👩‍💻</div>
                      <p className="font-semibold text-lg">Pooja Patel</p>
                      <p className="text-md">CSE Student</p>
                    </div>
                  </div>
                  
                </div>

                {/* Background Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

                {/* Experience Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-blue-600 text-white rounded-lg px-4 py-2 shadow-lg transform hover:scale-110 transition-all duration-300 animate-bounce-slow">
                  <div className="text-center">
                    <div className="font-bold text-sm">A+ Grade</div>
                    <div className="text-xs">Softpro</div>
                  </div>
                </div>

                {/* Click Hint */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Animated Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-300 rounded-full animate-float-bg-1"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-purple-300 rounded-full animate-float-bg-2"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-pink-300 rounded-full animate-float-bg-3"></div>
        <div className="absolute bottom-40 right-10 w-5 h-5 bg-green-300 rounded-full animate-float-bg-4"></div>
      </section>

      {/* Image Zoom Modal */}
      {isImageZoomed && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-modal-backdrop"
          onClick={handleCloseZoom}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src="/about/college-photo.jpg"
              alt="Pooja Patel - Zoomed"
              className="w-full h-full object-contain rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-105 cursor-zoom-out animate-modal-slide"
            />
            <button
              onClick={handleCloseZoom}
              className="absolute -top-4 -right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-100 hover:scale-110 transition-all duration-300"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Resume Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 animate-modal-backdrop">
          <div className="bg-white rounded-xl w-full max-w-3xl max-h-[85vh] overflow-hidden shadow-2xl flex flex-col animate-modal-slide">
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 flex-shrink-0">
              <h3 className="text-xl font-bold text-gray-900">Resume Preview</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors duration-300 transform hover:scale-110"
              >
                <FaTimes />
              </button>
            </div>
            
            {/* Resume Preview */}
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

      <style jsx>{`
        @keyframes textReveal {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes pulseSlow {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
        @keyframes imageEnter {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes floatBg1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
        @keyframes floatBg2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-15px, 15px); }
        }
        @keyframes floatBg3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 10px); }
        }
        @keyframes floatBg4 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-10px, -10px); }
        }
        @keyframes modalBackdrop {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes modalSlide {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-text-reveal { animation: textReveal 1s ease-out; }
        .animate-gradient-text { 
          background: linear-gradient(-45deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6);
          background-size: 400% 400%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientText 3s ease infinite;
        }
        .animate-fade-in-up { animation: fadeInUp 1s ease-out 0.3s both; }
        .animate-button-group { animation: fadeInUp 1s ease-out 0.5s both; }
        .animate-pulse-slow { animation: pulseSlow 2s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounceSlow 2s ease-in-out infinite; }
        .animate-wiggle { animation: wiggle 0.5s ease-in-out; }
        .animate-social-icons { animation: fadeInUp 1s ease-out 0.7s both; }
        .animate-stats { animation: fadeInUp 1s ease-out 0.9s both; }
        .animate-pulse { animation: pulseSlow 3s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-image-enter { animation: imageEnter 1s ease-out; }
        .animate-float-bg-1 { animation: floatBg1 6s ease-in-out infinite; }
        .animate-float-bg-2 { animation: floatBg2 7s ease-in-out infinite; }
        .animate-float-bg-3 { animation: floatBg3 5s ease-in-out infinite; }
        .animate-float-bg-4 { animation: floatBg4 8s ease-in-out infinite; }
        .animate-modal-backdrop { animation: modalBackdrop 0.3s ease-out; }
        .animate-modal-slide { animation: modalSlide 0.5s ease-out; }
      `}</style>
    </>
  );
};

export default Hero;