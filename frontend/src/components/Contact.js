import React, { useState } from 'react';
import axios from 'axios';
import { portfolioData } from '../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log('🔄 Sending message...', formData);
      
      const response = await axios.post(
        'http://localhost:5000/api/contact', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000
        }
      );
      
      console.log('✅ Message sent successfully:', response.data);
      
      setSubmitStatus({ 
        type: 'success', 
        message: response.data.message 
      });
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('❌ Error sending message:', error);
      
      let errorMessage = 'Failed to send message. Please try again.';
      
      if (error.response?.data?.error) {
        errorMessage = error.response.data.error;
      } else if (error.code === 'ECONNABORTED') {
        errorMessage = 'Request timeout. Please check your connection.';
      } else if (!error.response) {
        errorMessage = 'Network error. Please make sure the backend server is running.';
      }
      
      setSubmitStatus({ 
        type: 'error', 
        message: errorMessage 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Consistent Heading Style - Same as Projects */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">Contact Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-4 animate-slide-in"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Let's discuss your project and build something amazing together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information - Enhanced */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's Connect</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the following channels.
              </p>
            </div>
            
            {/* Enhanced Contact Cards */}
            <div className="space-y-4">
              <div 
                onClick={() => window.location.href = `mailto:${portfolioData.personalInfo.email}`}
                className="flex items-center space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-102 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-blue-600 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600 text-sm">{portfolioData.personalInfo.email}</p>
                </div>
              </div>
              
              <div 
                onClick={() => window.location.href = `tel:${portfolioData.personalInfo.phone}`}
                className="flex items-center space-x-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-102 border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <FaPhone className="text-green-600 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600 text-sm">{portfolioData.personalInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-5 bg-white rounded-xl shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-purple-600 text-lg" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600 text-sm">{portfolioData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-3">
                <a
                  href="https://github.com/poojapatel187369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-900 transition-all duration-300 transform hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub className="text-lg text-gray-700 hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pooja-patel-154a842b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg text-gray-700 hover:text-white" />
                </a>
                <a
                  href={`mailto:${portfolioData.personalInfo.email}`}
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 transition-all duration-300 transform hover:scale-110"
                  title="Email"
                >
                  <FaEnvelope className="text-lg text-gray-700 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  minLength="2"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  minLength="10"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-gray-50 resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2 shadow-md"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`rounded-lg p-4 text-center animate-fade-in ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  <div className="flex items-center justify-center space-x-2">
                    {submitStatus.type === 'success' ? '✅' : '❌'}
                    <span>{submitStatus.message}</span>
                  </div>
                </div>
              )}
            </form>
            
            <div className="mt-6 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-sm text-center">
                <span className="font-medium">Response Time:</span> Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
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
        @keyframes slide-in {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-fade-in-down { animation: fade-in-down 1s ease-out; }
        .animate-expand-width { animation: expand-width 1.5s ease-out; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out both; }
        .animate-card-enter { animation: card-enter 0.8s ease-out both; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-slide-in { animation: slide-in 1s ease-out; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.3s both; }
      `}</style>
    </section>
  );
};

export default Contact;