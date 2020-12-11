import React from "react";
import SideBar from "../SideBar";
import "./my-proposal-styles.css";
import ProposalBlock from "../ProposalBlock";
import { getUserProposals } from "../../actions/user-profile";
import { uid } from 'react-uid';

class MyProposals extends React.Component {
  render() {
    const userId = this.props.appState.currId;

    const proposals = getUserProposals(userId);
    console.log(20)
    return (
      <div className="my-proposals">
        <SideBar
            appState={this.props.appState}
        />
        <div className="my-proposals-body">
          <h1 className="my-proposals-header-text text">My Proposals</h1>
          <div className="my-proposals-list-container">
            {/* For each proposal.... */}
            {proposals.map((proposal) => {
              return (
                <ProposalBlock
                  key={uid(proposal)}
                  proposalId={proposal.proposalId}
                  proposalSourceId={proposal.proposalSourceId}
                  proposalSourceTitle={proposal.proposalSourceTitle}
                  proposalSourceAuthor={proposal.proposalSourceAuthor}
                  proposalChapter={proposal.proposalChapter}
                  proposalAccepted={proposal.proposalAccepted}
                  proposalContent={proposal.proposalContent}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default MyProposals;
