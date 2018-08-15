import React, {Component} from 'react' ;
import {connect} from 'react-redux';



class MovieCard extends Component {
  
  handleClicker =(e)=> {
    e.preventDefault()
    console.log("clicked !")
  }

  render() {
    return (
      <div key={this.props.search.id} className = "MovieCard">
  
    <div className = "song-card" onClick={this.handleClicker} >
    {/* <div style={{ backgroundImage: "http://image.tmdb.org/t/p/w185//" + movie.backdrop_path }} > */}
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.search.poster_path} alt={this.props.search.name} / >  
      <h3> {this.props.search.title} </h3>
      <p> {this.props.search.overview} </p>
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.backdrop_path} alt={this.props.search.name} / >  
      </div>
    {/* </div>    */}
      </div>
    )
  }
  
  }


export default MovieCard;
