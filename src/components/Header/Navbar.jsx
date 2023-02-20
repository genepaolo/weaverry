import {ReactComponent as Weaverry} from "../../resources/header/weaverry.svg";
import { Link } from 'react-scroll';
import React from "react";

const Navbar = React.forwardRef((props, ref) => {
    const [delay, duration, ease] = [0,50,"linear"];
;    return (
        <nav id="navbar" className="header__navbar navbar navbar-expand-lg animate__animated animate__slideInDown">
            <div className="container-fluid">
            <Link className="nav-link" activeClass="active" smooth spy to="homeRef" ease={ease} delay={delay} duration={duration} >
                    <Weaverry className="header__body__container__logo"></Weaverry>
                </Link>
                <ul className="navbar-nav ms-auto">
                    <li className="header__navbar__nav-item">
                        <Link className="nav-link" activeClass="active" smooth spy to="aboutRef" ease={ease} delay={delay} duration={duration} >About</Link>
                    </li>
                    <li className="header__navbar__nav-item">
                        <Link className="nav-link" activeClass="active" smooth spy to="servicesRef" ease={ease} delay={delay} duration={duration} >Services</Link>
                    </li>
                    <li className="header__navbar__nav-item">
                        <Link className="nav-link" activeClass="active" smooth spy to="contactRef" ease={ease} delay={delay} duration={duration} >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
});

export default Navbar;