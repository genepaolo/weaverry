import {useState, useEffect} from "react";
import { serviceInfo } from "./ServiceJSON";
import Lottie from "lottie-react";
import variables from "../../../sass/abstract/_variables.scss";

function Services(){

    const [prev, setPrev] = useState(-1);
    const [selected, setSelected] = useState(-1);

    useEffect(() => {
        if(selected>=0 && selected<serviceInfo.length){
            const item = document.getElementById("flush-heading" + selected);
            item.style.color = variables.fcQua;
        }

        for(let i = 0;i<serviceInfo.length;i++){
                
            const sidebar = document.getElementById("accordion-item" + i);
            if(selected==i){
                
                sidebar.style.setProperty("--service-bar", variables.fcQua);
            }else{
                sidebar.style.setProperty("--service-bar", variables.bgSec);
            }
        }

    },[selected]);

    function selectButton(index){
        if(index>=0 && index<serviceInfo.length){
            if(selected==index){
                setSelected(-1);
            }else{
                setSelected(index);
            }
            setPrev(selected);
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
                        <div class="accordion-item" key={i} id={"accordion-item" + i}>
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