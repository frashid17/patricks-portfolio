import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 dark:text-white">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">

          {/* BSc. Computer Science */}
          <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">BSc. Computer Science</h3>
              <p className="text-gray-600 dark:text-gray-300">Kenya Methodist University</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2022 - Present (Awaiting Graduation)</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Currently pursuing a Bachelor of Science in Computer Science, with coursework focused on software 
                development, system analysis, database management, and emerging technologies. This program has 
                equipped me with practical and theoretical knowledge in programming, problem-solving, and the 
                application of technology to real-world challenges. Graduation is anticipated soon.
              </p>
            </div>
          </div>

          {/* KCSE */}
          <div className="flex gap-4 items-start p-6 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold dark:text-white">Kenya Certificate of Secondary Education, K.C.S.E.</h3>
              <p className="text-gray-600 dark:text-gray-300">Allidina Visram High School, Mombasa</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2016 - Nov 2019</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Successfully completed the Kenya Certificate of Secondary Education (KCSE), a comprehensive examination 
                that evaluates knowledge and skills across key academic disciplines. My performance demonstrated 
                proficiency in sciences, mathematics, languages, and humanities, equipping me with a strong foundation 
                for further studies and career growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
