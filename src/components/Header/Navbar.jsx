function Navbar() {
    return (
        <nav class="header__navbar navbar navbar-expand-lg animate__animated animate__slideInDown">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Logo</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
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
            </div>
        </nav>
    );
}

export default Navbar;