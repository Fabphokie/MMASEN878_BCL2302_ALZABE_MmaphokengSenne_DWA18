// MyCarouselContainer.js

import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import UseFetch from './UseFetch';
import '../App.css'

const MyCarouselContainer = () => {
  const [shows, setShows] = useState([]);

  const [data, error, loading] = UseFetch('https://podcast-api.netlify.app/shows')

  useEffect(() => {
  
    const fetchedShows = [
      {
        id: 1,
        title: 'Show 1',
        imageUrl: 'show1.jpg',
        description: 'Description of Show 1',
      },
      {
        id: 2,
        title: 'Show 2',
        imageUrl: 'show2.jpg',
        description: 'Description of Show 2',
      },
      
    ];

    setShows(fetchedShows);
  }, []);

  return (
    <div className='carousel--heading'>
      <h1>Welcome to PodPal_Phokie</h1>
      <Carousel shows={data} />
    </div>
  );
};

export default MyCarouselContainer;
