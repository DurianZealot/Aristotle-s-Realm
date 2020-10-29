import React from 'react';
import SideBar from '../SideBar';
import "./my-proposal-styles.css";
import ProposalBlock from '../ProposalBlock';

class MyProposals extends React.Component {

    render() {
        const {user} = this.props
        
        return (
            <div className = "my-proposals">
                <SideBar isLoggedIn={true}>

                </SideBar>
                <div className ="my-proposals-body">
                    <h1 className="my-proposals-header-text text">
                            My Proposals
                    </h1>
                    <div className="my-proposals-list-container">  {/* Requires call to grab proposals from user */}
                        <ProposalBlock></ProposalBlock>
                        <ProposalBlock></ProposalBlock>
                        <ProposalBlock></ProposalBlock>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyProposals