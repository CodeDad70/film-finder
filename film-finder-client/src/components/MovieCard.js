import React, { Component } from 'react';
import { connect } from 'react-redux';
import Favorite from './Favorite';

class MovieCard extends Component {
  render() {
    return (
      <div key={this.props.search.id} className="movie-card"  >

        <div className='flex-body'>

          <div className="flex-column" >
            <img className="PosterImage" src={"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} />
          </div>

          <div className="flex-column">

            <div className="flex-row">
              <h2 className='movie-card-title'> {this.props.search.title} </h2>
            </div>

            <p> {this.props.search.overview} </p>
          </div>

          <div className="flex-row">
            <Favorite search={this.props.search} />
          </div>
        </div>
      </div>
    )
  }
}

export default MovieCard;
