const initialState = []

export default (state = [], action) => {
  switch (action.type) {
    
    case 'GET_MOVIE_SUCCESS':
      if (action.movies.total_results ===0 ) {
        return initialState
      } else {
        return action.movies;
      }

    case 'GET_ACTOR_SUCCESS':
    if (action.actors.total_results ===0 ) {
      return initialState
    } else {
      return action.actors;
    }


    case 'GET_ACTOR_MOVIES_SUCCESS':
      return action.actormovies;

    case 'GET_NOW_PLAYING_SUCCESS':
      return action.nowplaying;

    default:
      return state;
  }
}

