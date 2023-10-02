import React from 'react'
import '../styles/faqcomponent.css'
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const faqData = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
        question: 'What is React?',
        answer: 'React is a JavaScript library for building user interfaces.',
      },
    // Add more FAQ items here
  ];
  
function FaqComponent() {
  return (

     <div className="container mt-5">
      <h1 className="text-center">Frequently Asked Questions</h1>
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header" id={`faqHeading${index}`}>
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target={`#faqCollapse${index}`}
                  aria-expanded="true"
                  aria-controls={`faqCollapse${index}`}
                >
                  {item.question}
                </button>
              </h2>
            </div>

            <div
              id={`faqCollapse${index}`}
              className="collapse"
              aria-labelledby={`faqHeading${index}`}
              data-parent="#faqAccordion"
            >
              <div className="card-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FaqComponent
