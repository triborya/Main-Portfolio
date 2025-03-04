import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dmitrie</h1>
        <p className={styles.description}>
          Ma motivation réside dans ma capacité à apprendre vite, m’adapter et
          contribuer efficacement ; investir en moi, c’est miser sur un talent
          réactif et autonome, prêt à relever tous les défis.
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
