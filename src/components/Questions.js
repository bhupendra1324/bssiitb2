import React from 'react';
import styles from "./Questions.module.css"
import Accordion from './Accordion';


const Questions=()=>{
    return(
       <div className={styles.container}>
           <div className={styles.questionContent}>Any Questions ?</div>
           <div className={styles.accordion}>
                {/* <Collapsible trigger="Why Did you make this website ?" triggerStyle={{background: 'red'}}>
                    <p>
                    I created and deployed this website on a private DigitalOcean server so that I could learn more about web app design and back-end development.
                    </p>
                    <p>
                    In the future I will use this website as a nesting ground for web-based computer vision and NLP models. Though I don't expect it to be anything more than a portfolio site, I strongly suspect that these skills will be crucial to technological development in the years to come.
                    </p>
                            </Collapsible> */}
                <Accordion title="Why Did you make this website ?">
                <p>I created and deployed this website on a private DigitalOcean server so that I could learn more about web app design and back-end development.</p>

                <p>In the future I will use this website as a nesting ground for web-based computer vision and NLP models. Though I don't expect it to be anything more than a portfolio site, I strongly suspect that these skills will be crucial to technological development in the years to come.</p>
                </Accordion>
                <Accordion title="How long you have been practicing machine learning ?">
                <p>I discovered machine learning at the beginning of 2018 after graduating from Baylor University. Since then, I have immersed myself in data science communities on Medium and across the web.</p>
                <p>I have rich experience in building machine learning solutions for NLP tasks. I have built models to assist in sentiment analysis, demographic clustering, and topic modelling.</p>
                
                </Accordion>
    <Accordion title="Do you have any experience working with database ?">
     <p>I have hosted and deployed my own MySQL database with this website. I have a intermediate knowledge of SQL queries, and have had experience working with AWS and GCP database servers through SSH.</p>
     <p>By renting servers from DigitalOcean, GCP, and AWS I have been able to develop my own back end production environment. I believe that data scientists who can own every step of the ML lifecycle will be invaluable in the coming years..</p>
    </Accordion>
    <Accordion title="Why are you interested in NPL / Machine Learning ? ">
     <p>I am curious by nature. Machine learning and natural language processing are both excellent tools to understand the world better.</p>
     <p>Despite the hype over integrating AI into existing technologies, the implementation of machine learning (especially NLP) is still in its infancy. This field is the wildwest, and I want to work with the pioneers and innovators that create new and amazing things.</p>
    </Accordion>
    <Accordion title="What kind of work do you see youself doing ? ">
     <p>I am interested in building modular machine learning applications that can communicate with existing production systems.</p>
     <p>Position titles that do this work are not well defined. I describe my perfect future position to be a mix of data science, machine learning engineering, and devops. Essentially a machine learning specialist with the skills to deploy a model to production.</p>
    </Accordion>
    </div>
           </div>
           
      
    )
}

export default Questions