import React, {Component} from 'react' ;
import {connect} from 'react-redux';
import MovieCard from './MovieCard'
import ActorCard from './ActorCard'
import MovieSearch from '../containers/MovieSearch'

let renderMovies

class MovieDisplay extends Component {
  

  render() {
    
      if(this.props.movies.filmReducer.results) {
        renderMovies = this.props.movies.filmReducer.results.map(function(search){ 
            console.log("Inside MovieDisplay", search)
            if(search.title) {
          return <MovieCard key={search.id} search={search} />
            } else if (search.name) {
              return <div><ActorCard  key={search.id}  search={search} /></div>
            }
          })   
      }

    return (
      <div>
      <h1>Here are your movies: </h1>
        <MovieSearch/>
      
        {renderMovies}

      </div>
    )
    }
  }

  

  const mapStateToProps = (state) => {
    return ({
      movies: state
    })
  }
  
  export default connect(mapStateToProps)(MovieDisplay);