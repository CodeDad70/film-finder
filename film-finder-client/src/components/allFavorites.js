import React from 'react';
import { Link } from 'react-router-dom';
 
const allFavorites = () => {
  
 
  return (
    <div>
       <Link to={'/watchlist'}>Your Watchlist</Link>
    </div>
  );
};
 
export default allFavorites;
 