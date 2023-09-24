import React, { useEffect } from 'react';
import '../styles/coursecard.css';
import AOS from 'aos';


function CourseCard(props) {
useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
  return (
    <>
      {props.card.map((item, index) => (
        <div key={index} className='course-single-card'  data-aos="flip-right">
          <div className="course-single-card-header">
           <img src={item.image} alt="" />
           {/* <div className="course-single-card-header-curve">
            <button className="register-btn">Register Now</button>
           </div> */}
          </div>
          <ul className="list-group">
            <li className="list-group-item">
                <h4>{item.course}</h4>
            </li>
            <li className="list-group-item">
                <p><strong className='card-single-heading'>Instructor: </strong>{item.instructor}</p>
            </li>
            <li className="list-group-item">
                <p><strong className='card-single-heading'>Duration: </strong>{item.duration}</p>
            </li>
            <li className="list-group-item">
                <p><strong className='card-single-heading'>Enrolled: </strong>{item.enrolled}</p>
            </li>
            <li className="list-group-item">
                <p><strong className='card-single-heading'>Mode Of training: </strong>{item.mode}</p>
            </li>
            <li className="carousel-footer">
               <button className="join-btn p-2 w-100">Enroll Now</button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}

export default CourseCard;
