import {ReactComponent as Weaverry} from "../../resources/header/weaverry.svg";
function Navbar() {
    return (
        <nav id="navbar" className="header__navbar navbar navbar-expand-lg animate__animated animate__slideInDown">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <Weaverry className="header__body__container__logo"></Weaverry>
                </a>
                <ul className="navbar-nav ms-auto">
                    <li className="header__navbar__nav-item">
                        <a className="nav-link" aria-current="page" href="/">About</a>
                    </li>
                    <li className="header__navbar__nav-item">
                        <a className="nav-link" href="/">Services</a>
                    </li>
                    <li className="header__navbar__nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;