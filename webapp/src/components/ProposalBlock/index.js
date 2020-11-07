import React from "react";
import "./styles.css";

class ProposalBlock extends React.Component {
  render() {
    const {
      proposalSourceTitle,
      proposalSourceAuthor,
      proposalChapter,
      proposalAccepted,
      proposalContent,
    } = this.props;

    return (
      <div className="my-proposals-list-item">
        {/* Requires server call here
                Currently HARDCODED */}
        <div className="my-proposals-list-item-icon"></div>
        {/* Require call to props/states here */}
        <p className="item text">
          <span>Source Title: {proposalSourceTitle} </span>
          <span className="subitem">
            Proposal Status: {setProposalStatus(proposalAccepted)}
          </span>
        </p>
        <p className="item text">Source Author: {proposalSourceAuthor} </p>
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
