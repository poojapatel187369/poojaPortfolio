import React, { useState } from 'react';
import axios from 'axios';
import { portfolioData } from '../data/portfolioData';
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperPlane } from 'react-icons/fa';
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';

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
        'https://poojaportfolio-backend.onrender.com/api/contact', 
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000 // 10 seconds timeout
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
        errorMessage = 'Request timeout. Please check your connection and try again.';
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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the following channels.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <HiMail className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">{portfolioData.personalInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <HiPhone className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <p className="text-gray-600">{portfolioData.personalInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <HiLocationMarker className="text-primary text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">{portfolioData.personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/poojapatel187369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  title="GitHub"
                >
                  <FaGithub className="text-lg text-gray-600 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/pooja-patel-154a842b0/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  title="LinkedIn"
                >
                  <FaLinkedin className="text-lg text-gray-600 group-hover:text-white" />
                </a>
                <a
                  href="mailto:poojapatel187369@gmail.com"
                  className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 transform hover:scale-110 group"
                  title="Email"
                >
                  <FaEnvelope className="text-lg text-gray-600 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white resize-none"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-secondary text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
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
                <div className={`rounded-lg p-4 text-center ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-50 border border-green-200 text-green-700' 
                    : 'bg-red-50 border border-red-200 text-red-700'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
