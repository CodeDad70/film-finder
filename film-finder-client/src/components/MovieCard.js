import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import Favorite from './Favorite';



class MovieCard extends Component {
  

  render() {
    return (
      <div key={this.props.search.id} className = "MovieCard">
  
    <div className = "song-card"  >
    
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} / >  
      <h3> {this.props.search.title} </h3>
      <p> {this.props.search.overview} </p>
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.backdrop_path} alt={this.props.search.name} / >  
      <Favorite title={this.props.search.title} overview={this.props.search.overview}  />
      </div>
    
      </div>
    )
  }
  
  }


export default MovieCard;
