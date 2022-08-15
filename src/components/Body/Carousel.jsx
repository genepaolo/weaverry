import tech1 from "../../resources/body/tech1.jpg";
import tech2 from "../../resources/body/tech2.jpg";
import tech3 from "../../resources/body/tech3.jpg";

function Carousel(){

    const tech = ["aals;dkfjasdf", "ba;lskjfldjasd", "casdklfhjaosjhe"];

    return(
    <div className="wbody__content__section__container">
            <div className="wbody__content__section__container__col">
                <div className="wbody__content__section__container__col__row">
                    <div className="wbody__content__section__container__col__row--pic" data-aos="fade-right" data-aos-duration="500" data-aos-offset="800" >
                        <img  src={tech1} alt="tech1" />
                    </div>
                    
                    <div className="wbody__content__section__container__col__row--info" data-aos="fade-left" data-aos-duration="500" data-aos-offset="800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas quidem
                    </div>
                </div>
                <div className="wbody__content__section__container__col__row">
                    <div className="wbody__content__section__container__col__row--pic" data-aos="fade-right" data-aos-duration="500" data-aos-offset="800" >
                        <img src={tech2} alt="tech2" />
                    </div>
                    <div className="wbody__content__section__container__col__row--info" data-aos="fade-left" data-aos-duration="500" data-aos-offset="800">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae sed omnis
                    </div>
                </div>
                <div className="wbody__content__section__container__col__row">
                    <div className="wbody__content__section__container__col__row--pic"  data-aos="fade-right" data-aos-duration="1500" data-aos-offset="800" >
                        <img src={tech3} alt="tech3" />
                    </div>
                    <div className="wbody__content__section__container__col__row--info" data-aos="fade-left" data-aos-duration="500" data-aos-offset="800">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ab impedit sed deserunt soluta?
                    </div>
                </div>
            </div>
            
            
    </div>
    );
}

export default Carousel;