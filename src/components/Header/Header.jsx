import Navbar from "./Navbar";
import HeaderBody from "./HeaderBody";
function Header(){
    return(
        <div className="header wcontainer">
            <Navbar></Navbar>
            <HeaderBody></HeaderBody>
        </div>
    );
}

export default Header;