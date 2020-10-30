import { ThreeSixty } from '@material-ui/icons';
import React from 'react';
import {Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Registration from './components/Registration'
import Search from './components/Search/Search';
import UserProfile from './components/UserProfile';
import MyProposals from './components/MyProposals';
import MyStories from './components/MyStories';
import storyData from './data/stories';
import Login from './components/Login';
const authorId="authorId", storyline="storyLine", storyPreview="storyPreview", lastUpdate="lastUpdate";

 class App extends React.Component{
   
  constructor(props) {
    // initialize a set of story data 
    // userIds are unique
    // each story has a unique story name, author userId, storyLine, storyPreview, lastUpdate date
    super(props);
    this.state = {
      users: [
        {username: "user", password: "user"},
        {username: "user2", password: "user2"},
        {username: "admin", password: "admin"},
      ],
      currentUser: null,
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
            <Route exact path='/' render={() => (<Home appState={this.state} />)}/>
            <Route exact path='/register' render={() => (<Registration/>)} />
            <Route exact path='/profile/user' render={() => (<UserProfile userId={"TEMP"}/>)} />
            <Route exact path='/login' render={() => (<Login appState={this.state} />)}/>
            <Route exact path='/search' render={() => (<Search data={this.state.stories}/>)}/>
            <Route exact path='/profile/user/my-proposals' render={() => (<MyProposals userId={"TEMP"}/>)} />
            <Route exact path='/profile/user/my-stories' render={() => <MyStories userId={"TEMP"}/>} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
