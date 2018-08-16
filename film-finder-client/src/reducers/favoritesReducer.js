

export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_FAVORITE_SUCCESS':
    console.log("inside fav reducer", action.favorite)    
      return action.favorite;
    
    case 'GET_FAVORITES':
    console.log('inside favs', action.favorites)
     
      return action.favorites;

    default:
      return state;
  }
}

