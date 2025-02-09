import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Work.css"
const Work = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className='workk'>
    <div className="container my-5">
      {/* Experience Section */}
      <div className="experience-container">
  <h1 className="text-center mb-5">My Experience</h1>
  <div className="First">
    {data.experience.map((experience, index) => (
      <div className="experience-card" key={index}>
        {/* Left Side: Text Content */}
        <div className="experience-content">
          <h5 className="experience-title">{experience.role}</h5>
          <h6 className="experience-subtitle"><b>{experience.company}</b></h6>
          <b><p className="experience-duration">{experience.duration}</p></b>
          <p className="experience-description">{experience.description}</p>
        </div>

        {/* Right Side: Image (Optional) */}
        <div className="experience-image">
          <img src={`${experience.image}`} alt={experience.company} />
        </div>
      </div>
    ))}
  </div>
</div>

      {/* Projects Section */}
      <h1 className="text-center mb-5 mt-5">My Projects</h1>
      <div className="row">
        {data.projects.map(project => (
          <div className="col-md-6 mb-4" key={project.index}>
            <div className="card h-100">
              {project.image && (
                <img
                  src={`${project.image}`}
                  alt={project.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text" style={{color: "#4f6d7a"}}>{project.description}</p>
                <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Work;
