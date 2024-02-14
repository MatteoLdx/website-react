import PropTypes from "prop-types";
import "../style/ContactElement.css";

function ContactElement({ image, alt, text, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="contact-element"
      aria-label="Ouvrir le site web dans une nouvelle fenêtre"
    >
      <img src={image} alt={alt} />
      <span>{text}</span>
    </a>
  );
}

ContactElement.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ContactElement;
