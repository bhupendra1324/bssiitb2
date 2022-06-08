import React from "react";
import styles from "./Experience.module.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        My Experience
        <div className={styles.subheading}>My Experience</div>
      </div>
      <VerticalTimeline lineColor="linear-gradient(270deg, #1A1A1A 92.88%, rgba(26, 26, 26, 0) 99.06%)">
        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"right"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>
            Bachelors in Computer Science (Information Technology)
          </div>
          <div className={styles.subtitle}>Pune University</div>
          <div className={styles.subtitle}>2012 - 2016</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"left"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Software Engineer (C# and Angular)</div>
          <div className={styles.subtitle}>Infovision Labs Pvt. Ltd, Pune</div>
          <div className={styles.subtitle}>September 2016 - July 2017</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"right"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Research Assistant</div>
          <div className={styles.subtitle}>
            Indian Institute of Technology, Bombay
          </div>
          <div className={styles.subtitle}>July 2017 - August 2020</div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"left"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Technology Consultant</div>
          <div className={styles.subtitle}>SS Controls</div>
          <div className={styles.subtitle}> November 2018 - July 2019</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"right"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Masters in Geoinformatics</div>
          <div className={styles.subtitle}>
            Indian Institute of Technology, Bombay
          </div>
          <div className={styles.subtitle}>August 2020 - Present</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"left"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Research Associate</div>
          <div className={styles.subtitle}>
            Indian Institute of Technology, Bombay
          </div>
          <div className={styles.subtitle}>August 2020 - Present</div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"right"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Google Summer of Code, 2022</div>
          <div className={styles.subtitle}>OsGeo</div>
          <div className={styles.subtitle}>May 2022 - Present</div>
        </VerticalTimelineElement>

        {/* <VerticalTimelineElement
          // className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgba(7, 7, 7, 1)",
            color: "#fff",
            boxShadow: "none",
            textAlign: "center",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(7,7,7,1)" }}
          // date="2011 - present"
          iconStyle={{ boxShadow: "none", top: "30%" }}
          position={"left"}
          icon={
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="6.5"
                cy="6.5"
                r="6.5"
                fill="url(#paint0_linear_42_182)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_42_182"
                  x1="2.55063"
                  y1="-11.9419"
                  x2="21.1371"
                  y2="-4.59522"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FF4747" />
                  <stop offset="1" stop-color="#2361FF" />
                </linearGradient>
              </defs>
            </svg>
          }
        >
          <div className={styles.title}>Senior Data Scientist </div>
          <div className={styles.subtitle}>Capital One - Auto Finance</div>
          <div className={styles.subtitle}>May 2021 - Present</div>
        </VerticalTimelineElement> */}
      </VerticalTimeline>
    </div>
  );
};
export default Experience;
