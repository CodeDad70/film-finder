import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import Favorite from './Favorite';



class FavoriteCard extends Component {
  

  render() {
    return (
      <div key={this.props.fav.id} className = "MovieCard">
  
    <div className = "song-card"  >
    
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.fav.poster_path} alt={this.props.fav.name} / >  
      <h3> {this.props.fav.title} </h3>
      <p> {this.props.fav.overview} </p>
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.fav.backdrop_path} alt={this.props.fav.name} / >  
      <Favorite title={this.fav.search.title} overview={this.props.fav.overview}  />
      </div>
    
      </div>
    )
  }
  
  }


export default FavoriteCard;
