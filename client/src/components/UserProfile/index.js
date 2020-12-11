import React from "react";
import SideBar from "./../SideBar";
import GeneralInfo from "./../GeneralInfo";
import SocialStats from "./../SocialStats";
import CareerStats from "./../CareerStats";
import { getUserInfo } from "./../../actions/user-profile";
import "./styles.css";

// TODO: add a log out function somewhere that changes isLoggedIn to false

class UserProfile extends React.Component {
  constructor(props) {
    // When the component is created
    super(props);
    this.state = {
      user: null,
    };
  }

  componentWillMount() {
    this._asyncRequestUserinfo = getUserInfo(window.sessionStorage.getItem("currentUser")).then(async(userInfo) => {
      this._asyncRequestUserinfo = null;
      console.log('Loading', userInfo)
      this.setState({user: userInfo})
    }).catch(error => console.log('Fail to load user info'))
  }
  componentWillUnmount() {
    if (this._asyncRequestUserinfo) {
      this._asyncRequestUserinfo.cancel();
    }
  }


  render() {
    if(this.state.user){
      return (
        <div className="user-profile">
          <SideBar appState={this.props.appState} />
          <GeneralInfo
            firstName={this.state.user.firstName}
            lastName={this.state.user.lastName}
            // TODO: Define the iconPath!!!!
            iconPath={this.state.user.iconPath}
            age={this.state.user.age}
            genrePref={this.state.user.genrePref}
          />
          <div className="career-featured-works blocks">
            <h1 className="career-featured-works-header text">Featured Works:</h1>
            {/* Currently HARDCODED */}
            <div className="career-featured-works-item text">
              This user hasn't published any works yet...
            </div>
          </div>
          <CareerStats
            proposalAcceptNum={this.state.user.proposalAcceptNum}
            worksBegunNum={this.state.user.worksBegunNum}
            lastContributionDate={this.state.user.lastContributionDate}
          />
        </div>
      );
    }
    else{
      return <div>Loading</div>
    }
    
  }
}

export default UserProfile;
