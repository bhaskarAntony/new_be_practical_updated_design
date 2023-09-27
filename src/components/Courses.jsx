import React, { useEffect, useState } from 'react'
import '../styles/courses.css'
import AllCourses from './AllCourses';
import TrendingCourses from './TrendingCourses';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AOS from 'aos';

function Courses() {
    const numberOfSlides = 3; // Replace with the actual number of slides
    useEffect(() => {
      AOS.init(); // Initialize AOS
    }, []);
  return (
    <section>
        <h1 className="banner-heading" data-aos="fade-up">Your Choice, Our Course</h1>
        <div className="container-fluid">
      <Tabs>
    <TabList className="custom-tabs">
      <Tab className="custom-tab">Trending Courses</Tab>
      <Tab className="custom-tab">Our Courses</Tab>
      <Tab className="custom-tab">Start Learning</Tab>
    </TabList>

    <TabPanel>
    <TrendingCourses/>
    </TabPanel>
    <TabPanel>
      <AllCourses/>
    </TabPanel>
    <TabPanel>
      d
    </TabPanel>
  </Tabs>
    </div>
    </section>
  )
}

export default Courses
