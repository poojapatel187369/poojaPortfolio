import React from 'react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const { personalInfo } = portfolioData;

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate CSE Student | MERN Stack Developer | Creative Problem Solver
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="/about/college-photoo.jpg"
                  alt="Pooja Patel - CSE Student"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback if image doesn't load */}
                <div className="hidden w-full h-full items-center justify-center flex-col bg-gray-100 text-gray-500">
                  <div className="text-4xl mb-2">👩‍💻</div>
                  <p className="font-medium">Profile Photo</p>
                </div>
              </div>
              
              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-white rounded-lg px-4 py-2 shadow-lg">
                <div className="text-center">
                  <div className="font-bold">A+ Grade</div>
                  <div className="text-xs">Softpro Intern</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Hello, I'm <span className="text-primary">{personalInfo.name}</span>
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  I'm a passionate <strong>4th year Computer Science Engineering</strong> student at 
                  Saraswati Higher Education College (AKTU University). My journey in technology 
                  is driven by curiosity and a love for creating digital solutions.
                </p>
                
                <p>
                  Recently, I completed a <strong>60-day MERN Stack internship at Softpro</strong> where 
                  I received an <strong>A+ grade</strong> for my performance. This experience gave me 
                  hands-on exposure to real-world web development projects.
                </p>

                <p>
                  I believe in writing clean, efficient code and creating user-friendly applications 
                  that solve real problems. My strength lies in quick learning and adapting to 
                  new technologies.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center border border-blue-100">
                <div className="text-xl font-bold text-primary">4th Year</div>
                <div className="text-sm text-gray-600">CSE Student</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center border border-green-100">
                <div className="text-xl font-bold text-green-600">A+</div>
                <div className="text-sm text-gray-600">Intern Grade</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 text-center border border-purple-100">
                <div className="text-xl font-bold text-purple-600">60 Days</div>
                <div className="text-sm text-gray-600">Internship</div>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">My Strengths</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Quick Learner
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Good Communicator
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Team Player
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Interests & Goals */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Interests */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-primary mr-2">🎯</span>
              What Drives Me
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Creating innovative web solutions that make a difference</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Continuous learning and mastering new technologies</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Building user-friendly and responsive applications</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Collaborating with teams to solve complex problems</span>
              </li>
            </ul>
          </div>

          {/* Career Vision */}
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="text-primary mr-2">🚀</span>
              My Vision
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Become an expert in full-stack web development</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Work on challenging and meaningful projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Contribute to open-source communities</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 mt-1">•</span>
                <span>Mentor and help other aspiring developers</span>
              </li>
            </ul>
          </div>
        </div>

        {/* College Life Section */}
        <div className="mt-8 bg-gradient-to-r from-primary to-blue-600 rounded-lg p-6 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-3">Beyond Academics</h4>
              <p className="text-white/90 leading-relaxed">
                When I'm not coding, you'll find me participating in college tech events, 
                collaborating with peers on projects, or exploring new technologies. 
                I believe in maintaining a balance between academic learning and practical 
                application through hands-on projects and team collaborations.
              </p>
            </div>
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-white/20 flex items-center justify-center border-2 border-white/30">
              <img
                src="/about/college-activity.jpg"
                alt="College Activities"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden w-full h-full items-center justify-center">
                <div className="text-center">
                  <div className="text-xl">🌟</div>
                  <div className="text-xs mt-1">Campus Life</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;