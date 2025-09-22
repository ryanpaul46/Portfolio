import React from 'react';
import LoginImg from "../../assets/images/Login.png";
import PortfolioImg from "../../assets/images/Portfolio.png";
import LyriKodeImg from "../../assets/images/LyriKode.png";
import QuoteImg from "../../assets/images/Quote.png";
import LibraryImg from "../../assets/images/Library.png";
import PhonebookImg from "../../assets/images/Phonebook.png";

const Projects = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: 'DOLE-TUPAD-Validator',
      description: 'A full-stack application designed to validate DOLE TUPAD beneficiaries',
      image: LoginImg,
      tags: ['React', 'Node.js', 'PostgreSQL', 'Fastify'],
      demoLink: 'https://dole-tupad-validator-988u.onrender.com/login',
      codeLink: 'https://github.com/ryanpaul46/DOLE-TUPAD-VALIDATOR'
    },
    {
      id: 2,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills',
      image: PortfolioImg,
      tags: ['React', 'Bootstrap', 'CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'LyriKode',
      description: 'A simple music lyrics search application',
      image: LyriKodeImg,
      tags: ['Javascript', 'CSS', 'API'],
      demoLink: 'https://ryanpaul46.github.io/LyriKode-MP2/',
      codeLink: 'https://github.com/ryanpaul46/LyriKode-MP2/settings/pages'
    },
    {
      id: 4,
      title: 'Quote Generator',
      description: 'A web app that generates random inspirational quotes',
      image: QuoteImg,
      tags: ['JavaScript', 'API', 'CSS'],
      demoLink: 'https://ryanpaul46.github.io/Quote-Generator/',
      codeLink: 'https://github.com/ryanpaul46/Quote-Generator'
    },
    {
      id: 5,
      title: 'Library App',
      description: 'A basic library app to manage book collections',
      image: LibraryImg,
      tags: ['HTML', 'Javascript', 'CSS'],
      demoLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Phonebook App',
      description: 'A simple phonebook application',
      image: PhonebookImg,
      tags: ['Javascript', 'Tailwind', 'Node.js'],
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
                <h5 className="card-title fw-bold">{project.title}</h5>
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