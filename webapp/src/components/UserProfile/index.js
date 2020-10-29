import React from "react";
import SideBar from "./../SideBar";
import GeneralInfo from "./../GeneralInfo";
import SocialStats from "./../SocialStats";
import CareerStats from "./../CareerStats";
import "./styles.css";

class UserProfile extends React.Component {
  state = {
    user: {
      name: "Ipsum Lorem",
      iconPath: "icon/profile-icon-placeholder.png",
      age: "20",
      genrePref: "Sci-Fi",

      joinDate: "December 21",
      followerCount: "6666",
      followingCount: "420",
      approvalRate: "69",

      proposalAcceptNum: "9",
      worksBegunNum: "11",
      LastContributionDate: "Oct 31, 2020"
    },
    isLoggedIn: false,
  };

  // If this component is able to load then the user must have logged in
  componentDidMount() {
    // When the component enters the DOM
    this.setState({
      isLoggedIn: true,
    });
  }

  render() {
    return (
      <div className="user-profile">
        <SideBar isLoggedIn={this.state.isLoggedIn} />
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
