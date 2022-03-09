import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Header} from './components/Header.js'
import {WatchList} from './components/WatchList.js'
import {Watchedmovies} from './components/Watchedmovies.js'
import {Search} from './components/Search.js'
import './App.css';
import './lib/font-awesome/css/all.min.css'
import {GlobalProvider} from './Context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
            <WatchList/>  
          </Route>
          
          <Route path="/assistidos">
            <Watchedmovies/>  
          </Route>

          <Route path="/procurar">
            <Search/>  
          </Route>
        </Switch>

      </Router>
    </GlobalProvider>
  );
}

export default App;
