import React from "react";
import "./styles.css";

class SocialStats extends React.Component {
  render() {

    const {
        joinDate,
        followerCount,
        followingCount,
        approvalRate
    } = this.props

    return (
      <div className="social-stats__info-container blocks">
        <div className="social-stats__info-table">
          <div className="social-stats__info-item">
            {/* Currently HARDCORDED */}
            <div className="social-stats-item-title text">Joined:</div>
            <div className="social-stats-item-value text">{joinDate}</div>
          </div>
          <div className="social-stats__info-item">
            {/* Currently HARDCORDED */}
            <div className="social-stats-item-title text">Followers:</div>
            <div className="social-stats-item-value text">{followerCount}</div>
          </div>
          <div className="social-stats__info-item">
            {/* Currently HARDCORDED */}
            <div className="social-stats-item-title text">Followed:</div>
            <div className="social-stats-item-value text">{followingCount}</div>
          </div>
          <div className="social-stats__info-item">
            {/* Currently HARDCORDED */}
            <div className="social-stats-item-title text">Approval Rate:</div>
            <div className="social-stats-item-value text">{approvalRate}%</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SocialStats