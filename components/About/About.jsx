import Image from "next/image";
import styles from "./About.module.css";
import about from "../../public/assets/about.jpg";
// import myImage from "../../public/myimg.jpg";
import IMG from "../../public/IMG.jpeg";

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
            Hello, My name is Rohit Ashva. I completed{" "}
            <span>my bachelor,s degree in Computer Software </span> in 2017.
            After that, I pursued my{" "}
            <span> master s degree in Computer Software </span> from Jaipur
            National University in 2021 from india. For the past two years, I
            have been living in Poland. Currently, I am focused on learning core{" "}
            <span>JavaScript and java </span> and following the full-stack
            development path. I have a passion for learning new concepts and
            skills, especially when it comes to understanding how things work
            behind the computer screen. The world of technology and programming
            never ceases to amaze me, and I,m excited to continue my journey of
            growth and knowledge in the field of software development.
            <b>Thank you </b>for getting to know a bit about me. I look forward
            to embracing new challenges and making a positive impact through my
            work in the future.
          </p>
        </div>
        <div className={styles.about_image}>
          <Image className={styles.img} src={IMG} alt="about-image" />
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
              date="2018 - 2020"
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
              date="2021"
              iconStyle={{ background: "#2c5364", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Master,s degree Jaipur National University
              </h3>

              <h4 style={style} className="vertical-timeline-element-subtitle">
                Computer Software
              </h4>

              <p> Master,s degree </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="2022"
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
              className="vertical-timeline-element--education"
              date="2023"
              iconStyle={{ background: "#2c5364", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                Great Learning ( e-Learning )
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                ADVANCED CERTIFICATE PROGRAM IN FULL STACK SOFTWARE DEVELOPMENT
                from <span style={{ color: "red" }}>IIT ROORKEE </span> , India
                SPECIALIZATION in cloud Computing
              </h4>

              <p> Advance certificate </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2022"
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

            {/* <VerticalTimelineElement
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
            </VerticalTimelineElement> */}
          </VerticalTimeline>
        </div>
      </article>
    </section>
  );
};

export default About;
