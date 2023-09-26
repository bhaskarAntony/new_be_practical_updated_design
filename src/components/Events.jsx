// TabComponent.js
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Import the default styles
import '../styles/events.css'
import UpcomingEvents from './UpCommingEvents';

function Events() {
  return (
  <div className="container-fluid events-main">
      <div className="container">
      <Tabs>
    <TabList className="custom-tabs">
      <Tab className="custom-tab">Events</Tab>
      <Tab className="custom-tab">Upcoming Events</Tab>
    </TabList>

    <TabPanel>
      <h2>Content for Tab 1</h2>
      <p>This is the content of Tab 1.</p>
    </TabPanel>
    <TabPanel>
      <UpcomingEvents/>
    </TabPanel>
  </Tabs>
    </div>
  </div>
  );
}

export default Events;
