import React from "react";
import "./About.scss";
import sediq from "../../assets/sediq-image.jpg";

const About = () => (
  <div className="about-container" id="about">
    <div className="about-image">
      <img src={sediq} alt="sediq" />
    </div>
    <div className="about-content">
      <h1>About Me</h1>
      <p>
        I am full stack web developer studied Microverse full-stack web
        development program remotly, while learning how to code, developed 10s
        of projects using HTML, CSS, JavaScrip, React, Redux, Ruby on Rails, and
        PostGreSql, collaborating, pair programming, providing code reviews,
        testing, mentoring, and...
      </p>
      <table>
        <tr>
          <td>Name:</td>
          <td>Sediqullah Badakhsh</td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>sediqullah.badakhsh@gmail.com</td>
        </tr>
      </table>
    </div>
  </div>
);

export default About;
