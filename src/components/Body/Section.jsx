function Section(props){
    let color = props.pri? "bgcolor--pri" : "bgcolor--sec";
    let classname = "wbody__section wcontainer " + color;
    
    return(
    <div className={classname}>
        <h1  data-aos="fade-up" data-aos-duration="1000" >{props.title}</h1>
        <br></br>
        
        <br></br>
        <h1  data-aos="fade-up" data-aos-duration="1000" >{props.subtitle}</h1>
        {props.children}
    </div>
    );
}

export default Section;