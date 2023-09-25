// src/CourseModule.js

import React from 'react';
import '../styles/model.css'

const courseData = [
  {
    month: 'Month 1',
    steps: [
      {
        title: 'Introduction to React',
        content:
          'Learn the basics of React and its core concepts. Get started with creating React components.',
      },
      {
        title: 'Building Components',
        content: 'Create and manage React components. Understand JSX and component rendering.',
      },
      // Add more steps for Month 1 as needed
    ],
  },
  {
    month: 'Month 2',
    steps: [
      {
        title: 'State and Props',
        content:
          'Understand component state and props. Learn how to pass data between components using props.',
      },
      {
        title: 'React-Bootstrap Introduction',
        content:
          'Get familiar with React-Bootstrap and how to integrate Bootstrap components in React applications.',
      },
      // Add more steps for Month 2 as needed
    ],
  },
  // Add more months and steps as needed
];

function Model() {
  return (
    <div className="container">
      {courseData.map((month, index) => (
        <div className="course-module" key={index}>
          <h2 className="month-title">{month.month}</h2>
          <ul className="list-group">
            {month.steps.map((step, stepIndex) => (
              <li className="list-group-item" key={stepIndex}>
                <div className="step">
                  <button
                    className="btn btn-link"
                    data-bs-toggle="collapse"
                    data-bs-target={`#step${index}-${stepIndex}`}
                    aria-expanded="false"
                  >
                    <i className="bi bi-arrow-right-circle"></i> {step.title}
                  </button>
                  <div className="collapse" id={`step${index}-${stepIndex}`}>
                    <div className="step-content">
                      <p>{step.content}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

  );
}

export default Model;
