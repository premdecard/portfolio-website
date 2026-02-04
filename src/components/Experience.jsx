import React from 'react';
import { Card } from './ui/card';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experience } from '../mock';

const ExperienceCard = ({ exp }) => {
  const responsibilities = [];
  for (let i = 0; i < exp.responsibilities.length; i++) {
    responsibilities.push(
      <li key={`resp-${exp.id}-${i}`} className="flex items-start gap-3 text-slate-300">
        <span className="text-blue-400 mt-1.5">•</span>
        <span>{exp.responsibilities[i]}</span>
      </li>
    );
  }

  return (
    <Card className="bg-[#0F0F10] border-slate-800 p-8 hover:border-slate-700 transition-all duration-300 hover:transform hover:translate-x-2">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <div className="p-2 rounded-lg bg-slate-800/50 mt-1">
              <Briefcase className="text-blue-400" size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-medium text-white mb-1">{exp.role}</h3>
              <p className="text-xl text-slate-400">{exp.company}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4 md:mt-0 md:text-right">
          <div className="flex items-center gap-2 text-slate-400 md:justify-end">
            <Calendar size={16} />
            <span className="text-sm">{exp.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 md:justify-end">
            <MapPin size={16} />
            <span className="text-sm">{exp.location}</span>
          </div>
        </div>
      </div>

      <div className="ml-0 md:ml-14">
        <ul className="space-y-2">
          {responsibilities}
        </ul>
      </div>
    </Card>
  );
};

const Experience = () => {
  const experienceCards = [];
  for (let i = 0; i < experience.length; i++) {
    experienceCards.push(<ExperienceCard key={experience[i].id} exp={experience[i]} />);
  }

  return (
    <section id="experience" className="py-24 bg-[#1A1A1B]">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-transparent via-slate-500 to-transparent mx-auto"></div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experienceCards}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
