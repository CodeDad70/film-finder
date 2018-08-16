import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieSearch from '../containers/MovieSearch'
import FavoriteCard from './FavoriteCard';
import {getFavorites} from '../actions/movies'



class FavoritesDisplay extends Component {
  
  componentDidMount = () => {
    
    this.props.getNowPlaying()
  }


  render() {
    let renderFavorites
    
      if(this.props.favorites) {
        console.log('inside FavoritesDisplay', this.props.favorites)
        renderFavorites = this.props.favorites.map(function(fav){ 
          
          return  <div><FavoriteCard  key={fav.id}  fav={fav} /></div>
      })
      }
    return (
      <div>
      
        <MovieSearch/>
        <h1>Here is your wathlist: </h1>
        {renderFavorites}

      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      favorites: state,
      getFavorites: state.getFavorites,

    })
  }
  
  export default connect(mapStateToProps, {
    getFavorites,
  })(FavoritesDisplay)