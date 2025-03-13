import React from "react";
import styles from "./LegalModel.module.css";

export const LegalModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <span className={styles.closeButton} onClick={onClose}>
          &times;
        </span>
        <h2>Legal Notice</h2>
        <p>
          <strong>Effective Date:</strong> March 13, 2025
        </p>

        <h3>1. Introduction</h3>
        <p>
          This Website, <strong>dmitriegorobcov.com</strong> ("Website"), is
          owned and operated by Dmitrie Gorobcov ("Owner"). By accessing this
          Website, you acknowledge and agree to the terms outlined in this legal
          notice.
        </p>

        <h3>2. Publisher Information (Mentions Légales)</h3>
        <p>
          <strong>Owner:</strong> Dmitrie Gorobcov
        </p>
        <p>
          <strong>Address:</strong> Available upon request
        </p>
        <p>
          <strong>Email:</strong> gorobcovdmitrie@gmail.com
        </p>
        <p>
          <strong>Hosting Provider:</strong> Netlify (
          <a
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            netlify.com
          </a>
          )
        </p>
        <p>
          <strong>Domain Provider:</strong> Namecheap (
          <a
            href="https://www.namecheap.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            namecheap.com
          </a>
          )
        </p>

        <h3>3. Intellectual Property</h3>
        <p>
          All content on this Website, including but not limited to text,
          images, and projects, is owned by Dmitrie Gorobcov unless stated
          otherwise. While the content on this Website is protected by default
          under copyright law, the projects hosted on my{" "}
          <a
            href="https://github.com/triborya"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub profile
          </a>{" "}
          are publicly available for viewing and collaboration. Unless
          explicitly stated in a project's repository, these projects do not
          have a specific license, meaning they are provided as-is without any
          formal permissions for reuse, modification, or distribution. If you
          wish to use or contribute to any of my projects, please reach out to
          me at <strong>gorobcovdmitrie@gmail.com</strong> for clarification or
          permissions.
        </p>

        <h3>4. External Links</h3>
        <p>
          This Website contains links to third-party platforms, such as LinkedIn
          and GitHub. I am not responsible for their content or privacy
          policies.
        </p>

        <h3>5. Limitation of Liability</h3>
        <p>
          This Website is for informational purposes only, showcasing projects
          completed during my studies. I am not liable for any errors,
          omissions, or issues arising from the use of this Website.
        </p>

        <h3>6. Data Collection & Privacy</h3>
        <p>
          This Website does not collect, process, or store personal data. No
          cookies or tracking technologies are used.
        </p>

        <h3>7. Contact Information</h3>
        <p>
          For any legal inquiries, contact:{" "}
          <strong>gorobcovdmitrie@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};
