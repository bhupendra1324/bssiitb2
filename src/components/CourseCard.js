import React from "react";
import styles from "./CourseCard.module.css";

const CourseCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectcontent}>
        <div className={styles.heading}>{props.name}</div>
        <div className={styles.desc}>{props.content}</div>
        <div className={styles.flex}>
          <div className={styles.desc}>Professor: {props.professorname}</div>
          <div className={styles.desc}>Duration: {props.duration}</div>
        </div>
        <div className={styles.flex}>
          <div className={styles.desc}>Keywords: {props.keywords}</div>
          <div className={styles.desc}>Place: {props.place}</div>
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
