import React from "react";
import CourseCard from "./CourseCard";
import styles from "./Courses.module.css";
import { useNavigate } from "react-router-dom";
import db from "../Firebase/firebase";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { useState } from "react";
import CertificateCard from "./CertificateCard";

const Courses = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  useEffect(() => {
    try {
      Fetchdata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const Fetchdata = async () => {
    const courseCol = collection(db, "courses");
    const courseSnapshot = await getDocs(courseCol);
    const courseList = courseSnapshot.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });
    setCourseData(courseList);
  };
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Certificates
        <div className={styles.subheading}>Certificates</div>
      </div>

      <div className={styles.cards}>
        {courseData.map((data) => {
          return (
            <>
              {data.type === "course" ? (
                <CourseCard
                  name={data.name}
                  content={data.content}
                  duration={data.duration}
                  place={data.place}
                  professorname={data.professorname}
                  keywords={data.keywords}
                />
              ) : (
                <CertificateCard
                  name={data.name}
                  content={data.content}
                  keywords={data.keywords}
                  certificatelink={data.certificatelink}
                  courselink={data.courselink}
                />
              )}
            </>
          );
        })}
      </div>

      <div className={styles.heading}>
        Courses
        <div className={styles.subheading}>Courses</div>
      </div>

      <div className={styles.cards}>
        {courseData.map((data) => {
          return (
            <>
              {data.type === "course" ? (
                <CourseCard
                  name={data.name}
                  content={data.content}
                  duration={data.duration}
                  place={data.place}
                  professorname={data.professorname}
                  keywords={data.keywords}
                />
              ) : (
                <CertificateCard
                  name={data.name}
                  content={data.content}
                  keywords={data.keywords}
                  certificatelink={data.certificatelink}
                  courselink={data.courselink}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Courses;
