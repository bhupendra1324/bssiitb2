import React from 'react';
import styles from './AboutMe.module.css'
import { useNavigate } from 'react-router-dom';


const AboutMe=()=>{
    const navigate=useNavigate();
    return(
        <div className={styles.container}>
            <div className={styles.heading}>About Me
                <div className={styles.subheading}>About Me</div>
            </div>
            <div className={styles.content}>
                <p>A few interesting things about me. I love to read science fiction (my favorite is Frank Herbert's Dune). I am also an avid gamer. I love to play competitive strategy games and first-person shooters. Lastly, I love learning. Every day I push myself to learn something new, whether that be about machine learning, software engineering, or miscellaneous facts about the universe.</p>

                <p>On top of recently getting married and graduating with a masters in computer science from UT Dallas, I also recently started working as a senior data scientist at Capital One. My work mainly revolves around utilizing natural language processing to build a more intelligent customer experience.</p>
            </div>
            <button className={styles.aboutbtn} onClick={()=>{navigate("/about")}}>About</button>
        </div>
    )
}

export default AboutMe;