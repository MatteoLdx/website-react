import fox from "../assets/fox.jpg";
import "../style/NavBar.css";

function NavBar() {
  return (
    <div className="nav-wrapper">
      <a href="#">
        <img
          src={fox}
          alt="Logo minimaliste représentant un renard polaire devant des montagnes"
        />
      </a>
      <div className="nav-links">
        <a href="#about">Présentation</a>
        <a href="#skills">Compétences</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
}

export default NavBar;
