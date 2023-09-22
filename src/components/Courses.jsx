import React, { useEffect, useState } from 'react'
import '../styles/courses.css'
import AllCourses from './AllCourses';
import TrendingCourses from './TrendingCourses';
import AOS from 'aos';

function Courses() {
    const [index, setIndex] = useState(0);
    const [paused, setPaused] = useState(false);
    const [key, setKey] = useState('tab1'); // Initialize with the active tab key

    const [activeTab, setActiveTab] = useState('tab1'); // Initialize with the active tab key

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
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
    useEffect(() => {
      AOS.init(); // Initialize AOS
    }, []);
  return (
    <section>
        <h1 className="banner-heading" data-aos="fade-up">Your Choice, Our Course</h1>
        <div className="full-screen-tabs">
      <div className="container-fluid">
     <div className="main-nav">
     <ul className="nav nav-tabs custom-tabs">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab1')}
          >
            <i class="bi bi-border-all"></i> All
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab2')}
          >
            <i class="bi bi-fire"></i> Trending Courses
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab3')}
          >
            Our Courses
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'tab4' ? 'active' : ''}`}
            onClick={() => handleTabClick('tab4')}
          >
           Start Learning
          </a>
        </li>
      </ul>
      <button className='apply-btn' data-aos="fade-up">Apply Now</button>
     </div>
      <div className="tab-content">
        {/* Content for each tab */}
        {activeTab === 'tab1' && <div>
            <AllCourses/>
            </div>}
        {activeTab === 'tab2' && 
        <div>
            <TrendingCourses/>
            
        </div>}
        {activeTab === 'tab3' &&
         <div>
            <AllCourses/>
        </div>}
        {activeTab === 'tab4' && 
        <div>
            This is the content for Tab 4
        </div>}
      </div>
    </div>
    </div>
    </section>
  )
}

export default Courses
