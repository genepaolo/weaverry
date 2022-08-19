function Navbar() {
    return (
        <nav class="header__navbar navbar navbar-expand-lg animate__animated animate__slideInDown">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Logo</a>
                <ul class="navbar-nav ms-auto">
                        <li class="header__navbar__nav-item">
                            <a class="nav-link active" aria-current="page" href="/">About</a>
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