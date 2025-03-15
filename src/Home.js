import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="home">
      <div className="home-container">
        {/* Left Side - Text Info */}
        <div className="home-text">
          <p className="intro-text">Hello, I'm {data.role}</p>
          <h1>
            <span className="highlight">{data.name}</span>
          </h1>
          <p className="description">{data.intro}</p>
        </div>
        {/* Right Side - Profile Image */}
        <div className="home-image">
          <div className="circle-background"></div> {/* Background Circle */}
          <img src={data.photo} alt={data.name} className="profile-img" />
        </div>
      </div>

      {/* ///////////////////////////////////////////////////////////////////// */}
      <div className="who-am-i-container">
        {/* Centered Image */}

        {/* Text Below the Image */}
        <div className="who-am-i-text">
          <h2>About Me</h2>
          <div className="new-section-image">
            <img src={data.me} alt="About Me" />
          </div>
          <div className="text">
            <p>
              {" "}
              Hello! I'm <strong>{data.name}</strong>, and my journey in
              technology began with a deep curiosity and passion for solving
              problems through code. Over time, this curiosity evolved into a
              dedicated career path as a full-stack developer with analytical skills, where I combine
              creativity with technical expertise to bring ideas to life. <br />
              <br /> Currently, I'm pursuing an Advanced Diploma in <b>Computer
              Programming and Analysis</b> at <b>Seneca College</b>, where I'm not only
              sharpening my technical skills but also gaining practical
              experience through tutoring, AI research, and real-world
              development projects. <br />
              <br /> My passion lies in blending creativity with functionality
              to deliver seamless user experiences and impactful, scalable
              software solutions. I’m always eager to learn, adapt, and push the
              boundaries of what technology can achieve to solve real-world
              challenges.{" "}
            </p>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////// */}
      {/* What I Offer Section - Styled with Cards */}
      <div className="services-container">
        <h2 className="section-title">What I Offer</h2>
        <div className="services-grid">
          {data.services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">
                <i className={service.icon}></i> {/* FontAwesome Icon */}
              </div>
              <h3 className="service-title">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ////////////////////////////////////////////////////////////////////////////////// */}
      <div className="skills-container">
        <h2>My Skills</h2>
        <ul>
          {data.skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <i className={skill.icon}></i> {/* Font Awesome Icon */}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////// */}

      {/* New Section - Image Centered with Text Underneath */}
      <div className="new-section">
        <h2>
          <b>Achievements</b>
        </h2>
        <br />
        <div className="new-section-image">
          <img src="ac1.png" alt="New Section" className="img-centered" />
        </div>
        <div className="new-section-text">
          <h2>Backend Project Success</h2>{" "}
          <p>
            {" "}
            I'm thrilled to share the success of my recent backend project! In
            just one week, the project received an incredible 60,000+
            impressions and 1,500+ likes, showcasing the strong interest and
            positive feedback from the community. <br />
            <br /> The project involved developing a scalable backend solution
            with efficient data management, focusing on performance, security,
            and integration. The massive engagement I received highlights the
            impact of the work and reinforces my passion for backend
            development. I'm excited to continue building on this success and
            sharing my journey with you all!{" "}
          </p>
        </div>
      </div>

      <div className="new-section">
        <div className="new-section-image">
          <img src="award.avif" alt="New Section" className="img-centered" />
        </div>
        <div className="new-section-text">
          <h2>Canadian Choice Award in Tutoring 2025 in Markham</h2>
          <p>
            {" "}
            As a recipient of the Canadian Choice Award in Tutoring for 2025 in
            Markham, I take great pride in my role as a tutor, where I am
            committed to helping students excel and reach their full potential.
            I approach my teaching with dedication and a deep understanding of
            each student’s individual needs, ensuring that every lesson is
            engaging, impactful, and aligned with their learning goals. <br />
            <br /> My focus is on creating a supportive environment that fosters
            both academic growth and personal development. Through personalized
            guidance, hands-on projects, and clear explanations, I work
            tirelessly to help students overcome challenges and achieve success
            in their studies. The recognition we’ve received is a testament to
            my passion for teaching and my unwavering commitment to delivering
            results.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
