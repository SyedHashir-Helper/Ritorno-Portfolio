import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import LoadingScreen from '../components/LoadingScreen';
import Sidebar from '../components/Sidebar';
import HomeSection from '../sections/HomeSection';
import ProjectsSection from '../sections/ProjectsSection';
import ExperienceSection from '../sections/ExperienceSection.jsx';
import TeamSection from '../sections/TeamSection';
import ContactSection from '../sections/ContactSection';

const AIStartupPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Show loading screen
  if (isLoading) {
    return <LoadingScreen mousePosition={mousePosition} />;
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Enhanced Textured Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(173, 40, 49, 0.6) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(173, 40, 49, 0.1), transparent 50%)`
          }}
        />
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-gray-900/80 backdrop-blur-xl p-4 rounded-2xl border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar Navigation */}
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Main Content Area */}
      <div className="lg:ml-80 lg:mr-6 min-h-screen">
        {activeSection === 'home' && (
          <HomeSection setActiveSection={setActiveSection} />
        )}
        
        {activeSection === 'projects' && (
          <ProjectsSection />
        )}

        {activeSection === 'experience' && (
          <ExperienceSection />
        )}

        {activeSection === 'team' && (
          <TeamSection />
        )}

        {activeSection === 'contact' && (
          <ContactSection />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default AIStartupPortfolio;