import React from "react";
import SideBar from "../SideBar";
import "./my-proposal-styles.css";
import ProposalBlock from "../ProposalBlock";
import { getUserProposals } from "../../actions/user-profile";
import { uid } from 'react-uid';

class MyProposals extends React.Component {

  state = {
    proposals: null
  }

  componentWillMount() {
    this._asyncRequestProposals = getUserProposals(window.sessionStorage.getItem('currentUser')).then(async(res) => {
      this._asyncRequestProposals = null;
      this.setState({proposals : res.data})
    })
  }


  componentWillUnmount() {
    if (this._asyncRequestProposals) {
      this._asyncRequestProposals.cancel();
    }
  }

  render() {
    if(this.state.proposals){
      console.log('This is the proposals we have', this.state.proposals)
      return (
        <div className="my-proposals">
          <SideBar
              appState={this.props.appState}
          />
          <div className="my-proposals-body">
            <h1 className="my-proposals-header-text text">My Proposals</h1>
            <div className="my-proposals-list-container">
              {/* For each proposal.... */}
              {this.state.proposals.map((proposal) => {
                return (
                  <ProposalBlock
                    key={uid(proposal)}
                    proposalId={proposal._id}
                    proposalSourceId={proposal.proposeToID}
                    proposalSourceTitle={proposal.proposeToTitle}
                    proposalSourceAuthor={proposal.proposeByUsername}
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
    
  }
}

export default MyProposals;
