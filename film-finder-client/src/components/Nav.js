import React from 'react';
import { Link } from 'react-router-dom';
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'

const Nav = () => {
  return (
    <div>
      <div className="welcome-text"><Link to={'/'}><h3>Welcome to the <span className="logo-front">Film</span><span className="logo-back">Finder</span></h3></Link></div><br />
      <div className="nav"><NowPlaying /> <AllFavorites /> </div>
    </div>
  );
};

export default Nav;
