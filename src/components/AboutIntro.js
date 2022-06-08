import React from "react";
import styles from "./AboutIntro.module.css";
const AboutIntro = () => {
  return (
    <>
      <div className={styles.introContainer}>
        <div className={styles.intro}>
          <div className={styles.ellipse}></div>
          <div className={styles.text1}>About Me</div>
          <div className={styles.gradientText}>Bhupendra Solanki</div>
          <div className={styles.text2}>
            In 2017, after working for a year in the IT industry as a software
            engineer I took a very bold step to quit my job and venture into the
            field of research at the Indian Institute of Technology, Bombay.
            Initially I worked in the field of statistical based reliability
            estimation of mechanical equipment, but later worked with Machine
            Learning with one of our projects. After some serious
            self-reflection about my passions and interests, I committed to
            learning everything about Machine Learning. Deep Learning and
            everything related to deploying predictive models to the servers.
          </div>
          <div className={styles.text2}>
            I’m currently pursuing my Master in Geoinformatics from Indian
            Institute of Technology, Bombay. Here I am working in the area of
            Super Resolution and Few Shot Learning of Hyperspectral Satellite
            Imaging. For my masters thesis, I am working on Domain Adaptive Few
            Shot Learning of Hyperspectral Satellite Imaging.
          </div>
        </div>

        <div className={styles.profilepic}>
          <img src="/assets/profilepic.png"></img>
        </div>
      </div>
    </>
  );
};
export default AboutIntro;
