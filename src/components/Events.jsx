// TabComponent.js
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the default styles
import '../styles/events.css'
import UpcomingEvents from './UpCommingEvents';
import Feedback from './Feedback';

const upcomingevents = [
  {
    image: "https://be-practical.com/images/event/event1.png",
    title: "Connect With Industry Heads. MR. Satish SG",
    keyword: "Industry Talks",
    date: "30 SEP 2021",
    time: "10.00 AM - 11.30 AM",
    description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
    topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
  },
  {
    image: "https://be-practical.com/images/event/event1.png",
    title: "Connect With Industry Heads. MR. Satish SG",
    keyword: "Industry Talks",
    date: "30 SEP 2021",
    time: "10.00 AM - 11.30 AM",
    description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
    topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
  },
  // Add more events here if needed
];
const pastevents = [
  {
    image: "https://be-practical.com/images/event/event1.png",
    title: "Connect With Industry Heads. MR. Satish SG",
    keyword: "Industry Talks",
    date: "30 SEP 2021",
    time: "10.00 AM - 11.30 AM",
    description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
    topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
  },
  {
    image: "https://be-practical.com/images/event/event1.png",
    title: "Connect With Industry Heads. MR. Satish SG",
    keyword: "Industry Talks",
    date: "30 SEP 2021",
    time: "10.00 AM - 11.30 AM",
    description: "Successfully Completed Our “Connect with Industry Heads” Webinar Program, 𝐌𝐫 𝐒rikanth Rao Digital & IT Director at Polaris INC shared 𝐬𝐨𝐦𝐞 𝐠𝐫𝐞𝐚𝐭 𝐢𝐧𝐬𝐢𝐠𝐡𝐭𝐬 𝐨𝐧 𝐭𝐡𝐞 𝐈𝐓 𝐈𝐧𝐝𝐮𝐬𝐭𝐫y.",
    topic: "Learn about the latest trends in the IT industry. Top Courses which will help freshers in placements. Interact with Shrikanth to clear the doubts which will help in your career."
  },
  // Add more events here if needed
];
function Events() {
  return (
  <div className="container-fluid events-main p-lg-5 p-md-1 p-1">
      <div className="container-fluid">
      <Tabs>
    <TabList className="custom-tabs">
      <Tab className="custom-tab">Events</Tab>
      <Tab className="custom-tab">Upcoming Events</Tab>
    </TabList>

    <TabPanel>
    <UpcomingEvents events={pastevents}/>
    </TabPanel>
    <TabPanel>
      <UpcomingEvents events={upcomingevents}/>
    </TabPanel>
  </Tabs>
    </div>
    <Feedback/>
  </div>
  );
}

export default Events;
