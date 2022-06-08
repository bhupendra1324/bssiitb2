import React from "react";
import styles from "./PortfolioCard.module.css";
import { Link } from "react-router-dom";

const PortfolioCard = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={props.image ? props.image : "/logo192.png"}></img>
      </div>
      <div className={styles.projectcontent}>
        <div className={styles.heading}>
          <Link to={`/bss/projectpage/${props.id}`}>{props.heading}</Link>
        </div>
        <div className={styles.desc}>
          {props.desc.slice(0, 130) + "... "}
          <Link to={`/bss/projectpage/${props.id}`}>Read More</Link>
        </div>
        {/* <div className={styles.author}>{props.author}</div> */}
        <div className={styles.duration}>{props.duration}</div>
      </div>
    </div>
  );
};
export default PortfolioCard;
