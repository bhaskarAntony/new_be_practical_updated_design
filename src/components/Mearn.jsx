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
import Model from './Model'
import FAQ from './FAQ'
import CourseOverview from './CourseOverview'
// import FaqComponent from './FaqComponent'
import FaqComponent from './FaqComponent'


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
const Mern_module = [
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:"You will start with HTML, CSS, and JavaScript and then move on to learning data structures such as arrays, linked lists, and trees. You will also learn how to implement these data structures in JavaScript."
    },
    {
      module: 'Javascript Jungle',
      about: 'Answer to Question 1 goes here.',
      description:"You will deepen your understanding of JavaScript and explore advanced concepts like object-oriented programming, closures, and asynchronous programming."
    },
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:""
    },
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:""
    },
    {
      module: 'Web Wonders',
      about: 'Answer to Question 1 goes here.',
      description:""
    }
    // Add more FAQ items as needed
  ];
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
function Mearn() {
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
                            <li><a href="/mern-fullstack">MERN FullStack</a></li>
                        </ul>
                    </div>
                    <div className="course-tag">
                        <div className="tag">
                            <p className='text-white fs-5' data-aos="fade-up">Trending Course</p>
                        </div>
                    </div>
                    <div className="header-text">
                        <h1 className="course-header" data-aos="fade-up">Certification in  <br /><span className='main-text'>MERN </span>Full Stack</h1>
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
      </section>
      <h3 className="banner-heading" data-aos="fade-up">What Programming Languages You will Learn?</h3>
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
      <CourseOverview overview={overview}/>
 <CourseCompany/>
<FAQ modules={Mern_module}/>
      <StudentsPlaced/>
     
      <h3 className="banner-heading" data-aos="fade-up">Adwantages @ Be Practical</h3>
      <Adwantages/>
      <YoutubeVideos/>
      <section id="feedback">
      <h3 className="banner-heading" data-aos="fade-up">What Students says About Course?</h3>
      <Feedback/>
      </section>
      <h3 className="banner-heading" data-aos="fade-up">You may also like these Courses</h3>
      <AllCourses/>

    </section>
  )
}

export default Mearn
