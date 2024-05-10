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
            I m Rohitashva, a driven individual with a knack for tackling
            challenges head-on. My journey into software development began
            during my <span>Bachelor of Computer Application </span> days at
            Maharshi Dayanand Saraswati University. With a passion for
            problem-solving and a hunger for knowledge, I ve immersed myself in
            the world of software development. Armed with an{" "}
            <span>
              {" "}
              Advanced Certificate in Full Stack Development from the Indian
              Institute of Technology Roorkee{" "}
            </span>{" "}
            and an Advanced Diploma in Management, I ve honed my skills in{" "}
            <span>
              Python, Django, Flask, SQL, and other backend technologies
            </span>
            .My focus lies in leveraging Python, Django, or Flask expertise to
            build robust and scalable solutions. I thrive in dynamic
            environments and am dedicated to contributing to the success of
            initiatives. Lets connect and collaborate to drive innovation and
            shape the future of backend development!
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
