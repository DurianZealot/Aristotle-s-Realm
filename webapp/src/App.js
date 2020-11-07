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
import CreateStory from './components/MyStories/CreateStory';
import CreateProposal from './components/MyProposals/CreateProposal';

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
      currentUser: null, // currentUser should hold either a userId or null. NOTE THAT CURRENTLY IT IS IMPLEMENTED TO HOLD AN OBJECT WITH TWO VALUES (username, password) SHOULD BE CHANGED IN THE FUTURE
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
            <Route exact path='/register' render={() => (<Registration appState={this.state}/>)} />
            <Route exact path='/profile/user' render={() => (<UserProfile appState={this.state}/>)} />
            <Route exact path='/login' render={() => (<Login appState={this.state} />)}/>
            <Route exact path='/search' render={() => (<Search data={this.state.stories} userLogin={this.state.currentUser} appState={this.state}/>)}/>
            {/* Route to a page of the article, set route to the home page temporarily */}
            <Route exact path='/aritcle=:name' render={(props) => {const { name } = props.match.params; console.log(name); return (<Home />)}}></Route>
            <Route exact path='/profile/user/my-proposals' render={() => (<MyProposals appState={this.state}/>)} />
            <Route exact path='/profile/user/my-stories' render={() => <MyStories appState={this.state}/>} />
            <Route exact path='/profile/user/create-stories' render={() => <CreateStory appState={this.state}/>} />
            <Route exact path='/profile/user/create-proposal' render={() => <CreateProposal appState={this.state}></CreateProposal>} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
