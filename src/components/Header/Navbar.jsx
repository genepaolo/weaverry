import {ReactComponent as Weaverry} from "../../resources/header/weaverry.svg";
function Navbar() {
    return (
        <nav class="header__navbar navbar navbar-expand-lg animate__animated animate__slideInDown">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">
                    <Weaverry className="header__body__container__logo"></Weaverry>
                </a>
                <ul class="navbar-nav ms-auto">
                        <li class="header__navbar__nav-item">
                            <a class="nav-link" aria-current="page" href="/">About</a>
                        </li>
                        <li class="header__navbar__nav-item">
                            <a class="nav-link" href="/">Services</a>
                        </li>
                        <li class="header__navbar__nav-item">
                            <a class="nav-link" href="/">Contact Us</a>
                        </li>
                    </ul>
            </div>
        </nav>
    );
}

export default Navbar;