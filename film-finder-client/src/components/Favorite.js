import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import {createFavorite} from '../actions/favorites'

let renderNowPlaying

class Favorite extends Component {
  
  

  handleClick = () => {
    const currentMovieData = {
      title: this.props.title,
      overview:this.props.overview
    } 

    this.props.createFavorite(currentMovieData)
  }


  render() {
    
     
    return (
      <div>
       <button onClick={this.handleClick}>Add this movie to your watchlist</button>
      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
     
      createFavorite: state.createFavorite,

    })
  }
  
  export default connect(mapStateToProps, {
    createFavorite,
  })(Favorite)