import {useState, useEffect} from "react";
import ServiceCard from "./ServiceCard";
import { serviceInfo } from "./ServiceJSON";
import Lottie from "lottie-react";
import anim1 from "../../../resources/lottie/104354-dimagital-media-technologies-pvt-ltd.json";
function Services(){

    const [prev, setPrev] = useState(-1);
    const [selected, setSelected] = useState(-1);

    // useEffect(() => {

    // },[selected]);

    function selectButton(index){
        if(index>=0 && index<serviceInfo.length){
            setPrev(selected);
            setSelected(index);
        }
    }

    function displayLottie(index){
        if(index<0 || index >= serviceInfo.length) return (<></>);
        return (
            <Lottie animationData={serviceInfo[index].lottie} loop={true} style={{width: "400px", height:"250px"}}></Lottie>
        );
    }

    return(
    <div className="wbody__content__section__container services2">

            <div class="accordion accordion-flush" id="accordionFlushExample">
                {
                    serviceInfo.map((obj,i) => (
                        <div class="accordion-item" key={i}>
                            <h3 class="accordion-header" id={"flush-heading"+i}>
                                <button onClick={()=>selectButton(i)} class="accordion-button collapsed text-decoration-none " type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+i} aria-expanded="false" aria-controls={"flush-collapse"+i}>
                                    {obj.title}
                                </button>
                            </h3>
                            <div id={"flush-collapse"+i} class="accordion-collapse collapse" aria-labelledby={"flush-heading"+i} data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body"><h4>{obj.desc}</h4></div>
                            </div>
                        </div>)
                    )
                }
                
            </div>

           {displayLottie(selected)}
            
    </div>
    );
}

export default Services;