import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function ChallengesInfo(props){
    const [viewPortEntered, setViewPortEntered] = useState(false);
    const target = props.perc;

    function onVisibilityChange(isVisible){
        if (isVisible) {
            setViewPortEntered(true);
        }
    }

    return(
        <div key={props.i} className="challenges__infocard">
            
            <CountUp start={viewPortEntered ? null : 0} end={target} duration={1.5}>
            {({ countUpRef }) => {
                // countUpRef.current += "%";
                return (
                <VisibilitySensor
                    active={!viewPortEntered}
                    onChange={onVisibilityChange}
                    delayedCall
                >
                    <h1> <span className="challenges__infocard__number" ref={countUpRef}></span>% </h1>
                </VisibilitySensor>
                );
            }}
            </CountUp>
        
            <h4>{props.info}</h4>
        </div>
    );
}
export default ChallengesInfo;