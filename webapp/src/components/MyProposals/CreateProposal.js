import React, { Component } from 'react';
import story from "./existingStory"
import {CssTextField, txtFieldStyle} from "../CssTextField/CssTextField";
import { Redirect } from 'react-router-dom';
import {Button} from '@material-ui/core'
class CreateProposal extends Component {
    constructor(props){
        super(props);
        const {appState} = this.props;
        this.state = {appState : appState, storyToChange : story, storyProposal: ""}
        // window.sessionStorage.setItem('currentUser', this.state.appState.currentUser.username)
        }



    __updateInput = (event) => {
        const targetToChange = event.target.id
        const value = event.target.value
        this.setState({[targetToChange]: value}, () => {console.log(this.state[targetToChange])})
    }

    actionToProposal = (action) => {
        

        var answer;
        if (action == "submit"){
            // if we are going to submit the propsal
            // need to check if the proposal is non-empty
            if(this.state.storyProposal.trim() === ""){
                alert("You cannot make an empty propsal")
            }
            else{
                // the proposal is non-empty
                answer = window.confirm("Are you sure to submit your proposal?")
                if (answer){
                    alert("Your proposal is submitted!")
                    window.location.href = "/profile/user"
                }
            }
        }
        else{
            answer = window.confirm("Are you sure to discard your proposal?")
            if (answer){
                alert("Your proposal is discarded!")
                window.location.href = "/profile/user"
            }
            
        }
        
    }

    render() {
        return (
            <div>
                <h1 style={{ fontFamily: "Noteworthy", textAlign: "center" }}>
                Proposal for Story: {this.state.storyToChange.storyName} -- {this.state.storyToChange.originalAuthor}
                </h1>
                <form className="story-proposal-detail">
                <span style={{ fontFamily: "Noteworthy", marginLeft:"25%", fontSize:"x-large" }}>
                Previous Story Content
                </span>
                <CssTextField id="existingStoryContent" style={txtFieldStyle} multiline rows={5} rowsMax={10} variant="standard" defaultValue={this.state.storyToChange.storyContent} disabled={true}></CssTextField>
                <span style={{ fontFamily: "Noteworthy", marginLeft:"25%", fontSize:"x-large", marginTop: "25%"}}>
                Your Proposal
                </span>
                <CssTextField id="storyProposal" style={txtFieldStyle} multiline rows={10} rowsMax={20} variant="outlined" placeholder="Please add your proposal to the existing story, starting from the end of the story content" onChange={this.__updateInput}/>
                </form>
               <span
                style={{
                    marginLeft: "25%",
                    marginTop: "2%",
                    display: "flex",
                    width: "50%",
                    justifyContent: "space-evenly",
                }}
                >
                <Button
                    variant="contained"
                    color="primary"
                    disableElevation
                    onClick={() => this.actionToProposal("submit")}
                >
                Submit
                </Button>
                <Button
                    variant="contained"
                    disableElevation
                    onClick={() => this.actionToProposal("discard")}
                >
                    Discard
                </Button>
                </span>


            </div>
        );
    }
}

export default CreateProposal;