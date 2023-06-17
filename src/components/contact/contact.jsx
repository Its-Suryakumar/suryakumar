import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import { useRef as UseRef } from "react";
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = UseRef(0);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ntdt64k', 'template_9ddmzzr', form.current, '3HbzJBBXNwaPPv3aC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>suryakumar.p2021@vitstudent.ac.in</h5>
            <a href='mailto:suryakumar.p2021@vitstudent.ac.in' target='_blank'>Send a Message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>_surya.here</h5>
            <a href='https://www.instagram.com/_surya.here/' target='_blank'>Follow</a>
          </article>
          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Suryakumar P</h5>
            <a href='https://www.linkedin.com/in/suryakuamrp' target='_blank'>Connect</a>
          </article>
        </div>
        
        {/* END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder="Your Full Name" required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name="message" rows='7' placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>

      </div>
    </section>
  )
}
export default Contact