const API_URL='http://localhost:3001/api'


//action creators

const setFavorites = favorites => {
  return {
    type: 'GET_FAVORITES',
    favorites
  }
}



//  -- Async Actions -- 

export const createFavorite = favorite => {
  console.log('insideCreateFavorite', favorite)
  return dispatch => {
    return fetch (`${API_URL}/favorites`, {
    method: 'POST',
    headers: {
      'Content-type' : 'application/json',
    },
    body: JSON.stringify({favorite: favorite})
    })
    .then (response => response.json())
    .then(favorite => {
      dispatch(getFavorites())
      
    })
    .catch(error=>console.log(error))
  }
}

export const getFavorites = () => {
  return dispatch => {
    return fetch(`${API_URL}/favorites`)
      .then(response => response.json())
      .then(favorites => {
        dispatch(setFavorites(favorites))
      })
      
      .catch(error => console.log(error))
  }
}