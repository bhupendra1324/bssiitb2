import React from 'react';
import styles from './Experience.module.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.heading}>My Experience
                <div className={styles.subheading}>My Experience</div>
            </div>
            <VerticalTimeline lineColor="linear-gradient(270deg, #1A1A1A 92.88%, rgba(26, 26, 26, 0) 99.06%)">

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"right"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Bachelors in Mathematics & Economic</div>
                    <div className={styles.subtitle}>Baylors University 2017</div>
                    <div className={styles.subtitle}>
                    GPA : 3.86 (On a scale of 4) 
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"left"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Business Analyst</div>
                    <div className={styles.subtitle}>DXT Technology</div>
                    <div className={styles.subtitle}>
                    November 2017 - March 2018
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"right"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Freelance Data Scientist</div>
                    <div className={styles.subtitle}>UpWork</div>
                    <div className={styles.subtitle}>
                    November 2018 - September 2019
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"left"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Data Science Instructional Associate</div>
                    <div className={styles.subtitle}>Genral Assembly</div>
                    <div className={styles.subtitle}>
                    March 2019 - July 2019
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"right"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Data Science Intern </div>
                    <div className={styles.subtitle}>Sprint -  Intellegent Billing System</div>
                    <div className={styles.subtitle}>
                    May 2019 - November 2019
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"left"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Data Process Manager </div>
                    <div className={styles.subtitle}>Capital One - Auto Finance</div>
                    <div className={styles.subtitle}>
                    April 2020 - May 2021
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"right"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Masters in Computer Science</div>
                    <div className={styles.subtitle}>University of Texas at Dallas</div>
                    <div className={styles.subtitle}>
                    August 2018 - May 2021
                    </div>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgba(7, 7, 7, 1)', color: '#fff' ,boxShadow:'none',textAlign:'center'}}
                    
                    contentArrowStyle={{ borderRight: '7px solid  rgb(7,7,7,1)' }}
                    // date="2011 - present"
                    iconStyle={{boxShadow:'none',top:'30%'}}
                    position={"left"}
                    
                    icon={<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="6.5" cy="6.5" r="6.5" fill="url(#paint0_linear_42_182)"/>
                        <defs>
                        <linearGradient id="paint0_linear_42_182" x1="2.55063" y1="-11.9419" x2="21.1371" y2="-4.59522" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#FF4747"/>
                        <stop offset="1" stop-color="#2361FF"/>
                        </linearGradient>
                        </defs>
                    </svg>}>
                    <div className={styles.title}>Senior Data Scientist </div>
                    <div className={styles.subtitle}>Capital One - Auto Finance</div>
                    <div className={styles.subtitle}>
                    May 2021 - Present
                    </div>
                </VerticalTimelineElement>

                

               
            </VerticalTimeline>
        </div>
    )
}
export default Experience;



