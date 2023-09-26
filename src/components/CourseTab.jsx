import React from 'react'
import '../styles/coursetab.css'

function CourseTab() {
  return (
    <div className='container-tab p-0'>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#languages">Languages</a></li>
        <li><a href="#feedback">Student Feedback</a></li>
        <li><a href="#placed">Aluminies</a></li>
        <li><a href="#footer">Footer</a></li>
        <li><a href="#adwantages">Adwantages</a></li>
        <li><a href="#companies">Companies</a></li>
      </ul>
      <button className="register-btn">Apply Now</button>
    </div>
  )
}

export default CourseTab
