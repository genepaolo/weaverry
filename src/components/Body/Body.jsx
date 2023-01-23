import {ReactComponent as Vector1} from "../../resources/body/vector1.svg";
import {ReactComponent as Vector2} from "../../resources/body/vector2.svg";
import {ReactComponent as Vector3} from "../../resources/body/vector3.svg";
import Services from "./Services/Services"
import ContactUs from "./ContactUs/ContactUs";
import Section from "./Section";
import Tech from "./Tech";
import Scroller from "./Scroller";
import Challenges from "./Challenges/Challenges";
import HWDI from "./HWDI/HWDI";

function Body(){

    return(
        <div className="wbody">
            <div className="wbody__svgs">
                <Vector1 className="wbody__svgs__svg wbody__svgs__svg--1"></Vector1>
                <Vector3 className="wbody__svgs__svg wbody__svgs__svg--3"></Vector3>
                <Vector2 className="wbody__svgs__svg wbody__svgs__svg--2"></Vector2>
            </div>
            <div className="wbody__content">
                <Section title="Challenge" subtitle="Many organizations are stuck when it comes to transformation, because they haven’t put the right foundation in place to enable change." pri={false}>
                    <Challenges></Challenges>
                </Section>
                
                <Section title="What We Do" subtitle="We propel your transformation forward by doing six things exceptionally well." pri={true}>
                    <Services></Services>
                </Section>

                <Section title="How We Do It" pri={false}>
                    <HWDI></HWDI>
                </Section>

                <Section title="Technologies" pri={true}>
                    <Tech></Tech>
                </Section>

                <Section title="Contact Us" subtitle="We look forward to working with you">
                    <ContactUs></ContactUs>
                </Section>
            </div>
        </div>
    );
}

export default Body;