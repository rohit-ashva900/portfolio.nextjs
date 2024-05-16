
import Image from "next/image";
import styles from "./About.module.css";
import data from "../../public/data.png";
// import styles from "./Skills.module.css";
import { skills } from "../Data";
const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about_section}>
        <div className={styles.about_text}>
          <h2>About Me</h2>
          <p >
            Im Rohitashva, a software developer passionate about solving
            challenges. My journey began during my Bachelor of Computer
            Application days at Maharshi Dayanand Saraswati University. Since
            then, Ive embraced various technologies, constantly adapting to new
            trends.
          </p>
          <p>
            With an Advanced Certificate in Full Stack Development from IIT
            Roorkee and an Advanced Diploma in Management, Ive honed my skills
            in Python, Django, Flask, SQL,ReactJs and more.
          </p>
          <p>
            Beyond proficiency in technologies, I understand that the tech
            landscape evolves rapidly. I approach my work with versatility and
            continuous learning.
          </p>
          <p>
            My focus is on building robust and scalable solutions, thriving in
            dynamic environments. Im committed to contributing to the success of
            initiatives, embracing challenges.
          </p>
          <p>
            Lets connect and collaborate to drive innovation in software
            development, embracing diversity and change!
          </p>
        </div>
        {/* <div className={styles.about_image}> */}
        <div id="skills">
        <div className={styles.skills_section}>
          <div className={styles.heading_section}>
            <p>Technical Skills</p>
            <h4>
              Here are a few technologies I’ve been working with recently:
            </h4>
          </div>

          <section className={styles.skills_tech}>
            <div className={styles.skills_grid}>
              {skills.map(({ id, text, image, level }) => {
                return (
                  <div key={id} className={styles.skills_box}>
                    <div className={styles.images}>
                      {image}
                      <p>{level}</p>
                    </div>
                    {/* <div className={styles.skills_name}>
                      <h3>{text}</h3>
                    </div> */}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default About;
