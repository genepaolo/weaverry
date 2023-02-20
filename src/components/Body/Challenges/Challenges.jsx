import ChallengesInfo from "./ChallengesInfo";
import {challengesInfo} from "./ChallengesJSON";
import {useState, useEffect} from "react";
function Challenges(props){

    const [isWide, setIsWide] = useState(props.ww> props.vars.tabPort);
    useEffect(()=>{
        if(props.ww<=props.vars.tabPort){
            setIsWide(false);
        }else{
            setIsWide(true);
        }
    }, [props.vars.tabPort, props.ww, isWide])
    return(
        <div className="wbody__content__section__container challenges">
                {
                    challengesInfo.map(function(x,i){
                        return <ChallengesInfo key={i} i={i} perc={x.perc} info={x.info} ></ChallengesInfo>
                    })
                }
            

        </div>
    );
}
export default Challenges;