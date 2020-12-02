import { Button, TextField, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import "./styles.css";
import TagInput from "../TagInput/TagInput";
import {CssTextField, txtFieldStyle} from "../CssTextField/CssTextField";
import SideBar from "../SideBar";
function confirmation(state, action) {
  var answer;
  if (action === "create") {
    // check if required states are non empty
    // story name , story content
    if ((state.storyName.trim() === "") || (state.storyContent.trim() === "")) {
      alert("The name of your story and story are required!");
      return;
    } else {
      answer = window.confirm("Are you sure to create your story?");
      if (answer) {
        delayRedirect("create");
      }
      return;
    }
  } else {
    answer = window.confirm("Are you sure to discard your story draft?");
    if (answer) {
      delayRedirect("discard");
    }
    return;
  }
}

function delayRedirect(action) {
  // Clear out what is previously in the page
  document.body.innerHTML = "";
  if (action === "create") {
    // Create a paragraph to tell the user that the creation is successful
    var success = document.createElement("p");
    success.innerText = "You successfully create a new story, Congrats!";
    success.style.fontSize = "xx-large";
    success.style.top = "50%";
    success.style.left = "50%";
    success.style.position = "relative";
    success.style.transform = "translate(-25%, 600%)";
    document.body.appendChild(success);
  }

  // Create a new container to hold the redirect information for this page
  var redirectDiv = document.createElement("div");
  // Append this div into the page body
  document.body.appendChild(redirectDiv);
  // Put this div into the center of the page
  redirectDiv.style.fontSize = "x-large";
  redirectDiv.style.top = "50%";
  redirectDiv.style.left = "50%";
  redirectDiv.style.position = "absolute";
  // adjust the position based on the size of the div itself
  redirectDiv.style.transform = "translate(-50%, -50%)";
  // Create a span for the redirect message
  var redirectMsg = document.createElement("span");
  redirectMsg.innerHTML =
    "<span id='redirect-msg'>You will be directed back to your profile after <span id='countDownSecond'>5</span> seconds ...</span>";
  redirectDiv.appendChild(redirectMsg);
  // Create a span for direct redirection
  var redirect = document.createElement("span");

  // get current user id from session storage
  const userId = window.sessionStorage.getItem('currentUser')
  redirect.innerHTML = "<a href = '/profile/user=" + userId + "'" +  ">Or Redirect Now<a href>";
  redirectDiv.appendChild(redirect);
  var countDown = 5;
  setInterval(() => {
    countDown--;
    document.getElementById("countDownSecond").innerHTML = countDown;
    if (countDown === 0) {
      // hard coded
      console.log(userId)
      window.location.href = '/profile/user=' + userId
    }
  }, 1000);
}

class CreateStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: this.props.appState,
      storyName: "",
      storyLine: "",
      storyPreview: "",
      storyContent: "",
    };
    console.log("In create story, the current app state is ", this.props.appState)
  }

  __updateInput = (e) => {
    const targetToChange = e.target.id;
    const value = e.target.value;

    this.setState({ [targetToChange]: value }, () => {
      console.log("input detected", this.state[targetToChange]);
    });
  };

  render() {
    return (
      <div>
        <SideBar appState={this.props.appState}></SideBar>
        <div style={{marginLeft: '15%'}}> 
        <h1 style={{ fontFamily: "Noteworthy", textAlign: "center" }}>
          {" "}
          Create Your Story
        </h1>
        <span style={txtFieldStyle}>
          Story Genre
        </span>
        <TagInput></TagInput>
        <form className="story-creation-detail">
          {/* Material UI uses inline styling */}
          <CssTextField
            id="storyName"
            onChange={this.__updateInput}
            style={{ width: "50%", marginLeft: "25%" }}
            multiline
            rowsMax={2}
            required
            label="Story Name"
            variant="outlined"
          />
          <CssTextField
            id="storyLine"
            onChange={this.__updateInput}
            style={txtFieldStyle}
            multiline
            rows={3}
            rowsMax={5}
            label="Story Line"
            placeholder="Please enter a story line to brief your story."
            variant="outlined"
          />
          <CssTextField
            id="storyPreview"
            onChange={this.__updateInput}
            style={txtFieldStyle}
            multiline
            rows={5}
            rowsMax={10}
            label="Story Preview"
            placeholder="Please write down a few sentences as intro to your story here."
            variant="outlined"
          />
          <CssTextField
            id="storyContent"
            onChange={this.__updateInput}
            style={txtFieldStyle}
            multiline
            rows={20}
            rowsMax={25}
            label="Story"
            required
            placeholder="Write down your story here ..."
            variant="outlined"
          />
          {/* <span style={{marginLeft:'25%', marginTop:'2%', fontSize:'20px'}}>Story Genre</span> */}
          
          <span
            style={{
              display: "flex",
              marginLeft: "25%",
              width: "50%",
              marginTop: "2%",
              justifyContent: "space-evenly",
            }}
          >
            <span style={{}}>
              {" "}
              Open for Story Proposals : <Switch color="secondary"></Switch>
            </span>
            <span style={{}}>
              {" "}
              Visibility to Public : <Switch color="secondary"></Switch>{" "}
            </span>
          </span>
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
            onClick={() => confirmation(this.state, "create")}
          >
            Create
          </Button>
          <Button
            variant="contained"
            disableElevation
            onClick={() => confirmation(this.state, "discard")}
          >
            Discard
          </Button>
        </span>
        </div>
        
        
      </div>
    );
  }
}

export default CreateStory;
