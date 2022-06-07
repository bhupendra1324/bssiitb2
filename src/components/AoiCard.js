import React from 'react';
import styles from './Aoi.module.css'

const AoiCard=(props)=>{
    return(
        <div className={styles.card}>
                <div className={styles.icon}>{props.icon}
                </div>
                <div className={styles.head}>{props.head}</div>
                <div className={styles.desc}>{props.desc}</div>
            </div>
    )
}

export default AoiCard;