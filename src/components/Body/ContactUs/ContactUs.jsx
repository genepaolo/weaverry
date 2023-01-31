import emailjs from "@emailjs/browser";

function ContactUs(){

    function sendForm(e) {
        e.preventDefault();
        // console.log(e.target);
        emailjs.sendForm("service_2igo1ca",
            "template_2p9ntpg",
            "#contact-us-form",
            "5t7PCv9PRppe9aE8H").then(function(response){
                e.target.classList.add("form-disappear");
                e.target.reset();
                alert("Success! We will reply back shortly");
            }, function(error){
                console.log("Failed");
                alert("Error occurred. Try again later");
            })
        

    }

    return(
        <div >
            <br></br>
            <form onSubmit={ ((e) => {sendForm(e)})} id="contact-us-form" method="POST">
                <input type="text" name="name" placeholder="Name *" required></input>
                <input type="text" name="email" placeholder="Email *" required></input>
                <textarea name="message" placeholder="Message *" rows="4" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;