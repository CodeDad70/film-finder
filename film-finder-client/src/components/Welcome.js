import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNowPlaying } from '../actions/movies';
import MovieSearch from '../containers/MovieSearch'

class Welcome extends Component {
  render() {
    return (
      <div>
        <div className="welcome-search"><MovieSearch /></div>
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

