const initialState = []

export default (state = [], action) => {
  switch(action.type) {
    case 'CREATE_FAVORITE_SUCCESS':
    console.log("inside fav reducer", action.favorite)    
      return action.favorite;

    default:
      return state;
  }
}

