import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tv from "../../assets/watcing-tv.jpg";

import "./about.css";

export const About = () => {
  return (
    <div id='aboutContainer'>
      <h1>About</h1>
      <div className="about">
        <img id="tv" src={tv} alt="watching tv" />
        <div className="blurb">
          Welcome to the Synergie App. Now you and your friends can plan your
          binge watching sessions. We know that life can be busy, now you can
          keep track of the shows that you love.
        </div>
        <footer>
          <a
            href="https://github.com/vonbarown/Watch-List"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fa-icon github"
              icon={["fab", "github"]}
              title="Github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vonielbrown/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="fa-icon linked-in"
              icon={["fab", "linkedin"]}
              title="LinkedIn"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vonielbrown/"
            target="_blank"
            className="copyright-container"
            rel="noopener noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              className="fa-icon footer-icon copyright"
              icon={["fa", "copyright"]}
            />
            <p>Voniel Brown</p>
          </a>
        </footer>
      </div>
    </div>
  );
};
