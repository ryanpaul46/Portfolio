import { useState, useEffect } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section id="home" className="home-section min-vh-100 d-flex align-items-center fade-in">
          <Home />
        </section>
        <section id="about" className="about-section min-vh-100 d-flex align-items-center fade-in">
          <About />
        </section>
        <section id="projects" className="projects-section min-vh-100 d-flex align-items-center fade-in">
          <Projects />
        </section>
        <section id="skills" className="skills-section min-vh-100 d-flex align-items-center fade-in">
          <Skills />
        </section>
        <section id="contact" className="contact-section min-vh-100 d-flex align-items-center fade-in">
          <Contact />
        </section>
      </main>
    </>
  )
}

export default App
