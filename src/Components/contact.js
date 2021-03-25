import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div className="social-container" id="contact">
      <h3>Contact Me</h3>
      <a href="https://twitter.com/charbeleidd" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://github.com/charbeleidd" className="twitter social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a
        href="https://www.linkedin.com/in/charbel-eid-11b6071b9/"
        className="twitter social"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default Contact;
