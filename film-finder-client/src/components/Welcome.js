import React, { Component } from 'react';
import {connect} from 'react-redux';

import {getNowPlaying} from '../actions/movies';
import MovieSearch from '../containers/MovieSearch'



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
  
  {renderNowPlaying}
    
   <MovieSearch/>
  
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

