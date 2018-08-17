import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard'
import ActorCard from './ActorCard'
import MovieSearch from '../containers/MovieSearch'
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'
import { getFavorites } from '../actions/favorites'

let renderMovies

class MovieDisplay extends Component {

  componentDidMount = () => {
    this.props.getFavorites()
  }

  render() {
    if (this.props.movies) {
      renderMovies = this.props.movies.map(function (search) {
        if (search.title) {
          return <MovieCard key={search.id} search={search} />
        } else if (search.name) {
          return <div><ActorCard key={search.id} search={search} /></div>
        }
      })
    }

    return (
      <div>

        <div className="main-search">
          <MovieSearch />
        </div>

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
