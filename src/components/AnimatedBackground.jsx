import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0F0F10]">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(71, 85, 105, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(71, 85, 105, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>
      
      {/* Floating Shapes */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-slate-400/20 rounded-full animate-float" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-indigo-400/20 rounded-full animate-float" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
      <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-blue-400/20 rounded-full animate-float" style={{ animationDelay: '0.5s', animationDuration: '6s' }}></div>
      
      {/* Geometric Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgba(100, 116, 139, 0.3)" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        <line x1="0" y1="20%" x2="100%" y2="20%" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" className="animate-line-draw" />
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(99, 102, 241, 0.2)" strokeWidth="1" className="animate-line-draw" style={{ animationDelay: '1s' }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" stroke="rgba(71, 85, 105, 0.2)" strokeWidth="1" className="animate-line-draw" style={{ animationDelay: '2s' }} />
        
        <circle cx="20%" cy="30%" r="150" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="2" className="animate-spin-slow" />
        <circle cx="80%" cy="70%" r="200" fill="none" stroke="rgba(99, 102, 241, 0.1)" strokeWidth="2" className="animate-spin-slow-reverse" />
      </svg>
      
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
    </div>
  );
};

export default AnimatedBackground;
