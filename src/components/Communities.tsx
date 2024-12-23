import { Twitter, Linkedin } from 'lucide-react';


const communities = [
  {
    name: "React Developer Community",
    role: "Member",
    description:
      "Reactdevske is a vibrant community of developers passionate about React, Next.js, React Native, and the powerful ecosystem. Our mission is to empower developers—from full-stack experts to frontend enthusiasts—to grow, collaborate, and create meaningful solutions.",
    twitter: "https://twitter.com/reactdevske",
    linkedin: "https://www.linkedin.com/groups/reactdevske"
  },
  {
    name: "GDG Pwani",
    role: "Member",
    description:
      "A community of like-minded devs who are keen on Google technologies across the Kenyan Coastal Region. Anything and everything Google technologies.",
    twitter: "https://twitter.com/gdgpwani",
    linkedin: "https://www.linkedin.com/groups/gdg-pwani"
  }
];

const Communities = () => {
  return (
    <section id="communities" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Communities</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {communities.map((community, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <div>
                <h3 className="text-xl font-semibold dark:text-white">{community.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{community.role}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">{community.description}</p>
                <div className="flex gap-4 mt-4">
                  <a
                    href={community.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Twitter className="w-5 h-5 inline-block mr-1" /> Twitter
                  </a>
                  <a
                    href={community.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Linkedin className="w-5 h-5 inline-block mr-1" /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Communities;
