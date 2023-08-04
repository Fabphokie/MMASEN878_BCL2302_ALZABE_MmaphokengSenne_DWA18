// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ shows }) => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    responsive: [
      {
        breakpoint: 768, 
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
