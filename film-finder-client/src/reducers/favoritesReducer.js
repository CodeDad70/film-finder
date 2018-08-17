let favoriteTitles = []

export default (state = [favoriteTitles=[]], action) => {
  switch(action.type) {
    
    case 'DELETE_FAVORITE':
    return state.filter(favorite => favorite.title !== action.title);
    

    case 'GET_FAVORITES':
    console.log('inside favs', action.favorites)
      return action.favorites;
    
      

    default:
      return state;
  }
}

