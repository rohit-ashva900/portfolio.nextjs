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
// import node from "../public/assets/skills/node.png"; need to learn how works
// import reactnative from "../public/assets/skills/react-native.png";  need to learn how works
import { nanoid } from "../node_modules/nanoid";
import imageapp from "../public/assets/projects/image-app.png";
import teslaclone from "../public/assets/projects/tesla-clone.png";
import pizza from "../public/assets/projects/pizza_hooks.png";
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
  {
    id: nanoid(),
    text: "Redux",
    level: "⚫",
    image: <Image src={redux} alt="redux" width="50" height="50" />,
  },
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

// project list - data-------------------------------------------

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
