// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ shows }) => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Loop through the slides infinitely
    speed: 500, // Slide transition speed in milliseconds
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll when navigating
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Autoplay interval in milliseconds
    responsive: [
      {
        breakpoint: 768, // Adjust settings for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {shows.map((show) => (
        <div key={show.id} style={{columnGap: 20}}>
        
          <img src={show.image} alt={show.title} style={{width: 200}} />
          <h3>{show.title}</h3>
          <p>{show.description.substring(0, 31)}</p>
          
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
