import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getNowPlaying} from '../actions/movies';
import MovieSearch from '../containers/MovieSearch'
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'



class Welcome extends Component {
  
  
  componentDidMount = () => {
    
    this.props.getNowPlaying()
  }


render() {
  let counter =0
  let renderNowPlaying 

  if(this.props.movies.filmReducer.results) {
    console.log('inside nowPlayingCard', this.props.movies.filmReducer.results)
    renderNowPlaying = this.props.movies.filmReducer.results.map(function(search){ 
      while (counter < 5 ) {
        counter++
      return  <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + search.poster_path}/>
      
      }
      
  })
}

  

return (
<div>
<div className="welcome-text"><h3>Welcome to the <span className="logo-front">Film</span><span className="logo-back">Finder</span></h3></div><br/>

<div className = "welcome-search"><MovieSearch/></div>
<NowPlaying/>
<AllFavorites/>
{/* <div className="movieposters">  {renderNowPlaying}</div> */}
    
   
   
  
</div>
);
}
}

const mapStateToProps = state => {
  return {
    getNowPlaying: state.getNowPlaying,
    movies: state
  }
}

export default connect(mapStateToProps, {
  getNowPlaying
})(Welcome)

