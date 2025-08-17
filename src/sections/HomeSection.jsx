import React from 'react';
import { Star, Briefcase, Mail, Users, Award, TrendingUp } from 'lucide-react';

const HomeSection = ({ setActiveSection }) => {
  const stats = [
    { icon: Users, number: "50+", title: "Happy Clients", desc: "From startups to Fortune 500 companies", color: "from-blue-600 to-blue-700" },
    { icon: Award, number: "100+", title: "AI Projects", desc: "Successfully delivered solutions", color: "from-red-600 to-red-700" },
    { icon: TrendingUp, number: "98%", title: "Success Rate", desc: "Proven track record of excellence", color: "from-green-600 to-green-700" }
  ];

  return (
    <div className="relative my-6">
      {/* Hero Section */}
      <div className="min-h-[90vh] flex items-center justify-center px-4 sm:px-8 lg:px-16 relative my-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600/10 to-red-800/10 border border-red-600/20 rounded-full text-red-400 text-sm font-semibold backdrop-blur-sm">
                <Star className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Welcome to the Future of AI</span>
              </div>
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                    Transforming Ideas
                  </span>
                  <br />
                  <span className="bg-[#AD2831] bg-clip-text text-transparent">
                    Into AI Reality
                  </span>
                </h1>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
                  We create intelligent solutions that revolutionize industries and empower businesses 
                  to achieve unprecedented growth through cutting-edge artificial intelligence and machine learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12 px-4">
              <button 
                onClick={() => setActiveSection('experience')}
                className="group bg-[#AD2831] hover:from-red-700 hover:to-red-800 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-3 shadow-2xl shadow-red-600/25 hover:shadow-red-600/40 w-full sm:w-auto justify-center"
              >
                <span>Explore Our Work</span>
                <Briefcase className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </button>
              
              <button 
                onClick={() => setActiveSection('contact')}
                className="group border-2 border-[#AD2831] text-[#AD2831] hover:bg-[#AD2831] hover:text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-lg font-bold transition-all duration-300 hover:scale-105 flex items-center space-x-3 backdrop-blur-sm w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Get In Touch</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-12 sm:py-20 px-4 sm:px-8 lg:px-16 my-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About </span>
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Ritorno AI</span>
            </h2>
            <p className="text-lg sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light px-4">
              We are pioneers in artificial intelligence, dedicated to creating solutions that 
              make a meaningful impact across industries worldwide through innovation and excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="group text-center p-6 sm:p-10 bg-gray-900/20 backdrop-blur-sm rounded-3xl border border-gray-800/30 hover:border-red-600/30 transition-all duration-500 hover:transform hover:scale-105 hover:bg-gray-900/30">
                  <div className={`w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                  </div>
                  <h3 className="text-3xl sm:text-5xl font-black mb-3 sm:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">{stat.number}</h3>
                  <h4 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{stat.title}</h4>
                  <p className="text-gray-400 leading-relaxed font-light text-sm sm:text-base">{stat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;