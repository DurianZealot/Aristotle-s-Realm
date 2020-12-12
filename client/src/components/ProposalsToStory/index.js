import React from "react";
import SideBar from "../SideBar";
import ProposalToStoryBlock from "./ProposalToStoryBlock"
import { uid } from "react-uid";
import { getStoryProposals } from "../../actions/proposals-to-story";
import { getStory } from "../../actions/story-page";
import "./styles.css";

class ProposalsToStory extends React.Component {
  state = {
    story : null,
    proposals: null
  }

  componentWillMount() {
    this._asyncRequestStory = getStory(this.props.params.storyId).then(async(res) => {
      this._asyncRequestStory = null;
      console.log('Loading', res.data)
      this.setState({story : res.data})
      console.log(this.props.params.storyId)
      getStoryProposals(this.props.params.storyId).then(proposals => {this.setState({proposals : proposals})})
    })
  }
  componentWillUnmount() {
    if (this._asyncRequestStory) {
      this._asyncRequestStory.cancel();
    }
  }

  render() {
    if(this.state.proposals && this.state.story){
      return (
        <div className="proposals-to-story">
          <SideBar appState={this.props.appState} />
          <div className="proposals-to-story-body">
            <h1 className="proposals-to-story-header-text text">
              Proposals To {this.state.story.storyTitle}
            </h1>
            <div className="proposals-to-story-list-container">
              {/* For each proposal.... */}
              {this.state.proposals.map((proposal) => {
                return (
                  <ProposalToStoryBlock
                    key={uid(proposal)}
                    proposalId={proposal._id}
                    proposalSourceId={proposal.proposeToID}
                    proposalTitle={proposal.proposeToTitle}
                    proposalAuthor={proposal.proposeByUsername}
                    proposalChapter={proposal.proposeChapter}
                    proposalAccepted={proposal.status}
                    proposalContent={proposal.content}
                  />
                );
              })}
            </div>
          </div>
        </div>
      );
    }
   
    else{
      return <div>Loading</div>
    }
    // Note here that (story.storyId == proposals[..].proposalSourceId) should be true
    
  }
}
export default ProposalsToStory;
