import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Full Stack Developer Intern</h4>
                <h5>Tap Academy</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Contributing to frontend and backend development using Java and web technologies. Building responsive user interfaces and optimizing SQL queries.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Full Stack intern</h4>
                <h5>THINK CHAMP PRIVATE LIMITED</h5>
              </div>
              <h3>May 2025 - July 2025</h3>
            </div>
            <p>
              Gained hands-on experience in full-stack development using Python and web frameworks. Developed scalable applications and integrated backend services with modern frontend technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
