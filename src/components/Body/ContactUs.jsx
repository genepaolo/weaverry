function ContactUs(){
    return(
        <div >
            <p>We look forward to working with you!</p>
            <br></br>
            <form action="https://formsubmit.co/a15767324075deea15db9fa3f1d7c219" method="POST">
                <input type="text" name="Name" placeholder="Full Name" required></input>
                <input type="text" name="email" placeholder="Email Address" required></input>
                <textarea name="Message" placeholder="Message" rows="4" required></textarea>
                <input type="hidden" name="_autoresponse" value="Thank you for your email. We will reach back with you shortly!"></input>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactUs;