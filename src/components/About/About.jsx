import React from 'react';
import ProfileImg from "../../assets/images/Profile.png";

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
              src={ProfileImg}
              alt="Profile" 
              className="img-fluid rounded-circle shadow-lg" 
              style={{ maxWidth: '80%' }}
            />
          </div>
        </div>
        
        <div className="col-md-7">
          <h3 className="mb-4">Web Developer & Designer</h3>
          <p className="lead mb-4 text-justify">
            I’m Ryan Paul Collado, an IT Specialist from Pangasinan with a passion for blending technology and creativity. 
            My expertise spans computer systems, networking, and full-stack web development, complemented by strong creative skills in graphic design, video editing, and photography. 
            With certifications in Civil Service Professional Eligibility and TESDA Computer Systems Servicing NC II, I bring both technical reliability and innovative design thinking to every project.
            I build systems that perform seamlessly and craft designs that leave lasting impressions. 
          </p>
          
          <p className="mb-4 text-justify">
            My journey in web development began several years ago, evolving from simple landing pages to dynamic, full-scale web applications. 
            What drives me is the challenge of transforming ideas into functional, visually engaging digital solutions.
            Whether it’s solving complex IT problems or creating designs that inspire, I am committed to delivering work that is both efficient and impactful.
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