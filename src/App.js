import './index.css';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";
import {useEffect} from "react";
import Aos from 'aos';

function App() {

  // Initialize AOS Animations
  Aos.init();

  useEffect(() =>{

    const timer = setTimeout(() => {
      const app = document.querySelector(".App");
      app.classList.remove("noscroll");
    }, 1500);
    return ()=> clearTimeout(timer);

  }, []);

  return (
    <div className="App noscroll">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
