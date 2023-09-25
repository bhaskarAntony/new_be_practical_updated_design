import React from 'react'
import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap'; // Import Bootstrap components

function CourseModels() {
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
    {
      month: 'Month 3',
      steps: [
        {
          title: 'Routing with React Router',
          content:
            'Implement client-side routing in React using React Router. Create navigation for your app.',
        },
        {
          title: 'Managing Forms in React',
          content: 'Learn how to handle forms in React and manage form data.',
        },
        // Add more steps for Month 3 as needed
      ],
    },
    {
      month: 'Month 4',
      steps: [
        {
          title: 'API Integration',
          content:
            'Fetch data from external APIs and integrate it into your React application.',
        },
        {
          title: 'Project Development',
          content:
            'Work on a final project that integrates the concepts learned throughout the course.',
        },
        // Add more steps for Month 4 as needed
      ],
    },
  ];
  return (
    <div>
       <Container>
      {courseData.map((month, index) => (
        <div className="course-module" key={index}>
          <h2>{month.month}</h2>
          <Accordion defaultActiveKey="0">
            {month.steps.map((step, stepIndex) => (
              <Card key={stepIndex}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey={stepIndex.toString()}>
                    <div className="step">
                      <div className="step-title">{step.title}</div>
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={stepIndex.toString()}>
                  <Card.Body>{step.content}</Card.Body>
                </Accordion.Collapse>
              </Card>
            ))}
          </Accordion>
        </div>
      ))}
    </Container>
    </div>
  )
}

export default CourseModels
