export default (state = [], action) => {
  switch (action.type) {

    case 'DELETE_FAVORITE':
      return state.filter(favorite => favorite.title !== action.title);

    case 'GET_FAVORITES':
      return action.favorites;

    default:
      return state;
  }
}

