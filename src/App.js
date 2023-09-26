import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import Mearn from './components/Mearn';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Python from './components/Python';
import Java from './components/Java';
import DataScience from './components/DataScience';
import DigitalMarket from './components/DigitalMarket';
import CloudOops from './components/CloudOops';
import H from './components/H';
import Events from './components/Events';
import Bot from './components/Bot';
import Gallery from './components/Gallery';

function App() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
    console.log("Chatbot visibility:", isChatbotVisible);
  };

  return (
    <div className='app'>
      {isChatbotVisible ? (
          <Bot />
      ) : 
      <>
       <div className='app-components'>
            <div className='chat-bot' onClick={toggleChatbot}>
              <img src='https://miro.medium.com/v2/resize:fit:910/0*KNC2_rgMbG1WVzsm.gif' alt="Chatbot" />
            </div>
            <div className='call'>
              <i className="bi bi-telephone-fill"></i>
            </div>
          </div>
      </>
      }

      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/mern-fullstack' element={<Mearn />} />
          <Route path='/java-fullstack' element={<Java />} />
          <Route path='/python-fullstack' element={<Python />} />
          <Route path='/data-science' element={<DataScience />} />
          <Route path='/digital-marketing' element={<DigitalMarket />} />
          <Route path='/cloud-oops' element={<CloudOops />} />
          <Route path='/events' element={<Events />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
