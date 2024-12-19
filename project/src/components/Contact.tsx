import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-20 bg-gray-100 min-h-screen overflow-hidden"
    >
      {/* Animated SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-full h-full opacity-20"
        >
          {/* Bouncing Circles Animation */}
          <circle
            cx="20"
            cy="20"
            r="5"
            fill="#4F8EF7"
          >
            <animate
              attributeName="cy"
              values="20;80;20"
              dur="3s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="50"
            cy="20"
            r="5"
            fill="#4F8EF7"
          >
            <animate
              attributeName="cy"
              values="20;80;20"
              dur="3.5s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx="80"
            cy="20"
            r="5"
            fill="#4F8EF7"
          >
            <animate
              attributeName="cy"
              values="20;80;20"
              dur="4s"
              keyTimes="0;0.5;1"
              repeatCount="indefinite"
            />
          </circle>

          {/* Rotating Squares Animation */}
          <rect
            x="10"
            y="50"
            width="10"
            height="10"
            fill="#4F8EF7"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 10 55"
              to="360 10 55"
              dur="5s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="40"
            y="50"
            width="10"
            height="10"
            fill="#4F8EF7"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 45 55"
              to="360 45 55"
              dur="6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect
            x="70"
            y="50"
            width="10"
            height="10"
            fill="#4F8EF7"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 75 55"
              to="360 75 55"
              dur="7s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Wavy Line Animation */}
          <path
            d="M 0 80 C 20 60, 40 60, 60 80 S 100 100, 100 80"
            fill="transparent"
            stroke="#4F8EF7"
            strokeWidth="1"
          >
            <animate
              attributeName="d"
              values="M 0 80 C 20 60, 40 60, 60 80 S 100 100, 100 80; M 0 80 C 20 50, 40 50, 60 80 S 100 100, 100 80"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Content Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 relative z-10">
          {/* Content above the animation */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
              <Mail className="w-4 h-4 mr-2" />
              Let's Connect
            </span>
          </div>
          <motion.h2
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="block mb-2">Get in Touch</span>
          </motion.h2>
          <motion.p
            className="mt-6 max-w-md mx-auto text-lg text-gray-600 sm:text-xl md:mt-8 md:max-w-3xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            Feel free to reach out for collaborations or just a friendly chat.
          </motion.p>
        </div>

        {/* Contact Information and Message Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <a
                  href="mailto:arunabhbora.ab@gmail.com"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  arunabhbora.ab@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">+44-739-3062-082</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span className="text-gray-600">LN1 1RT, Lincoln, United Kingdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="h-5 w-5 text-blue-600" />
                <a
                  href="https://linkedin.com/in/arunabhbora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  linkedin.com/in/arunabhbora
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-blue-600" />
                <a
                  href="https://github.com/arunabh-alt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  github.com/arunabh-alt
                </a>
              </div>
            </div>
          </motion.div>

          {/* Send a Message Form */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
