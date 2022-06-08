import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectPage.module.css";
import db from "../Firebase/firebase";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore/lite";
import { useState } from "react";
const ProjectPage = (props) => {
  const { id } = useParams();
  // console.log(id)
  const [projectData, setProjectData] = useState({});
  useEffect(() => {
    try {
      Fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const Fetchdata = async () => {
    const docRef = doc(db, "project", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProjectData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  return (
    <div className={styles.container}>
      <h1 style={{ color: "white" }}>{projectData.heading}</h1>
      <img src={projectData.image ? projectData.image : "/logo192.png"}></img>
      <div className={styles.author}>
        {/* {projectData.author},  */}
        {projectData.duration}
      </div>
      <div className={styles.description}>{projectData.desc}</div>
    </div>
  );
};

export default ProjectPage;
