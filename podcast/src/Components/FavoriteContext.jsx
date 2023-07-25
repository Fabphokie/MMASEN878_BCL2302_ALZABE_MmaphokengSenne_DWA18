import React, { createContext } from 'react';

// Create the context
const FavoriteContext = createContext();

// Create the context provider
function FavoriteProvider({ children }){
  const [favorites, setFavorites] = React.useState([]);

  // Function to toggle favorite status
  const toggleFavorite = (itemId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(itemId)
        ? prevFavorites.filter((id) => id !== itemId)
        : [...prevFavorites, itemId]
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}

export { FavoriteContext, FavoriteProvider };
