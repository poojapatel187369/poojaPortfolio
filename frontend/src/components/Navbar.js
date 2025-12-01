import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [logoHovered, setLogoHovered] = useState(false);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('button[aria-label="menu"]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Projects', 'Achievements', 'Contact'];

  const scrollToSection = (sectionName) => {
    const element = document.getElementById(sectionName.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav 
      ref={navbarRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl py-2 animate-navbar-scroll' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-3">
            <div 
              className="relative group"
              onMouseEnter={() => setLogoHovered(true)}
              onMouseLeave={() => setLogoHovered(false)}
            >
              <div className="font-bold text-2xl bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 animate-logo-glow">
                Pooja Patel
              </div>
              <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-500 ${
                logoHovered ? 'w-full animate-underline-expand' : 'w-0'
              }`}></div>
              
              {/* Floating particles effect */}
              <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-1"></div>
              <div className="absolute -top-1 -right-4 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 animate-float-particle-2"></div>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={item} className="relative group">
                <button
                  onClick={() => scrollToSection(item)}
                  className={`relative px-6 py-3 font-medium text-sm uppercase tracking-wider transition-all duration-500 transform hover:scale-105 animate-nav-item ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary font-semibold animate-active-pulse'
                      : 'text-gray-600 hover:text-primary'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <span className="relative z-10 animate-text-glow">{item}</span>
                  
                  {/* Hover Background Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-600/10 rounded-xl transition-all duration-500 transform scale-0 group-hover:scale-100 animate-bg-expand ${
                    activeSection === item.toLowerCase() ? 'scale-100 animate-active-bg' : ''
                  }`}></div>
                  
                  {/* Active Indicator */}
                  <div className={`absolute bottom-0 left-1/2 h-0.5 bg-gradient-to-r from-primary to-blue-600 transition-all duration-500 transform -translate-x-1/2 group-hover:w-3/4 animate-indicator-grow ${
                    activeSection === item.toLowerCase() ? 'w-3/4 animate-indicator-pulse' : 'w-0'
                  }`}></div>
                  
                  {/* Hover Border Animation */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary to-blue-600 bg-clip-padding transition-all duration-500 opacity-0 group-hover:opacity-100 animate-border-glow">
                    <div className="absolute inset-[2px] rounded-lg bg-white"></div>
                  </div>

                  {/* Ripple effect on click */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-100 group-active:animate-ripple"></div>
                </button>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-3 rounded-xl transition-all duration-500 ${
                isOpen 
                  ? 'bg-primary text-white rotate-180 shadow-lg animate-burger-rotate' 
                  : 'bg-gray-100 text-gray-700 hover:bg-primary hover:text-white hover:shadow-md animate-burger-hover'
              }`}
              aria-label="menu"
            >
              <div className="relative w-6 h-6 transition-transform duration-500">
                <span className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isOpen ? 'rotate-45 animate-line-1' : '-translate-y-2 animate-line-1-reverse'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isOpen ? 'opacity-0 animate-line-2' : 'opacity-100 animate-line-2-reverse'
                }`}></span>
                <span className={`absolute top-1/2 left-1/2 w-4 h-0.5 bg-current transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                  isOpen ? '-rotate-45 animate-line-3' : 'translate-y-2 animate-line-3-reverse'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu - SCROLLABLE VERSION */}
        <div 
          ref={mobileMenuRef}
          className={`lg:hidden fixed left-0 right-0 mx-4 transition-all duration-700 ease-in-out ${
            isOpen 
              ? 'max-h-[80vh] opacity-100 mt-4 animate-mobile-menu-open shadow-2xl' 
              : 'max-h-0 opacity-0 pointer-events-none animate-mobile-menu-close'
          }`}
          style={{
            top: navbarRef.current ? navbarRef.current.offsetHeight + 20 : '4rem'
          }}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
            {/* Scrollable Container */}
            <div 
              className="max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100"
              style={{
                scrollBehavior: 'smooth'
              }}
            >
              {navItems.map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`relative w-full text-left px-6 py-4 transition-all duration-300 hover:bg-gray-100/80 animate-mobile-item ${
                    activeSection === item.toLowerCase()
                      ? 'text-primary font-semibold bg-primary/10 animate-mobile-active'
                      : 'text-gray-700 hover:text-primary'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm uppercase tracking-wide animate-text-slide">
                      {item}
                    </span>
                    
                    {/* Active Indicator */}
                    <div className={`w-2 h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full transition-all duration-300 ${
                      activeSection === item.toLowerCase() 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-0'
                    }`}></div>
                  </div>
                  
                  {/* Mobile Active Indicator Line */}
                  <div className={`absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-primary to-blue-600 rounded-r transform -translate-y-1/2 transition-all duration-500 ${
                    activeSection === item.toLowerCase() ? 'opacity-100 animate-indicator-slide' : 'opacity-0'
                  }`}></div>
                </button>
              ))}
            </div>
            
            {/* Close button for mobile */}
            <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-white/95 pt-2 pb-3 px-4 border-t border-gray-200">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-3 bg-gradient-to-r from-primary to-blue-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay when mobile menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      <style jsx>{`
        @keyframes navbar-scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        @keyframes logo-glow {
          0%, 100% { filter: drop-shadow(0 0 0px rgba(59, 130, 246, 0)); }
          50% { filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.5)); }
        }
        @keyframes underline-expand {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes float-particle-1 {
          0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
          50% { transform: translate(-5px, -5px) scale(1); opacity: 1; }
        }
        @keyframes float-particle-2 {
          0%, 100% { transform: translate(0, 0) scale(0); opacity: 0; }
          50% { transform: translate(-3px, -8px) scale(1); opacity: 0.7; }
        }
        @keyframes nav-item {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes active-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 0px rgba(59, 130, 246, 0); }
          50% { text-shadow: 0 0 8px rgba(59, 130, 246, 0.3); }
        }
        @keyframes bg-expand {
          0% { transform: scale(0); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes active-bg {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        @keyframes indicator-grow {
          0% { width: 0; }
          100% { width: 75%; }
        }
        @keyframes indicator-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes border-glow {
          0% { opacity: 0; box-shadow: 0 0 0px rgba(59, 130, 246, 0); }
          100% { opacity: 1; box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); }
        }
        @keyframes ripple {
          0% { background: rgba(59, 130, 246, 0.1); transform: scale(0); }
          50% { transform: scale(1); }
          100% { opacity: 0; }
        }
        @keyframes burger-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(180deg); }
        }
        @keyframes burger-hover {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes line-1 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(45deg); }
        }
        @keyframes line-1-reverse {
          0% { transform: translate(-50%, -50%) rotate(45deg); }
          100% { transform: translate(-50%, -200%) rotate(0deg); }
        }
        @keyframes line-2 {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        @keyframes line-2-reverse {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes line-3 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-45deg); }
        }
        @keyframes line-3-reverse {
          0% { transform: translate(-50%, -50%) rotate(-45deg); }
          100% { transform: translate(-50%, 200%) rotate(0deg); }
        }
        @keyframes mobile-menu-open {
          0% { 
            max-height: 0; 
            opacity: 0; 
            transform: translateY(-20px) scale(0.95); 
          }
          100% { 
            max-height: 80vh; 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        @keyframes mobile-menu-close {
          0% { 
            max-height: 80vh; 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
          100% { 
            max-height: 0; 
            opacity: 0; 
            transform: translateY(-20px) scale(0.95); 
          }
        }
        @keyframes mobile-item {
          0% { opacity: 0; transform: translateX(-30px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes mobile-active {
          0%, 100% { background-color: rgba(59, 130, 246, 0.05); }
          50% { background-color: rgba(59, 130, 246, 0.1); }
        }
        @keyframes text-slide {
          0% { transform: translateX(-10px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes indicator-slide {
          0% { transform: translateY(-50%) scaleX(0); opacity: 0; }
          100% { transform: translateY(-50%) scaleX(1); opacity: 1; }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-navbar-scroll { animation: navbar-scroll 0.5s ease-out; }
        .animate-logo-glow { animation: logo-glow 2s ease-in-out infinite; }
        .animate-underline-expand { animation: underline-expand 0.5s ease-out; }
        .animate-float-particle-1 { animation: float-particle-1 2s ease-in-out infinite; }
        .animate-float-particle-2 { animation: float-particle-2 2s ease-in-out 0.5s infinite; }
        .animate-nav-item { animation: nav-item 0.6s ease-out both; }
        .animate-active-pulse { animation: active-pulse 2s ease-in-out infinite; }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
        .animate-bg-expand { animation: bg-expand 0.3s ease-out; }
        .animate-active-bg { animation: active-bg 2s ease-in-out infinite; }
        .animate-indicator-grow { animation: indicator-grow 0.3s ease-out; }
        .animate-indicator-pulse { animation: indicator-pulse 2s ease-in-out infinite; }
        .animate-border-glow { animation: border-glow 0.3s ease-out; }
        .animate-ripple { animation: ripple 0.6s ease-out; }
        .animate-burger-rotate { animation: burger-rotate 0.5s ease-out; }
        .animate-burger-hover { animation: burger-hover 0.3s ease-in-out; }
        .animate-line-1 { animation: line-1 0.5s ease-out both; }
        .animate-line-1-reverse { animation: line-1-reverse 0.5s ease-out both; }
        .animate-line-2 { animation: line-2 0.5s ease-out both; }
        .animate-line-2-reverse { animation: line-2-reverse 0.5s ease-out both; }
        .animate-line-3 { animation: line-3 0.5s ease-out both; }
        .animate-line-3-reverse { animation: line-3-reverse 0.5s ease-out both; }
        .animate-mobile-menu-open { animation: mobile-menu-open 0.7s ease-out; }
        .animate-mobile-menu-close { animation: mobile-menu-close 0.7s ease-out; }
        .animate-mobile-item { animation: mobile-item 0.5s ease-out both; }
        .animate-mobile-active { animation: mobile-active 2s ease-in-out infinite; }
        .animate-text-slide { animation: text-slide 0.5s ease-out both; }
        .animate-indicator-slide { animation: indicator-slide 0.5s ease-out both; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }

        /* Custom scrollbar styles */
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #1d4ed8);
          border-radius: 4px;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;