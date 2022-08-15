function Scroller(){
    const tech = [" HTML", "CSS", "Javascript", "Node.js", "Express", "MongoDB", "AWS", "GCP", "React", "Firebase", "Mongoose", "Angular",""];
    const scroll = tech.join(" • ");
    return(

        <div class="wbody__content__section--tech__text">
            <p>
                <i>{scroll}</i>
            </p>
            <p>
                <i>{scroll}</i>
            </p>
        </div>
    );
}

export default Scroller;