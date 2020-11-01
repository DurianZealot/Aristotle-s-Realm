import { red } from "@material-ui/core/colors";
import React, { Component } from "react";
import "./styles.css";
function delayRedirect(action) {
  // Clear out what is previously in the page
  document.body.innerHTML = "";
  if (action == "create") {
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
  redirect.innerHTML = "<a href = '/profile/user' >Or Redirect Now<a href>";
  redirectDiv.appendChild(redirect);
  var countDown = 5;
  setInterval(() => {
    countDown--;
    document.getElementById("countDownSecond").innerHTML = countDown;
    if (countDown == 0) {
      // hard coded
      window.location.href = "/profile/user";
    }
  }, 1000);
}

class CreateStory extends Component {
  render() {
    return (
      <div>
        <p>Create Your Story Here</p>
        <button onClick={() => delayRedirect("create")}>Create</button>
        <button onClick={() => delayRedirect("discard")}>Discard</button>
      </div>
    );
  }
}

export default CreateStory;
