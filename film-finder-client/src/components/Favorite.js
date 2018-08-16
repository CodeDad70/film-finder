import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import {createFavorite} from '../actions/favorites'
import {getFavorites} from '../actions/favorites'
import {deleteFavorite} from '../actions/favorites'



class Favorite extends Component {
  
  componentDidMounts = () => {
    this.props.favorites.map(function(fav){
      getFavorites()
   })
  }
  

  handleClick = () => {
    console.log("click", this.addFav, this.removeFav)
    

    if (this.addFav) {

      const currentMovieData = {
        title: this.addFav.title,
        id: this.addFav.id,
        overview:this.addFav.overview
      }
    
    this.props.createFavorite(currentMovieData)
    

    } else {
      
      let removeId
      this.props.favorites.map(function(fav) {
        console.log('inside map', this.removeFav.title, fav.title)
        if (this.removeFav.title === fav.title) {
          
          this.props.deleteFavorite(fav.id)
          
        }
      }.bind(this))
        
      
    }
  


}





  render() {
    
    
      
      
      let buttonSelect
      let favTitles = []
      
     
    this.props.favorites.map (fav  =>favTitles.push(fav.title))
  
    
    let match = favTitles.filter(fav=> fav === this.props.search.title)
    console.log(match)
    
    match.length >= 1 ? buttonSelect = <button onClick={this.handleClick}  value={this.removeFav= this.props.search}> Remove from Watchlist </button> : buttonSelect = <button onClick={this.handleClick}  value={this.addFav = this.props.search}> Add To  Watchlist </button>

    
    //  console.log(buttonSelect)
    return (
      <div>
       {buttonSelect}
      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      favorites: state.favoritesReducer,
      createFavorite: state.createFavorite,
      deleteFavorite: state.deleteFavorite
    })
  }
  
  export default connect(mapStateToProps, {
    getFavorites,
    createFavorite,
    deleteFavorite
  })(Favorite);