import {useState, useEffect} from "react";
import HWDICard from "./HWDICard";
import {hwdiInfo} from "./HWDIJSON";

function HWDI(){
    
    const [selected, setSelected] = useState(-1);
    const imgs = hwdiInfo.map((x) => x.img);

    useEffect(()=>{
        console.log(selected);
        if(selected>=0 && selected<imgs.length){
            for(let i = 0;i<hwdiInfo.length;i++){
                const div = document.getElementById("hwdicard" + i);
                if(selected==i){
                    div.style.color = "red";
                }else{
                    div.style.color = "blue";
                }
            }
        }
        
    },[selected]);

    function handleClick(i){
        setSelected(i);
    }

    return(
    <div className="wbody__content__section__container hwdi">
        {
            hwdiInfo.map((x,i) => {
                return(
                    <div onClick={() => handleClick(i)} key={"click-" + i}>
                        <HWDICard
                        title={x.title}
                        info={x.desc}
                        index={i}
                        id={"hwdicard" + i}
                        key={"hwdikey" + i}
                        />
                    </div>
                    
                );
            })
        }
    </div>);
}

export default HWDI;