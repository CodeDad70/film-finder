import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import {createFavorite} from '../actions/favorites'
import {getFavorites} from '../actions/favorites'




class Favorite extends Component {
  
  componentDidMounts = () => {
    this.props.favorites.map(function(fav){
      getFavorites()
   })
  }
  

  handleClick = () => {
    console.log("click", this.addFav)
    const currentMovieData = {
      title: this.addFav.title,
      overview:this.addFav.overview
    } 
    
    this.props.createFavorite(currentMovieData)
    this.props.getFavorites()
  }


  render() {
    
    
      let removeFav
      let addFav
      let buttonSelect
      let favTitles = []
      
     console.log('inside fav render', this.props.favorites) 
    this.props.favorites.map (fav  =>favTitles.push(fav.title))
  
    
    let match = favTitles.filter(fav=> fav === this.props.search.title)
    console.log(match)
    
    match.length >= 1 ? buttonSelect = <button onClick={this.handleClick} ref={this.removeFav}> Remove from Watchlist </button> : buttonSelect = <button onClick={this.handleClick} value={this.addFav = this.props.search}> Add To  Watchlist </button>

    
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

    })
  }
  
  export default connect(mapStateToProps, {
    getFavorites,
    createFavorite
  })(Favorite);