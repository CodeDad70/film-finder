import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import Favorite from './Favorite';



class MovieCard extends Component {
  

  render() {
    return (
      <div key={this.props.search.id} className = "MovieCard">
  
    <div className = "movie-card"  >
    
      <img  src = {"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} / >  
      <h3> {this.props.search.title} </h3>
      <p> {this.props.search.overview} </p>
      <img src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.backdrop_path} alt={this.props.search.name} / >  
      <Favorite search={this.props.search} />
      </div>
    
      </div>
    )
  }
  
  }


export default MovieCard;
