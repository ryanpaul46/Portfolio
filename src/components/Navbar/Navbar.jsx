import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active link based on scroll position
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(sectionId);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setActiveLink(id);
    
    // Close mobile menu when a link is clicked
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
    
    // Smooth scroll to section
    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar navbar-expand-lg navbar-${darkMode ? 'dark' : 'light'} ${scrolled ? (darkMode ? 'bg-dark shadow' : 'bg-white shadow-sm') : 'bg-transparent'} fixed-top transition-all`}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Portfolio</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a 
                className={`nav-link ${activeLink === 'home' ? 'active fw-bold' : ''}`} 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeLink === 'about' ? 'active fw-bold' : ''}`} 
                href="#about"
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeLink === 'projects' ? 'active fw-bold' : ''}`} 
                href="#projects"
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeLink === 'skills' ? 'active fw-bold' : ''}`} 
                href="#skills"
                onClick={(e) => handleNavClick(e, 'skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link ${activeLink === 'contact' ? 'active fw-bold' : ''}`} 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-outline-secondary"
                onClick={() => setDarkMode(!darkMode)}
                style={{ color: darkMode ? 'white' : 'black' }}
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;