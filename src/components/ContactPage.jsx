import React from 'react'
import ContactForm from './ContactForm'
import Benifits from './Benifits'
import '../styles/contact-page.css'

function ContactPage() {
  return (
    <div>
        <section className="contact-home">
        <h1 className='fw-bold'>Hire Trained graduates at <span className="text-warning">Be practical</span></h1>
         <p className='fs-4 mt-4'>Build your Data & Engineering Team with industry ready top skilled tech talent.</p>
         <a href="#contact" className="btn p-2 px-4 bg-warning text-black fs-4 rounded-5">Hire Now</a>
        </section> 
      <ContactForm/>
        <Benifits/>
    </div>
  )
}

export default ContactPage
