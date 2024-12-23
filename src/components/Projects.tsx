import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sairock Beach Hotel and Spa',
      description: 'Official page for Sairock hotel based in Mombasa, providing booking for customers and other services.',
      link: 'https://sairock.co.ke/',
      image: 'https://i.imgur.com/bKrrYpX.png',
    },
    {
      id: 2,
      title: 'The Pwani Leather House',
      description:
        'Pwani Leather House is an ecommerce website that connects customers to a wide variety of handcrafted leather shoes and sandals from the coastal of Kenya.',
      link: 'https://thepwanileatherhouse.com',
      image: 'https://i.imgur.com/doGLpGg.png',
    },
    {
      id: 3,
      title: 'Financial Dashboard',
      description:
        'A dashboard that manages and shows customers registered on the site, including their invoices and managing them by offering CRUD functionalities and analytic tools.',
      link: 'https://nextjs-dashboard-ten-snowy-14.vercel.app/',
      image: 'https://i.imgur.com/1QtZeOI.png',
    },
    {
      id: 4,
      title: 'Developers Profile',
      description:
        'A simple website for Swahilipot Developers that manages contributions and repository activity.',
      link: 'https://developers-profile.vercel.app/',
      image: 'https://i.imgur.com/ZG6IOAK.png',
    },
    {
      id: 5,
      title: 'Restaurant Reservation System',
      description:
        'Developed a system for booking tables, managing menus, and generating invoices, ensuring a seamless experience for customers and staff.',
      github: 'https://github.com/frashid17/restaurant_reservationsys/',
      image: 'https://i.imgur.com/UencmwR.png',
    },
    {
      id: 6,
      title: 'RPG Game',
      description:
        'This is a simple game I made using JavaScript, HTML, and CSS to test my learning progress.',
      link: 'https://rpg-game-k6kp.vercel.app/',
      image: 'https://i.imgur.com/SHA0HK4.png',
    },
    {
      id: 7,
      title: 'Portfolio',
      description:
        'I built a simple portfolio that showcases but is not limited to experiences, education, projects, community work, profile, and technical stack. I have open-sourced this project.',
      link: 'https://patrick-mwangi.netlify.app/',
      image: 'https://i.imgur.com/GXNwe4W.png',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Notable Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-700"
            >
              <div className="relative h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mt-4 text-gray-800 dark:text-white">
                {project.title}
              </h3>
              <div className="p-4">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex gap-4 justify-center">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
