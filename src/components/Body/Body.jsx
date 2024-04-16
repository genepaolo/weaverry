import {ReactComponent as Vector1} from "../../resources/body/vector1.svg";
import {ReactComponent as Vector2} from "../../resources/body/vector2.svg";
import {ReactComponent as Vector3} from "../../resources/body/vector3.svg";
import Services from "./Services/Services"
import ContactUs from "./ContactUs/ContactUs";
import Section from "./Section";
import Tech from "./Tech";
import Challenges from "./Challenges/Challenges";
import HWDI from "./HWDI/HWDI";
import { useWindowDimension } from "../common/UseWindowDimension";
import vars from '../../sass/abstract/_mixins.scss';
import { Element } from 'react-scroll';

function Body(){
    const [ww] = useWindowDimension();
    return(
        <div className="wbody">
            <div className="wbody__svgs">
                <Vector1 className="wbody__svgs__svg wbody__svgs__svg--1"></Vector1>
                <Vector3 className="wbody__svgs__svg wbody__svgs__svg--3"></Vector3>
                <Vector2 className="wbody__svgs__svg wbody__svgs__svg--2"></Vector2>
            </div>
            <div className="wbody__content">
                
                <Section title="Challenge" 
                    subtitle="Plenty of companies find it difficult to transform digitally due to their lack of solid and flexible foundation that can allow for rapid changes." pri={false}>
                    <Challenges ww={ww} vars={vars} ></Challenges>
                </Section>
                <Element name="aboutRef"></Element>
                <Section title="What We Do" 
                    subtitle="We work closely with you to optimize performance and make your lives easier." pri={true}>
                    <Services ww={ww} vars={vars} ></Services>
                </Section>

                <Element name="servicesRef"></Element>
                <Section title="How We Do It" 
                    pri={false}>
                    <HWDI ww={ww} vars={vars} ></HWDI>
                </Section>

                <Section title="Technologies" pri={true}>
                    <Tech></Tech>
                </Section>
                <Element name="contactRef"></Element>
                <Section title="Contact Us" id="contactRef"
                    subtitle="We look forward to working with you">
                    <ContactUs></ContactUs>
                </Section>
            </div>
        </div>
    );
}

export default Body;