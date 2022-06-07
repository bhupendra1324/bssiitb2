import React from 'react'
import { NavLink } from 'react-router-dom'
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect , useState} from 'react';

const Navbar=()=>{
    const [url, seturl] = useState("")
    useEffect(() => {
        resume();
      }, [])
      
      const resume=async()=>{
        const storage = getStorage();
        const download= await getDownloadURL(ref(storage, 'dummy.pdf'));
        seturl(download);
      }
    return(
        <div className='navbar'>
            <NavLink exact to="/" activeClassName='active'>Home</NavLink>
            <NavLink exact to="/about" >About</NavLink>
            <NavLink exact to="/portfolio" >Portfolio</NavLink>
            <NavLink exact to="/publication" >Publication</NavLink>
            <a href={url} download target="_blank">Download Resume</a>
        </div>
    )
}

export default Navbar;