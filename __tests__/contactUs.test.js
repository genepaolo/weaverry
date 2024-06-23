const sendForm = require('../src/components/Body/ContactUs/sendForm'); // Import your email sending function
const emailjs = require("@emailjs/browser");
// import sendForm from '../src/components/Body/ContactUs/sendForm' // Import your email sending function
// import emailjs from "@emailjs/browser";
// import { SMTPClient } from 'emailjs';

jest.mock("@emailjs/browser"); // Mock emailjs module

describe('Email sending function', () => {
  it('should send an email successfully', async () => {
   
    const mockSend = jest.fn().mockResolvedValue('Email sent successfully');
    emailjs.sendForm.mockImplementation(() => mockSend);
    const formData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      message: 'Test message',
    };
    await sendForm(formData);
    expect(mockSend).toHaveBeenCalledWith(
      process.env.SERVICE_ID,
      process.env.TEMPLATE_ID,
      "#contact-us-form",
      "5t7PCv9PRppe9aE8H"
    );
  });
});
