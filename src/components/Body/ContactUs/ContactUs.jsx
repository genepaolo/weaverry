import sendForm from "./sendForm";
import emailjs from "@emailjs/browser";
import config from '../../../config';
function ContactUs(){
    const serviceId = "template_2p9ntpg"
    const templateId = 'service_qgxjvmd'

    async function handleSubmit(e){
        e.preventDefault();
        try{
            sendForm(serviceId, templateId, "#contact-us-form", "5t7PCv9PRppe9aE8H");
            e.target.classList.add("form-disappear");
            e.target.reset();
            alert("Success! We will reply back shortly");
        }catch(err){
            console.log(err);
        }
    }
    return(
        <div >
            <br></br>
            <form onSubmit={ ((e) => {handleSubmit(e)})} id="contact-us-form" method="POST">
                <input type="text" name="name" placeholder="Name *" required></input>
                <input type="text" name="email" placeholder="Email *" required></input>
                <textarea name="message" placeholder="Message *" rows="4" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;