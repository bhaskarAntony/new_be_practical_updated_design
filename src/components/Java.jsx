import React, { useEffect } from 'react'
import '../styles/Course-single.css'
import StudentsPlaced from './StudentsPlaced'
import Languages from './Languages'
import CourseCard from './CourseCard'
import Adwantages from './Adwantages'
import Feedback from './Feedback'
import CourseCompany from './CourseCompany'
import AOS from 'aos';

var languages =[
    {
        language:"HTML",
        image:"https://cdn-icons-png.flaticon.com/128/1051/1051277.png"
    },
    {
        language:"CSS",
        image:"https://cdn-icons-png.flaticon.com/128/732/732190.png"
    },
    {
        language:"Bootstrap",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968672.png"
    },
    {
        language:"Javascript",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"
    },
    {
        language:"ReactJS",
        image:"https://cdn-icons-png.flaticon.com/128/753/753244.png"
    },
    {
        language:"NodeJS",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968322.png"
    },
    {
        language:"ExpressJS",
        image:"https://cdn-icons-png.flaticon.com/128/91/91397.png"
    },
    {
        language:"MongoDB",
        image:"https://cdn-icons-png.flaticon.com/128/2906/2906274.png"
    }
]
var card = [
    {
        image:"https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600",
        course:"MERN Fullstack",
        instructor:"Adarsh",
        duration:"4.5 Months",
        enrolled:"100+ Students",
        mode:"Online And Offline"
    }
]
function Java() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <section>
      <div className="course-home container-fluid">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="course-single-text">
                    <div className="course-nav py-3">
                        <ul className='m-0 p-1'>
                            <li><a href="/">Home</a></li>
                            <i class="bi bi-arrow-right-short"></i>
                            <li><a href="/java-fullstack">Java FullStack</a></li>
                        </ul>
                    </div>
                    <div className="course-tag">
                        <div className="tag">
                            <p className='text-white fs-5' data-aos="fade-up">Trending Course</p>
                        </div>
                    </div>
                    <div className="header-text">
                        <h1 className="course-header" data-aos="fade-up">Certification in  <br /><span className='main-text'>Java </span>Full Stack</h1>
                        <div className="batch"> 
                        <i class="bi bi-calendar3 fs-3"></i>
                            <p data-aos="fade-up">New Batch Starts At 20 Sept 2023</p>
                        </div>
                        <div className="course-points">
                            <ul className='p-0 m-0 text-seconday'>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Learn the most in-demand advanced javascript technology.</p>
                                </li>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Highest paid salaries for React & NodeJS.</p>
                                </li>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Most in-demand back end NodeJS & NoSQL database mongo db.</p>
                                </li>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Fewer Resources & more openings.</p>
                                </li>
                            </ul>
                        </div>
                        <div className="course-btns carousel-footer">
                            <button className="join-btn" data-aos="fade-up">DownLoad Browcher</button>
                            <button className="enrol-btn" data-aos="fade-up"> Enroll Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="course-single-image">
                    <div className="video-container">
                        <img src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="play-icon">
                        <i class="bi bi-play-fill fs-4"></i>
                        </div>
                      
                    </div>
                    <div className="enrolled container-fluid p-2">
                            <div className="row">
                                <div className="col-4">
                                    <div className='text-center' data-aos="fade-up">
                                        <h1>100+</h1>
                                        <p>Hiring Partners</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='text-center' data-aos="fade-up">
                                        <h1>8 LPA</h1>
                                        <p>Avg Salary</p>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className='text-center' data-aos="fade-up">
                                        <h1>12 LPA</h1>
                                        <p>Highest Salary</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
      </div>
      <StudentsPlaced/>
      <h1 className="banner-heading" data-aos="fade-up">What Programming Languages You will Learn?</h1>
      <section className='main-lan-container container-fluid bg-light py-2'>
            <div className="lan-inner-container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-8">
                        <Languages languages={languages}/>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <CourseCard card={card}/>
                    </div>
                </div>
            </div>
      </section>
      <CourseCompany/>
      <h1 className="banner-heading" data-aos="fade-up">Adwantages @ Be Practical</h1>
      <Adwantages/>
      <h1 className="banner-heading" data-aos="fade-up">What Students says About Course?</h1>
      <Feedback/>
    </section>
  )
}

export default Java
