import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import filmReducer from './reducers/filmReducer';
import favoritesReducer from './reducers/favoritesReducer';




const reducers = combineReducers ({
  filmReducer,
  favoritesReducer

});
const middleware = [thunk]; 

export default createStore (
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);