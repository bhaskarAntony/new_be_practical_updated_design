// src/FAQ.js

import React, { useState } from 'react';
import '../styles/FAQ.css'; // Import your CSS file


const FAQ = (props) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
   <div className="container-fluid faq" id="faq">
    <h1 className="banner-heading">Training Module</h1>
     <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6">
      {props.modules.map((item, index) => (
        <div
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          key={index}
        >
          <div className="faq-question d-flex align-items-center" onClick={() => toggleAccordion(index)}>
            <span className="count p-2 px-3 rounded-5 bg-success text-white">
        {index+1}
            </span>
            <span className="faq-question-text"><span className="fw-bold text-success mx-2"> Module{index + 1}:</span> {item.module}</span>
            <span className="faq-icon">
              {activeIndex === index ? <i class="bi bi-caret-up-fill"></i>:<i class="bi bi-caret-down-fill"></i>}
            </span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">
                <h5 className='mt-2'>Module{index +1}</h5>
                <h5 className='mt-4'>About</h5>
                {item.about}
                <h5 className='mt-4'>Topics Covered</h5>
                <p>{item.description}</p>
            </div>
          )}
        </div>
      ))}
        </div>
        <div className="col-12 col-md-12 col-lg-6">
            <div className="module-right rounded-3 bg-white p-lg-5 p-1 fs-5">
            <div className="battery-container">
                            <div className="battery">

                            </div>
                        </div>
                <h5 className="text-success">Course Overview</h5>
                <p>Unlock your potential and embark on a transformative journey into the world of software development with Be Practical's Software Development Masterclass. This intensive one-year program is designed to equip you with the skills and knowledge required to become a proficient software developer. Whether you're a beginner or have some coding experience, this course will empower you to thrive in the dynamic and ever-evolving field of software development.</p>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-footer d-flex justify-content-center">
        <button className="join-btn p-3">Download Module PDF</button>
    </div>
   </div>
  );
};

export default FAQ;
