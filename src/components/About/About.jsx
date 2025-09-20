import React from 'react';

const About = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-4 fw-bold">About Me</h2>
          <div className="divider-custom my-4">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="bi bi-star-fill"></i></div>
            <div className="divider-custom-line"></div>
          </div>
        </div>
      </div>
      
      <div className="row align-items-center">
        <div className="col-md-5 mb-4 mb-md-0">
          <div className="about-image-container text-center">
            {/* Replace with your image */}
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Profile" 
              className="img-fluid rounded-circle shadow-lg" 
              style={{ maxWidth: '80%' }}
            />
          </div>
        </div>
        
        <div className="col-md-7">
          <h3 className="mb-4">Web Developer & Designer</h3>
          <p className="lead mb-4 text-justify">
            I’m Ryan Paul Collado, an IT Specialist and Creative Designer from Pangasinan. 
            I combine tech expertise in computer systems, networking, 
            and full-stack web development with creative skills in graphic design, video editing, 
            and photography.With certifications in Civil Service Professional Eligibility and TESDA Computer Systems Servicing NC II, 
            I bring both technical reliability and creative innovation to every project I take on.I build systems that work and designs that inspire.
          </p>
          
          <p className="mb-4">
            My journey in web development began several years ago, and since then, I've worked on various projects 
            ranging from simple landing pages to complex web applications. I enjoy the process of turning ideas into 
            reality through code and design.
          </p>
          
          <div className="row mb-4">
            <div className="col-md-6 text-center text-md-start">
              <p><strong>Name:</strong> Ryan Paul C. Collado</p>
              <p><strong>Experience:</strong> 4 Years</p>
              <p><strong>Phone:</strong> (+63) 927-129-2627</p>
            </div>
            <div className="col-md-6 text-center text-md-start">
              <p><strong>Degree:</strong> Bachelor of Science in Information Technology</p>
              <p><strong>Email:</strong> ryanpaul46@gmail.com</p>
              <p><strong>Freelance:</strong> Available</p>
            </div>
          </div>
          
          <a href="#contact" className="btn btn-primary px-4 py-2">
            Contact Me
          </a>
          <a href="#" className="btn btn-outline-dark ms-3 px-4 py-2">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;