import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Job Portal",
    category: "Full-Stack Web App",
    tools: "Java, Spring Boot, MySQL, React.js",
    image: `${import.meta.env.BASE_URL}images/Job-Portal.png`,
    description: [
      "Developing a full-stack role-based Job Portal application using Spring Boot (backend) and React.js (frontend), supporting Admin, Employer, and Jobseeker workflows.",
      "Implementing secure JWT-based authentication and Role-Based Access Control (RBAC) with protected frontend routes and stateless REST API integration.",
      "Building an Application Tracking System (ATS) module enabling job posting, candidate application management, and real-time application status tracking; currently enhancing with validation, exception handling, pagination, and performance optimization.",
    ],
  },
  {
    title: "Library Management System",
    category: "Web Application",
    tools: "HTML, CSS, JavaScript",
    image: `${import.meta.env.BASE_URL}images/Library-Management-System.png`,
    description: [
      "Built a Library Management System to strengthen hands-on web development skills using core web technologies.",
      "Implemented CRUD operations, search functionality, and dynamic updates using JavaScript.",
      "Applied clean UI design, input validation, and structured code to simulate real-world application workflows.",
    ],
  },
  {
    title: "Password Generator (Mini)",
    category: "Mini Tool",
    tools: "HTML, CSS, JavaScript",
    image: `${import.meta.env.BASE_URL}images/Password-Generator.png`,
    description: [
      "Built a web-based tool to generate strong and secure passwords.",
      "Implemented customizable options for password length and character types.",
      "Focused on usability and client-side validation.",
    ],
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 600);
    },
    [isAnimating],
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">{project.category}</p>
                        <ul className="carousel-description">
                          {project.description.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  index === currentIndex ? "carousel-dot-active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
