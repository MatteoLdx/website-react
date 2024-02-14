import PropTypes from "prop-types";
import "../style/Skill.css";

function Skill({ link, logo, alt, caption, rounded = false }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="skill"
      aria-label="Ouvrir le site web dans une nouvelle fenêtre"
    >
      <figure>
        <img
          src={logo}
          alt={alt}
          className={"logo" + (rounded ? " rounded" : "")}
        />
        <figcaption>{caption}</figcaption>
      </figure>
    </a>
  );
}

Skill.propTypes = {
  link: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  rounded: PropTypes.bool,
};

export default Skill;
