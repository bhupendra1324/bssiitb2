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
          <Link to={`/projectpage/${props.id}`}>{props.heading}</Link>
        </div>
        <ul className={styles.desc}>
          {props.points &&
            props.points.map((datapoint) => {
              return <li>{datapoint}</li>;
            })}

          {/* <Link to={`/projectpage/${props.id}`}>
                Read More
             </Link> */}
        </ul>
        <div className={styles.author}>{props.author}</div>
        <div className={styles.duration}>{props.duration}</div>
      </div>
    </div>
  );
};
export default PortfolioCard;
