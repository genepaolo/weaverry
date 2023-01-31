function HWDICard(props){
    return(
        <div>
            <h3 className="hwdi__card--title">{props.title}</h3>
            <br></br>
            { 
                (props.isWide && <h5 className="hwdi__card--info">{props.info}</h5>)
                ||
                (!props.isWide && props.selected && 
                <div className="animate__animated animate__fadeIn">
                    <h5 className="hwdi__card--info">{props.info}</h5>
                    <br></br>
                    <div className="hwdi__img">
                        <img loading="lazy" src={props.src}></img>
                    </div>
                    
                </div>
                )
            }
            
        </div>
    );
}

export default HWDICard;