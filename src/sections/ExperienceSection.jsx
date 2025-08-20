import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import p5 from "../../public/p-5.png"

const ExperienceSection = () => {
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Social Autoposting",
      subtitle: "This Workflow Auto-Posts to 4 Different Socials",
      description: "This picture shows an n8n workflow that auto-posts to 4 socials from one place. Simply add your content, captions, and connect accounts—no complex setup needed. With this free template + Google Sheets, you can grow your audience on autopilot.",
      image: "/tiktok workflow picture.jpg",
      technologies: ["No Code", "N8N"],
      category: "Social AutoPosting AI",
      clientLogo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=80&h=80&fit=crop",
      results: ["98% Accuracy", "50% Faster Diagnosis", "10M+ Patients", "500+ Hospitals"],
      year: "2024",
      duration: "8 months"
    },
    {
      id: 2,
      title: "24/7 AI Content Machine (No Code Needed)",
      subtitle: "Turn ideas into viral shorts—fast.",
      description: "I built a fully automated content creation system in n8n—no coding needed.It generates ideas, images, videos with sound, and auto-posts to Instagram, YouTube Shorts, and TikTok. All resources are free so you can build or adapt this viral content machine yourself.",
      image: "/2nd n8n project.jpg",
      technologies: ["No Code", "N8N"],
      category: "No-Code Automation",
      clientLogo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop",
      results: ["$2B+ Managed", "40% ROI Boost", "1M+ Users", "99.9% Uptime"],
      year: "2024",
      duration: "12 months"
    },
    {
      id: 3,
      title: "SmartFactory Analytics",
      subtitle: "Industrial Intelligence Platform",
      description: "Comprehensive IoT-enabled predictive maintenance and optimization system that leverages AI to prevent equipment failures, optimize manufacturing processes, reduce costs, and enhance operational efficiency in real-time industrial environments.",
      image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&h=400&fit=crop",
      technologies: ["Python", "IoT", "Azure", "React", "Edge Computing", "Digital Twins"],
      category: "Industrial AI",
      clientLogo: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=80&h=80&fit=crop",
      results: ["85% Less Downtime", "30% Cost Reduction", "500+ Factories", "24/7 Monitoring"],
      year: "2023",
      duration: "10 months"
    },
    {
      id: 4,
      title: "EduLearn AI",
      subtitle: "Personalized Learning Ecosystem",
      description: "Intelligent adaptive learning platform that revolutionizes education by personalizing content delivery, assessment methods, and learning paths for each student using advanced AI algorithms, learning analytics, and cognitive science principles.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      technologies: ["Python", "Machine Learning", "PostgreSQL", "Vue.js", "Learning Analytics", "Cognitive AI"],
      category: "EdTech AI",
      clientLogo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=80&h=80&fit=crop",
      results: ["75% Better Retention", "2x Learning Speed", "5M+ Students", "200+ Schools"],
      year: "2023",
      duration: "14 months"
    },
    {
      id: 5,
      title: "Pet Detection in ROI",
      subtitle: "Computer Vision Based Pet Detection in ROI and sound detection",
      description: "YOLO based Object Detection, ligh detection using OpenCV and sound detection above certain threshold.",
      image: p5,
      technologies: ["Python", "Deep Learning", "YOLO v12", "Open CV", "Object Detection", "Defining ROIs"],
      category: "Computer Vision",
      clientLogo: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=80&h=80&fit=crop",
      results: ["98% Better Detection", "100% Client Satisfaction"],
      year: "2025",
      duration: "1 months"
    }
  ];

  const nextProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev + 1) % projects.length);
  };

  const prevProjectSlide = () => {
    setCurrentProjectSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-[90vh] relative my-6 mx-3 sm:mx-6 rounded-3xl">
      {/* Section Header - Compact and positioned properly */}
      {/* <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-30 text-center px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-black mb-1">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Our </span>
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-xs sm:text-sm text-gray-400 font-light">
          Transforming industries with cutting-edge AI solutions
        </p>
      </div> */}

      {/* Project Counter */}
      <div className="absolute top-6 right-6 z-30 bg-black/60 backdrop-blur-sm rounded-xl px-3 py-1.5 border border-gray-700/50">
        <div className="text-white text-sm font-semibold">
          {currentProjectSlide + 1} / {projects.length}
        </div>
      </div>

      {/* Main Content Container - Properly centered with padding */}
      <div className="absolute inset-0 top-20 bottom-16 left-6 right-6 flex items-center">
        <div className="w-full h-full flex items-center">
          <div 
            className="flex transition-transform duration-1000 ease-out w-full h-full"
            style={{ transform: `translateX(-${currentProjectSlide * 100}%)` }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons - Better positioned */}
      <button
        onClick={prevProjectSlide}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-red-600/80 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 z-40 backdrop-blur-sm border border-gray-700/50 hover:border-red-600/50 shadow-lg"
        disabled={projects.length <= 1}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextProjectSlide}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-red-600/80 text-white p-3 rounded-xl transition-all duration-300 hover:scale-110 z-40 backdrop-blur-sm border border-gray-700/50 hover:border-red-600/50 shadow-lg"
        disabled={projects.length <= 1}
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Indicators - Better positioned */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentProjectSlide(index)}
            className={`transition-all duration-300 ${
              currentProjectSlide === index 
                ? 'w-8 h-3 bg-red-600 rounded-full' 
                : 'w-3 h-3 bg-gray-600 hover:bg-gray-400 rounded-full hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;