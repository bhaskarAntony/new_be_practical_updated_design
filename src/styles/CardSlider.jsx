import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const slides = [
    {
      id: 1,
      imageUrl: 'https://example.com/image1.jpg',
      title: 'Card 1',
    },
    {
      id: 2,
      imageUrl: 'https://example.com/image2.jpg',
      title: 'Card 2',
    },
    {
        id: 1,
        imageUrl: 'https://example.com/image1.jpg',
        title: 'Card 1',
      },
      {
        id: 2,
        imageUrl: 'https://example.com/image2.jpg',
        title: 'Card 2',
      },
      {
        id: 1,
        imageUrl: 'https://example.com/image1.jpg',
        title: 'Card 1',
      },
      {
        id: 2,
        imageUrl: 'https://example.com/image2.jpg',
        title: 'Card 2',
      },
      {
        id: 1,
        imageUrl: 'https://example.com/image1.jpg',
        title: 'Card 1',
      },
      {
        id: 2,
        imageUrl: 'https://example.com/image2.jpg',
        title: 'Card 2',
      },
    // Add more card data as needed
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // Change delay as needed
    prevArrow: <button className="slick-prev">Previous</button>, // Add previous arrow
    nextArrow: <button className="slick-next">Next</button>, // Add next arrow
  };

  return (
    <div className="card-slider">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="card">
            <img src={slide.imageUrl} alt={slide.title} />
            <h3>{slide.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
