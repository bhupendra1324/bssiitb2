import React from 'react';
import PublicationCard from './PublicationCard';
import styles from './PublicationMain.module.css';
import { useNavigate } from 'react-router-dom';
import db from '../Firebase/firebase';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';


const PublicationMain=()=>{
    const navigate=useNavigate();
    const[publicationData,setpublicationData]=useState([]);
    useEffect(()=>{
        try{
            Fetchdata();
        }
        catch(error){
            console.log(error)
        }
        
    },[])

    const Fetchdata = async()=>{
        const publicationCol = collection(db, 'publication');
        const publicationSnapshot = await getDocs(publicationCol);
        const publicationList = publicationSnapshot.docs.map(doc => {
            return ({...doc.data(),id:doc.id})
          });
        setpublicationData(publicationList);
    }
    return(
        <div className={styles.container}>
        <div className={styles.heading}>Publication
            <div className={styles.subheading}>Publication</div>
        </div>
        
        
        <div className={styles.cards}>
        {publicationData.map((data)=>{
            return(
                <PublicationCard id={data.id} title={data.title} abstract={data.abstract} publishedin={data.publishedin} link={data.link} author={data.author}/>
            )
        })}

        </div>
        </div>
    )
}
export default PublicationMain