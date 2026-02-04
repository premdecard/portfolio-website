import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { profileData } from '../mock';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F10] border-t border-slate-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-light text-white mb-3">{profileData.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {profileData.title} specializing in building scalable applications with Angular and .NET.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-medium mb-4">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                <button onClick={() => scrollToSection('about')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                  About
                </button>
                <button onClick={() => scrollToSection('experience')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                  Experience
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-slate-400 hover:text-white transition-colors text-left text-sm">
                  Contact
                </button>
              </nav>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-medium mb-4">Connect</h4>
              <div className="space-y-3 mb-4">
                <a 
                  href={`mailto:${profileData.email}`} 
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Mail size={16} />
                  <span>Email</span>
                </a>
                <a 
                  href={profileData.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href={profileData.github}
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                © {currentYear} {profileData.name}. All rights reserved.
              </p>
              <p className="text-slate-400 text-sm flex items-center gap-1">
                Built with <Heart className="text-red-500" size={14} fill="currentColor" /> using React & .NET
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;