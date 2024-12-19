import React from 'react';
import { Github } from 'lucide-react';
import { projectsData } from '../data/projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-gray-900 sm:text-6xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Dive into a selection of projects that showcase my expertise in software development, design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projectsData.map((project) => (
            <motion.article
              key={project.title}
              className="relative group bg-white rounded-xl shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }} // Animates on hover
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Background Animation */}
              <div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-80 group-hover:opacity-40 transition-opacity duration-300"
                aria-hidden="true"
              ></div>
            
              {/* Content */}
              <div className="relative p-6 space-y-4 z-10">
                {/* Title and GitHub Link */}
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors relative z-20"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                </div>
            
                {/* Description */}
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {project.description}
                </p>
            
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
