import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap';
import '../styles/home.css'
import '../styles/home-media.css'
import Companies from './Companies';
import Activities from './Activities';
import Training from './Training';
import Courses from './Courses';
import Feedback from './Feedback';
import Adwantages from './Adwantages';
import StudentsPlaced from './StudentsPlaced';
import AOS from 'aos';

function Home() {
  useEffect(() => {
    AOS.init(); // Initialize AOS
  }, []);
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [key, setKey] = useState('tab1'); // Initialize with the active tab key

    const [activeTab, setActiveTab] = useState('tab1'); // Initialize with the active tab key

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  
    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };
  
    const handleCarouselHover = () => {
      setPaused(true);
    };
  
    const handleCarouselLeave = () => {
      setPaused(false);
    };
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (!paused) {
          setIndex((prevIndex) => (prevIndex + 1) % numberOfSlides);
        }
      }, 3000); // Adjust the autoplay interval (in milliseconds) as needed
  
      return () => {
        clearInterval(interval);
      };
    }, [paused]);
  
    const numberOfSlides = 3; // Replace with the actual number of slides
  return (
    <div>
             <section className="home container-fluid">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
            <div className="custom-carousel">
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
           <div className="carousal-text">
            <h1 className="carousal-heading" data-aos="fade-up">
            High Paid Salaries & Continuous <span className='main-text'>Career Growth</span>
            </h1>
            <div className="carousel-body">
                <p className='carousel-body-text' data-aos="fade-up">Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>
           <div className="carousel-footer">
                <button className='join-btn p-2' data-aos="fade-up">Join For Free</button>
                <button className='book-btn p-2' data-aos="fade-up">Book Your Free Master Classes</button>
            </div>
           </div>
           
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousal-text">
            <h1 className="carousal-heading" data-aos="fade-up">
            High Paid Salaries & Continuous <span className='main-text'>Career Growth</span>
            </h1>
            <div className="carousel-body">
                <p className='carousel-body-text' data-aos="fade-up">Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>
            <div className="carousel-footer">
                <button className='join-btn p-2' data-aos="fade-up">Join For Free</button>
                <button className='book-btn p-2' data-aos="fade-up">Book Your Free Master Classes</button>
            </div>
           </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carousal-text">
            <h1 className="carousal-heading" data-aos="fade-up">
            High Paid Salaries & Continuous <span className='main-text'>Career Growth</span>
            </h1>
            <div className="carousel-body">
                <p className='carousel-body-text'>Build skills with courses, certificates, and degrees online from world-class universities and companies.</p>
            </div>
            <div className="carousel-footer">
                <button className='join-btn p-2' data-aos="fade-up">Join For Free</button>
                <button className='book-btn p-2' data-aos="fade-up">Book Your Free Master Classes</button>
            </div>
           </div>
          </Carousel.Item>
        </Carousel>
        <div className="custom-indicators">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className={`indicator ${index === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
            ></div>
          ))}
        </div>
      </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="home-right">
                    <img src="https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fhome-4%2Fmasthead%2F1.png&w=640&q=75" alt="" />
                </div>
            </div>
        </div>
        <div className="register-container-home">
        <div className="register align-items-center rounded-2 p-3">
          <div className="p-2 rounded-2 py-3 border-0 bg-tranparent">
            <div className="card-header-text text-center w-100">
              <span className=" banner-heading fs-3 text-center mb-3">Register For Free Demo Session</span>
            </div>
          <div className="row mt-2">
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Enter Your Name</label>
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <label htmlFor='email' className="form-label">Email Address</label>
                  <input type="email" placeholder='Email' className='form-control' />
                 </div> 
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group">
                  <label htmlFor='phone' className="form-label">Mobile Number</label>
                  <input type="number" placeholder='Phone' className='form-control' />
                 </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group form-group-last">
                  <label htmlFor="course" className="form-label">Select Course</label>
                  <select className='form-control'>
                    <option value="mern">MERN</option>
                    <option value="mern">Python Fullstack</option>
                    <option value="mern">Java Fullstack</option>
                    <option value="mern">Data Science</option>
                    <option value="mern">Cloud Computing</option>
                  </select>
                 </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 register-btn carousel-footer  mt-5">
              <button className='join-btn w-100 p-3' data-aos="fade-up">Join Now</button>
            </div>
          </div>
          </div>
        </div>
        </div>
       </section>
      <Courses/>
      <Training/>
       <Companies/>
      <Activities/>
      <h1 className="banner-heading" data-aos="fade-up">Meet Our Students</h1>
      <Feedback/>
      <h1 className="banner-heading" data-aos="fade-up">Adwantages @ Be Practical</h1>
      <Adwantages/>
      <section className="quote-container container-fluid">
            <div className="quote-inner container" data-aos="fade-up">
                <div className="row">
                    <div className="col-12 col-md-12 col-lg-6">
                    <i class="bi bi-quote text-black fs-2"></i>
                    <p data-aos="fade-up">Be Practicals curriculum is the best curriculum available online. AlmaBetter’s program is engaging, comprehensive, and student-centered. If you’re serious about accelerating your tech career, you cannot ask for a better platform than Be Practical.</p>
                    <div className="writer">
                        <div className="row">
                            <div className="col-2">
                                <img src="https://thenewcode.com/assets/images/thumbnails/sarah-parmenter.jpeg" alt="" data-aos="zoom-in" />
                            </div>
                            <div className="col-10" data-aos="fade-up">
                                <h5>Anonymous</h5>
                                <small>Trainer</small>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-6">
                        <div className="quote-right tex-center p-5">
                            <h3 data-aos="fade-up">Fast forward your career in tech with AlmaBetter</h3>
                            <div className="carousel-footer">
                                <button className="join-btn p-3 w-100" data-aos="fade-up">Explore Courses</button>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
      </section>
      <StudentsPlaced/>
    </div>
  )
}

export default Home
