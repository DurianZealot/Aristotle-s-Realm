import React from "react";
import SideBar from "../SideBar";
import ProposalToStoryBlock from "./ProposalToStoryBlock"
import { uid } from "react-uid";
import { getStoryProposals } from "../../actions/proposals-to-story";
import { getStory } from "../../actions/story-page";
import "./styles.css";

class ProposalsToStory extends React.Component {
  render() {
    const params = this.props.params;
    const story = getStory(params.storyId);
    const proposals = getStoryProposals(params.storyId);
    console.log(proposals);

    // Note here that (story.storyId == proposals[..].proposalSourceId) should be true

    return (
      <div className="proposals-to-story">
        <SideBar appState={this.props.appState} />
        <div className="proposals-to-story-body">
          <h1 className="proposals-to-story-header-text text">
            Proposals To {story.storyTitle}
          </h1>
          <div className="proposals-to-story-list-container">
            {/* For each proposal.... */}
            {proposals.map((proposal) => {
              return (
                <ProposalToStoryBlock
                  key={uid(proposal)}
                  proposalId={proposal.proposalId}
                  proposalSourceId={proposal.proposalSourceId}
                  proposalTitle={proposal.proposalTitle}
                  proposalAuthor={proposal.proposalAuthor}
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
export default ProposalsToStory;
