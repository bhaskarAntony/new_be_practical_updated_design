import React, { useEffect } from 'react'
import '../styles/Course-single.css'
import AOS from 'aos';

function CourseCompany() {
    
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <section className='container-fluid course-companies p-3' id="companies">
        <div className="course-companies-inner container">
        <h3 className="banner-heading text-white mb-4" data-aos="fade-up">Land your dream job at one of the leading tech companies</h3>
        <div className="course-company-image">
            <img src="https://be-practical.com/images/icon/company2.png" alt="" />
        </div>
        <p className="text-center text-white p-3 fs-3" data-aos="fade-up">
            Get 50% refund fees if you not placed
        </p>
        <div className="carousel-footer d-flex justify-content-center">
            <button className="bg-warning btn fs-5 p-2" data-aos="fade-up">Enroll Now</button>
            <button className="bg-warning btn fs-5  p-2" data-aos="fade-up">DownLoad Browcher</button>
        </div>

        </div>
      </section>
  )
}

export default CourseCompany
