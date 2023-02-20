import {useState, useEffect} from "react";
import { serviceInfo } from "./ServiceJSON";
import Lottie from "lottie-react";
import variables from "../../../sass/abstract/_variables.scss";

function Services(props){

    const [selected, setSelected] = useState(-1);
    const [isWide, setIsWide] = useState(props.ww > props.vars.tabPort);
    //const [windowDimensions, setWindowDimensions] = useState(props.d);
    

    useEffect(() => {
        if(selected>=0 && selected<serviceInfo.length){
            const item = document.getElementById("flush-heading" + selected);
            item.style.color = variables.fcQua;
        }

        for(let i = 0;i<serviceInfo.length;i++){
                
            const sidebar = document.getElementById("accordion-item" + i);
            if(selected===i){
                
                sidebar.style.setProperty("--service-bar", variables.fcQua);
            }else{
                sidebar.style.setProperty("--service-bar", variables.bgSec);
            }
        }
        if(props.ww<=props.vars.tabPort){
            setIsWide(false);
        }else{
            setIsWide(true);
        }

    },[selected,props.vars.tabPort, props.ww]);


    function selectButton(index){
        if(index>=0 && index<serviceInfo.length){
            if(selected===index){
                setSelected(-1);
            }else{
                setSelected(index);
            }
        }

    }

    return(
    <div className="wbody__content__section__container services2">

            <div className="accordion accordion-flush" id="accordionFlushExample">
                {
                    serviceInfo.map((obj,i) => (
                        <div className="accordion-item" key={i} id={"accordion-item" + i}>
                            <h3 className="accordion-header" id={"flush-heading"+i}>
                                <button onClick={()=>selectButton(i)} className="accordion-button collapsed text-decoration-none " type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapse"+i} aria-expanded="false" aria-controls={"flush-collapse"+i}>
                                    {obj.title}
                                </button>
                            </h3>
                            <div id={"flush-collapse"+i} className="accordion-collapse collapse" aria-labelledby={"flush-heading"+i} data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body"><p>{obj.desc}</p></div>
                                {
                                    !isWide && <Lottie key={"lottie"+i} className="lottie" animationData={serviceInfo[i].lottie} loop={true} ></Lottie>
                                }
                                
                        
                            
                            </div>
                        </div>)
                    )
                }
                
            </div>
            <div className="service2__lottie">
            {
                    serviceInfo.map((obj,i) => {
                        if(i===selected){
                            return( isWide && 
                                <Lottie key={"lottie"+i}  className="lottie" animationData={serviceInfo[i].lottie} loop={true} ></Lottie>
                        
                            )
                        }else{
                            return( isWide &&
                                <Lottie key={"lottie"+i}  style={{display:"none"}} className="lottie" animationData={serviceInfo[i].lottie} loop={true} ></Lottie>
                            )
                        }
                    })
                        
                        
                    
                }
            </div>
           
            
    </div>
    );
}

export default Services;