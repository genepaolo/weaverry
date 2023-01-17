import img1 from "../../resources/Icons/icons8-amazon-web-services-96.png";
import img2 from "../../resources/Icons/icons8-google-96.png";
import img3 from "../../resources/Icons/icons8-firebase-a-google's-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-96.png";
import img4 from "../../resources/Icons/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png";
import img5 from "../../resources/Icons/icons8-html-5-96.png";
import img6 from "../../resources/Icons/icons8-javascript-logo-96.png";
import img7 from "../../resources/Icons/icons8-css3-96.png";
import img8 from "../../resources/Icons/icons8-react-96.png";
function Tech(){
    const tech = [img1,img2,img3,img4,img5,img6,img7,img8];
    const techName = ["AWS","GCP","Firebase","MongoDB","HTML","JavaScript","CSS","React"];
    return(
    <div className="wbody__content__section__container tech">
        <h2>Technology we work with</h2>
        {tech.map((img, index) => (
                <div className="col-lg-3 col-md-6 col-6">
                    <img src={img}></img>
                    <p><i>{techName[index]}</i></p>
                </div>
        ))}
    </div>
    );
}

export default Tech;