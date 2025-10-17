import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { 
  FaLinkedin, 
  FaGithub, 
  FaEnvelope, 
  FaHeart, 
  FaArrowUp,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaPhone,
  FaMapMarkerAlt,
  FaTrophy,
  FaGraduationCap,
  FaFileAlt
} from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiNodedotjs } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  // All pages/sections from your portfolio - split into 2 columns
  const pageLinksColumn1 = [
    { name: 'Home', icon: FaHome, section: 'home' },
    { name: 'About', icon: FaUser, section: 'about' },
    { name: 'Education', icon: FaGraduationCap, section: 'education' },
    { name: 'Skills', icon: FaCode, section: 'skills' }
  ];

  const pageLinksColumn2 = [
    { name: 'Projects', icon: FaProjectDiagram, section: 'projects' },
    { name: 'Achievements', icon: FaTrophy, section: 'achievements' },
    { name: 'Contact', icon: FaPhone, section: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-primary hover:bg-secondary w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group z-10"
        aria-label="Back to top"
      >
        <FaArrowUp className="text-white text-sm group-hover:animate-bounce" />
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-4">
              Pooja Patel
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Passionate MERN Stack Developer and 4th Year CSE Student dedicated to creating 
              innovative web solutions. Let's build something amazing together!
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/poojapatel187369"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-all duration-300 transform hover:scale-110 group"
                title="GitHub"
              >
                <FaGithub className="text-xl text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/pooja-patel-154a842b0/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 group"
                title="LinkedIn"
              >
                <FaLinkedin className="text-xl text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="mailto:poojapatel187369@gmail.com"
                className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110 group"
                title="Email"
              >
                <FaEnvelope className="text-xl text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links - Column 1 */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaFileAlt className="mr-2 text-primary" />
              Quick Links
            </h4>
            <ul className="space-y-2">
              {pageLinksColumn1.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group w-full text-left text-sm"
                  >
                    <item.icon className="mr-3 text-primary group-hover:scale-110 transition-transform duration-300 text-sm" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center opacity-0">
              {/* Empty heading for alignment */}
              &nbsp;
            </h4>
            <ul className="space-y-2">
              {pageLinksColumn2.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="text-gray-400 hover:text-white transition-all duration-300 flex items-center group w-full text-left text-sm"
                  >
                    <item.icon className="mr-3 text-primary group-hover:scale-110 transition-transform duration-300 text-sm" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
              <FaPhone className="mr-2 text-primary" />
              Get In Touch
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <FaEnvelope className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-sm" />
                <a 
                  href="mailto:poojapatel187369@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  poojapatel187369@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <FaPhone className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-sm" />
                <a 
                  href="tel:+916307744919"
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
                >
                  +91 6307744919
                </a>
              </div>
              <div className="flex items-start space-x-3 group">
                <FaMapMarkerAlt className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 text-sm" />
                <span className="text-gray-300 text-sm">
                  Varanasi, Uttar Pradesh, India
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-xs md:text-sm">
                © {currentYear} <span className="text-primary font-semibold">Pooja Patel</span>. All rights reserved.
              </p>
            </div>
            
            {/* Built with */}
            <div className="flex items-center space-x-3 text-gray-400">
              <span className="text-xs md:text-sm flex items-center">
                Built with <FaHeart className="text-red-500 mx-1 animate-pulse text-xs" /> using
              </span>
              <div className="flex space-x-2">
                <SiReact className="text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm" title="React" />
                <SiTailwindcss className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 text-sm" title="Tailwind CSS" />
                <SiNodedotjs className="text-green-500 hover:text-green-400 transition-colors duration-300 text-sm" title="Node.js" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;