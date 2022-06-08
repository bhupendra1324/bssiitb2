import React from 'react';
import PortfolioCard from './PortfolioCard';
import styles from './PortfolioMain.module.css';
import { useNavigate } from 'react-router-dom';
import db from '../Firebase/firebase';
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { useState } from 'react';


const PortfolioMain=()=>{
    const navigate=useNavigate();
    const[portfolioData,setPortfolioData]=useState([]);
    useEffect(()=>{
        try{
            Fetchdata();
        }
        catch(error){
            console.log(error)
        }
        
    },[])

    const Fetchdata = async()=>{
        const projectCol = collection(db, 'project');
        const projectSnapshot = await getDocs(projectCol);
        const projectList = projectSnapshot.docs.map(doc => {
            return ({...doc.data(),id:doc.id})
          });
        setPortfolioData(projectList);
    }
    return(
        <div className={styles.container}>
        <div className={styles.heading}>Portfolio
            <div className={styles.subheading}>Portfolio</div>
        </div>
        
        
        <div className={styles.cards}>
        {portfolioData.map((data)=>{
            return(
                <PortfolioCard id={data.id} image={data.image} heading={data.heading} desc={data.desc} duration={data.duration} author={data.author}/>
            )
        })}

        </div>
        </div>
    )
}
export default PortfolioMain