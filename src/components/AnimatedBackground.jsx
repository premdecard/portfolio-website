import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800"></div>
      
      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
      
      {/* Geometric Pattern SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Hexagon Pattern */}
          <pattern id="hexagons" width="100" height="87" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
            <path d="M25 0 L50 14.43 L50 43.3 L25 57.73 L0 43.3 L0 14.43 Z" 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  strokeWidth="1"/>
          </pattern>
          
          {/* Triangle Pattern */}
          <pattern id="triangles" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M0 80 L40 0 L80 80 Z" 
                  fill="rgba(139, 92, 246, 0.05)" 
                  stroke="rgba(255, 255, 255, 0.1)" 
                  strokeWidth="1"/>
          </pattern>
          
          {/* Gradient Definitions */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgb(79, 70, 229)', stopOpacity: 0.3}} />
            <stop offset="100%" style={{stopColor: 'rgb(219, 39, 119)', stopOpacity: 0.3}} />
          </linearGradient>
        </defs>
        
        {/* Apply Patterns */}
        <rect width="100%" height="100%" fill="url(#hexagons)" />
        <rect width="100%" height="100%" fill="url(#triangles)" opacity="0.5" />
        
        {/* Floating Geometric Shapes */}
        <polygon points="150,50 200,100 150,150 100,100" 
                 fill="url(#grad1)" 
                 opacity="0.4"
                 className="animate-float" />
        
        <polygon points="1650,200 1700,250 1650,300 1600,250" 
                 fill="url(#grad1)" 
                 opacity="0.3"
                 className="animate-float" 
                 style={{animationDelay: '1s', animationDuration: '5s'}} />
        
        <circle cx="300" cy="600" r="60" 
                fill="rgba(167, 139, 250, 0.2)" 
                className="animate-pulse" />
        
        <circle cx="1500" cy="700" r="80" 
                fill="rgba(219, 39, 119, 0.2)" 
                className="animate-pulse" 
                style={{animationDelay: '1.5s'}} />
      </svg>
      
      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent animate-pulse" style={{ animationDuration: '3s' }}></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
    </div>
  );
};

export default AnimatedBackground;
