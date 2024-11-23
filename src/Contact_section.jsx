    import React, { useRef } from 'react'
    import './coffee_shop.css'
    import emailjs from '@emailjs/browser'
    // import'./coffee_shop.js'
    const Contact_section = () => {
        const form =useRef();
            const sendEmail = (e) => {
                alert("message sent successfully")
                e.preventDefault();
                emailjs.sendForm('service_42dvd3f', 'template_jtm0fi6', form.current, '5NhO-fR-PTdO3zCl-')
                    .then((result) => {
                        console.log(result.text);
                    }, (error) => {
                        console.log(error.text);
                    });
                e.target.reset()
            };
        
    return (
    <section className="contact-section" id="contact" >
        <div id='contact2'>
    <h2 className="section-title">Contact Us</h2>
    <div className="section-content">
    <ul className="contact-info-list">
    <li className="contact-info">
        <i className="fa-solid fa-location-crosshairs"></i>
        <p>123 Campsite Avenue, Wilderness, CA 98765</p>
    </li>
    <li className="contact-info">
        <i className="fa-regular fa-envelope"></i>
        <p>info@coffeeshopwebsite.com</p>
    </li>
    <li className="contact-info">
        <i className="fa-solid fa-phone"></i>
        <p>(123) 456-78909</p>
    </li>
    <li className="contact-info">
        <i className="fa-regular fa-clock"></i>
        <p>Sunday - Thursday: 9:00 AM - 5:00 PM</p>
    </li>
    <li className="contact-info">
        <i className="fa-regular fa-clock"></i>
        <p>Saturday: 10:00 AM - 3:00 PM</p>
    </li>
    <li className="contact-info">
        <i className="fa-regular fa-clock"></i>
        <p>Friday: Closed</p>
    </li>
    <li className="contact-info">
        <i className="fa-solid fa-globe"></i>
        <p>www.Pro.Mawada Mahmoud.com</p>
    </li>
    </ul>

    <form ref={form} className="contact-form" onSubmit={sendEmail}>
    <input type="text" placeholder="Your name" className="form-input" required  name='name_client'/>
    <input type="email" placeholder="Your email" className="form-input" required name="from_name" />
    <textarea placeholder="Your message" className="form-input" required name='message'></textarea>
    <button type="submit" className="button submit-button">Submit</button>
    </form>
    </div>
    </div>
    </section>



    )
    }

    export default Contact_section