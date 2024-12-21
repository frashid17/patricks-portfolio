import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Communities from './components/Communities';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Communities />
        <Contact />
      </main>
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Patrick Mwangi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App