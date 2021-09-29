import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1 className="header-title">Movie Cards Library</h1>
      </header>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path="" component={ NotFound } />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
