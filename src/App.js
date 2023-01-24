import './index.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import React from "react";
import {useEffect, useState} from "react";
import Aos from 'aos';

function App() {

  // Initialize AOS Animations
  Aos.init({ once: true, });
  const [showNavbar, setShowNavbar] = React.useState(true);
  const [y, setY] = useState(window.scrollY);
  useEffect(() =>{

    const timer = setTimeout(() => {
      const app = document.querySelector(".App");
      app.classList.remove("noscroll");
    }, 1500);

    window.addEventListener("scroll", handleScroll);

    return ()=> {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    }

  }, [y]);

  const handleScroll = (e) => {
    const navbar = document.getElementById("navbar");
    if(window.scrollY <= 50 || y > window.scrollY){
      setShowNavbar(true);
      if(window.scrollY <= 50){
        navbar.classList.remove("navbar__scroll");
      }else{
        navbar.classList.add("navbar__scroll");
      }
    }else{
      setShowNavbar(false);
    }
    setY(window.scrollY);
  };

  return (
    <div className="App noscroll">
      {showNavbar && <Navbar />}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
