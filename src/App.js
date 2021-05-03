import './App.css';
import NavBarr from "./Components/NavBarr"
import React from 'react'
import {Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import movieDetail from './pages/movieDetail'
import MovieList from './pages/MovieList'

function App() {
  return (
    <div className="App">
     <NavBarr/>
     <Switch>
       <Route path="/" component={HomePage}/>
       <Route path="/movies" component={MovieList}/>
       <Route path ="/movies/:id" component={movieDetail}/>
     </Switch>
    </div>
  );
}

export default App;
