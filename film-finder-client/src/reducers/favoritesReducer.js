let favoriteTitles = []

export default (state = [favoriteTitles=[]], action) => {
  switch(action.type) {
    
    
    case 'GET_FAVORITES':
    console.log('inside favs', action.favorites)
      return action.favorites;

    case 'FAV_TITLES':
    action.favorites.map(fav => state.favoriteTitles.push(fav.title))
    console.log('favoriteTitles', favoriteTitles)
      return action.favoriteTitles   

      case 'DELETE_FAVORITE':
      return state.filter(favorite => favorite.title !== action.title);  

    default:
      return state;
  }
}

