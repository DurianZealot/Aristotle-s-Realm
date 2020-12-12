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
import EditProfile from './components/EditProfile';
import Admin from './components/admin/Admin'
import AdminStories from './components/admin/AdminStories'
import Reports from './components/admin/Reports'

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
      admins: [
        {username: "admin", password: "admin"}
      ],
      /* CurrentUser is an object holding two keys and values (username:, password:), 
        note that this object is different from the key of 
        same name 'currentUser' in session storage 
      */
      currentUser: null, 
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
            <Route exact path='/admin/reports/' render={() => (<Reports appState={this.state} />)}/>
            <Route exact path='/admin/stories/' render={() => (<AdminStories appState={this.state} />)}/>
            <Route exact path='/admin/users/' render={() => (<Admin appState={this.state} />)}/>
            <Route exact path='/register' render={() => (<Registration appState={this.state}/>)} />
            <Route exact path='/profile-settings' render={() => (<EditProfile appState={this.state}/>)} />
            <Route exact path='/profile/user=:userId' render={(props) => (<UserProfile params={props.match.params} appState={this.state}/>)} />
            <Route exact path='/login' render={() => (<Login appState={this.state} />)}/>
            <Route exact path='/search' render={() => (<Search appState={this.state}/>)}/>
            {/* Route to a page of the article; url also separated based on chapter number*/}
            <Route exact path='/article/:storyId/:chapterNum' render={(props) => (<StoryPage params={props.match.params} appState={this.state}/>)}/>
            <Route exact path='/proposals/getAll/:storyId' render={(props) => (<ProposalsToStory params={props.match.params} appState={this.state}/>)}/>
            {/* <Route exact path='/proposasl/:storyId/:proposalId' render={(props) => (<Home></Home>)} />  */}
            <Route exact path='/profile/user=:userId/my-proposals' render={(props) => (<MyProposals params={props.match.params} appState={this.state}/>)} />
            <Route exact path='/profile/user=:userId/my-stories' render={(props) => <MyStories params={props.match.params} appState={this.state}/>} />
            <Route exact path='/profile/user=:userId/create-stories' render={(props) => <CreateStory params={props.match.params} appState={this.state}/>} />
            <Route exact path='/profile/user=:userId/create-proposal' render={(props) => <CreateProposal params={props.match.params} appState={this.state}></CreateProposal>} />
          </Switch>
        </BrowserRouter>
      </div>

    );
  }    
}

export default App;
