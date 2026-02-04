import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { projects } from '../mock';

const ProjectCard = ({ project }) => {
  const techBadges = [];
  for (let i = 0; i < project.technologies.length; i++) {
    techBadges.push(
      <Badge 
        key={`tech-${project.id}-${i}`}
        variant="secondary" 
        className="bg-slate-800/50 text-slate-300 border border-slate-700/50 px-3 py-1"
      >
        {project.technologies[i]}
      </Badge>
    );
  }

  const featuresList = [];
  for (let i = 0; i < project.features.length; i++) {
    featuresList.push(
      <li key={`feature-${project.id}-${i}`} className="flex items-start gap-2 text-sm text-slate-200">
        <CheckCircle2 className="text-green-500 mt-0.5 flex-shrink-0" size={16} />
        <span>{project.features[i]}</span>
      </li>
    );
  }

  return (
    <Card className="bg-white/5 backdrop-blur-md border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:transform hover:scale-[1.02] group">
      {/* Project Image */}
      <div className="relative h-56 overflow-hidden bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1B] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-medium text-white mb-3">{project.title}</h3>
        <p className="text-slate-200 mb-4 leading-relaxed">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techBadges}
        </div>

        {/* Features */}
        <div>
          <h4 className="text-sm font-medium text-slate-300 mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {featuresList}
          </ul>
        </div>
      </div>
    </Card>
  );
};

const Projects = () => {
  const projectCards = [];
  for (let i = 0; i < projects.length; i++) {
    projectCards.push(<ProjectCard key={projects[i].id} project={projects[i]} />);
  }

  return (
    <section id="projects" className="py-24 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto mb-4"></div>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              A selection of projects showcasing my expertise in full-stack development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectCards}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
