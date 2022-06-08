import React from "react";
import { NavLink } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [url, seturl] = useState("");
  useEffect(() => {
    resume();
  }, []);

  const resume = async () => {
    const storage = getStorage();
    const download = await getDownloadURL(ref(storage, "Resume_BSS.pdf"));
    seturl(download);
  };

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 300) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div
      className="navbar"
      style={colorChange ? { background: "black" } : null}
    >
      <NavLink exact to="/" activeClassName="active">
        Home
      </NavLink>
      <NavLink exact to="/about">
        About
      </NavLink>
      <NavLink exact to="/projects">
        Portfolio
      </NavLink>
      <NavLink exact to="/publication">
        Publication
      </NavLink>
      <a href={url} download target="_blank">
        Download Resume
      </a>
    </div>
  );
};

export default Navbar;
