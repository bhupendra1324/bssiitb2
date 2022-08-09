import React from "react";
import ProjectData from "./ProjectData";
import styles from "./Projects.module.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import db from "../Firebase/firebase";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState } from "react";
import "./carousel.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 760 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 760, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    try {
      Fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const Fetchdata = async () => {
    const projectCol = collection(db, "project");
    const projectSnapshot = await getDocs(projectCol);

    let projectList = projectSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    projectList.map((x) => {
      x["id"] = +x.itemID.substring(7);
    });
    projectList = projectList.sort((a, b) => {
      return a.id - b.id;
    });
    setProjectData(projectList);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Latest Projects
        <div className={styles.subheading}>Latest Projects</div>
      </div>
      <Carousel containerClass={styles.contentProject} responsive={responsive}>
        {projectData.map((data) => {
          return (
            <ProjectData
              id={data.id}
              icon={data.image}
              heading={data.heading}
              desc={data.desc}
            />
          );
        })}
      </Carousel>
    </div>
  );
};

export default Projects;
