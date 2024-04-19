import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import html from "../public/assets/skills/html.png";
import css from "../public/assets/skills/css.png";
import react from "../public/assets/skills/react.png";
import github from "../public/assets/skills/github1.png";
import next from "../public/assets/skills/nextjs.png";
import git from "../public/assets/skills/Git.png";
import javascript from "../public/assets/skills/javascript.png";
import tailwind from "../public/assets/skills/tailwind.png";
import redux from "../public/assets/skills/Redux.png";
import style from "../public/assets/skills/style.png";
import typescript from "../public/assets/skills/typescript.png";
import python from "../public/assets/skills/Python-Symbol.png";
import python2 from "../public/assets/skills/Python-svg.png";
import tableau from "../public/assets/skills/tableau.png";
import BI_tools from "../public/assets/skills/BI_tools.png";
import java from "../public/assets/skills/Java-Logo.png";
import sql from "../public/assets/skills/Sql_logo.png";
import mspowerbi from "../public/assets/skills/PowerBI.png";
// import node from "../public/assets/skills/node.png"; need to learn how works
// import reactnative from "../public/assets/skills/react-native.png";  need to learn how works
import { nanoid } from "../node_modules/nanoid";
import imageapp from "../public/assets/projects/image-app.png";
import teslaclone from "../public/assets/projects/tesla-clone.png";
import pizza from "../public/assets/projects/pizza_hooks.png";
import excel from "../public/assets/skills/Excel.png";
import powerbi from "../public/slider/1.png";
import excel_project from "../public/slider/2.png";

const colorGitHub = {
  color: "#171515",
};

//social links------social links------social links------social links------
export const socialLinks = [
  {
    id: nanoid(),
    href: "https://www.linkedin.com/in/rohit-ashva-92b662268/",
    icon: <FaLinkedinIn size={25} style={{ color: "#0c6088" }} />,
  },
  {
    id: nanoid(),
    href: "https://github.com/rohzxz",
    icon: <FaGithub size={25} style={colorGitHub} />,
  },
  {
    id: nanoid(),
    href: "mailto:rohzxz@gmail.com",
    icon: <AiOutlineMail size={25} style={{ color: "#C71610" }} />,
  },
  {
    id: nanoid(),
    href: "https://twitter.com/rohit__ashva",
    icon: <FaTwitter size={25} style={{ color: "#11669b" }} />,
  },
];

// const linkedin = {
//   color: "red",
// };

//  nav links----------- nav links----------- nav links----------- nav links-----------

export const links = [
  {
    id: nanoid(),
    url: "/",
    text: "home",
  },
  {
    id: nanoid(),
    url: "/#about",
    text: "about",
  },
  {
    id: nanoid(),
    url: "/#skills",
    text: "skills",
  },
  {
    id: nanoid(),
    url: "/#projects",
    text: "projects",
  },
  {
    id: nanoid(),
    url: "/#contact",
    text: "contact",
  },
];

// slider------slider-----slider-----slider-----slider-----

//skill------skill------skill------skill------skill------skill------skill------

export const skills = [
  {
    id: nanoid(),
    text: "HTML 5",
    level: "⚫⚫⚫",
    image: <Image src={html} alt="html" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "CSS 3",
    level: "⚫⚫",
    image: <Image src={css} alt="css" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: `JavaScript
               (ES6+)  `,
    level: "⚫⚫",
    image: <Image src={javascript} alt="js" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "React",
    level: "⚫⚫⚫",
    image: <Image src={react} alt="react" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "Next js",
    level: "⚫⚫",
    image: <Image src={next} alt="next js" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "Typescript",
    level: "⚫⚫",
    image: <Image src={typescript} alt="style" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "Tailwind CSS",
    level: "⚫⚫",
    image: <Image src={tailwind} alt="tailwind" width="50" height="50" />,
  },
  // {
  //   id: nanoid(),
  //   text: "Redux",
  //   level: "⚫",
  //   image: <Image src={redux} alt="redux" width="50" height="50" />,
  // },
  {
    id: nanoid(),
    text: "GitHub",
    level: "⚫⚫",
    image: <Image src={github} alt="github" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "git",
    level: "⚫⚫",
    image: <Image src={git} alt="git" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "styled-components",
    level: "⚫⚫",
    image: <Image src={style} alt="style" width="50" height="50" />,
  },
  // {
  //   id: nanoid(),
  //   text: "Node js",
  //   level: "⚫",
  //   image: <Image src={node} alt="node js" width="64" height="64" />,
  // },
  // {
  //   id: nanoid(),
  //   text: "React-Native",
  //   level: "⚫",
  //   image: <Image src={reactnative} alt="native" width="64" height="64" />,
  // },
];

// back-End skills---------------
export const backendskills = [
  {
    id: nanoid(),
    text: "Python",
    level: "⚫⚫⚫",
    image: <Image src={python2} alt="html" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "SQL",
    level: "⚫⚫⚫",
    image: <Image src={sql} alt="css" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "tableau",
    level: "⚫⚫",
    image: <Image src={tableau} alt="css" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "Power BI",
    level: "⚫⚫",
    image: <Image src={mspowerbi} alt="css" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "Excel",
    level: "⚫⚫⚫",
    image: <Image src={excel} alt="css" width="50" height="50" />,
  },
  {
    id: nanoid(),
    text: "BI_tools",
    level: "⚫⚫",
    image: <Image src={BI_tools} alt="css" width="50" height="50" />,
  },
];

// project list data analysis projects - data-------------------------------------------

export const projectList1 = [
  {
    id: nanoid(),
    href_github:
      "https://github.com/rohzxz/analyse-e-commerce-data-with-power-BI/blob/main/projects%20for%20power%20BI.pdf",
    icon_github: <FaGithub className="icons" style={colorGitHub} />,
    // icon_github: <FaGithub size={50} />,
    href_demo:
      "https://github.com/rohzxz/analyse-e-commerce-data-with-power-BI",
    icon_demo: <BsArrowUpRightSquare className="icons" />,
    // icon_demo: <BsArrowUpRightSquare size={50} />,
    name: "Analyzing E-commerce Data with Power BI",
    image: (
      <Image
        src={powerbi}
        alt="projects"
        style={{ borderRadius: "1em", width: "100%", height: "100%" }}
      />
    ),
    Overview:
      "Analyzed e-commerce data using Power BI: Installed, imported transformed, and visualized data; created measures, charts, and dashboards for insights",
    Technologies: (
      <ul>
        <li>◼️Power BI</li>
        <li>◼️Dashboard in Power BI </li>
      </ul>
    ),
  },
  {
    id: nanoid(),
    href_github:
      "https://github.com/rohzxz/Excel-store-data-analysis/tree/main",
    icon_github: <FaGithub className="icons" style={colorGitHub} />,
    // icon_github: <FaGithub size={50} />,
    href_demo:
      "https://github.com/rohzxz/Excel-store-data-analysis/blob/main/report%20/allreport.png",
    icon_demo: <BsArrowUpRightSquare className="icons" />,
    // icon_demo: <BsArrowUpRightSquare size={50} />,
    name: "Insights into Consumer Behavior & Sales Channels: Leveraging Microsoft Excel & Pivot Charts",
    image: (
      <Image
        src={excel_project}
        alt="projects"
        style={{ borderRadius: "1em", width: "100%", height: "100%" }}
      />
    ),
    Overview:
      "This report, crafted using Microsoft Excel and pivot charts, delves into women's buying behavior, top sales states, and leading sales channels, <br>  Conclusion: Recommend targeting female customers aged 30-50, focusing marketing efforts on Amazon, Flipkart, or Myntra for optimal growth",
    Technologies: (
      <ul>
        <li>◼Ms excel</li>
        <li>◼️pivot chart</li>
      </ul>
    ),
  },
];
// project list data analysis projects - data-------------------------------------------

// project list data FrontEnd Projects - data-------------------------------------------
export const projectList = [
  {
    id: nanoid(),
    href_github: "https://github.com/rohzxz/image-searching-with-api",
    icon_github: <FaGithub className="icons" style={colorGitHub} />,
    // icon_github: <FaGithub size={50} />,
    href_demo: "https://rohzxzimage-app.netlify.app/",
    icon_demo: <BsArrowUpRightSquare className="icons" />,
    // icon_demo: <BsArrowUpRightSquare size={50} />,
    name: "Image-app -with -API",
    image: (
      <Image
        src={imageapp}
        alt="projects"
        style={{ borderRadius: "1em", width: "100%", height: "100%" }}
      />
    ),
    Overview: "This app was built using React JS with unsplash API.",
    Technologies: (
      <ul>
        <li>◼️React js</li>
        <li>◼️Javascript</li>
        <li>◼️unsplash API</li>
      </ul>
    ),
  },
  {
    id: nanoid(),
    href_github: "https://github.com/rohzxz/tesla-clone-nextjs",
    icon_github: <FaGithub className="icons" style={colorGitHub} />,
    href_demo: "https://rohzxz-teslaclone.netlify.app/",
    icon_demo: <BsArrowUpRightSquare className="icons" />,
    name: "Tesla----------------clone",
    image: (
      <Image
        src={teslaclone}
        alt="projects"
        style={{ borderRadius: "1em", width: "100%", height: "100%" }}
      />
    ),
    Overview: `This app was built using Next JS. with Pure CSS ____ `,
    Technologies: (
      <ul>
        <li>◼️Next js</li>
        <li>◼️React js</li>
      </ul>
    ),
  },
  {
    id: nanoid(),
    href_github: "https://github.com/rohzxz/pizza-hooks",
    icon_github: <FaGithub className="icons" style={colorGitHub} />,
    href_demo: "https://rohzxz-pizza-hooks.netlify.app//",
    icon_demo: <BsArrowUpRightSquare className="icons" />,
    name: "pizza-hooks",
    image: (
      <Image
        src={pizza}
        alt="projects"
        style={{ borderRadius: "1em", width: "100%", height: "100%" }}
      />
    ),
    Overview: "This app was built using context hook with Next js.",
    Technologies: (
      <ul>
        <li>◼️Next js</li>
        <li>◼️tailwind-css</li>
        <li>◼️context hook</li>
      </ul>
    ),
  },
  // {
  //   id: nanoid(),
  //   href_github: "https://github.com/rohzxz/image-searching-with-api",
  //   icon_github: <FaGithub className="icons" style={colorGitHub} />,
  //   href_demo: "https://rohzxzimage-app.netlify.app/",
  //   icon_demo: <BsArrowUpRightSquare className="icons" />,
  //   name: "Image-app -with -API",
  //   image: (
  //     <Image
  //       src={imageapp}
  //       alt="projects"
  //       style={{ borderRadius: "1em", width: "100%", height: "100%" }}
  //     />
  //   ),
  //   Overview: "This app was built using React JS with unsplash API.",
  //   Technologies: (
  //     <ul>
  //       <li>◼️React js</li>
  //       <li>◼️Javascript</li>
  //       <li>◼️unsplash API</li>
  //     </ul>
  //   ),
  // },
];

// project list data FrontEnd Projects - data-------------------------------------------
