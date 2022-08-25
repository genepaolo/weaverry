import service from "../../resources/body/tech1.jpg";
function ServiceCard(){
    return(
    <div className="servicecard">
            <div id="servicecard-top" style={{
                backgroundImage: `url(${service})`,
                backgroundSize: 'cover',
                borderRadius: "5% 5% 0% 0%"
            }}>
                <i class="fa-solid fa-cloud"></i>
                <div id="servicecard-bottom"  style={{
                margin: `0 auto`,
                padding: "0.4rem",
                width: "50%",
                backgroundColor: 'white',
                opacity: "0.8",
                transform: "translate(2rem)"
                }}>
                    <h4>Service</h4>
                </div>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam velit dolorem nesciunt repudiandae </p>
            </div>
            
    </div>
    );
}

export default ServiceCard;