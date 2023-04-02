import styles from "./Skills.module.css";
import { skills } from "../Data";
const Skills = () => {
  return (
    <section id="skills">
      <section className="container">
        <div className={styles.skills_section}>
          <div className={styles.heading_section}>
            <p>SKILLS</p>
            <h2>What I Learn So far...</h2>
          </div>
          <div className={styles.skills_grid}>
            {skills.map(({ id, text, image, level }) => {
              return (
                <div key={id} className={styles.skills_box}>
                  <div>
                    {image}
                    <p>{level}</p>
                  </div>
                  <div>
                    <h3>{text}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Skills;
