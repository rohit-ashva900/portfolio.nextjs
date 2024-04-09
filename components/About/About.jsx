import Image from "next/image";
import styles from "./About.module.css";
import data from "../../public/data.png";

const style = { fontSize: "1.4em" };
const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about_section}>
        <div className={styles.about_text}>
          <h3>About Me</h3>
          <p>
            Hello, I'm Rohitashva, a dedicated professional with a bachelor's
            degree in Computer Software and a master's degree in Computer
            Software from Jaipur National University. Currently based in Poland,
            I am passionately pursuing expertise in{" "}
            <span>
              {" "}
              Python, SQL, Pandas, Excel, various data visualization tools, and
              Business Intelligence (BI)
            </span>
            tools to enhance my proficiency in <span>data analysis</span>. With
            a relentless drive for learning and a keen interest in technology, I
            am committed to continuously expanding my skill set and making
            impactful contributions in the field of data analysis. Thank you for
            considering my profile
          </p>
        </div>
      </div>
      <div className={styles.about_image}>
        <Image className={styles.img} src={data} alt="about-image" />
      </div>
    </section>
  );
};

export default About;
