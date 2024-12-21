import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">Your Degree</h3>
              <p className="text-gray-600 dark:text-gray-300">Your University</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2020 - 2024</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Relevant coursework and achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
