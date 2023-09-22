import React, { useEffect, useState } from 'react'
import '../styles/students-placed.css'
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';

const students = [
   {
    id:1,
    profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
    name:"Jabob",
    started:"Fresher (Bsc Cs)",
    company:"https://www.speridian.com/wp-content/uploads/2019/03/logo.png",
    role:"Fullstack devoloper",
    description:"Be practical is the best Institute of training and placement, I came from civil background, so i need to get job IT field, initially I struggled to get job in IT, then one of my friend suggested me to go Be practical, so i joined with Be practical. I got good technical skills of core java and placed in young minds technology so thanks to Be practical."
   },
   {
    id:1,
    profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
    name:"Jabob",
    started:"Fresher (Bsc Cs)",
    company:"https://www.speridian.com/wp-content/uploads/2019/03/logo.png",
    role:"Fullstack devoloper",
    description:"Be practical is the best Institute of training and placement, I came from civil background, so i need to get job IT field, initially I struggled to get job in IT, then one of my friend suggested me to go Be practical, so i joined with Be practical. I got good technical skills of core java and placed in young minds technology so thanks to Be practical."
   },
   {
    id:1,
    profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
    name:"Jabob",
    started:"Fresher (Bsc Cs)",
    company:"https://www.speridian.com/wp-content/uploads/2019/03/logo.png",
    role:"Fullstack devoloper",
    description:"Be practical is the best Institute of training and placement, I came from civil background, so i need to get job IT field, initially I struggled to get job in IT, then one of my friend suggested me to go Be practical, so i joined with Be practical. I got good technical skills of core java and placed in young minds technology so thanks to Be practical."
   },
   {
    id:1,
    profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
    name:"Jabob",
    started:"Fresher (Bsc Cs)",
    company:"https://www.speridian.com/wp-content/uploads/2019/03/logo.png",
    role:"Fullstack devoloper",
    description:"Be practical is the best Institute of training and placement, I came from civil background, so i need to get job IT field, initially I struggled to get job in IT, then one of my friend suggested me to go Be practical, so i joined with Be practical. I got good technical skills of core java and placed in young minds technology so thanks to Be practical."
   },
   {
    id:1,
    profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
    name:"Jabob",
    started:"Fresher (Bsc Cs)",
    company:"https://www.speridian.com/wp-content/uploads/2019/03/logo.png",
    role:"Fullstack devoloper",
    description:"Be practical is the best Institute of training and placement, I came from civil background, so i need to get job IT field, initially I struggled to get job in IT, then one of my friend suggested me to go Be practical, so i joined with Be practical. I got good technical skills of core java and placed in young minds technology so thanks to Be practical."
   },
   {
    id:1,
    profile:"https://pbs.twimg.com/profile_images/606196213369720832/lSvWN_q-_400x400.jpg",
    name:"Jabob",
    started:"Fresher (Bsc Cs)",
    company:"https://www.speridian.com/wp-content/uploads/2019/03/logo.png",
    role:"Fullstack devoloper",
    description:"Be practical is the best Institute of training and placement, I came from civil background, so i need to get job IT field, initially I struggled to get job in IT, then one of my friend suggested me to go Be practical, so i joined with Be practical. I got good technical skills of core java and placed in young minds technology so thanks to Be practical."
   }
  ];
function StudentsPlaced() {
    
    useEffect(() => {
        AOS.init(); // Initialize AOS
      }, []);
    const [itemsPerSlide, setItemsPerSlide] = useState(3);
    const [carouselInterval, setCarouselInterval] = useState(3000);
    const [carouselPaused, setCarouselPaused] = useState(false);
  
    useEffect(() => {
      const handleResize = () => {
        // Adjust the number of items per slide based on the screen width
        if (window.innerWidth < 800) {
          setItemsPerSlide(1);
          setCarouselInterval(2000);
        }
        else if(window.innerWidth < 1260) {
            setItemsPerSlide(2);
            setCarouselInterval(2000);
          } else {
          setItemsPerSlide(3);
          setCarouselInterval(3000);
        }
      };
  
      window.addEventListener('resize', handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleCarouselHover = () => {
      // Pause the Carousel when the user hovers over it
      setCarouselPaused(true);
    };
  
    const handleCarouselLeave = () => {
      // Resume the Carousel when the user stops hovering
      setCarouselPaused(false);
    };
  

  const carouselItems = students.reduce((accumulator, current, index) => {
    if (index % itemsPerSlide === 0) {
      accumulator.push([]);
    }
    accumulator[accumulator.length - 1].push(current);
    return accumulator;
  }, []);


  function ReadMore({ text, maxLength }) {
    const [isTruncated, setIsTruncated] = useState(true);
  
    const toggleTruncate = () => {
      setIsTruncated(!isTruncated);
    };
  
    return (
      <div>
        {isTruncated ? (
          <div>
            {text.slice(0, maxLength)}
            {text.length > maxLength && (
              <p onClick={toggleTruncate} className="read-more-button text-danger">
                Read More
              </p>
            )}
          </div>
        ) : (
          <div>
            {text}
            <p onClick={toggleTruncate} className="read-less-button text-danger">
              Read Less
            </p>
          </div>
        )}
      </div>
    );
  }
  return (
    <section className='bg-light p-2'>
        <h1 className="banner-heading" data-aos="fade-up">Transforming careers with Our 100% Job Guarntee Program</h1>
        <p className="banner-subtitle text-secondary px-5" data-aos="fade-up">We don’t just give certification but outcomes!</p>
      <div className="students-placed">
      <Carousel interval={carouselInterval}>
      {carouselItems.map((slideItems, index) => (
        <Carousel.Item key={index} 
          onMouseEnter={handleCarouselHover}
          onMouseLeave={handleCarouselLeave}
        >
          <div className="d-flex flex-wrap  p-3 container">
          <div className="row">

            {slideItems.map((item) => (
                <div className="col-12 col-md-6 col-lg-4">
              <div className="placed-card" data-aos="zoom-in-left">
                <div className="placed-card-header text-white bg-black">
                    <p><i><ReadMore text={item.description} maxLength={50} /></i></p>
                    <div className="profile">
                        <img src={item.profile} alt="" />
                    </div>
                </div>
                <div className="placed-card-body">
                    <span className="fs-4 placed-student-name">{item.name}</span>
                    <p className="text-secondary">{item.started}</p>
                    <div className="arrow">
                        <img src="https://cdn-icons-png.flaticon.com/128/981/981086.png" alt="" />
                    </div>
                    <p className="text-secondary">{item.role}</p>
                    <div className="placed-company">
                        <img src={item.company} alt="" />
                    </div>
                </div>
              </div>
                </div>
            ))}
              </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
      </div>
      <div className="carousel-footer text-center d-flex justify-content-center">
        <button className="join-btn p-2" data-aos="fade-up">Enroll This Course</button>
      </div>
    </section>
  )
}

export default StudentsPlaced
