import { ThreeSixty } from '@material-ui/icons';
import React from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Registration from './components/Registration'
import Search from './components/Search/Search';
import UserProfile from './components/UserProfile'
import storyData from './data/stories';

const authorId="authorId", storyline="storyLine", storyPreview="storyPreview", lastUpdate="lastUpdate";

 class App extends React.Component{
  
  
   
  constructor(props) {
    // initialize a set of story data 
    // userIds are unique
    // each story has a unique story name, author userId, storyLine, storyPreview, lastUpdate date
    super(props);
    this.state = {
      userIds : ["LUsCH", "piPHe", "Ioust", "mairT"],  
      stories : storyData
      }
    }

  

  render() {
    console.log(this.state)
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' render={() => (<Home />)}/>
            <Route exact path='/register' render={() => (<Registration/>)} />
            <Route exact path='/profile/user' render={() => (<UserProfile/>)} />
            <Route exact path='/search' render={() => (<Search data={this.state.stories}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
