import React from 'react'
import './contact.css'
import {CgMail} from "react-icons/cg"
import {AiOutlineMessage} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import  { useRef } from 'react';
import emailjs from 'emailjs-com';
function  Contact() {
// 
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_lr7av6f', 'template_2co9cdr', form.current, '5QVKKyyHlzSJ1-hnL')
  e.target.reset()
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
};


  // 
  return (
<section id='contact'>
  <h5>Get in Touch</h5>
  <h2>Contact Us</h2>
  <div className="container contact_class">
    <div className="contact_options">
      <article className="contact_option">
        <CgMail className='contact_icon'/>
        <h4>Email</h4>
        <h5>prabesh037@gmail.com</h5>
        <a href="mailto:prabesh037@gmail.com" target="_blank"  rel="noopener noreferrer">Send me Message</a>
      </article>


      <article className="contact_option">
        <AiOutlineMessage className='contact_icon'/>
        <h4>Messenger</h4>
        <h5>Prabesh Khanal</h5>
        <a href="https://www.facebook.com/prabesh.khanal.7906" target="_blank"  rel="noopener noreferrer">Let's Have a Chat
        </a>
      </article>


      <article className="contact_option">
      <BsWhatsapp className='contact_icon'/>
        <h4>Whatsapp</h4>
        <h5>+977 9749784669</h5>
        <a href="https://api.whatsapp.com/send?phone+9779749784669" target="_blank"  rel="noopener noreferrer">Send me Message</a>
      </article>
    </div>
    {/* End of contact option  */}
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='email' placeholder='Your email' required/>
      <textarea name="message"  placeholder='Your views' rows="7" required></textarea>
<button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
  </div>
</section>
)
}

export default Contact