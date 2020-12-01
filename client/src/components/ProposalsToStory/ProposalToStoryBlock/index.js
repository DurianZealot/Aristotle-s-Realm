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
        <h3>Title: <SimpleModal viewFrom = 'original_author' status={proposalAccepted} title={proposalTitle} chapter={proposalChapter} accpeted ={proposalAccepted} content = {proposalContent}></SimpleModal></h3>
          <span className="subitem">
            Proposal Status: {setProposalStatus(proposalAccepted)}
          </span>
        </p>
        <h4 className="item text">Source Author: {proposalAuthor} </h4>
        <h4 className="item text">Proposed Chapter Number: {proposalChapter}</h4>
        
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
