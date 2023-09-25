import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import { Carousel } from 'react-bootstrap';
import image from '../images/1.png'

function H() {
  const [screenSize, setScreenSize] = useState("medium");

  useEffect(() => {
    function handleResize() {
      const windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        setScreenSize("small");
      } else if (windowWidth < 992) {
        setScreenSize("medium");
      } else {
        setScreenSize("large");
      }
    }

    // Attach the resize event listener
    window.addEventListener("resize", handleResize);

    // Initial screen size detection
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Define image URLs for different screen sizes
  const images = {
    small: [
      "https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6476595/pexels-photo-6476595.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    medium: [
      "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-open-laptop-web-design-development-on-bed.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    large: [
     image,
     image,
     image
    ],
  };

  // Get the current image URLs based on screen size
  const currentImageUrls = images[screenSize];

  return (
    <header>
      {/* Add your navigation menu here */}
      
      {/* Create the Bootstrap carousel with the current images */}
      <Carousel  interval={1000}>
        {currentImageUrls.map((imageUrl, index) => (
          <Carousel.Item key={index}>
            <img
              src={imageUrl}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </header>
  );
}

export default H;
