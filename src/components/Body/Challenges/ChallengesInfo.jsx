// import React, { useState, useEffect, useRef} from 'react';
// import { useCountUp } from 'react-countup';
// import VisibilitySensor from 'react-visibility-sensor';

// function ChallengesInfo(props){
//     const [viewPortEntered, setViewPortEntered] = useState(false);
//     const [target, setTarget] = useState(props.perc);
//     const countUpRef = useRef(null);

//     const { start, pauseResume, reset, update } = useCountUp({
//         ref: countUpRef,
//         start: 0,
//         end: target,
//         delay: 1500,
//         duration: 2,
//         onReset: () => console.log('Resetted!'),
//         onUpdate: () => console.log('Updated!'),
//         onPauseResume: () => console.log('Paused or resumed!'),
//         onStart: ({ pauseResume }) => console.log(pauseResume),
//         onEnd: ({ pauseResume }) => console.log(pauseResume),
//     });

//     function onVisibilityChange(isVisible){
//         if (isVisible && !viewPortEntered) {
//             start();
//             setViewPortEntered(true);
//         }
//     }

//     useEffect(() => {
//         setTarget(props.perc);
//     }, [props.perc]);

    

//     return(
//         <div key={props.i} className="challenges__infocard">
//             <div>
//                 <VisibilitySensor
//                     active={!viewPortEntered}
//                     onChange={onVisibilityChange}
//                     delayedCall>
//                     <h1> <span className="challenges__infocard__number" ref={countUpRef}></span>% </h1>
//                 </VisibilitySensor>
//             </div>
        
//             <h4>{props.info}</h4>
//         </div>
//     );
// }
// export default ChallengesInfo;


import React, { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function ChallengesInfo(props){
    const [viewPortEntered, setViewPortEntered] = useState(false);
    const [target, setTarget] = useState(props.perc);

    function onVisibilityChange(isVisible){
        if (isVisible) {
            setViewPortEntered(true);
        }
    }

    useEffect(() => {
        setTarget(props.perc);
    }, [props.perc]);

    return(
        <div key={props.i} className="challenges__infocard">
            
            <CountUp start={viewPortEntered ? null : 0} end={target} duration={1.5}>
            {({ countUpRef }) => {
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
