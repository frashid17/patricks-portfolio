export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    title: 'Sairock Beach Hotel and Spa',
    description: 'Official page for Sairock hotel based in Mombasa, providing booking for customers and other services.',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Next.js', 'Tailwind CSS', 'Booking System', 'Hotel Management'],
    github: 'https://github.com/yourusername/sairock-hotel',
    live: 'https://sairock.co.ke/'
  },
  {
    title: 'The Pwani Leather House',
    description: 'Pwani Leather House is an ecommerce website that connects customers to a wide variety of handcrafted leather shoes and sandals from the coastal of Kenya.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['E-commerce', 'Next.js', 'Tailwind CSS', 'Payment Integration'],
    github: 'https://github.com/yourusername/pwani-leather',
    live: 'https://www.thepwanileatherhouse.com/'
  },
  {
    title: 'Financial Dashboard',
    description: 'A dashboard that manages and shows customers registered on the site, including their invoices and managing them by offering CRUD functionalities and analytic tools.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    technologies: ['Next.js', 'TypeScript', 'Analytics', 'Dashboard'],
    github: 'https://github.com/frashid17/nextjs',
    live: 'https://nextjs-dashboard-ten-snowy-14.vercel.app/'
  },
  {
    title: 'Safari Website',
    description: 'A website that provides information about the safari tours, including booking options and tour details.',
    image: '/duruma.jpg',
    technologies: ['React.js', 'Tailwind CSS', 'Portfolio'],
    github: 'https://github.com/frashid17/duruma-tours',
    live: 'https://duruma-tours-safaris.netlify.app/'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application that allows users to communicate with each other in different rooms.',
    technologies: ['React.js', 'Socket.io', 'Node.js', 'Express'],
    image: '/chat.png',
    github: 'https://github.com/frashid17/chat-app',
    live: 'https://chat-app-c804a.web.app/'
  },
];