const REACT_APP_API_KEY= '507b27c76d1cd9905d36d167744d3eca'

//action creators

const setMovie = movies => {
  console.log("inside setMovie", movies)
  return {
    type: 'GET_MOVIE_SUCCESS',
    movies
  }
}

export const resetSearchForm = () => {
  return {
    type: 'RESET_SEARCH_FORM'
  }
}

const setActor = actors => {
  console.log("inside setActor", actors)
  return {
    type: 'GET_ACTOR_SUCCESS',
    actors
  }
}


const setActorMovies = actormovies => {
  console.log("inside setActor", actormovies)
  return {
    type: 'GET_ACTOR_MOVIES_SUCCESS',
    actormovies
  }
}


const setNowPlaying = nowplaying => {
  console.log("inside setNowPlaying")
  return {
    type: 'GET_NOW_PLAYING_SUCCESS',
    nowplaying
  }
}



//  -- Async Actions -- 
export const getMovie =  (movie) => {
  console.log("inside getMovie")
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_KEY}&language=en-US&query=${movie.searchValue}&page=1&include_adult=false`)
    .then(response => response.json())
    
    .then(movies => {
      dispatch(setMovie(movies))
      
    })  
      .catch(error => console.log(error)); 
    
  }
}

export const getActor =  (actors) => {
    console.log('inside getActor',  actors.searchValue)
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/search/person?api_key=${REACT_APP_API_KEY}&language=en-US&query=${actors.searchValue}&page=1&include_adult=false`)
    
    .then(response => response.json())
    .then(actors => dispatch(setActor(actors)))
    .catch(error => console.log(error));  
    
  }
}


export const getActorMovies =  (actor) => {
  console.log('inside getActorMovies',  actor.searchValue)
return dispatch => {
  return fetch(`https://api.themoviedb.org/3/person/${actor.searchValue}/movie_credits?api_key=${REACT_APP_API_KEY}`)
  
  .then(response => response.json())
  .then(actormovies => dispatch(setActorMovies(actormovies)))
  .catch(error => console.log(error));  
  
}
}



export const getNowPlaying =  () => {
  return dispatch => {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1&language=en-US&api_key=${REACT_APP_API_KEY}`)
    
    .then(response => response.json())
    .then(nowplaying => dispatch(setNowPlaying(nowplaying)))
    .catch(error => console.log(error));  
    
  }
}






