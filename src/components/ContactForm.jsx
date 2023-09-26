import React from 'react'
import '../styles/contactform.css'
import RegisterBox from './RegisterBox'

function ContactForm() {
  return (
    <section className='container-fluid p-lg-5 p-md-2' id="contact">
     <div className="contact-form">
     <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="contact-form-left">
                    <h2 className='p-3 fw-bold'>Hire Trained graduates at Be practical</h2>
                    <div className="row">
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                           <h3> Quality Training</h3>
                        </div>
                       
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                       <h3> Practical Experience</h3>
                        </div>
                       
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                        <h3>Adaptability</h3>
                        </div>
                      
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                       <h3> Team Collaboration</h3>
                        </div>
                        
                        </div>
                        <div className="col-6">
                        <div className="benifits-card">
                        <i class="bi bi-check-circle-fill"></i>
                        <h3>Problem Solving</h3>
                        </div>
                        
                        </div>
                        <div className="col-6">
                       <div className="benifits-card">
                       <i class="bi bi-check-circle-fill"></i>
                       <h3> Continuous Learning</h3>
                       </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <RegisterBox/>
            </div>
        </div>
     </div>
    </section>
  )
}

export default ContactForm
