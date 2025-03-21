import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Work.css";
const Work = () => {
  const [data, setData] = useState(null);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="workk">
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
                  <h6 className="experience-subtitle">
                    <b>{experience.company}</b>
                  </h6>
                  <b>
                    <p className="experience-duration">{experience.duration}</p>
                  </b>
                  <p className="experience-description">
                    {experience.description}
                  </p>
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
          {data.projects.map((project) => (
            <div className="col-md-6 mb-4" key={project.index}>
              <div className="card h-100">
                {project.image && (
                  <img
                    src={`${project.image}`}
                    alt={project.name}
                    className="card-img-top"
                    style={{ height: "250px", objectFit: "cover" }}
                  />
                )}
                <div className="card-body">
                  <h5 className="card-title">{project.name}</h5>
                  <p className="card-text" style={{ color: "#4f6d7a" }}>
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
  className="container-fluid"
  style={{
    backgroundColor: "#232323",
    minHeight: "100vh", /* Adjusted */
  }}
>

        <div className="container">
          <h1 className="text-center mb-5" style={{ color: "#c0c0c0"}}>My Hobby</h1>
          <h4 className="text-center mb-5" style={{color: "#6a6b70"}}>Photography</h4>
        </div>
        {/* New Section for Photography Portfolio */}
        <div
  className="row1 justify-content-center position-relative"
  style={{
    backgroundImage: "url('/photography/bc.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    minHeight: "100vh",
  }}
>


          <h2 className="text-center mt-4" style={{ color: "#eef0eb", zIndex: 2 }}>
            Nature
          </h2>
          {/* Semi-transparent overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)" /* Adjust opacity here */,
              zIndex: 1,
            }}
          ></div>

          {/* Content (Boxes) - Placed above overlay */}
          <div
            className="row justify-content-center position-relative"
            style={{ zIndex: 2 }}
          >
            {/* Box 1 */}
            <div className="col-4 col-md-3 m-0 fade-in">
              <div className="card border-0">
                <img
                  src="/photography/nature22.jpg"
                  className="card-img-top"
                  alt="Photography 1"
                />
              </div>
            </div>

            {/* Box 2 */}
            <div className="col-4 col-md-3 mb-3 fade-in">
              <div className="card border-0">
                <img
                  src="/photography/nature11.jpg"
                  className="card-img-top"
                  alt="Photography 2"
                />
              </div>
            </div>

            {/* Box 3 */}
            <div className="col-4 col-md-3 mb-3 fade-in">
              <div className="card border-0">
                <img
                  src="/photography/nature3.jpg"
                  className="card-img-top"
                  alt="Photography 3"
                />
              </div>
            </div>

            {/* Box 4 */}
            <div className="col-4 col-md-3 mb-3 fade-in">
              <div className="card border-0">
                <img
                  src="/photography/nature23.jpg"
                  className="card-img-top"
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3 fade-in">
              <div className="card border-0">
                <img
                  src="/photography/nature7.jpg"
                  className="card-img-top"
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3">
              <div className="card border-0">
                <img
                  src="/photography/nature6.jpg"
                  className="card-img-top"
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3">
              <div className="card border-0">
                <img
                  src="/photography/nature8.jpg"
                  className="card-img-top"
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3">
              <div className="card border-0">
                <img
                  src="/photography/nature10.jpg"
                  className="card-img-top"
                  alt="Photography 4"
                />
              </div>
            </div>

            <h2 className="text-center mt-2" style={{ color: "#eef0eb" , zIndex: 2, opacity: 0.7}}>
              Birds
            </h2>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird12.jpg"
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird9.jpg"
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird11.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird10.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird8.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird1.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird7.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird2.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>

            
            <div className="col-6 col-md-4 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird4.jpg"
                  className="card-img-top1"
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird-bc.jpg"
                  className="card-img-top1"
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-6 col-md-4 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/bird5.jpg"
                  className="card-img-top1"
                  alt="Photography 4"
                />
              </div>
            </div>







            <h2 className="text-center mt-2" style={{ color: "#eef0eb",zIndex: 2 , opacity: 0.7}}>
              People
            </h2>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/ppl5.jpg"
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/ppl-7.jpg"
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>

            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/ppl2.jpg "
                  className="card-img-top "
                  alt="Photography 4"
                />
              </div>
            </div>
            <div className="col-4 col-md-3 mb-3 mt-4">
              <div className="card border-0">
                <img
                  src="/photography/ppl4.jpg"
                  className="card-img-top"
                  alt="Photography 4"
                />
              </div>
            </div>

            

          </div>
        </div>
        <div className="button-container" style={{ textAlign: "center", marginTop: "20px" }}>
  <button
    className="button"
    onClick={scrollToTop}
    style={{
      margin: "20px",
      width: "100px",
      borderRadius: "10px",
      borderColor: "#eef0eb",
      backgroundColor: "#eef0eb",
      opacity: 0.8,
      transition: "transform 0.3s ease-in-out",
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "translateY(-5px)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "translateY(0)";
    }}
  >
    Go On Top
  </button>
</div>
        {/* second section */}
      </div>

      
    </div>
  );
};

export default Work;
