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
      
      <div className = "movie-card" onClick={this.handleClick} ref = {this.props.search.id}>

        <div className='flex-body'>

        <div className="flex-column">
          <img className="PosterImage" src = {"http://image.tmdb.org/t/p/w300//" + this.props.search.poster_path} alt='Sorry - Image Not Available'/>  
        </div>

        <div className="flex-column">

          <div className="flex-row">


        <h2>Film: {this.props.search.title} </h2>
        </div>
        <h3>Character:  {this.props.search.character} 
        </h3>
        
        <Favorite search={this.props.search} />
        
       </div> 
        
        </div>
        </div>
       
    )
  }
  
  }


export default ActorsMovieCard;
