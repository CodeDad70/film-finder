import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieSearch from '../containers/MovieSearch'
import FavoriteCard from './FavoriteCard';
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'
import {getFavorites} from '../actions/favorites'


class FavoritesDisplay extends Component {
  
  componentDidMount = () => {
    
    this.props.getFavorites()
  }



  render() {
    let renderFavorites

    console.log("fav display", this.props.favorites)
    
    
    if(this.props.favorites) {
      
      renderFavorites =  this.props.favorites.map(function(fav){ 
        
        return  <div><FavoriteCard  key={fav.id}  fav={fav} /></div>
    })
    }
    return (
      <div>
        
        <div className="main-search">
          <MovieSearch/>
      </div>

        <h2 className="main-headline">Your watchlist: </h2>
        {renderFavorites}

      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      favorites: state.favoritesReducer,
      getFavorites: state.getFavorites,

    })
  }
  
  export default connect(mapStateToProps, {
    getFavorites,
  })(FavoritesDisplay)

 