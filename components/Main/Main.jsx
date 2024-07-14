import styles from "./Main.module.css";
import { socialLinks, skills } from "../Data";
import Link from "next/link";
import Image from "next/image";
import data from "../../public/data.png";

const Main = () => {
  return (
    <div>
      <main className="container">
        <div className={styles.section_d}>
        <section className={styles.main_section}>
          <div className={styles.main}>
            <h1>
              Hi, I m <span>Rohit ashva</span> <br />
            </h1>
            <h2>
              Aspiring to Code for Giants, Starting with Every Byte <br />
            </h2>
            <p>
              Dynamic software developer passionate about innovation,
              continuous learning, and algorithms.
              <b> <br />If you re curious about me, just grab my resume! It s like a sneak peek into the wild adventures of coding and coffee.</b>
            </p>
          </div>

          <div className={styles.social_links}>
            {socialLinks.map(({ id, href, icon }) => {
              return (
                <div key={id} className={styles.social_bar}>
                  <a href={href}>
                    <i>{icon}</i>
                  </a>
                </div>
              );
            })}
          </div>
          <div className={styles.resume_section}>
            <h3>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </Link>
            </h3>
          </div>
        </section>

        <section id="about" className={styles.about_section}>
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
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </section>
        </div>
      </main>   
    </div>
    
  );
  
};

export default Main;
