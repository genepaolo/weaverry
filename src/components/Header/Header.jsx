import video from "../../resources/video/Skyscrapers1.mp4";
import HeaderBody from "./HeaderBody";
import { Element } from 'react-scroll';

function Header(){
    return(
        <div className="header">
            <Element name="homeRef"></Element>
            <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover'}}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba( 18, 36, 64, 0.7)',
            }}>
            </div>
            <HeaderBody className="wcontainer"></HeaderBody>
        </div>
    );
}

export default Header;