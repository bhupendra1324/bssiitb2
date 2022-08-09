import React from "react";
import styles from "./Projects.module.css";
import { Link } from "react-router-dom";

const ProjectData = (props) => {
  return (
    <div className={styles.ProjectCard}>
      <div className={styles.ProjectIcon}>
        <img src={props.icon ? props.icon : "/logo192.png"} />
      </div>
      <div className={styles.ProjectHead}>
        <Link to={`/projectpage/${props.id}`}>{props.heading}</Link>
      </div>
      <div className={styles.ProjectDesc}>
        {props.desc.slice(0, 130) + "... "}
        <Link to={`/projectpage/${props.id}`}>Read More</Link>
      </div>
    </div>
  );
};

export default ProjectData;
