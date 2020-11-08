import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

class ProposalBlock extends React.Component {
  render() {
    const {
      proposalId,
      proposalSourceId,
      proposalTitle,
      proposalAuthor,
      proposalChapter,
      proposalAccepted,
    } = this.props;

    return (
      <div className="proposals-to-story-block-list-item">
        {/* Requires server call here
                Currently HARDCODED */}
        <div className="proposals-to-story-block-list-item-icon"></div>
        {/* Require call to props/states here */}
        <p className="item text">
          <span>
            Title:{" "}
            <Link to={`/proposals/${proposalSourceId}/${proposalId}`}>
              <span>{proposalTitle}</span>
            </Link>
          </span>
          <span className="subitem">
            Proposal Status: {setProposalStatus(proposalAccepted)}
          </span>
        </p>
        <p className="item text">Source Author: {proposalAuthor} </p>
        <p className="item text">Proposed Chapter Number: {proposalChapter}</p>
      </div>
    );
  }
}

const setProposalStatus = (status) => {
  if (status === "Accepted") {
    return <span className="green">Accepted</span>;
  } else if (status === "Pending") {
    return <span className="yellow">Pending</span>;
  }
  return <span className="red">Rejected</span>;
};

export default ProposalBlock;
