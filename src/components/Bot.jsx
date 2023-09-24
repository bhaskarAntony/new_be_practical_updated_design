import React, { useState } from 'react';
import ChatMessage from './ChatMessage'; // Import the ChatMessage component
// import '../styles/chatbot.css'

function Bot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return; // Don't send empty messages

    // Add user message to the chat
    const newUserMessage = { text: userMessage, isUser: true };
    setChatMessages([...chatMessages, newUserMessage]);
    setUserMessage('');

    // Get bot response based on user input
    const botResponse = getBotResponse(userMessage);
    const newBotMessage = { text: botResponse, isUser: false };
    setChatMessages([...chatMessages, newBotMessage]);
  };

  const qaPairs = [
    'What is your name?',
    'How are you?',
    'Tell me a joke.',
    // Add more predefined questions as needed
  ];

  const getBotResponse = (userMessage) => {
    // Define predefined questions and their corresponding answers
    const qaResponses = {
      'What is your name?': 'I am a chatbot.',
      'How are you?': 'I am just a computer program, so I do not have feelings.',
      'Tell me a joke.': 'Why don’t scientists trust atoms? Because they make up everything!',
      // Add more predefined Q&A pairs as needed
    };

    // Check if the user's message matches a predefined question
    if (userMessage in qaResponses) {
      return qaResponses[userMessage];
    } else {
      return "I'm sorry, I don't know the answer to that question.";
    }
  };

  return (
    <div className={`bg-white chatbot ${isChatbotVisible ? '' : 'hidden'}`}>
      <div className="chat-header">
    <i className="bi bi-x-lg fs-4" onClick={toggleChatbot}></i>
      </div>
      <div className="questions">
        <ul className="list-group">
         <li className="list-group-item mb-2">What is your name?</li>
         <li className="list-group-item mb-2">How are you?</li>
         <li className="list-group-item mb-2">Tell me a joke.</li>
        </ul>
      </div>
      <div className="chat-area">
        {chatMessages.map((message, index) => (
          <ChatMessage key={index} message={message.text} isUser={message.isUser} />
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={userMessage}
          onChange={handleUserMessageChange}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} className='p-2 px-3 fs-5 text-center'><i className="bi bi-send-fill"></i></button>
      </div>
    </div>
  );
}

export default Bot;
