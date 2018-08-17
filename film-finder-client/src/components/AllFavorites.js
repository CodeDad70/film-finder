import React from 'react';
import { Link } from 'react-router-dom';
 
const AllFavorites = () => {
  
 
  return (
    <div className ="nav-right">
       <Link to={'/watchlist'} className="link-style">Your WatchList</Link>
    </div>
  );
};
 
export default AllFavorites;
 