import React from 'react';
import { Twitter, Linkedin, Users } from 'lucide-react';

const DevCommunities = () => {
  const communities = [
    {
      name: 'React Developer Community',
      role: 'Member',
      description: 'Reactdevske is a vibrant community of developers passionate about React, Next.js, React Native, and the powerful ecosystem. Our mission is to empower developers—from full-stack experts to frontend enthusiasts—to grow, collaborate, and create meaningful solutions.',
      twitter: 'https://twitter.com/reactdevske',
      linkedin: 'https://linkedin.com/company/reactdevske'
    },
    {
      name: 'GDG Pwani',
      role: 'Member',
      description: 'A community of like-minded devs who are keen on Google technologies across the Kenyan Coastal Region. Anything and everything Google technologies.',
      twitter: 'https://twitter.com/gdgpwani',
      linkedin: 'https://linkedin.com/company/gdgpwani'
    },
    {
      name: 'Daytona',
      role: 'Member',
      description: 'Daytona allows developers to work on multiple projects by instantly running dev environments, including testing the same branch on multiple environments.',
      twitter: 'https://x.com/daytonaio',
      linkedin: 'https://www.linkedin.com/company/daytonaio/'
    }
  ];

  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-8 flex items-center">
        <Users className="mr-3 text-blue-400" />
        Developer Communities
      </h2>
      <p className="text-gray-400 mb-8">Connecting and growing with fellow developers</p>

      <div className="space-y-8">
        {communities.map((community, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-6">
            <div className="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-blue-400">{community.name}</h3>
                <p className="text-gray-300">{community.role}</p>
              </div>
              <div className="flex space-x-4">
                <a
                  href={community.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href={community.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
            <p className="text-gray-300">{community.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevCommunities;