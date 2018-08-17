import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieSearch from '../containers/MovieSearch'
import NowPlayingCard from './NowPlayingCard';
import { getNowPlaying } from '../actions/movies'
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'

let renderNowPlaying

class NowPlayingDisplay extends Component {

  componentDidMount = () => {
    this.props.getNowPlaying()
  }

  render() {

    if (this.props.movies.filmReducer.results) {
      console.log('inside nowPlayingCard', this.props.movies.filmReducer.results)
      renderNowPlaying = this.props.movies.filmReducer.results.map(function (search) {
        return <div><NowPlayingCard key={search.id} search={search} /></div>
      })
    }
    return (
      <div>
        <div className="main-search">
          <MovieSearch />
        </div>

        <h2 className="main-headline">Now Playing: </h2>
        {renderNowPlaying}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    movies: state,
    getNowPlaying: state.getNowPlaying,
  })
}

export default connect(mapStateToProps, {
  getNowPlaying,
})(NowPlayingDisplay)