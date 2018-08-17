const API_URL = 'http://localhost:3001/api'

//action creators

const setFavorites = favorites => {
  return {
    type: 'GET_FAVORITES',
    favorites
  }
}

export const deleteFavoriteUpdate = id => {
  console.log('inside deleteFavoriteUpdate', id)
  return {
    type: 'DELETE_FAVORITE',
    id
  }
}


//  -- Async Actions -- 

export const createFavorite = favorite => {
  console.log('insideCreateFavorite', favorite)
  return dispatch => {
    return fetch(`${API_URL}/favorites`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ favorite: favorite })
    })
      .then(response => response.json())
      .then(favorite => {
        dispatch(getFavorites())
      })
      .catch(error => console.log(error))
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

export const deleteFavorite = (id, history) => {
  console.log("inside deleteFavorite", id)
  return dispatch => {
    return fetch(`http://localhost:3001/api/favorites/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: id })
    })
      .then(id => {
        dispatch(deleteFavoriteUpdate(id))
        dispatch(getFavorites())
      })
      .catch(error => console.log(error))
  }
}

