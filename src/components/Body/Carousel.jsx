import tech1 from "../../resources/body/tech1.jpg";
import tech2 from "../../resources/body/tech2.jpg";
import tech3 from "../../resources/body/tech3.jpg";

function Carousel(){

    const tech = ["aals;dkfjasdf", "ba;lskjfldjasd", "casdklfhjaosjhe"];

    return(
    <div className="wbody__content__section__container">
            <div className="wbody__content__section__container__col">
                <div className="wbody__content__section__container__col__row">
                    <img className="wbody__content__section__container__col__row__pic" data-aos="fade-right" data-aos-duration="2000" src={tech1} alt="tech1" />
                </div>
                <div className="wbody__content__section__container__col__row">
                    <img className="wbody__content__section__container__col__row__pic" data-aos="fade-right" data-aos-duration="2000" src={tech2} alt="tech2" />
                </div>
                <div className="wbody__content__section__container__col__row">
                    <img className="wbody__content__section__container__col__row__pic" data-aos="fade-right" data-aos-duration="2000" src={tech3} alt="tech3" />
                </div>
            </div>
            <div className="wbody__content__section__container__col">
                <span>{tech[0]}</span>
            </div>
            
            
    </div>
    );
}

export default Carousel;