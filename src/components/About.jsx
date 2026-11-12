import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I'm a Level 300 <b>Information Technology</b> student
      and backend developer focused on building scalable web architectures and
      cloud infrastructure. Most of my hands-on work revolves around designing multi-tenant SaaS backends, setting up automated background tasks, and managing cloud deployments on AWS.
      <br />
      Alongside backend engineering, I'm actively learning penetration testing and system hardening, bridging the gap between shipping features fast and keeping them secure 
    </p>
  );
  const two = (
    <p>
     In my free time, I trade code for TikTok scrolls, good music, way too many hours listening to Dave, and getting caught up in a good movie.
    </p>
  );

  const techStack = [
    "Python",
    "Django",
    "PostgreSQL",
    "Redis & Celery",
    "AWS",
    "Linux & Nginx",
    "JavaScript",
    "Kali Linux & Nmap",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header ">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Gazi Jarin" src={"/assets/me2.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
