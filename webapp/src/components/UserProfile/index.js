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
      user: {},
      userId: "",
      isLoggedIn: false,
    };
  }

  // If this component is able to load then the user must have logged in.
  // Otherwise, should redirect the user to the login/register view
  componentDidMount() {
    // When the component enters the DOM
    this.setState({
      userId: this.props.userId,
      user: getUserInfo(this.state.userId),
      isLoggedIn: true,
    });
  }

  render() {
    return (
      <div className="user-profile">
        <SideBar
          isLoggedIn={this.state.isLoggedIn}
          userId={this.state.userId}
          user={this.state.user}
        />
        <GeneralInfo
          name={this.state.user.name}
          iconPath={this.state.user.iconPath}
          age={this.state.user.age}
          genrePref={this.state.user.genrePref}
        />

        <SocialStats
          joinDate={this.state.user.joinDate}
          followerCount={this.state.user.followerCount}
          followingCount={this.state.user.followingCount}
          approvalRate={this.state.user.approvalRate}
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
          LastContributionDate={this.state.user.LastContributionDate}
        />
      </div>
    );
  }
}

export default UserProfile;
