import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code2, Database, Layout, Cloud } from 'lucide-react';
import { profileData, skills } from '../mock';

const About = () => {
  // Build frontend badges
  const frontendBadges = [];
  for (let i = 0; i < skills.frontend.length; i++) {
    frontendBadges.push(
      <Badge 
        key={`frontend-${i}`}
        variant="secondary" 
        className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 px-3 py-1 text-sm transition-colors duration-200"
      >
        {skills.frontend[i].name}
      </Badge>
    );
  }

  // Build backend badges
  const backendBadges = [];
  for (let i = 0; i < skills.backend.length; i++) {
    backendBadges.push(
      <Badge 
        key={`backend-${i}`}
        variant="secondary" 
        className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 px-3 py-1 text-sm transition-colors duration-200"
      >
        {skills.backend[i].name}
      </Badge>
    );
  }

  // Build database badges
  const databaseBadges = [];
  for (let i = 0; i < skills.database.length; i++) {
    databaseBadges.push(
      <Badge 
        key={`database-${i}`}
        variant="secondary" 
        className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 px-3 py-1 text-sm transition-colors duration-200"
      >
        {skills.database[i].name}
      </Badge>
    );
  }

  // Build tools badges
  const toolsBadges = [];
  for (let i = 0; i < skills.tools.length; i++) {
    toolsBadges.push(
      <Badge 
        key={`tools-${i}`}
        variant="secondary" 
        className="bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 px-3 py-1 text-sm transition-colors duration-200"
      >
        {skills.tools[i].name}
      </Badge>
    );
  }

  return (
    <section id="about" className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
          </div>

          {/* Bio */}
          <div className="mb-16">
            <Card className="bg-[#1A1A1B] border-slate-800 p-8 hover:border-slate-700 transition-colors duration-300">
              <p className="text-lg text-slate-300 leading-relaxed">
                {profileData.bio}
              </p>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Frontend */}
            <Card className="bg-[#1A1A1B] border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/50">
                  <Layout className="text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {frontendBadges}
              </div>
            </Card>

            {/* Backend */}
            <Card className="bg-[#1A1A1B] border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/50">
                  <Code2 className="text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {backendBadges}
              </div>
            </Card>

            {/* Database */}
            <Card className="bg-[#1A1A1B] border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/50">
                  <Database className="text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {databaseBadges}
              </div>
            </Card>

            {/* Tools */}
            <Card className="bg-[#1A1A1B] border-slate-800 p-6 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-slate-800/50">
                  <Cloud className="text-orange-400" size={24} />
                </div>
                <h3 className="text-xl font-medium text-white">Tools & Cloud</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {toolsBadges}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
