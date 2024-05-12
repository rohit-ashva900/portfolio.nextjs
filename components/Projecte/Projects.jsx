import styles from "./projects.module.css";
import Link from "next/link";
import { projectList } from "../Data";
import { projectList1 } from "../Data";

const Projects = () => {
  return (
    <section id="projects" className="container">
      <section className={styles.projects_section}>
        <div className={styles.projects}>
          <div className={styles.projects1}>
            <p>Projects</p>
          </div>
          <section>
            {projectList1.map((projects) => {
              const {
                id,
                icon_github,
                href_github,
                href_demo,
                icon_demo,
                name,
                image,
                Technologies,
                Overview,
              } = projects;
              return (
                <div key={id} className={styles.projects_item}>
                  <div className={styles.image_container}>
                    <div className={styles.project_image}>{image}</div>
                  </div>
                  <div className={styles.project_text}>
                    <h3>{name}</h3>
                    <h4>Overview</h4>
                    <p>{Overview}</p>
                    <h4>Technologies</h4>
                    <div>{Technologies}</div>
                    <div className={styles.icons}>
                      <Link href={href_github}>{icon_github}</Link>
                      <Link href={href_demo}>{icon_demo}</Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
        {/* <div className={styles.projects1}>
          <p>FRONTEND PROJECTS</p>
        </div> */}
        {projectList.map((projects) => {
          const {
            id,
            icon_github,
            href_github,
            href_demo,
            icon_demo,
            name,
            image,
            Technologies,
            Overview,
          } = projects;
          return (
            <div key={id} className={styles.projects_item}>
              <div className={styles.image_container}>
                <div className={styles.project_image}>{image}</div>
              </div>
              <div className={styles.project_text}>
                <h3>{name}</h3>
                <h4>Overview</h4>
                <p>{Overview}</p>
                <h4>Technologies</h4>
                <div>{Technologies}</div>
                <div className={styles.icons}>
                  <Link href={href_github}>{icon_github}</Link>
                  <Link href={href_demo}>{icon_demo}</Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Projects;
