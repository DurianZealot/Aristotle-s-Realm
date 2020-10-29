import React from "react";
import "./styles.css";



class ProposalBlock extends React.Component {
    
    render() {
         
        return (
            <div className="my-proposals-list-item">
                {/* Requires server call here
                Currently HARDCODED */}
                <div className="my-proposals-list-item-icon"></div>
                {/* Require call to props/states here */}
                <p className="item text">
                    <span>Source Title: source_story_title</span>
                    <span className="subitem">Proposal Status: <span className="green">Accepted</span></span>
                </p>
                <p className="item text">Source Author: source_author_name</p>
                <p className="item text">Proposed Chapter: 6</p>
            </div>                              
        )
    }
}

export default ProposalBlock