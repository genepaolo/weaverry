import ChallengesInfo from "./ChallengesInfo";
function Challenges(){
    const percArray = [80,90,20];
    return(
        <div className="wbody__content__section__container challenges">
                {percArray.map(function(x,i){
                    return <ChallengesInfo key={i} i={i} perc={x} info="Lorem ipsum dolor sit amet consectetur adipisicing elit"></ChallengesInfo>
                })}
            

        </div>
    );
}
export default Challenges;