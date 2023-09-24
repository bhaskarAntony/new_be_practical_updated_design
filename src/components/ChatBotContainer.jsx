import React, { useState } from 'react'
import '../styles/chatbotcontainer.css'
import Bot from './Bot';

function ChatBotContainer() {
        //chatbot
        const [isChatbotVisible, setIsChatbotVisible] = useState(false);
        const toggleChatbot = () => {
          setIsChatbotVisible(!isChatbotVisible);
          console.log("Chatbot visibility:", isChatbotVisible);
        };
  return (
    <section className="quote-container container-fluid">
    <div className="bot-container  container" data-aos="fade-up">
        <div className="row">
            <div className="col-12 col-md-12 col-lg-6">
                <img src="https://miro.medium.com/v2/resize:fit:910/0*KNC2_rgMbG1WVzsm.gif" alt="" />
            </div>
            <div className="col-12 col-md-12 col-lg-6">
                <div className="quote-right tex-center p-5">
                    <h3 data-aos="fade-up">Take Clarity for All your Doubts With Our ChatBot</h3>
                    <div className="carousel-footer">
                        <button onClick={toggleChatbot} className="join-btn p-3 w-100" data-aos="fade-up">Chat With Us</button>
                    </div>
                </div>
                </div>
        </div>
    </div>
    {isChatbotVisible ? <Bot/> : null}
</section>

  )
}

export default ChatBotContainer
