import "../style/Footer.css";
import cc from "../assets/license/cc.svg";
import by from "../assets/license/by.svg";
import nc from "../assets/license/nc.svg";

function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <p className="footer-license">
          <a
            href="https://github.com/MatteoLdx/website-react"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
            aria-label="Ouvrir le site web dans une nouvelle fenêtre"
          >
            Voir le code sur GitHub
          </a>
          <br />© 2024 Mattéo Ledoux
          <a
            href="http://creativecommons.org/licenses/by-nc/4.0"
            target="_blank"
            rel="license noopener noreferrer"
            className="license inline-link"
            aria-label="Ouvrir le site web dans une nouvelle fenêtre"
          >
            CC BY-NC 4.0
            <img src={cc} alt="Logo Creative Commons" />
            <img src={by} alt="Logo BY (Attribution)" />
            <img src={nc} alt="Logo NC (Pas d’Utilisation Commerciale)" />
          </a>
        </p>
        <p className="footer-info">
          Site web hébergé par{" "}
          <a
            href="https://www.infomaniak.com/fr"
            target="_blank"
            rel="noreferrer"
            className="inline-link"
            aria-label="Ouvrir le site web dans une nouvelle fenêtre"
          >
            Infomaniak
          </a>
        </p>
      </div>
    </>
  );
}

export default Footer;
