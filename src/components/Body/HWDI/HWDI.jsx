import {useState, useEffect} from "react";
import HWDICard from "./HWDICard";
import {hwdiInfo} from "./HWDIJSON";
function HWDI(props){
    
    const [selected, setSelected] = useState(0);
    const [isWide, setIsWide] = useState(props.ww > props.vars.tabPort);
    const imgs = hwdiInfo.map((x) => x.imgS);
    const imgl = hwdiInfo.map((x) => x.imgL);
    useEffect(()=>{
        if(selected>=0 && selected<imgs.length){
            for(let i = 0;i<hwdiInfo.length;i++){
                const div = document.getElementById("hwdicard" + i);
                div.classList.remove("hwdi__card-selected");
                div.classList.remove("hwdi__card-noselect");
                if(selected===i){
                    div.classList.add("hwdi__card-selected");
                }else{
                    div.classList.add("hwdi__card-noselect");
                }
            }
        }
        if(props.ww<=props.vars.tabPort){
            setIsWide(false);
        }else{
            setIsWide(true);
        }
        
        
    },[selected, props.vars.tabPort, props.ww, isWide, imgs, imgl]);

    function handleClick(i){
        setSelected(i);
    }

    return(
    <div className="wbody__content__section__container hwdi">
        <div>
        { isWide && 
            imgl.map((x,i) => {
                if(i===selected){
                    return(
                        <div key={"hwdi-img"+i} className="hwdi__img">
                            <img src={x} alt="img"></img>
                        </div>
                
                    )
                }else{
                    return(
                        <div key={"hwdi-img"+i} style={{display:"none"}} className="hwdi__img">
                            <img src={x} alt="img"></img>
                        </div>
                    )
                }
            })
        }
        </div>
        <div>
        {
            hwdiInfo.map((x,i) => {
                return(
                    <div onClick={() => handleClick(i)} className="hwdi__card" id={"hwdicard" + i} key={"click-" + i}>
                        <HWDICard
                        title={x.title}
                        info={x.desc}
                        index={i}
                        selected={selected===i}
                        isWide={isWide}
                        src={imgs[i]}
                        />
                    </div>
                    
                );
            })
        }
        </div>
        
    </div>);
}

export default HWDI;