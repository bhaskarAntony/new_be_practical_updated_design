import React, { useEffect } from 'react';
import '../styles/training.css';
import AOS from 'aos';

const training = [
    {
        heading: "Classroom training",
        description: "In-house training  classroom training is livelier with our excellent infrastructure and modern facilities and face-to-face interaction with our trainers.",
        icon: "https://cdn-icons-png.flaticon.com/128/1436/1436664.png"
    },
    {
        heading: "Online Training",
        description: "Online training lets you complete your training from any place in the world. Learn your desired course while sitting in your home.",
        icon: "https://cdn-icons-png.flaticon.com/128/9167/9167026.png"
    },
    {
        heading: "Corporate Training",
        description: "Our trainers provide corporate training, so you can stay up to date with the latest developments in your field.",
        icon: "https://cdn-icons-png.flaticon.com/128/3048/3048654.png"
    },
    {
        heading: "Campus Training",
        description: "Be Practical conducts job skill training programs for college students. It helps college students get trained and find their desired job.",
        icon: "https://cdn-icons-png.flaticon.com/128/7533/7533677.png"
    }
];

function Training() {
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    return (
        <div className='container-fluid'>
            <h1 className="banner-heading" data-aos="fade-up">Mode Of Training</h1>
            <div className="training-cards-container container p-3">
                <div className="row">
                    {training.map((item, index) => (
                        <div className="col-12 col-md-6 col-lg-3" key={index}>
                            <div className="training-card mb-3" data-aos="zoom-in-down">
                                <div className="header">
                                    <img src={item.icon} alt="" />
                                </div>
                                <div className="card-body">
                                    <h4>{item.heading}</h4>
                                    <p>{item.description}</p>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Training;
