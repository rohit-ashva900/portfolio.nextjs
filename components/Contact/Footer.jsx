import Link from "next/link";
import { socialLinks } from "../Data";
import styles from "./Footer.module.css";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Footer = () => {
  return (
    <section id="contact" className="container">
      <div className={styles.footer_bar}>
        <div className={styles.contact_me}>
          <p>Get in Touch</p>
          <h1>Contact Me</h1>
        </div>

        <div className={styles.social_links}>
          {socialLinks.map(({ id, href, icon }) => {
            return (
              <div key={id} className={styles.social_bar}>
                <a href={href}>
                  <i>{icon}</i>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.nav_links}>
        <Link href="/">
          {/* <HiOutlineChevronDoubleUp size={50} /> */}
          <HiOutlineChevronDoubleUp className={styles.icon_up} />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
