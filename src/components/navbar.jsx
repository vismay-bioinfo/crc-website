import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar(){
  useEffect(() => {

  const nav = document.querySelector(".navbar");

  const onScroll = () => {
    if(window.scrollY > 30){
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll);

  return () => window.removeEventListener("scroll", onScroll);

}, []);

const location = useLocation();

const active = (path) =>
  location.pathname === path ? "active" : "";

return(

<header className="navbar">

  {/* LEFT LOGO */}
  <Link to="/" className="nav-left">
    <img
      src="/logos/mahe-logo.png"
      alt="MAHE Logo"
      className="logo-mahe"
    />
  </Link>


  {/* NAVIGATION */}
  <nav className="nav-center">

    <Link to="/" className={active("/")}>
      HOME
    </Link>

    <Link to="/about" className={active("/about")}>
      ABOUT
    </Link>

    <Link to="/progress" className={active("/progress")}>
      PROGRESS
    </Link>

    <Link to="/publications" className={active("/publications")}>
      PUBLICATIONS
    </Link>

    <Link to="/training" className={active("/training")}>
      TRAINING
    </Link>

    <Link
      to="/scientific-engagement"
      className={`two-line ${active("/scientific-engagement")}`}
    >
      SCIENTIFIC
      <br />
      ENGAGEMENT
    </Link>

    <Link to="/crc-registry" className={active("/crc-registry")}>
      REGISTRY
    </Link>

    <Link to="/contact" className={active("/contact")}>
      CONTACT
    </Link>

  </nav>


  {/* RIGHT LOGO */}
  <div className="nav-right">
    <img
      src="/logos/india-alliance-logo.png"
      alt="India Alliance Logo"
      className="logo-india"
    />
  </div>

</header>

);

}