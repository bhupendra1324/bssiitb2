import React from "react";
import { NavLink } from "react-router-dom";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [url, seturl] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    resume();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const resume = async () => {
    const storage = getStorage();
    const download = await getDownloadURL(ref(storage, "dummy.pdf"));
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

  function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav-links").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }
  return (
    <>
      {width <= 700 ? (
        <>
          <div id="menu">
            <div
              id="menu-bar"
              onClick={() => {
                menuOnClick();
              }}
            >
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>

            <div class="nav-links" id="nav-links">
              <ul>
                <li>
                  {" "}
                  <NavLink exact to="/" activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/about">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/projects">
                    Portfolio
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/publication">
                    Publication
                  </NavLink>
                </li>
                <li>
                  <a href={url} download target="_blank">
                    Download Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="menu-bg" id="menu-bg"></div>
        </>
      ) : (
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
      )}
    </>
  );
};

export default Navbar;
