import React, { useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { LegalModal } from "../Legal/LegalModel.jsx";

export const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.contentRow}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a
              href="mailto:gorobcovdmitrie@gmail.com"
              aria-label="Send an email to gorobcovdmitrie@gmail.com"
            >
              gorobcovdmitrie@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
            <a
              href="https://www.linkedin.com/in/dgorobcov/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile of Dmitrie Gorobcov"
            >
              linkedin.com/dgorobcov
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="Github icon"
            />
            <a
              href="https://github.com/triborya"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile triborya"
            >
              github.com/triborya
            </a>
          </li>
        </ul>
      </div>

      <p className={styles.legalText}>
        © 2024 Dmitrie Gorobcov.{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsModalOpen(true);
          }}
        >
          Mentions Légales
        </a>
      </p>

      <LegalModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </footer>
  );
};
