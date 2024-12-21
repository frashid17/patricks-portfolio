import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Data Entry Clerk",
    company: "Sai Rock Beach Hotel and Spa",
    duration: "Feb 2022 - Sep 2023",
    skills: ["Microsoft Excel", "Google Sheets", "Data Accuracy"],
    achievements: [
      "Managed and organized large datasets with high attention to detail, ensuring data accuracy and consistency.",
      "Used Microsoft Excel and Google Sheets for data entry, validation, and reporting.",
      "Improved overall efficiency by automating repetitive tasks with formulas and macros."
    ]
  },
  {
    title: "Frontend Developer",
    company: "Sai Rock Beach Hotel and Spa",
    duration: "Dec 2023 - Mar 2024",
    skills: ["HTML", "CSS", "JavaScript"],
    achievements: [
      <>
        Designed and developed the official page for Sai Rock Beach Hotel and Spa based in Mombasa.
      </>,
      "Built a responsive and visually appealing website to enhance customer experience.",
      "Implemented interactive elements using JavaScript for seamless booking functionality."
    ]
  },
  {
    title: "Fullstack Developer",
    company: "Pwani Leather House (Contract)",
    duration: "Jan 2023 - Feb 2024",
    skills: ["React", "Node.js", "MySQL"],
    achievements: [
      <>
        Designed and developed the official website for{" "}
        <a
          href="https://www.thepwanileatherhouse.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-200"
        >
          Pwani Leather House
        </a>
        .
      </>,
      "Created a responsive and user-friendly design while integrating backend APIs.",
      "Ensured database functionality with MySQL and delivered the project within the contract period."
    ]
  },
  {
    title: "Tech Intern",
    company: "Swahilipot Hub Foundation",
    duration: "Aug 2024 - Dec 2024",
    skills: ["Next.js", "Django", "Python", "MySQL", "TypeScript", "React Native"],
    achievements: [
      "Collaborated on developing software solutions and web applications.",
      "Gained hands-on experience in back-end development with Python and MySQL.",
      "Contributed to front-end designs and optimized performance for scalable applications."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="flex gap-4 items-start p-6 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold dark:text-white">{experience.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{experience.company}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{experience.duration}</p>
                <ul className="mt-2 text-gray-700 dark:text-gray-300 list-disc list-inside space-y-1">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <h4 className="text-lg font-semibold dark:text-white">Skills Gained:</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    {experience.skills.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
