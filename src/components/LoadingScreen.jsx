import React from 'react';

const LoadingScreen = ({ mousePosition }) => {
  return (
    <div className="h-screen bg-black flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(173, 40, 49, 0.1), transparent 40%)`
        }}
      />
      <div className="text-center z-10">
        <div className="relative mb-8">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-red-600/20 border-t-red-600 mx-auto"></div>
          <div className="absolute inset-0 animate-ping rounded-full h-20 w-20 border-4 border-red-600/20 mx-auto"></div>
        </div>
        <div className="space-y-2">
          <div className="text-white text-3xl font-bold">Ritorno AI</div>
          <div className="text-gray-400 text-lg">Loading Excellence...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;