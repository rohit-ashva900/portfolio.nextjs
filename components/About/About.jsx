import Image from "next/image";
import styles from "./About.module.css";
import about from "../../public/assets/about.jpg";
import myImage from "../../public/myimg.jpg";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork } from "react-icons/md";
const style = { fontSize: "1.4em" };

const About = () => {
  return (
    <section id="about" className="container">
      <div className={styles.about_section}>
        <div className={styles.about_text}>
          <h3>About Me</h3>
          <p>
            hello My name is Rohit ashva.I did my
            <span> computer software </span> bachelors degree in 2017 from
            india. after then did another course in management from Singapore in
            2021. right now I have lived in Poland last two years. right now I
            am learning core <span>javascript</span> and full stack development
            path. I love learning new concepts and skills. and I m fascinated by
            how things work behind the computer screen.
          </p>
        </div>
        <div className={styles.about_image}>
          <Image className={styles.img} src={myImage} alt="about-image" />
        </div>
      </div>
      <article className={styles.education_section}>
        <div className="container">
          <VerticalTimeline lineColor="#2c5364">
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2014 - 2017"
              iconStyle={{ background: "#2c5364", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Maharshi Dayanand University, Ajmer, India
              </h3>

              <h4 style={style} className="vertical-timeline-element-subtitle">
                Bachelors degree in Computer science
              </h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2018 - 2021"
              iconStyle={{ background: "#2c5364", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                SDH Institute, Singapore
              </h3>

              <h4 style={style} className="vertical-timeline-element-subtitle">
                Management and business tourism
              </h4>

              <p> Advance diploma </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022 - 2023"
              iconStyle={{ background: "#2c5364", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Scrimba, E-Learning
              </h3>

              <h4 style={style} className="vertical-timeline-element-subtitle">
                Front end developer career path
              </h4>

              <p> advance certificate </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022 - 2023"
              iconStyle={{ background: "#2c5364", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Udemy,E-Learning
              </h3>

              <h4 className="vertical-timeline-element-subtitle">
                javaScript,HTML5,CSS3,React,redux toolkit, git and gitHub
              </h4>

              <p> advance certificate </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022- 2022"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Apple Technician Assist
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                stog.sp zoo,poland
              </h4>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022 - present"
              iconStyle={{ background: "#e9d35b", color: "#fff" }}
              icon={<MdWork />}
            >
              <h3 className="vertical-timeline-element-title">
                Non commercial experience:
              </h3>
              <h4 className="vertical-timeline-element-subtitle">poland</h4>
              <p>
                Tesla simple clone website using React fully responsive. • good
                knowledge of fetching data from the API. • currently, I am
                working on a website using CRUD system. • basic knowledge
                version control system(git) • ability to solve the problem. •
                taking responsibility for my code. • Constantly learning and
                improving
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </article>
    </section>
  );
};

export default About;
