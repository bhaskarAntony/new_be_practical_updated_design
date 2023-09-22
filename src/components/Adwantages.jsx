import React, { useEffect } from 'react'
import '../styles/adwantage.css'
import AOS from 'aos';

var adwantages = [
    {
        heading:"FREE DEMO CLASSES",
        description:"Before enrolling, a free DEMO lesson is provided.",
        icon:"https://cdn-icons-png.flaticon.com/128/7856/7856140.png",
    },
    {
        heading:"JOB ORIENTED COURSES",
        description:"Be Practical offers career-focused training with hand-picked job oriented courses in Bangalore.",
        icon:"https://cdn-icons-png.flaticon.com/128/11231/11231532.png",
    },
    {
        heading:"BACKUP CLASSES",
        description:"Missed classes are covered by backup classesBefore enrolling, a free DEMO lesson is provided.",
        icon:"https://cdn-icons-png.flaticon.com/128/8911/8911434.png",
    },
    {
        heading:"FREE TECHNICAL SUPPORT",
        description:"Connect to technical discussion boards for project help.",
        icon:"https://cdn-icons-png.flaticon.com/128/7856/7856140.png",
    },
    {
        heading:"REAL TIME PROJECTS",
        description:"Gain world-class exposure with our real-time projects",
        icon:"https://cdn-icons-png.flaticon.com/128/11231/11231532.png",
    },
    {
        heading:"FREE HR SESSIONS",
        description:"Before you join, you receive a complimentary HR session.",
        icon:"https://cdn-icons-png.flaticon.com/128/8911/8911434.png",
    },
    {
        heading:"EVALUATION PROCESS",
        description:"Our HR Team Provides you with Interview Tips",
        icon:"https://cdn-icons-png.flaticon.com/128/8911/8911434.png",
    },
    {
        heading:"INTERVIEW TIPS",
        description:"Dedicated HR to take care of interviews & Job.",
        icon:"https://cdn-icons-png.flaticon.com/128/8911/8911434.png",
    },
    {
        heading:"DEDICATED HR",
        description:"Before you join, you receive a complimentary HR session.",
        icon:"https://cdn-icons-png.flaticon.com/128/8911/8911434.png",
    }
]
function Adwantages() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <section>
      <div className="adwantages-container container-fluid p-lg-5 text-center">
        <h2 className="banner-heading text-white p-4" data-aos="fade-up">100% Job Guarantee Courses</h2>
        <p className="text-white p-3 fs-5" data-aos="fade-up">
            Mentoring for our full stack course starts long before a teacher gives an individual training session and continues long after the training session is over. Assessment, motivation, design, delivery, and evaluation are all connected stages or activities in this job guaranteed courses in Bangalore.</p>
       <div className="row">
       {adwantages.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <div className="adwantage-card mb-3 p-3" data-aos="zoom-in-down">
                                <div className="adwantage-header">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="adwantage-card-body">
                                    <h5>{item.heading}</h5>
                                    <p>{item.description}</p>
                                </div>
                                <div className="adwantage-card-footer"></div>
                            </div>
                        </div>
                    ))}
       </div>
       <div className="carousel-footer adwantage-btns">
                <button className='join-btn p-2' data-aos="fade-up">Join Now</button>
                <button className='book-btn p-2' data-aos="fade-up">Book Your Free Master Classes</button>
            </div>
      </div>
    </section>
  )
}

export default Adwantages
