import React, { useContext } from 'react';
import { FavoriteContext } from './FavoriteContext';
import MessageIcon from '@mui/icons-material/Message';

const MessageIconComponent= () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div>
      {/* Display the number of favorite items */}
      <MessageIcon color="primary" />
      <span>{favorites.length}</span>
    </div>
  );
};

export default MessageIconComponent;
