import React from 'react';
import '../styles/chatmessages.css'

const ChatMessage = ({ message, isUser }) => {
  return (
   <div className='container-fluid'>
   <div className="bot-image d-flex">
   <img src="https://miro.medium.com/v2/resize:fit:910/0*KNC2_rgMbG1WVzsm.gif" alt="" />
   <div className={`chat-message ${isUser ? 'user-message' : 'bot-message'}`}>
      {message}
    </div>
    </div>
   </div>
  );
};

export default ChatMessage;
