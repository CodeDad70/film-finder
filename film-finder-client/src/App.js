import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from './components/Welcome'
import MovieDisplay from './components/MovieDisplay'
import ActorsMoviesDisplay from './components/ActorsMoviesDisplay'
import NowPlaying from './components/NowPlaying';
import NowPlayingDisplay from './components/NowPlayingDisplay'
import './stylesheets/App.css';

class App extends React.Component {
  render() { 
    return (

   <Router>
  <div className="card-1">
    <h1> Welcome to the FilmFinder</h1>
    <NowPlaying/>
    
    
    <Route exact path="/" component={Welcome}/>
    <Route exact path="/nowplaying" component={NowPlayingDisplay}/>
    <Route exact path="/actors/movies" component={ActorsMoviesDisplay} />
    <Route exact path="/movies" component={MovieDisplay} />
    <Route exact path="/actor" component={MovieDisplay} />
  
  </div>
  </Router>
    )
  }
}


export default App;
