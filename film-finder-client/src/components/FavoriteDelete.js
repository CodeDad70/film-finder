import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFavorites } from '../actions/favorites'
import { deleteFavorite } from '../actions/favorites'

class Favorite extends Component {

  componentDidMounts = () => {
    this.props.getFavorites()
  }

  handleClick = () => {
    this.props.deleteFavorite(this.removeFav)
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} value={this.removeFav = this.props.fav.id}> Remove from Watchlist </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    favorites: state.favoritesReducer,
    deleteFavorite: state.deleteFavorite
  })
}

export default connect(mapStateToProps, {
  getFavorites,
  deleteFavorite
})(Favorite);