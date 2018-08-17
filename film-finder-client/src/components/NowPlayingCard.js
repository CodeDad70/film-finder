import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieSearch from '../containers/MovieSearch'
import Favorite from './Favorite'

let renderNowPlaying

class NowPlayingCard extends Component {
  

  render() {
        return (
      <div key={this.props.search.id} className = "MovieCard">
  
  <div className = "movie-card"  >
  
    <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} / >  
    <h3> {this.props.search.title} </h3>
    <p> {this.props.search.overview} </p>
    <Favorite search={this.props.search} />
    </div>
  
    </div>
    )
    }
  }

  

  export default NowPlayingCard;