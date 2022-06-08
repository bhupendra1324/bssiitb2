import React from "react";
import styles from "./AboutMe.module.css";
import { useNavigate } from "react-router-dom";

const AboutMe = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        About Me
        <div className={styles.subheading}>About Me</div>
      </div>
      <div className={styles.content}>
        <p>
          A few interesting things about me. I love learning; it has become a
          part of everyday life. Everyday I push myself to learn something new,
          whether that be about Machine Learning, Full Stack Development,
          especially react.js, MLOps, or various facts about satellites,
          astronomy and the universe. Other than that you will find me either
          playing first person shooter games or watching cricket or formula 1.
        </p>

        <p>
          Furthermore, my specialties include quickly learning new skills. So
          far, I have experience in Pytorch, Tensorflow, Python, JavaScript,
          React.js, Next.js, Java, Solidity, and DevOps tools (Docker,
          Kubernetes, Ansible, etc.).
        </p>
      </div>
      <button
        className={styles.aboutbtn}
        onClick={() => {
          navigate("/about");
        }}
      >
        About
      </button>
    </div>
  );
};

export default AboutMe;
