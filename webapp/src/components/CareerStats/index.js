import React from "react";
import "./styles.css";

class CareerStats extends React.Component {
  render() {
    const {
        proposalAcceptNum,
        worksBegunNum,
        lastContributionDate,
    } = this.props

    return (
      <div className="user-profile__career-stats">
        <h2 className="career-stats-header text">Career Statistics:</h2>
        <div className="career-stats-item text">
          Number of Proposals Accepted: {proposalAcceptNum}
        </div>
        <div className="career-stats-item text">Number of works begun: {worksBegunNum}</div>
        <div className="career-stats-item text">
          Last Contributed On: {lastContributionDate}
        </div>
      </div>
    );
  }
}

export default CareerStats;
