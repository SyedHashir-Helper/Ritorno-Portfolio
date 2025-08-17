import React from 'react';
import TeamMemberCard from '../components/TeamMemberCard';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      designation: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/sarahchen",
      portfolio: "https://sarahchen.dev",
      bio: "Former Google AI researcher with 10+ years in machine learning and startup leadership. Led teams that built AI systems serving billions of users.",
      expertise: ["Strategic Leadership", "AI Research", "Product Vision"],
      achievements: "Founded 2 successful AI startups"
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      designation: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/alexrodriguez",
      portfolio: "https://alexr.tech",
      bio: "Full-stack architect specializing in scalable AI infrastructure and cloud solutions. Built systems handling 100M+ daily AI inference requests.",
      expertise: ["System Architecture", "Cloud Infrastructure", "AI Scaling"],
      achievements: "Architected systems for Fortune 500 companies"
    },
    {
      id: 3,
      name: "Dr. Emily Watson",
      designation: "Head of AI Research",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/emilywatson",
      portfolio: "https://emilywatson.ai",
      bio: "PhD in Computer Science from MIT with expertise in deep learning and neural networks. Published 50+ papers in top-tier AI conferences and journals.",
      expertise: ["Deep Learning", "Neural Networks", "AI Research"],
      achievements: "50+ publications, 10,000+ citations"
    },
    {
      id: 4,
      name: "Marcus Thompson",
      designation: "Head of Product",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      linkedin: "https://linkedin.com/in/marcusthompson",
      portfolio: "https://marcus.design",
      bio: "Product strategist with expertise in AI-driven user experiences. Previously led product teams at leading tech companies, launching products used by millions.",
      expertise: ["Product Strategy", "UX Design", "AI Products"],
      achievements: "Launched 10+ AI-powered products"
    }
  ];

  return (
    <div className="min-h-[90vh] py-12 sm:py-20 px-4 sm:px-8 lg:px-16 my-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Meet Our </span>
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">
            The brilliant minds driving innovation and excellence at Ritorno AI
          </p>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 sm:gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;