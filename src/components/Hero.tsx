import React, { useEffect, useState } from 'react';

const NeuralNetworkAnimation = () => {
  const [nodes, setNodes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize random nodes
    const generatedNodes = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 800,
      y: Math.random() * 600,
    }));
    setNodes(generatedNodes);

    // Animation offset updater
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 1000);
    }, 20);

    // Trigger entrance animation after mount
    setTimeout(() => setIsVisible(true), 100);

    return () => clearInterval(interval);
  }, []);

  const getConnectionOpacity = (x1, y1, x2, y2) => {
    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return Math.max(0, 1 - distance / 300);
  };

  return (
    <div id="hero" className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="100%" stopColor="#4facfe" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Draw connections */}
        {nodes.map((node, i) =>
          nodes.slice(i + 1).map((target, j) => {
            const opacity = getConnectionOpacity(node.x, node.y, target.x, target.y);
            if (opacity > 0) {
              return (
                <g key={`connection-${i}-${j}`} opacity={opacity}>
                  <path
                    d={`M${node.x},${node.y} Q${(node.x + target.x) / 2},${
                      (node.y + target.y) / 2 + Math.sin(offset / 20) * 20
                    } ${target.x},${target.y}`}
                    stroke="url(#connection-gradient)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="4"
                    strokeDashoffset={-offset}
                  />
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r="2"
                    fill="#4facfe"
                    filter="url(#glow)"
                  >
                    <animateMotion
                      dur={`${2 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                      path={`M${node.x},${node.y} Q${(node.x + target.x) / 2},${
                        (node.y + target.y) / 2 + Math.sin(offset / 20) * 20
                      } ${target.x},${target.y}`}
                    />
                  </circle>
                </g>
              );
            }
            return null;
          })
        )}

        {/* Draw nodes */}
        {nodes.map((node) => (
          <circle
            key={node.id}
            cx={node.x}
            cy={node.y}
            r="4"
            fill="#fff"
            filter="url(#glow)"
            opacity={getConnectionOpacity(node.x, node.y, node.x, node.y)}
          />
        ))}
      </svg>

      {/* Content */}
      <div className={`relative z-10 text-center text-white max-w-xl mx-auto transform transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="space-y-8">
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 animate-pulse">
            Hi, I'm Arunabh Bora
          </h1>
          <p className="text-xl font-light tracking-wide leading-relaxed text-gray-300">
            Crafting intelligent solutions through
            <span className="font-medium text-blue-400 mx-2">machine learning</span>
            and
            <span className="font-medium text-cyan-300 mx-2">data-driven</span>
            innovation
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:from-blue-500 hover:to-cyan-400"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default NeuralNetworkAnimation;