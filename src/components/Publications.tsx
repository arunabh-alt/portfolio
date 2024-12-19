import React from 'react';
import { ExternalLink } from 'lucide-react';
import { publicationsData } from '../data/publications';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-gray-50 to-gray-200 relative">
      {/* SVG Animation Background */}
      <svg
        className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 120 120"
      >
        <circle cx="60" cy="60" r="50" stroke="#4C6EF5" strokeWidth="4" fill="none">
          <animate
            attributeName="r"
            from="50"
            to="40"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
            keyTimes="0;0.5;1"
            values="50;40;50"
          />
        </circle>
      </svg>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="lg:text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            My Publications
          </h2>
          
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {publicationsData.map((publication) => (
            <div
              key={publication.title}
              className="bg-white p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-300 relative overflow-hidden"
            >
              {/* Publication Header */}
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {publication.title}
                    {publication.isFirstAuthor && (
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        First Author
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-gray-600">{publication.journal}</p>
                </div>
                <a
                  href={publication.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center transition-colors duration-200"
                >
                  <ExternalLink className="h-6 w-6" />
                </a>
              </div>

              {/* Publication Type */}
              <div className="mt-3">
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    publication.type === 'article'
                      ? 'bg-purple-100 text-purple-800'
                      : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {publication.type.charAt(0).toUpperCase() + publication.type.slice(1)}
                </span>
              </div>

              {/* SVG on hover - Optional animation */}
              <svg
                className="absolute bottom-0 right-0 w-24 h-24 text-blue-500 opacity-30 transform scale-0 hover:scale-100 transition-all duration-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 120 120"
              >
                <circle cx="60" cy="60" r="40" stroke="#4C6EF5" strokeWidth="4" fill="none">
                  <animate
                    attributeName="r"
                    from="40"
                    to="30"
                    dur="1s"
                    begin="0s"
                    repeatCount="indefinite"
                    keyTimes="0;0.5;1"
                    values="40;30;40"
                  />
                </circle>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
