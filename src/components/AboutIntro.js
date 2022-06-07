import React from 'react';
import styles from './AboutIntro.module.css'
const AboutIntro=()=>{
    return(
        <>
            
            <div className={styles.introContainer}>
                <div className= {styles.intro}>
                <div className={styles.ellipse}></div>
                    <div className={styles.text1}>About Me</div>
                    <div className={styles.gradientText}>Harrison Jansma</div>
                    <div className={styles.text2}>At the beginning of 2018, I didn't know where my life was going. After some serious self-reflection about my passions and interests, I committed to learning everything I could about machine learning, data science, and the tech industry.</div>
                    <div  className={styles.text2}>After graduating woth a masters in Computer Science from UT Dallas and a year of working at Capital One, I have officially become a Data Scientist in the auto financing organization at Capital One. Here I am utilizing my knowledge of machine learning engineering to build intelligent systems to better the customer experience</div>
                    
                </div>

                <div className={styles.profilepic}>
                <img src='/assets/profilepic.png'></img>
                </div>
            </div>
           
        </>
        
    )
}
export default AboutIntro;