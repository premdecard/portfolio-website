import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
          filter: 'brightness(0.3)'
        }}
      ></div>
      
      {/* Gradient Overlay - Black to Grey only */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-gray-900/70 to-zinc-900/80"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(100, 116, 139, 0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(100, 116, 139, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }}></div>
      
      {/* Animated particles - Blue/Cyan only (no pink) */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400/60 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-cyan-400/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-slate-400/60 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-blue-500/50 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-cyan-500/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Glowing effects - Grey/Blue tones only */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-slate-600/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      {/* Noise texture for depth */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat'
      }}></div>
    </div>
  );
};

export default AnimatedBackground;
