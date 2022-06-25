import React from "react";
import styles from "./CourseCard.module.css";

const CertificateCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectcontent}>
        <div className={styles.heading}>{props.name}</div>
        <div className={styles.desc}>{props.content}</div>
        <div className={styles.desc}>
          <a href={props.certificatelink} target="_blank">
            Certificate Link
          </a>
        </div>
        <div className={styles.desc}>Keywords: {props.keywords}</div>
        <div className={styles.desc}>
          <a href={props.courselink} target="_blank">
            Course Link
          </a>
        </div>
      </div>
    </div>
  );
};
export default CertificateCard;
