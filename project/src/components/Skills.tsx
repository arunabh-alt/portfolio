import React from 'react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { skillsData } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/30 to-black/70" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Sparkles Animation */}
        <div className="absolute top-10 left-10 animate-pulse">
          <Sparkles className="w-12 h-12 text-gray-400/20" />
        </div>
        <div className="absolute bottom-10 right-10 animate-pulse delay-300">
          <Sparkles className="w-12 h-12 text-gray-400/20" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="inline-block">
            <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-800 mb-8">
              <Sparkles className="w-4 h-4 mr-2" />
              Mastery & Expertise
            </span>
          </div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            <span className="block mb-2">Skills & Expertise</span>
            <span className="block text-gray-600">Showcasing Versatility</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="relative bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-3">
                <CheckCircle className="w-6 h-6 text-gray-500 mr-2" />
                <h3 className="text-lg font-semibold text-gray-800 font-poppins">
                  {category.category}
                </h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="relative flex items-center bg-gray-200 rounded-full overflow-hidden h-6 shadow-sm"
                  >
                    <div
                      className="bg-gray-600 h-full flex items-center justify-center rounded-full"
                      style={{ width: `${skill.proficiency}%` }}  // Use proficiency here
                    >
                      <span className="text-xs text-white font-medium px-3">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-0" />
    </section>
  );
};

export default Skills;
