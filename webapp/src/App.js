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
import StoryPage from './components/StoryPage';
import CreateProposal from './components/MyProposals/CreateProposal';
import ProposalsToStory from './components/ProposalsToStory';

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
      currID: null, // FOR NOW currID WILL BE THE VARIABLE USED TO HOLD A USERID.
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
            <Route exact path='/profile/user=:userId' render={(props) => (<UserProfile params={props.match.params} appState={this.state}/>)} />
            <Route exact path='/login' render={() => (<Login appState={this.state} />)}/>
            <Route exact path='/search' render={() => (<Search data={this.state.stories} userLogin={this.state.currentUser} appState={this.state}/>)}/>
            {/* Route to a page of the article; url also separated based on chapter number*/}
            <Route exact path='/article/:storyId/:chapterNum' render={(props) => (<StoryPage params={props.match.params} appState={this.state}/>)}/>
            <Route exact path='/proposals/:storyId' render={(props) => (<ProposalsToStory params={props.match.params} appState={this.state}/>)}/>
            {/* YOLANDA CHANGE THE ROUTE BELOW FOR THE PROPOSAL PAGE*/}
            <Route exact path='/proposasl/:storyId/:proposalId' render={(props) => (<Home></Home>)} /> 
            <Route exact path='/profile/user=:userId/my-proposals' render={(props) => (<MyProposals params={props.match.params} appState={this.state}/>)} />
            <Route exact path='/profile/user=:userId/my-stories' render={(props) => <MyStories params={props.match.params} appState={this.state}/>} />
            <Route exact path='/profile/user=:userId/create-stories' render={(props) => <CreateStory params={props.match.params} appState={this.state}/>} />
            <Route exact path='/profile/user=:userId/create-proposal' render={(props) => <CreateProposal params={props.match.params} appState={this.state}></CreateProposal>} />
            {/* YOLANDA THE ROUTE BELOW IS FOR USER PROFILE SETTINGS */}
            <Route exact path='/profile-settings' render={() => (<Home></Home>)}/>
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
