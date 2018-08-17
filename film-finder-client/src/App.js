import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome'
import MovieDisplay from './components/MovieDisplay'
import ActorsMoviesDisplay from './components/ActorsMoviesDisplay'
import NowPlayingDisplay from './components/NowPlayingDisplay'
import FavoritesDisplay from './components/FavoritesDisplay'
import Nav from './components/Nav';
import './stylesheets/App.css';

class App extends React.Component {
  render() { 
    return (
  <div className= "background">
  
   <Router>
  <div>
    <Nav/>
    <Route exact path="/" component={Welcome}/>
    <Route exact path="/nowplaying" component={NowPlayingDisplay}/>
    <Route exact path="/actors/movies" component={ActorsMoviesDisplay} />
    <Route exact path="/movies" component={MovieDisplay} />
    <Route exact path="/actor" component={MovieDisplay} />
    <Route exact path="/watchlist" component={FavoritesDisplay}/>
  </div>
  </Router>
  </div>
    )
  }
}

export default App;
