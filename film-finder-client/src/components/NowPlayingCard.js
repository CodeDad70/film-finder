import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieSearch from '../containers/MovieSearch'

let renderNowPlaying

class NowPlayingCard extends Component {
  

  render() {
        return (
      <div key={this.props.search.id} className = "MovieCard">
  
  <div className = "song-card"  >
  
    <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} / >  
    <h3> {this.props.search.title} </h3>
    <p> {this.props.search.overview} </p>
    
    </div>
  
    </div>
    )
    }
  }

  

  export default NowPlayingCard;