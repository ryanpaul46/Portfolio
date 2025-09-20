import React from 'react';

const Home = () => {
  return (
    <div className="container text-center">
      <div className="row min-vh-100 align-items-center">
        <div className="col-12">
          <h1 className="display-1 fw-bold mb-4">Hi, I'm <span className="text-primary">RYAN PAUL</span></h1>
          <h2 className="display-6 mb-4">IT Specialist and Web Developer</h2>
          <p className="lead mb-5">
            “Empowering Ideas Through Tech & Web.”
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#projects" className="btn btn-primary btn-lg px-4 py-2">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-outline-dark btn-lg px-4 py-2">
              Contact Me
            </a>
          </div>
          <div className="mt-5">
            <a href="https://github.com/ryanpaul46" target="_blank" rel="noopener noreferrer" className="text-dark me-3 fs-3">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://www.facebook.com/rpcollado.46" target="_blank" rel="noopener noreferrer" className="text-dark me-3 fs-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="mailto:https://workspace.google.com/intl/en-US/gmail/" className="text-dark fs-3">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;