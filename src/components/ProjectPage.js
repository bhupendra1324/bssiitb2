import React from "react"
import { useParams } from "react-router-dom"
import styles from "./ProjectPage.module.css"
import db from '../Firebase/firebase';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import './carousel.css';
import Carousel from "react-multi-carousel";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const ProjectPage = (props) => {
    const {id}=useParams()
    // console.log(id)
    const[projectData,setProjectData]=useState({});
    useEffect(()=>{
        try{
            Fetchdata();
        }
        catch(error){
            console.log(error)
        }
        
    },[])

    const Fetchdata = async()=>{
        const docRef = doc(db, "project", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        setProjectData(docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    return(
        <div className={styles.container}>
            <h1 style={{color:'white'}}>{projectData.heading}</h1>
            {/* <img src={projectData.image?projectData.image:"/logo192.png"}></img> */}
            
            {projectData.images?<Carousel containerClass={styles.card} responsive={responsive}>

            {projectData.images.map((imagelink)=>{
                return(
                    <img src={imagelink}/>
                )
            })}</Carousel>:<img src={projectData.image?projectData.image:"/logo192.png"}></img>}
            <div className={styles.author}>
               {projectData.author}, {projectData.duration}
            </div>
            <div className={styles.description}>
            {projectData.desc}
            </div>

        </div>
    )
    
}

export default ProjectPage