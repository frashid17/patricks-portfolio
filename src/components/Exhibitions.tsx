import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Exhibitions = () => {
  const exhibitions = [
    {
      title: 'Daytona Tour at Sote Hub',
      location: 'Mombasa',
      year: '2024',
      description: 'An event where we talk about all things Developer Experience, Tooling, and Open Source.',
    },
    {
      title: 'Devfest Pwani at Light International',
      location: 'Mombasa',
      year: '2024',
      description: 'DevFest Pwani 2024: The ultimate tech event for developers on the Kenyan coast. With tracks ranging from web development to mobile development to cloud and machine learning.',
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Exhibitions & Events
        </span>
      </h2>

      <div className="space-y-12">
        {exhibitions.map((exhibition, index) => (
          <div 
            key={index}
            className="relative group bg-white/5 dark:bg-gray-800/50 rounded-xl p-8 hover:bg-white/10 dark:hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-l-xl" />
            
            <div className="ml-4">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-blue-400">{exhibition.title}</h3>
                <span className="flex items-center text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  {exhibition.year}
                </span>
              </div>
              
              <div className="flex items-center mb-4 text-gray-400">
                <MapPin size={16} className="mr-2" />
                {exhibition.location}
              </div>
              
              <p className="text-gray-300">{exhibition.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exhibitions;