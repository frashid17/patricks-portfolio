import React from 'react';
import { Github, Users, Globe } from 'lucide-react';

const Communities: React.FC = () => {
  const communities = [
    {
      name: 'Swahilipot Hub Foundation',
      role: 'Tech Community Member',
      description: 'A vibrant tech community fostering innovation and collaboration in Mombasa.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://swahilipothub.co.ke',
    },
    {
      name: 'Google Developer Groups Mombasa',
      role: 'Active Member',
      description: 'Local developer community sharing knowledge about Google technologies.',
      image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://gdg.community.dev/gdg-mombasa/',
    },
    {
      name: 'Tech4Dev Community',
      role: 'Contributor',
      description: 'Platform for developers to collaborate on social impact projects.',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      link: 'https://tech4dev.com',
    },
  ];

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Tech Communities
          </span>
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all"
            >
              <div className="relative h-48">
                <img
                  src={community.image}
                  alt={community.name}
                  className="w-full h-full object-cover transition-opacity hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{community.name}</h3>
                <p className="text-blue-400 mb-2 flex items-center">
                  <Users size={16} className="mr-2" />
                  {community.role}
                </p>
                <p className="text-gray-400 mb-4">{community.description}</p>

                <a
                  href={community.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Globe size={20} className="mr-2" />
                  Visit Community
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Communities;
