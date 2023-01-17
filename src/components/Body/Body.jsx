import {ReactComponent as Vector1} from "../../resources/body/vector1.svg";
import {ReactComponent as Vector2} from "../../resources/body/vector2.svg";
import {ReactComponent as Vector3} from "../../resources/body/vector3.svg";
import Services from "./Services"
import ContactUs from "./ContactUs";
import Section from "./Section";
import Tech from "./Tech";
function Body(){

    return(
        <div className="wbody">
            <div className="wbody__svgs">
                <Vector1 className="wbody__svgs__svg wbody__svgs__svg--1"></Vector1>
                <Vector3 className="wbody__svgs__svg wbody__svgs__svg--3"></Vector3>
                <Vector2 className="wbody__svgs__svg wbody__svgs__svg--2"></Vector2>
            </div>
            <div className="wbody__content">
                {/* <div data-aos="fade-right" data-aos-duration="2000" className="wbody__content__section wbody__content__section--about">
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolores cupiditate laborum porro ex recusan
                        dae at rerum modi nobis explicabo fugit magnam debitis, ut totam, doloribus vitae maiores placeat consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusamus, voluptas odit culpa nemo cupiditate eos dignissimos dolores praesentium in earum exercitationem labore adipisci fugit eligendi distinctio impedit beatae quidem?</p>
                </div> */}
                <Section title="Challenge" pri={false}>
                    
                </Section>
                <Section title="What we do" pri={true}>
                    
                </Section>
                {/* {/* <div className="wbody__content__section wbody__content__section--carousel">
                <div data-aos="fade-right" data-aos-duration="2000" className="wbody__content__section wbody__content__section--about ">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dolores cupiditate laborum porro ex recusan
                        dae at rerum modi nobis explicabo fugit magnam debitis, ut totam, doloribus vitae maiores placeat consequatur? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt accusamus, voluptas odit culpa nemo cupiditate eos dignissimos dolores praesentium in earum exercitationem labore adipisci fugit eligendi distinctio impedit beatae quidem?</p>
                </div>
                {/* <div className="wbody__content__section wbody__content__section--carousel">
                    <Carousel></Carousel>
                </div> */}
                <div className="wbody__content__section wbody__content__section--tech">
                    <Scroller></Scroller>
                </div> */}

                <div className="wbody__content__section wbody__content__section--services">
                    <Services></Services>
                </div>
                <div className="wbody__content__section wbody__content__section--tech ">
                    <Tech></Tech>
                </div>

                <Section title="Contact Us" subtitle="We look forward to working with you">
                <div className="wbody__content__section wbody__content__section--contactus ">
                    <ContactUs></ContactUs>
                </Section>
            </div>
        </div>
    );
}

export default Body;