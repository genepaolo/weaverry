import service from "../../../resources/body/tech1.jpg";
function ServiceCard(props){
    const tint = 'rgb(194, 133, 207, 0.40)';
    return(
    <div className="servicecard">
            <div className="servicecard--top" style={{
                backgroundImage: `url(${service})`,
                backgroundColor: tint,
                backgroundBlendMode: 'lighten'
            }}>
                <div className="servicecard--header">
                    <h4>Service</h4>
                </div>
            </div>
            <div className="servicecard--info">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam velit dolorem nesciunt repudiandae </p>
            </div>
            
    </div>
    );
}

export default ServiceCard;