import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="min-w-full h-full flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          {/* Project Image - Smaller and more contained */}
          <div className="lg:col-span-2 relative group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-transparent rounded-2xl z-0 group-hover:from-red-600/30 transition-all duration-500"></div>
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-700"
            />
            
          </div>

          {/* Project Details - Takes more space */}
          <div className="lg:col-span-3 space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-full text-red-400 text-xs font-bold uppercase tracking-wider">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  <span>{project.category}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-gray-400 text-sm font-semibold">{project.subtitle}</h3>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {project.title}
                </h1>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light line-clamp-4">
                {project.description}
              </p>
            </div>

            {/* Technologies - More compact */}
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 6).map((tech, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/30 rounded-xl text-red-300 font-medium backdrop-blur-sm hover:scale-105 transition-transform duration-300 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Results - More compact grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.results.map((result, i) => (
                <div key={i} className="text-center p-3 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:scale-105">
                  <div className="text-red-400 font-black text-sm">{result}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button className="group inline-flex items-center space-x-3 bg-[#AD2831] hover:from-red-700 hover:to-red-800 px-5 py-2.5 rounded-xl transition-all duration-300 hover:scale-105 font-bold shadow-lg shadow-red-600/25 text-sm">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;