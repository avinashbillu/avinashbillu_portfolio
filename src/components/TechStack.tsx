import {
  FaJava,
  FaPython,
  FaReact,
  FaCode,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiSpringboot,
  SiDocker,
  SiN8N,
} from "react-icons/si";

const techStack = [
  { name: "Java", icon: <FaJava /> },
  { name: "React", icon: <FaReact /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "HTML", icon: <FaCode /> },
  { name: "CSS", icon: <FaPaintBrush /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "n8n", icon: <SiN8N /> },
  { name: "Rest APIs", icon: <FaServer /> },
];

const TechStack = () => {
  return (
    <div className="techstack-minimal" id="techstack">
      <div className="techstack-minimal-content">
        <h2>MY TECHSTACKS</h2>
        <div className="tech-grid">
          {techStack.map((tech, index) => (
            <div className="tech-item" key={index} title={tech.name}>
              <div className="tech-icon">{tech.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
