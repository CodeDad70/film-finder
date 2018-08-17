import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieSearch from '../containers/MovieSearch'
import FavoriteCard from './FavoriteCard';
import { getFavorites } from '../actions/favorites'

class FavoritesDisplay extends Component {

  componentDidMount = () => {
    this.props.getFavorites()
  }

  render() {
    let renderFavorites
    let noFavResult

    if(!this.props.favorites) {
      noFavResult = <h2 className="main-headline">You have not started a Watchlist yet.  </h2>
    }

    if (this.props.favorites) {
      noFavResult = <h2 className="main-headline">Your Watchlist: </h2>
      renderFavorites = this.props.favorites.map(function (fav) {
        return <div><FavoriteCard key={fav.id} fav={fav} /></div>
      })
    }
    return (
      <div>
        <div className="main-search">
          <MovieSearch />
        </div>
        {noFavResult}
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
