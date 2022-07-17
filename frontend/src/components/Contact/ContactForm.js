import React from 'react'

const ContactForm = () => {
  return (
    <>
      <div className="contactLeft">
        <h1>Send us a message</h1>
        <form className="contactForm">
          <div className="row g-2">
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="Matina Dongol" />
              <label for="floatingInputGrid">Name</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" placeholder="name@example.com" />
              <label for="floatingInputGrid">Email address</label>
            </div>
            <div className="form-floating">
              <input type="text" className="form-control" placeholder="9861522889" />
              <label for="floatingInputGrid">Phone Number</label>
            </div>
            <div className="form-floating">
              <textarea className="form-control" placeholder="Matina Dongol"></textarea>
              <label for="floatingInputGrid">Message</label>
            </div>
          </div>
          <button type="submit" className="servicesDetailFormSubmit">Save</button>
        </form>
      </div>
    </>
  )
}

export default ContactForm