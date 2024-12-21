import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "MongoDB", "TypeScript"],
    github: "https://github.com",
    link: "https://demo.com"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "Real-time weather tracking application",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "API Integration"],
    github: "https://github.com"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task management platform",
    image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80",
    tags: ["React", "Redux", "Firebase"],
    link: "https://demo.com"
  }
];