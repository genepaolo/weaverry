const emailjs = require("@emailjs/browser");

export default async function sendForm(serviceId, templateId){    
    emailjs.sendForm(serviceId,
        templateId,
        "#contact-us-form",
        "5t7PCv9PRppe9aE8H")
        
}

