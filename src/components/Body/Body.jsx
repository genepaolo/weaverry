import {ReactComponent as Vector1} from "../../resources/BodySVGS/vector1.svg";
import {ReactComponent as Vector2} from "../../resources/BodySVGS/vector2.svg";

function Body(){
    return(
        <div className="wbody">
            <div className="wbody__svgs">
                <Vector1 className="wbody__svgs__svg wbody__svgs__svg--1"></Vector1>
                <Vector2 className="wbody__svgs__svg wbody__svgs__svg--2"></Vector2>
            </div>
            <div className="wbody__content wcontainer">
                <div className="wbody__content__about"></div>
                <div className="wbody__content__technologies"></div>
                <div className="wbody__content__projects"></div>
            </div>
            <div className="tempfill"></div>
        </div>
    );
}

export default Body;