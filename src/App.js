import './index.css';
import Navbar from "./components/Header/Navbar";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import React from "react";
import {useEffect} from "react";
import Aos from 'aos';

function App() {

  // Initialize AOS Animations
  Aos.init({ once: true, });
  const [showNavbar, setShowNavbar] = React.useState(true);

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

  }, []);

  const handleScroll = () => {
    if(window.scrollY > 50){
      setShowNavbar(false);
    }else{
      setShowNavbar(true);
    }
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
