import React from "react";
import "./About.scss";
import sediq from "../../assets/sediq2.jpg";

const About = () => (
  <div className="about-container" id="About">
    <div className="about-content">
      <h1 className="heading">About Me</h1>
      <p>
        Highly skilled Mobile App Developer with 2 years of experience
        in developing and launching successful applications on both iOS
        and Android platforms. Proven track record in increasing user engagemen
        t and revenue through implementing automated testing
        processes and collaborating with cross-functional teams to design
        and implement new user interfaces. Strong expertise in
        integrating mobile applications with backend services, implementing
        security measures, and optimizing app performance.
      </p>
      <p>
        Want to know me better, Email me:
        <br />
        ppptiger.king@gmail.com
      </p>
    </div>
    <div className="about-image" id="container_1">
      <div id="container_2">
        <img src={sediq} alt="sediq" id="image" />
      </div>
    </div>
  </div>
);

export default About;
