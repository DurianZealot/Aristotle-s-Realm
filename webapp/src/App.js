import React from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Registration from './components/Registration'
import Search from './components/Search/Search';
import UserProfile from './components/UserProfile'
 class App extends React.Component{

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Home />)}/>
            <Route exact path='/register' render={() => (<Registration/>)} />
            <Route exact path='/profile/user' render={() => (<UserProfile/>)} />
            <Route exact path='/search' render={() => (<Search/>)}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
