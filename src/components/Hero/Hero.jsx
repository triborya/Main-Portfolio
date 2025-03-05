import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dmitrie</h1>
        <p className={styles.description}>
          My motivation lies in my ability to learn quickly, adapt and
          contribute effectively; investing in me means investing in a reactive
          and autonomous talent, ready to take on any challenge.
        </p>
        <a
          href="mailto:gorobcovdmitrie@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero.gif")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
