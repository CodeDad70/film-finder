import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import FavoriteDelete from './FavoriteDelete'



class FavoriteCard extends Component {
  

  render() {
    
    return (
     
    <div key={this.props.fav.id} className = "movie-card" >
    
    <div className='flex-body'>
      
    <div className="flex-column" >
      <img className="AlbumImage" src = {"http://image.tmdb.org/t/p/w185//" + this.props.fav.poster_path} alt={this.props.fav.name} / >  
    </div> 

    <div className="flex-column">

      <div className="flex-row">

      <h2 className="movie-card.title"> {this.props.fav.title} </h2>
      </div>
        
        {this.props.fav.overview}
        </div>
      
        <div className="flex-row"> 
      <FavoriteDelete fav={this.props.fav}/>
      </div>
      </div>
    
      </div>
    )
  }
  
  }


export default FavoriteCard;
