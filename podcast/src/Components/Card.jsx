import { Grid } from '@mui/material'
import Button from '@mui/material/Button'
import React, { useState, useContext } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteProvider, FavoriteContext } from './FavoriteContext';



export default function Card(props) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const { favorites, toggleFavorite } = useContext(FavoriteContext);

    const toggleShowMore = () => {
        setShowFullDescription(!showFullDescription);
    };

    const handleFavoriteToggle = () => {
        toggleFavorite(props.itemId);
    };

    return (
        <Grid item xs={12} md={3} className="card" sx={{ marginTop: 5 }} onClick={props.press}>
            <img src={props.images} className="card--images" alt={props.titles} />
            <p>{props.idthing}</p>
            <h1>{props.titles}</h1>
            <h2>Season: {props.seasons}</h2>
            <h1>{props.genres}</h1>
            
            {/* Conditional rendering of the description */}
            {showFullDescription ? (
                <h3>{props.descriptions}</h3>
            ) : (
                <h3>{props.descriptions ? props.descriptions.substring(0, 100) : props.descriptions}</h3>
            )}

            <Button variant='text' onClick={toggleShowMore}>
                {showFullDescription ? 'Show less' : 'Show more'}
            </Button>
           
            <Button variant='text' onClick={handleFavoriteToggle}>
                {favorites.includes(props.itemId) ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
            </Button>
        </Grid>
    );
}
