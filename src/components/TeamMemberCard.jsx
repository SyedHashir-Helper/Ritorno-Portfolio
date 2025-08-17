import React from 'react';
import { Linkedin, ExternalLink } from 'lucide-react';

const TeamMemberCard = ({ member }) => {
  return (
    <div className="group">
      <div className="bg-gray-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-800/30 hover:border-red-600/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/30 h-full hover:shadow-xl hover:shadow-red-600/10">
        <div className="flex flex-col items-center text-center space-y-4 sm:space-y-6">
          <div className="relative">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-gray-700/50 group-hover:border-red-600/50 transition-all duration-500 shadow-xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-red-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          
          <div className="space-y-3 sm:space-y-4 w-full">
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{member.name}</h3>
              <p className="text-red-400 font-bold text-base sm:text-lg">{member.designation}</p>
              <p className="text-gray-300 leading-relaxed font-light text-sm sm:text-base">{member.bio}</p>
              <div className="text-gray-400 text-xs sm:text-sm font-semibold">{member.achievements}</div>
            </div>

            {/* Expertise Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {member.expertise.map((skill, i) => (
                <span 
                  key={i}
                  className="px-2 sm:px-3 py-1 bg-red-600/10 border border-red-600/30 rounded-lg text-red-300 text-xs font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="flex justify-center space-x-4 pt-3 sm:pt-4">
              <a 
                href={member.linkedin}
                className="group/link text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-xl hover:bg-blue-400/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 group-hover/link:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href={member.portfolio}
                className="group/link text-gray-400 hover:text-red-400 transition-colors duration-300 p-2 rounded-xl hover:bg-red-400/10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 sm:w-6 sm:h-6 group-hover/link:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;