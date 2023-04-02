import Image from "next/image";
import React from "react";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import styles from "./Nav.module.css";
import { socialLinks, links } from "../Data";

const NavBar = () => {
  return (
    <div>
      <nav className="container">
        <section className={styles.nav_bar}>
          <div>
            <Link href="/">
              <Image
                className={styles.nav_img}
                src={logo}
                alt="/"
                width="60"
                height="40"
              />
            </Link>
          </div>
          <div>
            <ul className={styles.links}>
              {links.map(({ id, url, text }) => {
                return (
                  <Link key={id} className={styles.link} href={url}>
                    <li>{text}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>
      </nav>
    </div>
  );
};

export default NavBar;
