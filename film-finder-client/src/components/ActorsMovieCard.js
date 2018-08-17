import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import Favorite from './Favorite';



class ActorsMovieCard extends Component {
  
  handleClicker =(e)=> {
    e.preventDefault()
    console.log("clicked !")
  }

  


  render() {
    return (
      <div key={this.props.search.id} id = {this.props.search.id} className = "MovieCard">
      <div className = "movie-card" onClick={this.handleClick} ref = {this.props.search.id}>
        
        <h2>Film: {this.props.search.title} </h2>
        <h3>Character:  {this.props.search.character} </h3>
        
        
        <img className="PosterImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.poster_path} alt='Sorry - Image Not Available'/>  
        <p> id = {this.props.search.id} </p>
        
        <Favorite search={this.props.search} />
        </div>
        </div>
    )
  }
  
  }


export default ActorsMovieCard;
