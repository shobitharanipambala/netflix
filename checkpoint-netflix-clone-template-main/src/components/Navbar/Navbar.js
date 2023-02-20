// step 2: create Navbar
import React, { useRef, useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = navbarRef.current.offsetHeight;
      const scrollY = window.scrollY;
      if (scrollY > navbarHeight) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={"navlogo"} >
      <img
        className="nav__logo"
        src="/netflix-logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
    </div>
  );
};

export default Navbar;