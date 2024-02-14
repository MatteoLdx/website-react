import Skill from "./Skill";
import SmallDivider from "./SmallDivider";
import backSkills from "../data/backSkills";
import frontSkills from "../data/frontSkills";
import otherSkills from "../data/otherSkills";
import "../style/SkillsList.css";

function SkillsList() {
  return (
    <>
      <h3 className="skills-title">Compétences</h3>
      <SmallDivider />

      <h4 className="skills-subtitle">Web front-end</h4>
      <div className="skills-list">
        {frontSkills.map((s) => (
          <Skill
            link={s.link}
            logo={s.logo}
            alt={s.alt}
            caption={s.name}
            rounded={s.rounded}
            key={s.name}
          />
        ))}
      </div>

      <h4 className="skills-subtitle">Web back-end</h4>
      <div className="skills-list">
        {backSkills.map((s) => (
          <Skill
            link={s.link}
            logo={s.logo}
            alt={s.alt}
            caption={s.name}
            rounded={s.rounded}
            key={s.name}
          />
        ))}
      </div>

      <h4 className="skills-subtitle">Autres langages et outils</h4>
      <div className="skills-list">
        {otherSkills.map((s) => (
          <Skill
            link={s.link}
            logo={s.logo}
            alt={s.alt}
            caption={s.name}
            rounded={s.rounded}
            key={s.name}
          />
        ))}
      </div>
    </>
  );
}

export default SkillsList;
