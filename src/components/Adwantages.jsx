import React, { useEffect } from 'react'
import '../styles/adwantage.css'
import AOS from 'aos';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

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
    }
]

function Adwantages() {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default to showing 3 slides

useEffect(() => {
  // Check the screen width and update the number of slides to show
  const handleResize = () => {
    if (window.innerWidth <= 600) {
      setSlidesToShow(1); // On smaller screens, show only 1 slide
    } else if(window.innerWidth<=900) {
      setSlidesToShow(2); // On wider screens, show 3 slides
    }
    else{
        setSlidesToShow(3); // On wider screens, show 3 slides
    }
  };

  // Call the handleResize function initially and add a resize event listener
  handleResize();
  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Change delay as needed
        prevArrow: <button className="slick-prev">Previous</button>, // Add previous arrow
        nextArrow: <button className="slick-next">Next</button>, // Add next arrow
      };
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <section id="adwantages" className='overflow-hidden'>
      <div className="adwantages-container container-fluid p-lg-5 text-center">
        <h3 className="banner-heading text-white p-4" data-aos="fade-up">Adwantages @ Be Practical</h3>
        <p className="text-white p-3 fs-5" data-aos="fade-up">
            Mentoring for our full stack course starts long before a teacher gives an individual training session and continues long after the training session is over. Assessment, motivation, design, delivery, and evaluation are all connected stages or activities in this job guaranteed courses in Bangalore.</p>
       <div className="row">
       <Slider {...settings}>
       {adwantages.map((item, index) => (
                        <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
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
                    </Slider>
       </div>
       <div className="carousel-footer adwantage-btns">
                <button className='join-btn p-3' data-aos="fade-up">Join Now</button>
                <button className='book-btn p-3' data-aos="fade-up">Book Your Free Master Classes</button>
            </div>
      </div>
    </section>
  )
}

export default Adwantages
