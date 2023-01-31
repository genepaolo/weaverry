import {useState, useEffect} from "react";
import HWDICard from "./HWDICard";
import {hwdiInfo} from "./HWDIJSON";
function HWDI(props){
    
    const [selected, setSelected] = useState(0);
    const [isWide, setIsWide] = useState(props.d.width > 990);
    const imgs = hwdiInfo.map((x) => x.img);

    useEffect(()=>{
        if(selected>=0 && selected<imgs.length){
            for(let i = 0;i<hwdiInfo.length;i++){
                const div = document.getElementById("hwdicard" + i);
                div.classList.remove("hwdi__card-selected");
                div.classList.remove("hwdi__card-noselect");
                if(selected==i){
                    div.classList.add("hwdi__card-selected");
                }else{
                    div.classList.add("hwdi__card-noselect");
                }
            }
        }
        if(props.d.width<=990){
            setIsWide(false);
        }else{
            setIsWide(true);
        }
        
        
    },[selected, props.d, isWide]);

    function handleClick(i){
        setSelected(i);
    }

    return(
    <div className="wbody__content__section__container hwdi">
        <div>
        { isWide && 
            imgs.map((x,i) => {
                if(i==selected){
                    return(
                        <div className="hwdi__img">
                            <img src={x}></img>
                        </div>
                
                    )
                }else{
                    return(
                        <div style={{display:"none"}} className="hwdi__img">
                            <img   src={x}></img>
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
                        selected={selected==i}
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