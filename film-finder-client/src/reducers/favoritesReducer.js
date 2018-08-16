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

    default:
      return state;
  }
}

