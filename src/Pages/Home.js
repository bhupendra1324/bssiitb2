import React from 'react';
import AboutMe from '../components/AboutMe';
import Aoi from '../components/Aoi';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';


const Home=(props)=>{
    console.log(props)
    return(
        <>
        <Intro></Intro>
        <AboutMe></AboutMe>
        <Aoi></Aoi>
        <Skills></Skills>
        <Projects></Projects>
        <Footer></Footer>
        </>
    );
}

export default Home;