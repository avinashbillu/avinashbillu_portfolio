import { FaGraduationCap, FaSchool, FaUniversity } from "react-icons/fa";

const educationData = [
  {
    institution: "Vemu Institute of Technology",
    degree: "Bachelor of Technology in Computer Science",
    grade: "CGPA: 8.9",
    period: "2022 – 2026",
    location: "Chittoor, Andhra Pradesh",
    icon: <FaUniversity />,
  },
  {
    institution: "Narayana Junior College",
    degree: "Intermediate",
    grade: "CGPA: 9.6",
    period: "2020 – 2022",
    location: "Gudur, Andhra Pradesh",
    icon: <FaSchool />,
  },
  {
    institution: "Sree Vivekananda High School",
    degree: "Secondary Education",
    grade: "CGPA: 9.8",
    period: "2019 – 2020",
    location: "Gudur, Andhra Pradesh",
    icon: <FaGraduationCap />,
  },
];

const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-content">
        <h2>EDUCATION</h2>
        <div className="edu-list">
          {educationData.map((edu, index) => (
            <div className="edu-card" key={index}>
              <div className="edu-icon">{edu.icon}</div>
              <div className="edu-info">
                <div className="edu-header">
                  <h3>{edu.institution}</h3>
                  <span className="edu-period">{edu.period}</span>
                </div>
                <p className="edu-degree">{edu.degree}</p>
                <div className="edu-meta">
                  <span className="edu-grade">{edu.grade}</span>
                  <span className="edu-location">{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
