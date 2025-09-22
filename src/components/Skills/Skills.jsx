import React from 'react';

const Skills = () => {
  // Skill categories with their respective skills
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML5', percentage: 90 },
        { name: 'CSS3', percentage: 85 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'Bootstrap', percentage: 90 },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', percentage: 75 },
        { name: 'Express', percentage: 70 },
        { name: 'MongoDB', percentage: 65 },
        { name: 'SQL', percentage: 60 },
      ]
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git', percentage: 85 },
        { name: 'Webpack', percentage: 70 },
        { name: 'Figma', percentage: 75 },
        { name: 'Responsive Design', percentage: 80 },
      ]
    }
  ];

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h2 className="display-4 fw-bold">My Skills</h2>
          <div className="divider-custom my-4">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="bi bi-gear-fill"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          <p className="lead">Here are my technical skills and proficiency levels</p>
        </div>
      </div>

      <div className="row">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="col-lg-4 mb-5 mb-lg-0">
            <div className="card shadow h-100">
              <div className="card-header bg-primary text-white text-center py-3">
                <h3 className="h5 mb-0">{category.category}</h3>
              </div>
              <div className="card-body">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-4">
                    <div className="d-flex justify-content-between mb-1">
                      <span className="fw-bold">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <div className="progress" style={{ height: '10px' }}>
                      <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${skill.percentage}%` }} 
                        aria-valuenow={skill.percentage} 
                        aria-valuemin="0" 
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <h3 className="h4 mb-4">Additional Skills & Certifications</h3>
          <div className="d-flex flex-wrap justify-content-center gap-2">
             {/* Frontend */}
            <span className="badge bg-primary p-2">Responsive Design</span>
            <span className="badge bg-primary p-2">UI/UX Design</span>
            <span className="badge bg-primary p-2">Redux</span>
            {/* Backend */}
            <span className="badge bg-success p-2">RESTful APIs</span>
            <span className="badge bg-success p-2">Fastify</span>
            {/* DevOps & Cloud */}
           <span className="badge bg-warning text-dark p-2">Docker</span>
           <span className="badge bg-warning text-dark p-2">AWS</span>
           {/* Certifications */}
            <span className="badge bg-secondary p-2">Certified JavaScript Developer</span>
            <span className="badge bg-secondary p-2">Computer Systems Servicing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;