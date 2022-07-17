import React from 'react'
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <div className="contactHeading">
                    <h1>Get in touch with us.</h1>
                    <p>Want to get in touch? We would love to hear from you. Here is how you can reach us.</p>
                </div>
                <div className="contactDiv">
                    <ContactForm />
                    <ContactDetails />
                </div>
            </section>
        </>
    )
}

export default Contact;