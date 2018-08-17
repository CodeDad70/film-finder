import React, { Component } from 'react';
import Favorite from './Favorite'

class NowPlayingCard extends Component {
  render() {
    return (
      <div className="movie-card" key={this.props.search.id} >

        <div className='flex-body'>

          <div className="flex-column" >
            <img className="PosterImage" src={"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} />
          </div>

          <div className="flex-column">

            <div className="flex-row">
              <h2 className="movie-card-title"> {this.props.search.title} </h2>
            </div>

            {this.props.search.overview}

          </div>
          <div className="flex-row"> <Favorite search={this.props.search} /> </div>
        </div>
      </div>
    )
  }
}

export default NowPlayingCard;