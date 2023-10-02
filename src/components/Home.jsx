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
import Skills from './Skills';
import Elite from './Elite';
import DialogModel from './DialogModel';
import bg from '../images/banner-img.png'
import YoutubeVideos from '../components/YoutubeVideos'
import Webinar from './Webinar';
import CardSlider from '../styles/CardSlider';


const home = [
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    heading: "High Paid Salaries & Continuous Career Growth",
    subheading: "Build skills with courses, certificates, and degrees online from world-class universities and companies.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
  }
];

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  // Model open logic
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModal(true);
    }, 1 * 60 * 1000); // 5 minutes

    return () => clearInterval(interval);
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
      <DialogModel show={showModal} handleClose={handleCloseModal} />
      <section className="home container-fluid">
        <div className="custom-carousel">
          <Carousel activeIndex={index} onSelect={handleSelect}>
          {
  home.map((item, index) => (
    <Carousel.Item key={index}>
      <div className="carousal-text">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-6">
            <div className="home-text">
              <h1 className="main-heading">{item.heading}</h1>
              <p className="subtitle">{item.subheading}</p>
            </div>
            <div className="carousel-footer">
              <button className='btn p-3 bg-warning fw-bold' data-aos="fade-up">Join For Free</button>
              <button className='btn p-3  bg-warning fw-bold' data-aos="fade-up">Book Your Free Master Classes</button>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-6">
            <div className="home-image">
              <img src={item.image} className="w-100 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </Carousel.Item>
  ))
}

          </Carousel>
          <div className="custom-indicators">
            {Array.from({ length: home.length }).map((_, i) => (
              <div
                key={i}
                className={`indicator ${index === i ? 'active' : ''}`}
                onClick={() => handleSelect(i)}
              ></div>
            ))}
          </div>
        </div>
        <div className="register-container-home bg-white">
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
                    <input type="text" placeholder='Name' className='form-control' />
                  </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                <div className="form-group">
                  <input type="email" placeholder='Email' className='form-control' />
                 </div> 
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-5">
              <div className="row">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group">
                  <input type="number" placeholder='Phone' className='form-control' />
                 </div>
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                 <div className="form-group form-group-last">
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
            <div className="col-12 col-sm-12 col-md-2 col-lg-2 mt-4">
              <button className='register-btn text-center  p-3 w-100' data-aos="fade-up">Join Now</button>
            </div>
          </div>
          </div>
        </div>
        </div>
       </section>
      <Courses/>
      <h3 className="banner-heading">Join Our Elite Program</h3>
      <Elite/>
      <Training/>
       <Companies/>
      <Activities/>
      <h3 className="banner-heading" data-aos="fade-up">Why You Choose BE Practical?</h3>
      <Skills/>
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
                            <h3 data-aos="fade-up">Fast forward your career in tech with Be Practical</h3>
                            <div className="carousel-footer">
                                <button className="join-btn p-3 w-100" data-aos="fade-up">Explore Courses</button>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
           
      </section>
      <Webinar/>

      <h3 className="banner-heading" data-aos="fade-up">Meet Our Students</h3>
      <Feedback/>
      <StudentsPlaced/>
      {/* <ChatBotContainer/> */}

            <YoutubeVideos/>
    
    </div>
  )
}

export default Home
