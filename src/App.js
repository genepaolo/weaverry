import './index.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import React, { useEffect, useRef, useState } from "react";
import Aos from 'aos';

function App() {
  // Initialize AOS Animations
  Aos.init({ once: true });

  const [showNavbar, setShowNavbar] = useState(true);
  const [y, setY] = useState(window.scrollY);
  const appRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if(showNavbar){
      if (window.scrollY <= 50) {
        navbar.classList.remove("navbar__scroll");
      } else if (navbar != null) {
        navbar.classList.add("navbar__scroll");
      }
    }
    // Remove navbar depending on positioning
    const handleScroll = (e) => {
      // Scroll down or at top
      if (window.scrollY <= 50 || y > window.scrollY) {
        if(!showNavbar) setShowNavbar(true);
      }else if (y!==window.scrollY){
        if(showNavbar) setShowNavbar(false);
      }
      setY(window.scrollY);
    };
    
    // Passive: optimizes scrolling 
    window.addEventListener("scroll", handleScroll, { passive: true });

    
    // use Ref instead of document Query
    const timer = setTimeout(() => {
      appRef.current.classList.remove("noscroll");
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    }


  }, [y,showNavbar]);


  return (
    <div className="App noscroll" ref={appRef}>
      <Header />
      <Body />
      {showNavbar && <Navbar ref={navbarRef} />}
      <Footer />
    </div>
  );
}

export default App;
