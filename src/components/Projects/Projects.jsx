import React from 'react';

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'DOLE-TUPAD-Validator',
      description: 'A full-stack application designed to validate DOLE TUPAD beneficiaries',
      image: '.assets/images/Login.png',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Fastify'],
      demoLink: 'https://dole-tupad-validator-988u.onrender.com/login',
      codeLink: 'https://github.com/ryanpaul46/DOLE-TUPAD-VALIDATOR'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Bootstrap', 'CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Redux', 'Firebase'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current and forecasted weather data',
      image: 'https://via.placeholder.com/600x400',
      tags: ['JavaScript', 'API', 'CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'An application that allows users to search for recipes based on ingredients',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'API', 'Styled Components'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Chat Application',
      description: 'Real-time chat application with private and group messaging',
      image: 'https://via.placeholder.com/600x400',
      tags: ['React', 'Socket.io', 'Node.js'],
      demoLink: '#',
      codeLink: '#'
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-4 fw-bold">My Projects</h2>
          <div className="divider-custom my-4">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="bi bi-code-slash"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="lead">Here are some of my recent projects. Click on them to learn more!</p>
        </div>
      </div>

      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <img src={project.image} className="card-img-top" alt={project.title} />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <div className="d-flex flex-wrap mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="badge bg-primary me-1 mb-1">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="card-footer bg-white border-top-0 d-flex justify-content-between">
                <a href={project.demoLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-eye me-1"></i> Demo
                </a>
                <a href={project.codeLink} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github me-1"></i> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;