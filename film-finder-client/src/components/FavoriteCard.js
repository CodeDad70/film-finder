import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import FavoriteDelete from './FavoriteDelete'



class FavoriteCard extends Component {
  

  render() {
    console.log(this.props.fav)
    return (
      <div key={this.props.fav.id} className = "MovieCard">
  
    <div className = "movie-card"  >
    
    <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.fav.poster_path} alt={this.props.fav.name} / >   
      <h3> {this.props.fav.title} </h3>
      <p> {this.props.fav.overview} </p>
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.fav.backdrop_path} alt={this.props.fav.name} / >  
      <FavoriteDelete fav={this.props.fav}/>
      </div>
    
      </div>
    )
  }
  
  }


export default FavoriteCard;
