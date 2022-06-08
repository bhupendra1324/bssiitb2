import React from "react";
import Carousel from "react-multi-carousel";
import SkillData from "./SkillData";
import styles from "./Skills.module.css";
import "react-multi-carousel/lib/styles.css";
import "./carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const SkillCards = [
  {
    heading: "Machine Learning",
    sections: [
      { sectionhead: "Python", expertise: "5" },
      { sectionhead: "Scikit-learn", expertise: "4" },
      { sectionhead: "Computer Vision(Pytorch)", expertise: "4" },
      { sectionhead: "NLP (Spacy/Pytorch)", expertise: "3" },
    ],
  },
  {
    heading: "Full Stack Development",
    sections: [
      { sectionhead: "React.js/ Next.js", expertise: "5" },
      { sectionhead: "Flask/ Node.js", expertise: "4" },
      { sectionhead: "Material UI/ Tailwind", expertise: "4" },
      { sectionhead: "Solidity", expertise: "3" },
    ],
  },

  //   {
  //     heading: "Data Analytics",
  //     sections: [
  //       { sectionhead: "", expertise: "5" },
  //       { sectionhead: "Statistical Methods", expertise: "4" },
  //       { sectionhead: "Visualization (Tableaue)", expertise: "3" },
  //     ],
  //   },
  {
    heading: "Devops",
    sections: [
      { sectionhead: "Database(SQL)", expertise: "4" },
      { sectionhead: "Docker", expertise: "3" },
      { sectionhead: "Kubernetes", expertise: "3" },
      { sectionhead: "Git", expertise: "4" },
    ],
  },
];

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Skills Expertise
        <div className={styles.subheading}>Skills Expertise</div>
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div>1-Basic</div>
          <div>2-Novice</div>
          <div>3-Intermediate</div>
          <div>4-Advanced</div>
          <div>5-Expert</div>
        </div>
        <Carousel containerClass={styles.card} responsive={responsive}>
          {SkillCards.map((data) => {
            return (
              <SkillData heading={data.heading} sections={data.sections} />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Skills;
