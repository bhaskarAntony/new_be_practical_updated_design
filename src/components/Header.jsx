import React from 'react'
import '../styles/header.css'

function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark p-3">
  <div class="container-fluid">
    <a class="navbar-brand fw-bold text-black fs-3" href="/">Be Practical</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i class="bi bi-list"></i>
    </button>
    <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 list-group">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Courses <i class="bi bi-caret-down-fill"></i>
          </a>
          <ul class="dropdown-menu">
          <li class="nav-item dropend list-group-item">
              <a class="nav-link dropdown-toggle dropdown-item" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                FullStack Devolopment
              </a>
              <ul class="dropdown-menu list-group">
                <li className='list-group-item'><a class="dropdown-item" href="/mern-fullstack">MERN Fullstack Devolopment</a></li>
                <li className='list-group-item'><a class="dropdown-item" href="/python-fullstack">Python Fullstack Devolopment</a></li>
                <li className='list-group-item'><a class="dropdown-item" href="/java-fullstack">Java Fullstack Devolopment</a></li>
              </ul>
            </li>
            <li className='list-group-item'><a class="dropdown-item" href="/data-science">Data Science</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="/cloud-oops">Cloud Computing</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="/digital-marketing">Digital Marketing</a></li>   
            <li className='list-group-item'><a class="dropdown-item" href="#">Job Oriented Courses</a></li>   
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us <i class="bi bi-caret-down-fill"></i>
          </a>
          <ul class="dropdown-menu list-group">
            <li className='list-group-item'><a class="dropdown-item" href="#">Why Be Practical?</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Blogs</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            For Companies <i class="bi bi-caret-down-fill"></i>
          </a>
          <ul class="dropdown-menu">
            <li className='list-group-item'><a class="dropdown-item" href="#">Corporate Training</a></li>
            <li className='list-group-item'><a class="dropdown-item" href="#">HR Services</a></li>     
            <li className='list-group-item'><a class="dropdown-item" href="#">Hire Trained Graduates</a></li>   
          </ul>
        </li>
      </ul>
       
        <button class="nav-apply-btn" type="button">Apply Now</button>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
