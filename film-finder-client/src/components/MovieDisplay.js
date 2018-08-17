import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard'
import ActorCard from './ActorCard'
import MovieSearch from '../containers/MovieSearch'
import { getFavorites } from '../actions/favorites'

let renderMovies
let noResult

class MovieDisplay extends Component {

  componentDidMount = () => {
    this.props.getFavorites()
  }

  render() {
    
    if(!this.props.movies ) {
      noResult = <h2 className="main-headline">Sorry, we could not find a match! </h2>
    }

    if (this.props.movies) {
      
      renderMovies = this.props.movies.map(function (search) {       
        if (search.title) {
          noResult = <h2 className="main-headline">Here are your movie search results: </h2>
          return <MovieCard key={search.id} search={search} />
        } else if (search.name) {
          noResult = <h2 className="main-headline">Here are your actor search results: </h2>
          return <div><ActorCard key={search.id} search={search} /></div>
        } 
      })
    }

    return (
      <div>

        <div className="main-search">
          <MovieSearch />
        </div>
        {noResult}
        {renderMovies}

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    movies: state.filmReducer.results,
    getFavorites: state.getFavorites
  })
}

export default connect(mapStateToProps, {
  getFavorites
})(MovieDisplay);
