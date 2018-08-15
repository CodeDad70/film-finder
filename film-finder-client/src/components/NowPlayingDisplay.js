import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieSearch from '../containers/MovieSearch'
import NowPlayingCard from './NowPlayingCard';
import {getNowPlaying} from '../actions/movies'

let renderNowPlaying

class NowPlayingDisplay extends Component {
  
  componentDidMount = () => {
    
    this.props.getNowPlaying()
  }


  render() {
    
      if(this.props.movies.filmReducer.results) {
        console.log('inside nowPlayingCard', this.props.movies.filmReducer.results)
        renderNowPlaying = this.props.movies.filmReducer.results.map(function(search){ 
          
          return  <div><NowPlayingCard  key={search.id}  search={search} /></div>
      })
      }
    return (
      <div>
      <h1>Here are your movies: </h1>
        <MovieSearch/>
      
        {renderNowPlaying}

      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      movies: state,
      getNowPlaying: state.getNowPlaying,

    })
  }
  
  export default connect(mapStateToProps, {
    getNowPlaying,
  })(NowPlayingDisplay)