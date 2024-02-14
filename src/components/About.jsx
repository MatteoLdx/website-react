import SmallDivider from "./SmallDivider";
import fox from "../assets/fox.jpg";
import "../style/About.css";

function About() {
  return (
    <>
      <h3 className="about-title">Présentation</h3>
      <SmallDivider />
      <div className="about-content">
        <div className="about-left">
          <p>
            Bonjour ! Je m’appelle Mattéo Ledoux, je suis développeur et
            ingénieur diplômé de l’Université de Technologie de Compiègne.
          </p>
          <p>
            Dans le cadre de mes études, j’ai réalisé deux stages de six mois
            qui m’ont permis de mettre à profit mes connaissances théoriques et
            de développer mes compétences pratiques et organisationnelles.
          </p>
          <p>
            Je suis désormais à la recherche d’une première expérience en tant
            que développeur full-stack, front-end ou back-end dans une
            entreprise engagée pour l’environnement et/ou l’humain.
          </p>
        </div>
        <div className="about-right">
          <img
            src={fox}
            alt="Logo minimaliste représentant un renard polaire devant des montagnes"
          />
        </div>
      </div>
    </>
  );
}

export default About;
