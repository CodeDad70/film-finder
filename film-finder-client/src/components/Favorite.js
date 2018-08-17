import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createFavorite } from '../actions/favorites'
import { getFavorites } from '../actions/favorites'
import { deleteFavorite } from '../actions/favorites'
import heartIcon from '../images/heartIcon.png'

class Favorite extends Component {

  componentDidMounts = () => {
    this.props.getFavorites()
  }

  handleClick = () => {
    if (this.addFav) {
      console.log("addFav", this.addFav.id)
      const currentMovieData = {
        title: this.addFav.title,
        moviedb_id: this.addFav.id,
        overview: this.addFav.overview,
        backdrop_path: this.addFav.backdrop_path,
        poster_path: this.addFav.poster_path
      }

      this.props.createFavorite(currentMovieData)

    }
  }

  render() {

    let buttonRender
    let movieId = this.props.search.id
    let deleteId = 0

    this.props.favorites.map(function (fav) {
      console.log("fav check", fav.moviedb_id)
      if (fav.moviedb_id === movieId) {
        deleteId = fav.id
      }
    })

    deleteId >= 1 ? buttonRender = <img src={heartIcon} className='heart-icon' alt='heartIcon' /> :
      buttonRender = <button onClick={this.handleClick} value={this.addFav = this.props.search}> Add To  Watchlist </button>

    return (
      <div>
        {buttonRender}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    favorites: state.favoritesReducer,
    createFavorite: state.createFavorite,
    deleteFavorite: state.deleteFavorite,
    getFavorites: state.getFavorites
  })
}

export default connect(mapStateToProps, {
  getFavorites,
  createFavorite,
  deleteFavorite
})(Favorite);