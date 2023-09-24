import React, { useEffect } from 'react';
import '../styles/allcourses.css'
import AOS from 'aos';

var courses = [
    {
        id:1,
        name: "Complete Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/7991/7991055.png",
        image: "https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:2,
        name: "MERN  Fullstack",
        tag:"Trending",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/1183/1183669.png",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:4,
        name: "Cloud Oops",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/3305/3305673.png",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        id:5,
        name: "Data Science",
        duration: "4.5 Months",
        trainer: "...",
        languages: ["html", "css", "Bootstrap", "Javascript", "React Js", "NodeJs", "Express JS", "MongoDB"],
        ratedStudents: "465",
        rating:"4.5",
        icon: "https://cdn-icons-png.flaticon.com/128/2756/2756778.png",
        image: "https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
]

function AllCourses() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <div className='container-fluid'>
            <div className="row flex-wrap d-flex justify-content-center">
                {courses.map((item, index) => (
                      <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-3">
                      <div className="card course-card" data-aos="zoom-in">
                      <div className={`course-card-header p-2 d-flex align-items-end bg-primary justify-content-between course-card-header${item.id}`}>
                        <div className="header-img">
                            <img src={item.icon} alt="" />
                        </div>
                        <div className="course-header-text text-white text-end">
                            <h4>{item.name}</h4>
                        </div>
                           <div className="highlighter p-2">
                            <p className="p-1 px-3 text-white bg-primary rounded-5"><i class="bi bi-fire"></i>{item.tag}</p>
                           <div className="course-icons">
                             <div className="share">
                             <i class="bi bi-share-fill"></i>
                            </div>
                            <div className="fav">
                            <i class="bi bi-heart"></i>
                            </div>
                           </div>
                          </div>
                      </div>
                      <div className="course-card-body p-2">
                        <h5 className='text-black'>{item.name}</h5>
                        <p><small><i class="bi bi-clock-history text-secondry"></i> {item.duration}</small></p>
                        {/* <p><small>{item.trainer}</small></p> */}
                        <p><small><i class="bi bi-camera-video-fill text-secondary"></i> Live classes</small></p>
                      </div>
                      <div className="course-footer p-2 m-0">
                       <i> <small>Reviews</small></i>
                       <div className="ratings_course d-flex align-items-center">
                       <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <i class="bi bi-star-fill text-warning"></i>
                        <small>{item.rating} ({item.ratedStudents})</small>
                       </div>
                       
                      </div>
                      <div className="thumb-layout">
                        <img src={item.icon} alt="" />
                        <h4>Enroll Now This {item.name}</h4>
                        <p>Build Your Careere With {item.name}</p>

                      <div className="thumb-btns">
                        <button className="enroll-btn">Enroll</button>
                        <button className="enquire-btn">Enquire</button>
                      </div>
                      </div>
                      </div>
                  </div>
                ))}
              
            </div>
        </div>
    )
}

export default AllCourses;
