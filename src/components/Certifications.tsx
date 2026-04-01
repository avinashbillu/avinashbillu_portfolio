import { FaAward, FaDatabase, FaExternalLinkAlt } from "react-icons/fa";

const certificationsData = [
  {
    name: "Java Full Stack Developer",
    issuer: "Wipro TalentNext",
    link: "https://drive.google.com/file/d/1FsNPNlkKOXCbr5CYeKthEoyZv7_mvtf3/view?usp=sharing",
    icon: <FaAward />,
  },
  {
    name: "Databases for Developers: Foundations",
    issuer: "Oracle",
    link: "https://drive.google.com/file/d/10uAx8qlRklXy1481FspZNjUEHcQreb1l/view?usp=sharing",
    icon: <FaDatabase />,
  },
];

const Certifications = () => {
  return (
    <div className="certifications-section" id="certifications">
      <div className="certifications-content">
        <h2>CERTIFICATIONS</h2>
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-icon">{cert.icon}</div>
              <div className="cert-info">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link"
                >
                  <span>View Credential</span>
                  <FaExternalLinkAlt className="link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
