import React from 'react'
import './Contact.css'
import contactIcon from './undraw_chatting_re_j55r.svg'

function Contact() {
  return (
    <>
      <section className="contact-container justify-center flex flex-wrap" id="contact">
        <div className="contact-left-column flex-initial mx-2 my-4">
          <div className="flex flex-col justify-center pt-24">
            <h2 className="heading-contact text-center self-center text-6xl mb-12">
              Contact Us
            </h2>
            <div className="contact-left-column__image self-center">
              <img src={contactIcon} alt="contact.svg" />
            </div> 
          </div>
        </div>
        <div className="contact-right-column flex-initial self-center mx-2 my-4">
          <div className="flex flex-col justify-center">
            <input type="text" placeholder="First Name *" className="input input-bordered w-full max-w-xs mb-2" />
            <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs mb-2" />
            <textarea className="textarea textarea-bordered mb-2" placeholder="Type Your Message*"></textarea>
            <button className="btn btn-wide btn-outline">Submit</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
