const initialState = []

export default (state = [], action) => {
  switch (action.type) {
    case 'GET_MOVIE_SUCCESS':
      return action.movies;

    case 'GET_ACTOR_SUCCESS':
      return action.actors;


    case 'GET_ACTOR_MOVIES_SUCCESS':
      return action.actormovies;

    case 'GET_NOW_PLAYING_SUCCESS':
      return action.nowplaying;

    default:
      return state;
  }
}

