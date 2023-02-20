import BackEnd from "./BackEnd";
import FrontEnd from "./FrontEnd";
import "./skills.css"

function Skills() {
  return (
    <section className="skills section" id="skills">
      <h2 className="section_title">Skills</h2>
      <span className="section_subtitle">My technical level</span>

      <div className="skills_container container grid">
        <FrontEnd />

        <BackEnd />
      </div>
    </section>
  );
}

export default Skills;
