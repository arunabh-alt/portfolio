import React from 'react';
import { Building2, MapPin, Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { experienceData } from '../data/experience';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated SVG Network Background */}
      <div className="absolute inset-0 z-0">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          className="w-full h-full opacity-20 animate-spin-slow"
        >
          <g fill="none" stroke="#4F8EF7" strokeWidth="0.5">
            <line x1="10" y1="10" x2="90" y2="10">
              <animate 
                attributeName="x1" 
                from="10" to="90" 
                dur="4s" 
                begin="0s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="10" y1="30" x2="90" y2="30">
              <animate 
                attributeName="x1" 
                from="10" to="90" 
                dur="5s" 
                begin="0.5s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="10" y1="50" x2="90" y2="50">
              <animate 
                attributeName="x1" 
                from="10" to="90" 
                dur="6s" 
                begin="1s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="10" y1="70" x2="90" y2="70">
              <animate 
                attributeName="x1" 
                from="10" to="90" 
                dur="4s" 
                begin="1.5s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="10" y1="90" x2="90" y2="90">
              <animate 
                attributeName="x1" 
                from="10" to="90" 
                dur="5s" 
                begin="2s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="10" y1="10" x2="10" y2="90">
              <animate 
                attributeName="y1" 
                from="10" to="90" 
                dur="5s" 
                begin="0s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="30" y1="10" x2="30" y2="90">
              <animate 
                attributeName="y1" 
                from="10" to="90" 
                dur="4s" 
                begin="0.5s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="50" y1="10" x2="50" y2="90">
              <animate 
                attributeName="y1" 
                from="10" to="90" 
                dur="6s" 
                begin="1s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="70" y1="10" x2="70" y2="90">
              <animate 
                attributeName="y1" 
                from="10" to="90" 
                dur="4s" 
                begin="1.5s" 
                repeatCount="indefinite" 
              />
            </line>
            <line x1="90" y1="10" x2="90" y2="90">
              <animate 
                attributeName="y1" 
                from="10" to="90" 
                dur="5s" 
                begin="2s" 
                repeatCount="indefinite" 
              />
            </line>
          </g>
        </svg>
      </div>

      {/* Content Section with Black Text */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12 relative z-10">
          {/* Content above the animation */}
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              My Professional Journey
            </span>
          </div>
          <h2 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
            <span className="block mb-2">Professional Experience</span>
          </h2>
          <p className="mt-6 max-w-md mx-auto text-lg text-black sm:text-xl md:mt-8 md:max-w-3xl">
            A detailed overview of my journey in AI/ML, software development, and impactful projects.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="mt-12 space-y-8">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className="bg-gray-800 bg-opacity-90 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-2 font-poppins">{exp.title}</h3>
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-medium text-white mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
