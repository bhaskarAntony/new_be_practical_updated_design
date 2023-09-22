import React, { useEffect } from 'react'
import '../styles/activities.css'
import AOS from 'aos';

var activities = [
    {
        heading: "Assessment Test",
        description: "Be Practical evaluates a person's knowledge, abilities, and personal attributes and rates them on a scale of 1 to 10. To strengthen any weak areas, an individual improvement plan will be discussed and put into action"
    },
    {
        heading: "Resume Building",
        description: "We go through great lengths to create a trainee's profile with the appropriate key words and ensure thatprofiles have been uploaded in all employment portals. This aids them in obtaining phone calls directlyfrom recruiters"
    },
    {
        heading: "Group Discussion",
        description: "We evaluate students using assessment tests to gauge their knowledge, skills, abilities, and personality traits Employers frequently utilize these examinations to assess the academic skills of applicants."
    },
    {
        heading: "Mock Interviews",
        description: "Industry experts from our partnered companies conduct technical interviews and share the findings with HR. This directly helps trainee's in preparing for actual interviews and also to understand individual strengths and weaknesses."
    },
    {
        heading: "industry Related Projects",
        description: "Experiential learning that integrates knowledge and theory learned in the classroom with practical application and skills development in a professional setting."
    }
]

function Activities() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <section className='container-fluid p-2 overflow-hidden p-lg-4 p-2'>
            <h1 className="banner-heading" data-aos="fade-up">Placement Activities</h1>
            <div className="row">
                <div className="col-12 col-md-6 col-lg-7">
                    <div className="activities-text">
                        <ul>
                            {activities.map((item, index) => (
                                    <li key={index} className='mt-5' data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-center">
                                    <h3 className="activity-heading" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample"><i class="bi bi-check2-square"></i> {item.heading} <i class="bi bi-caret-down-fill"></i></h3>
                                    
                                    <div class="collapse collapse-card" id="collapseExample">
                                    <p className="activity-description"><small>{item.description}</small></p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-5">
                    <div className="activities-images">
                       <div className="images-wrapper">
                       <div className="image-container" data-aos="zoom-in-up">
                            <img src="https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="image-container" data-aos="zoom-in-up">
                            <img src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                       </div>
                       <div className="images-wrapper">
                       <div className="image-container" data-aos="zoom-in-up">
                            <img src="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className="image-container" data-aos="zoom-in-up">
                            <img src="https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activities
