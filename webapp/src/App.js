import React from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Registration from './components/Registration'

 class App extends React.Component{

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Home />)}/>
            <Route exact path='/register' render={() => (<Registration/>)} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
