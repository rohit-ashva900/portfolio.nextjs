import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../public/assets/logo.png";
import Link from "next/link";
import styles from "./Nav.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { socialLinks, links } from "../Data";

const NavBar = () => {
  return (
    <div className="container">
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
        <nav>
          <ul className={styles.links}>
            {links.map(({ id, url, text }) => {
              return (
                <Link key={id} className={styles.link} href={url}>
                  <li>{text}</li>
                </Link>
              );
            })}
          </ul>
          <AiOutlineMenu className={styles.menu_icons} />
        </nav>
      </section>
    </div>
  );
};

export default NavBar;
