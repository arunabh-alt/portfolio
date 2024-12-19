import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-b from-blue-100 to-blue-300">
      {/* Animated Illustration as Background */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section Header */}
        <div className="lg:text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl leading-tight">About Me</h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Passionate AI/ML Engineer crafting intelligent solutions for tomorrow's challenges.
          </p>
        </div>

        <div className="mt-10">
          {/* Content Block with backdrop blur */}
          <div className="bg-white/90 backdrop-blur-lg rounded-xl shadow-2xl p-8 max-w-3xl mx-auto transition-all duration-500 transform hover:scale-105">
            {/* Bio Section */}
            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="leading-relaxed">
                I'm an Artificial Intelligence Engineer with a passion for developing cutting-edge AI solutions. With 3 months of professional experience and 5 months of industry research experience, I specialize in machine learning models, computer vision systems, and data-driven solutions that solve real-world problems.
              </p>
              
              <p className="mt-4 leading-relaxed">
                My academic journey at the University of Lincoln, where I earned my Master's in Robotics and Autonomous Systems with Distinction (77.1%), has equipped me with a strong theoretical foundation and practical skills in AI/ML technologies.
              </p>

              {/* Core Competencies Section */}
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Core Competencies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <ul className="list-none space-y-4">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-lg font-medium">Machine Learning Model Development</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-lg font-medium">Computer Vision Systems</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-lg font-medium">Large Language Models (LLMs)</span>
                    </li>
                  </ul>
                  <ul className="list-none space-y-4">
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-lg font-medium">Full-stack Testing</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-lg font-medium">Cloud Computing (AWS)</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"></span>
                      <span className="text-lg font-medium">IoT Device Management</span>
                    </li>
                  </ul>
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
