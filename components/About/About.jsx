// import Image from "next/image";
// import styles from "./About.module.css";
// import data from "../../public/data.png";

// const style = { fontSize: "1.4em" };
// const About = () => {
//   return (
//     <section id="about" className="container">
//       <div className={styles.about_section}>
//         <div className={styles.about_text}>
//           <h3>About Me</h3>
//           <p>
//             Im Rohitashva, a driven individual with a passion for software
//             development and a knack for tackling challenges head-on. My journey
//             into the world of software development commenced during my{" "}
//             <span>Bachelor of Computer Application</span> days at Maharshi
//             Dayanand Saraswati University. Since then, Ive embraced a diverse
//             range of technologies and platforms, constantly adapting to new
//             trends and advancements in the field. With an{" "}
//             <span>Advanced Certificate in Full Stack Development</span> from the
//             esteemed Indian Institute of Technology Roorkee and an Advanced
//             Diploma in Management Ive honed my skills in <span>Python</span>,{" "}
//             <span>Django</span> <span>Flask</span>, <span>SQL</span>, and
//             various backend technologies. However, I believe that being a
//             software developer transcends mere proficiency in specific
//             technologies. As a software developer, I understand that the
//             technology landscape is constantly evolving. Whats in demand today
//             may be replaced by something new tomorrow. Therefore, I approach my
//             work with a mindset of versatility and continuous learning. Whether
//             its <span>Python</span>, <span>Django</span>, <span>Flask</span>, or
//             any other emerging technology, I am committed to staying updated and
//             adaptable. My focus lies in leveraging my expertise to build robust
//             Please can you replace the lines hello and scalable solutions,
//             regardless of the specific technology stack involved. I thrive in
//             dynamic environments and am dedicated to contributing to the success
//             of initiatives, no matter the challenges they may present. Lets
//             connect and collaborate to drive innovation and shape the future of
//             software development, embracing the diversity and ever-changing
//             nature of technology together!
//           </p>
//         </div>
//       </div>
//       <div className={styles.about_image}>
//         <Image className={styles.img} src={data} alt="about-image" />
//       </div>
//     </section>
//   );
// };

// export default About;

import Image from "next/image";
import styles from "./About.module.css";
import data from "../../public/data.png";

const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about_section}>
        <div className={styles.about_text}>
          <h2>About Me</h2>
          <p className={styles.main_paragraph}>
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
        <div className={styles.about_image}>
          <Image className={styles.img} src={data} alt="about-image" />
        </div>
      </div>
    </section>
  );
};

export default About;
