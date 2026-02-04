import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profileData } from '../mock';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-slate-300 text-sm">Available for opportunities</span>
          </div>

          {/* Name and Title */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-white mb-4 tracking-tight">
            {profileData.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-slate-400 mb-6">
            {profileData.title}
          </h2>

          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            {profileData.tagline}
          </p>

          {/* Location and Experience */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-slate-400">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>{profileData.location}</span>
            </div>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-slate-300">{profileData.experience}</span>
              <span>Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-slate-200 transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:text-white transition-all duration-300"
              onClick={() => scrollToSection('projects')}
            >
              View Projects
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href={profileData.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href={profileData.github} 
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:scale-110 transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a 
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-full bg-slate-800/50 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-700/50 hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-slate-600 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;