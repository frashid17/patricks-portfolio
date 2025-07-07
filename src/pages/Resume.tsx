import React from 'react';
import { Briefcase, GraduationCap, Calendar, Award, ExternalLink } from 'lucide-react';
import DevCommunities from '../components/DevCommunities';

const Resume: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h1>
          <a
            href="https://read.cv/frashid17"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors flex items-center"
          >
            Explore my detailed CV
            <ExternalLink className="ml-2" size={16} />
          </a>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-400" />
            Professional Experience
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Tech Intern',
                company: 'Swahilipot Hub Foundation',
                period: 'Aug 2024 - Dec 2024',
                description:
                  'Collaborated on developing software solutions and web applications. Gained hands-on experience in back-end development with Python and MySQL. Contributed to front-end designs and optimized performance for scalable applications.',
                skills: ['Next.js', 'Django', 'Python', 'MySQL', 'TypeScript', 'React Native'],
              },
              {
                title: 'Fullstack Developer',
                company: 'Pwani Leather House (Contract)',
                period: 'Jan 2023 - Feb 2024',
                description:
                  'Designed and developed the official website for Pwani Leather House. Created a responsive and user-friendly design while integrating backend APIs. Ensured database functionality with MySQL and delivered the project within the contract period.',
                skills: ['React', 'Node.js', 'MySQL'],
              },
              {
                title: 'Frontend Developer',
                company: 'Sai Rock Beach Hotel and Spa',
                period: 'Dec 2023 - Mar 2024',
                description:
                  'Designed and developed the official page for Sai Rock Beach Hotel and Spa based in Mombasa. Built a responsive and visually appealing website to enhance customer experience. Implemented interactive elements using JavaScript for seamless booking functionality.',
                skills: ['HTML', 'CSS', 'JavaScript'],
              },
              {
                title: 'Data Entry Clerk',
                company: 'Sai Rock Beach Hotel and Spa',
                period: 'Feb 2022 - Sep 2023',
                description:
                  'Managed and organized large datasets with high attention to detail, ensuring data accuracy and consistency. Used Microsoft Excel and Google Sheets for data entry, validation, and reporting. Improved overall efficiency by automating repetitive tasks with formulas and macros.',
                skills: ['Microsoft Excel', 'Google Sheets', 'Data Accuracy'],
              },
              {
                title: 'Lead Software Engineer',
                company: 'Xterns by darey.io',
                period: 'Jan 2025 - Present',
                description:
                  'Lead Software Engineer in Xterns where i actively manage company xterns by equipping them with hands on skills.',
                skills: ['Community Engagement', 'Software Development', 'Mentorship'],
              }
            ].map((job, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{job.title}</h3>
                    <p className="text-gray-300">{job.company}</p>
                  </div>
                  <span className="text-gray-400 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {job.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-sm bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Communities Section */}
        <DevCommunities />

        {/* Education Section */}
        <div>
          <h2 className="text-2xl font-bold mb-8 flex items-center">
            <GraduationCap className="mr-3 text-blue-400" />
            Education
          </h2>

          <div className="space-y-8">
            {[
              {
                degree: 'BSc. Computer Science',
                school: 'Kenya Methodist University',
                period: 'Mar 2022 - Present (Awaiting Graduation)',
                courses: [
                  'Software Development',
                  'System Analysis & Design',
                  'Database Management',
                  'Emerging Technologies',
                ],
              },
              {
                degree: 'Kenya Certificate of Secondary Education',
                school: 'Allidina Visram High School, Mombasa',
                period: 'Jan 2016 - Nov 2019',
                courses: [
                  'Sciences & Mathematics',
                  'Languages',
                  'Humanities',
                  'Technical Subjects',
                ],
              },
            ].map((edu, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.school}</p>
                  </div>
                  <span className="text-gray-400 flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {edu.period}
                  </span>
                </div>
                <div className="mt-4">
                  <h4 className="text-gray-300 mb-2 flex items-center">
                    <Award size={16} className="mr-2" />
                    Key Courses
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <li key={courseIndex} className="text-gray-400">
                        • {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;