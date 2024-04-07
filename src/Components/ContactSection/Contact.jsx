import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSlack,
  faDiscord,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="contact-container">
      <p>Connect with me</p>
      <a href="https://join.slack.com/t/archi-kumari/shared_invite/zt-2gbyqcv6q-26j51G4ZXH4VPe0K7wfJJg">
        <FontAwesomeIcon icon={faSlack} />
      </a>
      <a href="https://discord.gg/tPBmV4QdnW">
        <FontAwesomeIcon icon={faDiscord} />
      </a>
      <a href="https://github.com/archiKumari">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/archi-kumari-55a085241/">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:archikumari97@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default Contact;
