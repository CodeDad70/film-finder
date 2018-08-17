import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActorMovies } from '../actions/movies'
import { Redirect } from 'react-router'
import NowPlaying from './NowPlaying';
import AllFavorites from './AllFavorites'

class ActorCard extends Component {

  constructor() {
    super()
    this.state = {
      fireRedirectActorsMovies: false,
    }
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ fireRedirectActorsMovies: true })
    const searchValue = this.props.search.id;
    const data = {
      searchValue
    }
    console.log(data)
    this.props.getActorMovies(data)
  }

  render() {
    const { fireRedirectActorsMovies } = this.state
    let knownFor = this.props.search.known_for.map(movie => <p>{movie.title}</p>)

    return (
     
        <div className="movie-card" onClick={this.handleClick} ref={this.props.search.id}>
        
        <div className='flex-body'>

        <div className="flex-column" >
        <img className="actor-image" src={"http://image.tmdb.org/t/p/w300//" + this.props.search.profile_path} alt='Sorry Not Available' />
         
        </div>

        <div className="flex-column">
        <div className="flex-row">
          <h3> {this.props.search.name} </h3>
          </div>
          <h3>Best known for: </h3>
          {knownFor}<br />

          <div/>
        </div>
        {fireRedirectActorsMovies && <Redirect to={`/actors/movies`} />}
      </div>
      </div>
      


    )
  }

}
const mapStateToProps = state => {
  return {

    getActorMovies: state.getActorMovies
  }
}

export default connect(mapStateToProps, {
  getActorMovies,
})(ActorCard)