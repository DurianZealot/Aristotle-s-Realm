import React from "react";
import SimpleModal from '../../ProposalBlock/SimpleModal'
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
      proposalContent
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
            <SimpleModal viewFrom='original_author' status={proposalAccepted} title={proposalTitle} chapter={proposalChapter} accpeted ={proposalAccepted} content = {proposalContent}></SimpleModal>
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
