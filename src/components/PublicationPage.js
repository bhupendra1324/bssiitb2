import React from "react"
import { useParams } from "react-router-dom"
import styles from "./PublicationPage.module.css"
import db from '../Firebase/firebase';
import { useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore/lite';
import { useState } from 'react';
const PublicationPage = (props) => {
    const {id}=useParams()
    // console.log(id)
    const[publicationData,setPublicationData]=useState({});
    useEffect(()=>{
        try{
            Fetchdata();
        }
        catch(error){
            console.log(error)
        }
        
    },[])

    const Fetchdata = async()=>{
        const docRef = doc(db, "publication", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        setPublicationData(docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    return(
        <div className={styles.container}>
            <h1 style={{color:'white'}}>{publicationData.title}</h1>
            <div className={styles.author}>
               Authors: {publicationData.author},
            </div>
            <div className={styles.author}>
               Publication: {publicationData.publishedin}
            </div>
            <div className={styles.description}>
            Abstract: {publicationData.abstract}
            </div>
            <div className={styles.author}>
            Paper Link: <a href={publicationData.link}>{publicationData.link}</a>
            </div>

        </div>
    )
    
}

export default PublicationPage