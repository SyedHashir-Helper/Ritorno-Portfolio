import React from 'react';
import { ArrowUpRight, Zap, Home, Briefcase, Users, Phone } from 'lucide-react';
import logo from "../assets/r-logo.png"
const Sidebar = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Zap },
    { id: 'team', label: 'Team', icon: Users },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  return (
    <div className={`fixed left-6 top-6 bottom-6 w-80 bg-gray-900/20 backdrop-blur-2xl border border-gray-800/50 z-40 transform transition-all duration-500 rounded-3xl shadow-2xl ${
      isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 hover:bg-gray-900/30 hover:border-gray-700/50`}>
      <div className="p-8 h-full flex flex-col">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 group">
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                <img src={logo} />
              </div>
              {/* <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div> */}
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Ritorno AI
              </h1>
              <p className="text-gray-400 text-sm font-medium">Intelligent Solutions</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-3 flex-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`group w-full flex items-center space-x-4 px-6 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  activeSection === item.id
                    ? 'bg-[#AD2831] text-white shadow-lg shadow-red-600/25 scale-105'
                    : 'hover:bg-gray-800/30 text-gray-300 hover:text-white hover:scale-105'
                }`}
              >
                {activeSection === item.id && (
                  <div className="absolute inset-0 bg-[#AD2831] opacity-100"></div>
                )}
                <IconComponent className={`w-6 h-6 relative z-10 ${
                  activeSection === item.id ? 'text-white' : 'text-gray-400 group-hover:text-white'
                } transition-colors duration-300`} />
                <span className="text-lg font-semibold relative z-10">{item.label}</span>
                {activeSection !== item.id && (
                  <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="pt-8 border-t border-gray-800/50">
          <div className="space-y-2">
            <p className="text-gray-400 text-sm font-medium">© 2024 Ritorno AI</p>
            <p className="text-gray-500 text-xs">Transforming Tomorrow with Intelligence</p>
            <div className="flex space-x-2 pt-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-xs">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;