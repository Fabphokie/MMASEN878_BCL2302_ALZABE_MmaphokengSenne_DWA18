import React, { useEffect } from 'react'
import { useState } from 'react'
import Card from '/src/Components/Card'
import Grid from '@mui/material/Grid'
import PrimarySearchAppBar from './Components/AppBar';
import  {FavoriteProvider} from './Components/FavoriteContext';
import MessageIconComponent from './Components/MessageIcon';
import Mm from './Components/Seasons';


import './App.css'

const genreMapping = {
  1: 'Personal Growth',
  2: 'True Crime and Investigative Journalism',
  3: 'History',
  4: 'Comedy',
  5: 'Entertainment',
  6: 'Business',
  7: 'Fiction',
  8: 'News',
  9: 'Kids and Family',
};

function App() {
  const [phonyo, setPhonyo] = useState([]);
  const [visiblePodcasts, setVisiblePodcasts] = useState([]);
  const initialPodcastCount = 8;

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPhonyo(data);
        setVisiblePodcasts(data.slice(0, initialPodcastCount));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleShowMore = () => {
    const currentCount = visiblePodcasts.length;
    const nextPodcasts = phonyo.slice(currentCount, currentCount + initialPodcastCount);
    setVisiblePodcasts([...visiblePodcasts, ...nextPodcasts]);
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FavoriteProvider>
      <PrimarySearchAppBar />
      <Grid container spacing={3}>
        {visiblePodcasts.map((datamapping) => (
          <Card
            key={datamapping.id}
            titles={datamapping.title}
            itemId={datamapping.id}
            images={datamapping.image}
            descriptions={datamapping.description}
            seasons={datamapping.seasons}
            genres = {datamapping.genres.map(genreID => genreMapping[genreID])}
          />
        ))}
      </Grid>
      {phonyo.length > visiblePodcasts.length && (
        <button onClick={handleShowMore} style={{ marginTop: '2%' }}>Show More Podcasts</button>
      )}
      {/* <MessageIconComponent /> */}
      {window.scrollY > 500 && (
        <button className="back-to-top-button" onClick={handleBackToTop}>
          Back to Top
        </button>
      )}
    </FavoriteProvider>
  );
}

export default App;
