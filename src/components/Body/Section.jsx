function Section(props){
    let firstcolor = props.pri? "bgcolor--pri" : "bgcolor--sec";
    let secondcolor= props.pri? "bgcolor--sec" : "bgcolor--pri";
    let classname = "wbody__section wcontainer " + firstcolor;
    let div = "wbody__section__div " + secondcolor;
    return(
    <div className={classname}>
        <h1  data-aos="fade-up" data-aos-duration="800" >{props.title}</h1>
        <br></br> <br></br>
        <div className={div}></div>
        <br></br> <br></br>
        <h1  data-aos="fade-up" data-aos-duration="800" >{props.subtitle}</h1>
        {props.children}
    </div>
    );
}

export default Section;