import React, { useEffect } from 'react'
import '../styles/Course-single.css'
import StudentsPlaced from './StudentsPlaced'
import Languages from './Languages'
import CourseCard from './CourseCard'
import Feedback from './Feedback'
import Adwantages from './Adwantages'
import CourseCompany from './CourseCompany'
import AOS from 'aos';
import CourseTab from './CourseTab'
import ChatBotContainer from './ChatBotContainer'
import YoutubeVideos from '../components/YoutubeVideos'
import AllCourses from './AllCourses'
import CourseOverview from './CourseOverview'

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
        language:"Python",
        image:"https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
    },
    {
        language:"Javascript",
        image:"https://be-practical.com/images/Tools/MachineLearning.png"
    },
    {
        language:"Excel",
        image:"https://be-practical.com/images/Tools/Microsoft_Excel-Logo.png"
    },
    {
        language:"NumPy",
        image:"https://be-practical.com/images/Tools/numpy.png"
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
const overview = [
    {
        course_description:"The program suits For College Students, Freshers. And professionals of all levels and disciplines, and will prepare you to take up a more specialist role within the overall Data Science domain.",
        certification:"Through these training programs, learners gain hands-on experience working with various technologies used in the field, including popular programming languages such as R and Python, as well as data processing and storage systems such as Hadoop and Spark. In addition, learners may also receive training on popular data visualization tools such as Tableau.",
    }
]
function DataScience() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
  return (
    <section>
      <section className="course-home container-fluid" id="home">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <div className="course-single-text">
                    <div className="course-nav py-3">
                        <ul className='m-0 p-1'>
                            <li><a href="/">Home</a></li>
                            <i class="bi bi-arrow-right-short"></i>
                            <li><a href="/mern-fullstack">Data Science</a></li>
                        </ul>
                    </div>
                    <div className="course-tag">
                        <div className="tag">
                            <p className='text-white fs-5' data-aos="fade-up">Trending Course</p>
                        </div>
                    </div>
                    <div className="header-text">
                        <h1 className="course-header" data-aos="fade-up">Certification in  <br /><span className='main-text'>Data Science </span>Course</h1>
                        <div className="batch"> 
                        <i class="bi bi-calendar3 fs-3"></i>
                            <p data-aos="fade-up">New Batch Starts At 20 Sept 2023</p>
                        </div>
                        <div className="course-points">
                            <ul className='p-0 m-0 text-seconday'>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Designed for Beginners and college students.</p>
                                </li>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">The course covers Python/R, Statistics, Numpy, Sql, and Tableau.</p>
                                </li>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Add-on Placement & Internship Support.</p>
                                </li>
                                <li>
                                <i class="bi bi-check-circle-fill text-success"></i>
                                    <p data-aos="fade-up">Interact with industry experts and get mentorship.</p>
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
      </section>
      <CourseOverview overview={overview}/>
      <h1 className="banner-heading" data-aos="fade-up">What Programming Languages You will Learn?</h1>
      <section className='main-lan-container container-fluid bg-light py-2' id="languages">
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

      <StudentsPlaced/>
     
      <h1 className="banner-heading" data-aos="fade-up">Adwantages @ Be Practical</h1>
      <Adwantages/>
      <YoutubeVideos/>
      <section id="feedback">
      <h1 className="banner-heading" data-aos="fade-up">What Students says About Course?</h1>
      <Feedback/>
      </section>
      <h1 className="banner-heading" data-aos="fade-up">You may also like these Courses</h1>
      <AllCourses/>
    </section>
  )
}

export default DataScience
