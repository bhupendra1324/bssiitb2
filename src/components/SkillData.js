import React from 'react'
import styles from './Skills.module.css'

const SkillData=(props)=>{
    const skillSection=(data)=>{
        return(
            <div className={styles.skillsection}>
        <div className={styles.sectionhead}>
            <div style={{color:'rgba(142, 142, 142, 1)'}}>{data.sectionhead}</div>
            <div>{data.expertise}</div>
        </div>
        <div className={styles.sectionprogress}>
            <div className={styles.color} style={{width:`${100/5*data.expertise}%`}}></div>
        </div>
        </div>
        )
        
    }
    
    return(
        <div className={styles.skilldata}>
        <div className={styles.skillhead}>{props.heading}</div>
        {/* {skillSection({sectionhead:'Database(SQL)',expertise:'5'})} */}
        {/* if skillSection was tag (component)
        <skillsection sectionhead='Database(SQL)' expertise='5'/> */}
        {props.sections.map((data)=>{
            return(
                skillSection(data)
        )
        })}
        </div>   
    )
}

export default SkillData;