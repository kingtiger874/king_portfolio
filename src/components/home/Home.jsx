import "./Home.scss";
import React from "react";
import { FaPlay } from "react-icons/fa";

import homebg from "../../assets/bgImage/hombg.jpg";
import Socials from "./Socials";

const Home = () => (
  <div className="home_container" id="Home">
    <div className="home_intro">
      <h2>HEY! I AM</h2>
      <h1>FAN PIAO</h1>
      <h2>I&apos;m a pro Mobile Developer</h2>
      <a href="#About" className="shadow_effect explore">
        <span>Explore </span>
        <FaPlay />
      </a>
    </div>
    <div className="home_image">
      <img src={homebg} alt="home bg" />
    </div>
    <Socials />
  </div>
);

export default Home;
