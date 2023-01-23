function HWDICard(props){
    return(
        <div className="hwdi__card" id={props.id}>
            <h3 className="hwdi__card--title">{props.title}</h3>
            <h4 className="hwdi__card--info">{props.info}</h4>
        </div>
    );
}

export default HWDICard;