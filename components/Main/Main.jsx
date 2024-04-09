import styles from "./Main.module.css";

import { socialLinks } from "../Data";
import Link from "next/link";
const Main = () => {
  return (
    <div>
      <main className="container">
        <section className={styles.main_section}>
          <div className={styles.main}>
            <h1>
              Hi,I m <span>Rohitashva</span> <br />A Data Analyst
            </h1>
            <p>
              {/* A <span>Programmer </span> with a passion for learning and
              creating. */}
              Cultivating Insights, Driving Decisions: Empowering Businesses
              Through <span>Data Analysis</span>.
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
      </main>
    </div>
  );
};

export default Main;
