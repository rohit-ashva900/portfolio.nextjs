import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/router";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import styles from "./Nav.module.css";
import { GiSplitCross } from "react-icons/gi";
import { links } from "../Data";

const NavBar = () => {
  // mobile nav-------------------------------------
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const linksStyle = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px `
      : "0px",
  };
  // mobile nav-------------------------------------
  // change nav color when scrolling .....
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  // i found this solution on internet -------------------
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener("scroll", changeColor);
  }

  // change nav color when scrolling .....

  // close menu--------------
  const router = useRouter();
  useEffect(() => {
    setShowLinks(false);
  }, [router]);
  // close menu--------------

  return (
    <nav className={color ? "nav_bar nav_bg " : "nav_bar"}>
      <div className="container">
        <section className={styles.nav_center}>
          <div className={styles.nav_header}>
            <Link href="/">
              <Image
                className={styles.nav_logo}
                src={logo}
                alt="/"
                width="60"
                height="40"
              />
            </Link>
            <button className={styles.nav_toggle} onClick={toggleLinks}>
              <GiSplitCross />
            </button>
          </div>

          <div
            className={styles.links_container}
            ref={linksContainerRef}
            style={linksStyle}
          >
            <ul className={styles.links} ref={linksRef}>
              {links.map(({ id, url, text }) => {
                return (
                  <li key={id}>
                    <Link className={styles.link} href={url}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
