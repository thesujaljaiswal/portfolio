import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Skills from './components/sections/Skills';

function App() {
  return (
    <div className="min-h-screen bg-[#e8e4d8] text-[#111] flex flex-col relative w-full font-serif selection:bg-[#ead181] selection:text-black pb-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-12 border-x border-b border-[#111] bg-[#f4f1ea] shadow-2xl min-h-screen">
        <Navbar />
        <main className="flex-1 w-full pb-20">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Skills />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
