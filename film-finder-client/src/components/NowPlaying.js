import React from 'react';
import { Link } from 'react-router-dom';
 
const NowPlaying = () => {
  
 
  return (
    <div className="nav-left">
       <Link to={'/nowplaying' } className="link-style">Now Playing</Link>
    </div>
  );
};
 
export default NowPlaying;
 