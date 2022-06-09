import React from "react";
import styles from "./PublicationCard.module.css";
import { Link } from "react-router-dom";

const PublicationCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.projectcontent}>
        <div className={styles.heading}>
          <Link to={`/publication/${props.id}`}>{props.title}</Link>
        </div>
        <div className={styles.desc}>
          {props.abstract.slice(0, 130) + "... "}
          <Link to={`/publication/${props.id}`}>Read More</Link>
        </div>
        <div className={styles.publishedin}>
          {props.publishedin}
          <a href={props.link}>{props.link}</a>
        </div>
        <div className={styles.author}>{props.author}</div>
      </div>
    </div>
  );
};
export default PublicationCard;
