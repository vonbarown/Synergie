import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./about.css";

export const About = () => {
  return (
    <div className="about">
      <h1>About</h1>
      <div className="blurb">
        Welcome to the Synergie App. Now you and your friends can plan your
        binge watching sessions. We know that life can be busy, now you can keep
        track of the shows that you love.
      </div>
      <div className="signature">Made by Voniel Brown</div>
      <footer>
        <a href="https://github.com/vonbarown" target="_blank">
          <FontAwesomeIcon
            className="fa-icon github"
            icon={["fab", "github"]}
          />
        </a>
        <a href="https://www.linkedin.com/in/vonielbrown/" target="_blank">
          <FontAwesomeIcon
            className="fa-icon linked-in"
            icon={["fab", "linkedin"]}
          />
        </a>
      </footer>
    </div>
  );
};
