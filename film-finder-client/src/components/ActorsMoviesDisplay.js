import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import ActorsMovieCard from './ActorsMovieCard'
import MovieSearch from '../containers/MovieSearch'
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'

let renderActorsMovies

class ActorsMoviesDisplay extends Component {
  

  render() {
    
      if(this.props.actormovies.filmReducer.cast) {
        renderActorsMovies = this.props.actormovies.filmReducer.cast.map(function(search){ 
            console.log("Inside ActorsMoviesDisplay", search)
           
          return  <div><ActorsMovieCard  key={search.id}  search={search} /></div>
            
          })   
      }

    return (
      <div>
        <NowPlaying/>
        <AllFavorites/>
        <MovieSearch/>

        {renderActorsMovies}

      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      actormovies: state
    })
  }
  
  export default connect(mapStateToProps)(ActorsMoviesDisplay);