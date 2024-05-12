import styles from "./Skills.module.css";
import { skills, backendskills } from "../Data";
const Skills = () => {
  return (
    <section id="skills">
      <section className="container">
        <div className={styles.skills_section}>
          <div className={styles.heading_section}>
            <p>Technical Skills</p>
            <h4>
              Here are a few technologies I’ve been working with recently:
            </h4>
          </div>
          {/* <section className={styles.skills_tech}>
            <h3 style={{ "margin-top": "2rem", "font-size": "2rem" }}>
              back-end{" "}
            </h3>
            <div className={styles.skills_grid}>
              {backendskills.map(({ id, text, image, level }) => {
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
          </section> */}
          <section className={styles.skills_tech}>
            {/* <h3 style={{ "margin-top": "2rem", "font-size": "2rem" }}>
              Front-End
            </h3> */}
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
          </section>
        </div>
      </section>
    </section>
  );
};

export default Skills;
